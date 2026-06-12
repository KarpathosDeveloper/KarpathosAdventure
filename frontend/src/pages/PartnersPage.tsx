import { InquiryForm } from "../components/InquiryForm";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";

export function PartnersPage() {
  useSEO({
    title: "Partner With Us | Karpathos Adventures",
    description: "Run an experience, boat trip, tour, or villa service in Karpathos, Greece? Partner with Karpathos Adventures to get bookings from high-value tourists.",
    canonicalPath: "/partners"
  });
  return (
    <div className="pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">Partners</div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy leading-tight">
          Run an experience in Karpathos? Let's work together.
        </h1>
        <p className="text-navy/75 text-lg mt-3 max-w-3xl">
          We work with boat owners, hiking guides, ATV rentals, diving centers, windsurf schools,
          wineries, chefs and drivers. If you run a quality, properly licensed experience on
          Karpathos, we'd love to talk.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { i: <I.Sparkle size={18} />, t: "Real bookings", d: "Qualified leads from villas, couples and groups." },
            { i: <I.Shield size={18} />, t: "Fair model", d: "Transparent commission, fast payouts, no surprises." },
            { i: <I.Whatsapp size={18} />, t: "Concierge support", d: "We handle inquiries and bookings, you focus on the experience." },
          ].map((b) => (
            <div key={b.t} className="bg-white rounded-2xl border border-mist p-5">
              <div className="w-9 h-9 rounded-xl bg-aqua text-teal-dark flex items-center justify-center mb-2">{b.i}</div>
              <div className="font-display font-bold text-navy">{b.t}</div>
              <p className="text-sm text-navy/70 mt-1">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-navy mb-3">What we need from you</h2>
            <ul className="space-y-2 text-sm text-navy/80">
              {[
                "A licensed, insured activity that operates on Karpathos",
                "Clear pricing (group + private if applicable)",
                "Photos we can use on your listing",
                "A WhatsApp contact for fast booking responses",
                "Honest cancellation, weather and safety policies",
              ].map((x) => (
                <li key={x} className="flex gap-2"><I.Check size={16} className="text-success mt-0.5" />{x}</li>
              ))}
            </ul>
          </div>
          <InquiryForm
            title="Apply to become a partner"
            subtitle="Tell us about your business — we'll reply within 48 hours."
          />
        </div>
      </section>
    </div>
  );
}
