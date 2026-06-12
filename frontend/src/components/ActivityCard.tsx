import { Link } from "../lib/router";
import { whatsappLink, activityWhatsappMessage } from "../lib/whatsapp";
import { I } from "./Icon";
import type { Activity } from "../data/activities";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../lib/languageContext";

export function ActivityCard({ activity, compact = false }: { activity: Activity; compact?: boolean }) {
  const { language, t } = useLanguage();

  const title = activity.translations?.[language]?.title || activity.title;
  const shortDescription = activity.translations?.[language]?.shortDescription || activity.shortDescription;
  const locationName = activity.translations?.[language]?.locationName || activity.locationName;
  const duration = activity.translations?.[language]?.duration || activity.duration;
  const difficulty = activity.translations?.[language]?.difficulty || activity.difficulty;

  const priceLabel =
    activity.priceType === "per_group"
      ? `${t("activity.priceFrom", "From")} ${activity.currency}${activity.fromPrice}`
      : activity.priceType === "quote"
      ? t("activity.onRequest", "On request")
      : `${t("activity.priceFrom", "From")} ${activity.currency}${activity.fromPrice}`;
  const priceUnit =
    activity.priceType === "per_group"
      ? t("activity.perGroup", "per group")
      : activity.priceType === "quote"
      ? ""
      : t("activity.perPerson", "per person");

  const groupTypeLabel =
    activity.groupType === "private"
      ? t("activity.groupType.private", "Private")
      : activity.groupType === "both"
      ? t("activity.groupType.both", "Group / Private")
      : t("activity.groupType.group", "Group");

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-mist hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <Link to={`/activities/${activity.slug}`} className="block relative overflow-hidden">
        <div className="aspect-[4/3] w-full overflow-hidden bg-mist">
          <img
            src={activity.imageUrls[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        {activity.badge && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-sand text-navy text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
            <I.Sparkle size={12} /> {activity.badge}
          </span>
        )}
        {activity.weatherDependent && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/95 text-navy/80 text-[10px] font-semibold px-2 py-1 rounded-full shadow">
            <I.Sun size={11} /> {t("activity.weatherDependent", "Weather-dependent")}
          </span>
        )}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold text-navy shadow-md flex items-center gap-1.5">
          <I.Pin size={12} className="text-teal" />
          {locationName}
        </div>
      </Link>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <Link to={`/activities/${activity.slug}`} className="flex-1">
            <h3 className="font-display font-bold text-navy text-[17px] leading-snug group-hover:text-teal transition-colors">
              {title}
            </h3>
          </Link>
          <div className="text-right shrink-0">
            <div className="text-teal-dark font-bold text-base leading-none">{priceLabel}</div>
            {priceUnit && <div className="text-[10px] text-navy/50 mt-0.5">{priceUnit}</div>}
          </div>
        </div>
        {!compact && (
          <p className="text-sm text-navy/70 leading-relaxed line-clamp-2 mb-3">
            {shortDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-navy/70 mb-3">
          <span className="inline-flex items-center gap-1"><I.Clock size={13} /> {duration}</span>
          <span className="inline-flex items-center gap-1"><I.Users size={13} /> {groupTypeLabel}</span>
          <span className="inline-flex items-center gap-1"><I.Mountain size={13} /> {difficulty}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {activity.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10.5px] font-semibold uppercase tracking-wider bg-aqua/60 text-teal-dark px-2 py-0.5 rounded-full"
            >
              {t("category." + tag, tag)}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          <Link
            to={`/activities/${activity.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-soft transition"
          >
            {t("activity.viewDetails", "View details")}
            <I.Arrow size={14} />
          </Link>
          <a
            href={whatsappLink(activityWhatsappMessage(title))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-2.5 rounded-full bg-success text-white hover:bg-success/90 transition"
            aria-label="Ask on WhatsApp"
            onClick={() =>
              trackEvent("whatsapp_click", {
                context: "activity_card",
                activity_slug: activity.slug,
                activity_title: title,
              })
            }
          >
            <I.Whatsapp size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
