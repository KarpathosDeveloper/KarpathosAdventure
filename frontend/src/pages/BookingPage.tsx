import { useState, useEffect } from "react";
import { type Activity } from "../data/activities";
import { Link, useRouter } from "../lib/router";
import { activitiesService } from "../services/activitiesService";
import { bookingsService } from "../services/bookingsService";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../lib/languageContext";

export function BookingPage() {
  const { path } = useRouter();
  const { language, t } = useLanguage();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  // Form states
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const actTitle = activity?.translations?.[language]?.title || activity?.title || "Custom Concierge Request";
  const actLoc = activity?.translations?.[language]?.locationName || activity?.locationName || "";
  const actDur = activity?.translations?.[language]?.duration || activity?.duration || "";
  const actDiff = activity?.translations?.[language]?.difficulty || activity?.difficulty || "";

  useSEO({
    title: activity ? `${t("booking.title", "Book")} ${actTitle} | ${t("nav.concierge", "Karpathos Concierge")}` : `${t("booking.title", "Request Availability")} | ${t("nav.concierge", "Karpathos Concierge")}`,
    description: t("booking.metaDescription", "Submit your details and requested date, and our local concierge team will coordinate with the activity supplier to confirm availability."),
    canonicalPath: "/book"
  });

  // Extract activity slug from URL query
  useEffect(() => {
    const queryStr = window.location.hash.includes("?") 
      ? window.location.hash.split("?")[1] 
      : "";
    const params = new URLSearchParams(queryStr);
    const slug = params.get("activity") || "";

    if (!slug) {
      setLoading(false);
      return;
    }

    setLoading(true);
    activitiesService.getActivities().then((list) => {
      const found = list.find((a) => a.slug === slug || a.id === slug);
      if (found) {
        setActivity(found);
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [path]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!clientName || !clientEmail || !clientPhone || !bookingDate) {
      setError(t("form.fillRequired", "Please fill in all required fields."));
      return;
    }

    setSubmitting(true);
    try {
      await bookingsService.addBooking({
        activityId: activity?.id || "custom",
        activityTitle: activity?.title || "Custom Concierge Request",
        partnerName: activity?.partnerName || "Concierge Team",
        clientName,
        clientEmail,
        clientPhone,
        bookingDate,
        guests,
        notes
      });
      trackEvent("concierge_submit", {
        activity_title: activity?.title || "Custom Concierge Request",
        guests,
        date: bookingDate
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || t("form.submitError", "Failed to submit booking request. Please try again."));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal mb-4"></div>
        <p className="text-navy/70">{t("booking.loading", "Loading activity details...")}</p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-6 animate-bounce">
          <I.Check size={32} />
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-navy leading-tight">
          {t("booking.successTitle", "Request Submitted!")}
        </h1>
        <p className="text-navy/75 mt-4 text-base leading-relaxed max-w-md">
          {t("booking.successDesc", "Thank you, {name}. Your request for \"{title}\" on {date} is now processing.")
            .replace("{name}", clientName)
            .replace("{title}", actTitle)
            .replace("{date}", bookingDate)}
        </p>
        <p className="text-navy/60 mt-2 text-sm max-w-sm">
          {t("booking.successSub", "Our team will verify availability with the local supplier and contact you via email or WhatsApp within the next few hours.")}
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <Link to="/" className="px-5 py-3 rounded-full bg-navy hover:bg-navy-soft text-white font-semibold shadow-md transition">
            {t("booking.backHome", "Back Home")}
          </Link>
          <Link to="/explore" className="px-5 py-3 rounded-full bg-teal hover:bg-teal-dark text-white font-semibold shadow-md transition">
            {t("booking.browseMore", "Browse More")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-mist shadow-xl overflow-hidden grid md:grid-cols-[1fr_360px]">
          
          {/* Main Booking Form */}
          <div className="p-6 sm:p-8">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-navy">
              {t("booking.title", "Request Availability")}
            </h1>
            <p className="text-sm text-navy/60 mt-1">
              {t("booking.subtitle_desc", "Submit your desired dates and details, and our team will coordinate with the supplier.")}
            </p>
            
            {error && (
              <div className="mt-4 p-3 bg-warn/10 text-warn border border-warn/20 rounded-xl text-xs font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">
                    {t("booking.name", "Your Full Name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">
                    {t("booking.email", "Contact Email")} *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">
                    {t("booking.phone", "Phone Number (with WhatsApp)")} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+30 690 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">
                    {t("booking.date", "Preferred Date")} *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">
                  {t("booking.guests", "Number of Guests")}
                </label>
                <input
                  type="number"
                  min={1}
                  max={activity?.maxGuests || 20}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                />
                {activity?.maxGuests && (
                  <span className="text-[10px] text-navy/50 mt-1 block">
                    {t("booking.maxGuestsNote", "Maximum capacity for this activity is {count} guests.").replace("{count}", String(activity.maxGuests))}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">
                  {t("booking.notes", "Special requests or questions")}
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="E.g. hotel name, dietary requirements, preferred time..."
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full py-3.5 rounded-full bg-teal hover:bg-teal-dark text-white font-semibold shadow-md transition disabled:bg-teal/50"
              >
                {submitting ? t("booking.submitting", "Submitting Request...") : t("booking.submit", "Submit Inquiry")}
              </button>
            </form>
          </div>

          {/* Activity Info Sidebar */}
          <div className="bg-cream p-6 border-t md:border-t-0 md:border-l border-mist flex flex-col justify-between">
            {activity ? (
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-mist mb-4">
                  <img src={activity.imageUrls[0]} alt={actTitle} className="w-full h-full object-cover" />
                </div>
                <div className="text-[10px] font-bold text-teal uppercase tracking-widest">
                  {t("category." + activity.category, activity.category)}
                </div>
                <h3 className="font-display font-bold text-navy text-lg leading-tight mt-1">{actTitle}</h3>
                
                <div className="mt-4 space-y-2 text-xs text-navy/75">
                  <div className="flex items-center gap-2"><I.Pin size={13} className="text-teal" /> {actLoc}</div>
                  <div className="flex items-center gap-2"><I.Clock size={13} className="text-teal" /> {actDur}</div>
                  <div className="flex items-center gap-2"><I.Mountain size={13} className="text-teal" /> {actDiff}</div>
                </div>

                <div className="mt-4 pt-4 border-t border-mist/60">
                  <div className="text-[10px] uppercase font-bold text-navy/55 tracking-wider">
                    {t("booking.startingPrice", "Starting Price")}
                  </div>
                  <div className="font-display font-bold text-teal-dark text-xl mt-0.5">
                    {activity.priceType === "quote" ? t("activity.onRequest", "On request") : `€${activity.fromPrice}`}
                  </div>
                  {activity.priceNote && (
                    <div className="text-[10px] text-navy/50 mt-0.5">{activity.priceNote}</div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-4">
                  <I.Sparkle size={22} />
                </div>
                <h3 className="font-display font-bold text-navy text-lg leading-tight">
                  {t("booking.customRequestTitle", "Custom Plan Request")}
                </h3>
                <p className="text-xs text-navy/70 mt-2 leading-relaxed">
                  {t("booking.customRequestDesc", "Send details of what you'd like to do, and our concierge will build a custom itinerary matching your dates.")}
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-mist/60 mt-6 text-[11px] text-navy/50 space-y-1">
              <div>{t("booking.vetted", "🛡️ Safe & Vetted Partners")}</div>
              <div>{t("booking.replyTime", "⚡ Reply in under 4 Hours")}</div>
              <div>{t("booking.modify", "💬 Easy modifications via WhatsApp")}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
