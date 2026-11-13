import { IMAGE_META, optimizedSrc } from '../generated/images';

type Props = {
  src: string; alt: string; className?: string; sizes?: string;
  priority?: boolean; loading?: 'lazy' | 'eager';
};
export function ResponsiveImage({ src, alt, className = '', sizes = '(max-width: 1023px) calc(100vw - 40px), 600px', priority = false, loading }: Props) {
  const meta = IMAGE_META[src as keyof typeof IMAGE_META];
  if (!meta) return <img src={src} alt={alt} className={className} loading={loading ?? (priority ? 'eager' : 'lazy')} decoding="async" />;
  const srcSet = (format: 'avif' | 'webp') => meta.widths.map((width) => `${optimizedSrc(src, width, format)} ${width}w`).join(', ');
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img src={src} alt={alt} width={meta.width} height={meta.height} className={className}
        sizes={sizes} loading={loading ?? (priority ? 'eager' : 'lazy')} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
    </picture>
  );
}
