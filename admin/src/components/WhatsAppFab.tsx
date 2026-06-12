import { whatsappLink } from "../lib/whatsapp";
import { I } from "./Icon";
import { trackEvent } from "../utils/analytics";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(
        "Hi Karpathos Adventures! I'd like help planning my Karpathos experiences."
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-success text-white font-semibold shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-transform"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { context: "floating_action_button" })}
    >
      <I.Whatsapp size={20} />
      <span className="hidden sm:inline text-sm">Chat with concierge</span>
    </a>
  );
}
