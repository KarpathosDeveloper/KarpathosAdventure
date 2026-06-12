import { Link } from "../lib/router";
import { I } from "./Icon";
import { trackEvent } from "../utils/analytics";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 grid-cols-2 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal to-sand flex items-center justify-center text-white">
              <I.Mountain size={20} />
            </div>
            <div className="font-display font-bold text-white text-lg">Karpathos Adventures</div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            Karpathos Concierge arranges curated island experiences with trusted local partners, including boat trips, village tours, hiking, watersports, wellness, workshops, wine tasting, and private group activities.
          </p>
          <div className="mt-4 flex items-center gap-2 text-[11px] text-white/60">
            <I.Pin size={13} /> Karpathos, Dodecanese, Greece
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Experiences</div>
          <ul className="space-y-2 text-xs">
            <li><Link to="/category/sea-boat-trips" className="hover:text-sand">Boat Trips</Link></li>
            <li><Link to="/category/adventure-watersports" className="hover:text-sand">Watersports & Surf</Link></li>
            <li><Link to="/category/hiking-tours" className="hover:text-sand">Hiking Tours</Link></li>
            <li><Link to="/category/wellness-massage" className="hover:text-sand">Wellness & Massage</Link></li>
            <li><Link to="/category/workshops-local-craft" className="hover:text-sand">Workshops & Craft</Link></li>
            <li><Link to="/category/food-wine-tastings" className="hover:text-sand">Food & Wine</Link></li>
            <li><Link to="/collections/private-group-days" className="hover:text-sand">Private Groups</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Areas</div>
          <ul className="space-y-2 text-xs">
            <li><Link to="/areas/pigadia" className="hover:text-sand">Pigadia</Link></li>
            <li><Link to="/areas/amoopi" className="hover:text-sand">Amoopi</Link></li>
            <li><Link to="/areas/afiartis" className="hover:text-sand">Afiartis</Link></li>
            <li><Link to="/areas/volada-pini" className="hover:text-sand">Volada / Pini</Link></li>
            <li><Link to="/areas/arkasa" className="hover:text-sand">Arkasa</Link></li>
            <li><Link to="/areas/olympos-diafani" className="hover:text-sand">Olympos / Diafani</Link></li>
            <li><Link to="/areas/adia" className="hover:text-sand">Adia</Link></li>
            <li><Link to="/areas/saria" className="hover:text-sand">Saria Island</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Guides</div>
          <ul className="space-y-2 text-xs">
            <li><Link to="/guides/things-to-do-in-karpathos" className="hover:text-sand">Things to Do</Link></li>
            <li><Link to="/guides/best-boat-trips-in-karpathos" className="hover:text-sand">Best Boat Trips</Link></li>
            <li><Link to="/guides/saria-island-karpathos" className="hover:text-sand">Saria Island Guide</Link></li>
            <li><Link to="/guides/olympos-karpathos-day-trip" className="hover:text-sand">Olympos Day Trip</Link></li>
            <li><Link to="/guides/karpathos-for-couples" className="hover:text-sand">Karpathos for Couples</Link></li>
            <li><Link to="/guides/best-activities-for-families-in-karpathos" className="hover:text-sand">Family Activities</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Concierge</div>
          <ul className="space-y-2 text-xs">
            <li><Link to="/concierge" className="hover:text-sand">Ask the Concierge</Link></li>
            <li><Link to="/contact" className="hover:text-sand">Build Your Plan</Link></li>
            <li><Link to="/about" className="hover:text-sand">About Us</Link></li>
            <li><Link to="/partners" className="hover:text-sand">Partner With Us</Link></li>
            <li>
              <a
                href="https://wa.me/306943666243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-success text-white font-semibold mt-1 hover:bg-success/90 transition"
                onClick={() => trackEvent("whatsapp_click", { context: "footer" })}
              >
                <I.Whatsapp size={12} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Karpathos Adventures. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/policies/terms" className="hover:text-white">Terms</Link>
            <Link to="/policies/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/policies/cancellation" className="hover:text-white">Cancellation</Link>
            <Link to="/policies/safety" className="hover:text-white">Safety</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
