import { useEffect, useState, type FormEvent } from "react";
import { CONTACT, FIELD_OPTIONS } from "../lib/data";
import { SectionHead } from "../components/SectionHead";
import {
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  WhatsApp,
} from "../components/Icons";

const fieldClass =
  "w-full rounded-md border border-borderline bg-white px-3.5 py-2.5 text-[14.5px] text-slate-800 transition-all outline-none placeholder:text-slate-400 focus:border-brand focus:ring-[3px] focus:ring-brand/15";

type Fields = { name: string; phone: string; location: string; requirement: string };
const EMPTY: Fields = { name: "", phone: "", location: "", requirement: "" };

const infoItems = [
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    content: (
      <a href={CONTACT.phoneHref} className="transition-colors hover:text-brand">
        {CONTACT.phone}
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href={CONTACT.emailHref} className="break-all transition-colors hover:text-brand">
        {CONTACT.email}
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Service Coverage",
    content: "Hyderabad and across Telangana",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday – Sunday: 8:00 AM – 9:00 PM",
  },
];

export function Contact({
  initialService,
}: {
  initialService: { title: string; id: number } | null;
}) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!initialService) return;
    setFields((current) => ({ ...current, requirement: initialService.title }));
    setSubmitted(false);
  }, [initialService]);

  const update = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setError("");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fields.phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const whatsappMessage = `https://wa.me/917995150298?text=${encodeURIComponent(
    `Hi Aravindh Invisible Grills, I am ${fields.name || "a customer"}. I need ${
      fields.requirement || "your services"
    } at ${fields.location || "Hyderabad"}. My number is ${
      fields.phone
    }. Please book a free measurement.`
  )}`;

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-5 py-20">
      <SectionHead
        title="Contact Us"
        subtitle="Enquire about a measurement and quotation in Hyderabad and Telangana"
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal">
          <h3 className="mb-2 text-[22px] font-semibold text-navy">Get in Touch</h3>
          <p className="mb-7 text-[14.5px] leading-[1.7] text-muted">
            Connect with us to discuss your space, a site inspection and a price estimate.
          </p>

          <div className="space-y-5">
            {infoItems.map(({ icon: Icon, title, content }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-[15px] font-semibold text-navy">{title}</h4>
                  <p className="text-[14px] text-slate-600">{content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-navy p-6 text-white">
            <p className="mb-1 text-[16px] font-semibold">Ready to discuss your project?</p>
            <p className="mb-4 text-[13.5px] leading-[1.65] text-slate-300">
              Call our team to discuss availability and arrange a suitable time.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
          </div>
        </div>

        <div className="reveal rounded-2xl bg-white p-7 shadow-[0_10px_36px_rgba(10,37,64,0.1)] ring-1 ring-slate-100 sm:p-8">
          <h3 className="mb-5 text-[20px] font-semibold text-navy">Request Free Measurement</h3>

          {submitted ? (
            <div className="py-8 text-center">
              <Check className="mx-auto mb-3 h-[52px] w-[52px] text-brand" strokeWidth={1.6} />
              <h3 className="mb-2 text-[20px] font-semibold text-navy">
                Thank You, {fields.name.trim().split(" ")[0] || "there"}!
              </h3>
              <p className="mx-auto mb-6 max-w-[380px] text-[14px] leading-[1.7] text-muted">
                Your message is ready, but has not been sent yet. Continue to WhatsApp and send it to our team to request a measurement.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-whatsapp-dark"
                >
                  <WhatsApp className="h-4 w-4" /> Continue to WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFields(EMPTY);
                  }}
                  className="cursor-pointer rounded-md border border-borderline px-5 py-2.5 text-[14px] font-semibold text-navy transition-colors hover:border-brand"
                >
                  Send Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="mb-4">
                <label htmlFor="contact-name" className="mb-1.5 block text-[13.5px] font-semibold text-navy">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fields.name}
                  onChange={(event) => update("name", event.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact-phone" className="mb-1.5 block text-[13.5px] font-semibold text-navy">
                  Phone Number *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={fields.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact-location" className="mb-1.5 block text-[13.5px] font-semibold text-navy">
                  Location / Area *
                </label>
                <input
                  id="contact-location"
                  type="text"
                  required
                  placeholder="Enter your area or location"
                  value={fields.location}
                  onChange={(event) => update("location", event.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contact-requirement" className="mb-1.5 block text-[13.5px] font-semibold text-navy">
                  Requirement *
                </label>
                <select
                  id="contact-requirement"
                  required
                  value={fields.requirement}
                  onChange={(event) => update("requirement", event.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select service needed</option>
                  {FIELD_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="mb-4 rounded-md bg-red-50 px-3.5 py-2.5 text-[13px] font-medium text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-navy px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-navy-dark"
              >
                <Send className="h-4 w-4" /> Prepare WhatsApp Request
              </button>
              <p className="mt-3.5 text-center text-[12px] text-muted">
                Your details will be included in a WhatsApp message for you to send.
              </p>
            </form>
          )}
        </div>
      </div>

    </section>
  );
}
