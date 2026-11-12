import type { CSSProperties } from "react";
import { IMAGE_META } from "../lib/imageManifest";
import { cn } from "../utils/cn";

type PictureProps = {
  /** Path to the committed WebP in /images/reference/ or any other image URL. */
  src: string;
  alt: string;
  /** Responsive `sizes` hint — required for correct srcSet selection. */
  sizes?: string;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  draggable?: boolean;
  onMouseEnter?: () => void;
};

const BASE = /\/images\/reference\/([A-Za-z0-9_-]+?)(-\d+)?\.webp$/;

/**
 * Serves an AVIF/WebP responsive <picture> for photos in /images/reference/.
 * Dimensions and variant widths come from the generated image manifest, so
 * images never break and never cause layout shift. Falls back to a plain
 * <img> for any other source.
 */
export function Picture({
  src,
  alt,
  sizes = "100vw",
  className,
  style,
  loading = "lazy",
  fetchPriority = "auto",
  draggable = false,
}: PictureProps) {
  const match = BASE.exec(src);
  const meta = match ? IMAGE_META[match[1]] : undefined;

  if (!meta) {
    return (
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        draggable={draggable}
      />
    );
  }

  const dir = src.slice(0, src.lastIndexOf("/") + 1);
  const srcset = (ext: string) =>
    meta.widths
      .map((w) => `${dir}${match![1]}${w === meta.width ? "" : `-${w}`}.${ext} ${w}w`)
      .join(", ");

  return (
    <picture className="block h-full w-full">
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={meta.width}
        height={meta.height}
        sizes={sizes}
        className={cn(className)}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        draggable={draggable}
      />
    </picture>
  );
}
