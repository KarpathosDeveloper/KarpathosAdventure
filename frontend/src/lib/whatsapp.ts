// WhatsApp concierge number
export const WHATSAPP_NUMBER = "306943666243"; // international, no +
export const CONCIERGE_EMAIL = "concierge@karpathosadventures.com";

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function activityWhatsappMessage(title: string) {
  return `Hi Karpathos Adventures! I'd like to ask about availability for "${title}". My preferred dates and group size are:`;
}
