import { useState } from "react";
import { I } from "./Icon";
import { whatsappLink } from "../lib/whatsapp";
import { bookingsService } from "../services/bookingsService";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../lib/languageContext";

type Props = {
  activityTitle?: string;
  partnerName?: string;
  compact?: boolean;
  title?: string;
  subtitle?: string;
};

export function InquiryForm({ activityTitle, partnerName, compact = false, title, subtitle }: Props) {
  const { language, t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: 2,
    pickup: "",
    message: activityTitle ? `I'd like to ask about "${activityTitle}".` : "",
    consent: false,
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    
    setSubmitting(true);
    setError("");
    try {
      await bookingsService.addBooking({
        activityId: activityTitle ? activityTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "custom",
        activityTitle: activityTitle || "Custom Concierge Request",
        partnerName: partnerName || "Concierge Team",
        clientName: form.name,
        clientEmail: form.email,
        clientPhone: form.phone || "N/A",
        bookingDate: form.date || new Date().toISOString().split("T")[0],
        guests: form.guests,
        notes: `Pickup area: ${form.pickup || "None"}. Note: ${form.message}`
      });
      trackEvent("concierge_submit", {
        activity_title: activityTitle || "Custom Concierge Request",
        guests: form.guests,
        date: form.date
      });
      setSent(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-white rounded-3xl border border-mist p-6 sm:p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-success/15 text-success flex items-center justify-center mx-auto mb-3">
          <I.Check size={28} />
        </div>
        <h3 className="font-display font-bold text-xl text-navy mb-2">
          {t("form.successTitle", "Inquiry received ✓")}
        </h3>
        <p className="text-navy/70 text-sm mb-5">
          {t("form.successDesc", "Thanks {name} — our concierge will reply within a few hours with availability and pricing.").replace("{name}", form.name.split(" ")[0] || "friend")}
        </p>
        <a
          href={whatsappLink(
            `Hi! I just submitted an inquiry${
              activityTitle ? ` for "${activityTitle}"` : ""
            }. Name: ${form.name}, ${form.guests} guests on ${form.date || "flexible date"}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-success text-white font-semibold text-sm"
          onClick={() =>
            trackEvent("whatsapp_click", {
              context: "inquiry_form_success",
              activity_title: activityTitle || "Custom Concierge Request",
            })
          }
        >
          <I.Whatsapp size={16} /> {t("form.successWhatsapp", "Continue on WhatsApp")}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white rounded-3xl border border-mist ${compact ? "p-5" : "p-6 sm:p-7"}`}
    >
      {title && (
        <h3 className="font-display font-bold text-lg text-navy mb-1">{title}</h3>
      )}
      {subtitle && <p className="text-sm text-navy/70 mb-4">{subtitle}</p>}

      <div className="grid sm:grid-cols-2 gap-3">
        <Field label={t("form.name", "Your name")} required>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={t("form.namePlaceholder", "Maria")}
            className="input"
          />
        </Field>
        <Field label={t("form.email", "Email")} required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={t("form.emailPlaceholder", "you@email.com")}
            className="input"
          />
        </Field>
        <Field label={t("form.phone", "Phone / WhatsApp")}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder={t("form.phonePlaceholder", "+30 ...")}
            className="input"
          />
        </Field>
        <Field label={t("form.preferredDate", "Preferred date")}>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="input"
          />
        </Field>
        <Field label={t("form.guests", "Guests")}>
          <input
            type="number"
            min={1}
            max={30}
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
            className="input"
          />
        </Field>
        <Field label={t("form.pickup", "Pickup / villa area")}>
          <input
            type="text"
            value={form.pickup}
            onChange={(e) => setForm({ ...form, pickup: e.target.value })}
            placeholder={t("form.pickupPlaceholder", "e.g. Amoopi villa")}
            className="input"
          />
        </Field>
      </div>

      <div className="mt-3">
        <Field label={t("form.message", "Message")}>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t("form.messagePlaceholder", "Anything else we should know?")}
            className="input resize-none"
          />
        </Field>
      </div>

      <label className="flex items-start gap-2 mt-3 text-xs text-navy/70 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-0.5 accent-teal w-4 h-4"
        />
        <span>
          {t("form.consentPart1", "I agree to be contacted by Karpathos Adventures about this inquiry. See our ")}
          <a href="#/policies/privacy" className="text-teal underline">{t("footer.privacy", "Privacy Policy")}</a>.
        </span>
      </label>

      {error && (
        <div className="mt-3 p-2 bg-warn/10 text-warn border border-warn/20 rounded-xl text-xs font-semibold">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-teal text-white font-semibold hover:bg-teal-dark transition disabled:bg-teal/50"
      >
        {submitting ? t("form.sending", "Sending...") : t("form.submit", "Request availability")} <I.Arrow size={16} />
      </button>

      <style>{`
        .input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #EEF1F4;
          background: #FAF8F3;
          font-size: 14px;
          color: #0B2341;
          outline: none;
          transition: border-color .15s, background .15s;
        }
        .input:focus { border-color: #007C8A; background: #fff; }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-navy/60 mb-1">
        {label} {required && <span className="text-warn">*</span>}
      </span>
      {children}
    </label>
  );
}
