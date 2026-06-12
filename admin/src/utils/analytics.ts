/**
 * Safely track analytics events if Google Tag Manager, Google Analytics, or Facebook Pixel are defined.
 * Exposes hooks ready for GTM/GA4/Meta Pixel event registration.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  // Log to console in development
  console.log(`[Analytics Event] ${eventName}`, params);

  // 1. Google Analytics (gtag.js)
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      (window as any).gtag("event", eventName, params);
    } catch (err) {
      console.warn("Failed to log event to GA4:", err);
    }
  }

  // 2. Google Tag Manager (dataLayer)
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    try {
      (window as any).dataLayer.push({
        event: eventName,
        eventModel: params
      });
    } catch (err) {
      console.warn("Failed to push event to GTM dataLayer:", err);
    }
  }

  // 3. Facebook Pixel (fbq)
  if (typeof window !== "undefined" && (window as any).fbq) {
    try {
      (window as any).fbq("track", eventName, params);
    } catch (err) {
      console.warn("Failed to log event to Facebook Pixel:", err);
    }
  }
}
