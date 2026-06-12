import { useEffect, useState } from "react";
import { Link, useRouter } from "../lib/router";
import { I } from "./Icon";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "Boat Trips", to: "/category/sea-boat-trips" },
  { label: "Hikes", to: "/category/hiking-tours" },
  { label: "Adventure", to: "/category/adventure-watersports" },
  { label: "Food & Wine", to: "/category/food-wine-tastings" },
  { label: "Workshops", to: "/category/workshops-local-craft" },
  { label: "Wellness", to: "/category/wellness-massage" },
  { label: "About", to: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { path } = useRouter();

  const isHome = path === "/" || path === "";
  const isSolid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md border-b border-mist shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal to-navy flex items-center justify-center text-white shadow-md">
              <I.Mountain size={20} />
            </div>
            <div className="leading-tight">
              <div
                className={`font-display font-bold text-[15px] ${
                  isSolid ? "wordmark-grad" : "text-white drop-shadow-md"
                }`}
              >
                Karpathos Adventures
              </div>
              <div
                className={`text-[10px] tracking-widest uppercase ${
                  isSolid ? "text-teal" : "text-white/80 drop-shadow"
                }`}
              >
                Explore · Book · Experience
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active =
                path === n.to || (n.to !== "/" && path.startsWith(n.to));
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? isSolid
                        ? "bg-aqua text-teal-dark"
                        : "bg-white/15 text-white"
                      : isSolid
                      ? "text-navy hover:bg-mist"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                isSolid
                  ? "bg-teal text-white hover:bg-teal-dark shadow-md"
                  : "bg-white text-navy hover:bg-cream"
              }`}
            >
              <I.Whatsapp size={16} />
              Concierge
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className={`lg:hidden p-2 rounded-lg ${
                isSolid ? "text-navy" : "text-white"
              }`}
              aria-label="Menu"
            >
              {open ? <I.Close /> : <I.Menu />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 grid gap-1 fade-up">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-3 rounded-lg text-navy font-medium hover:bg-mist"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-3 py-3 rounded-lg bg-teal text-white font-semibold mt-1 flex items-center gap-2"
            >
              <I.Whatsapp size={16} /> WhatsApp Concierge
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
