import { useEffect, useState } from "react";

const KEY = "ka_cookie_v1";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  const accept = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  };
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40">
      <div className="bg-white border border-mist rounded-2xl shadow-2xl p-4 sm:p-5">
        <div className="text-sm text-navy font-semibold mb-1">We use cookies</div>
        <div className="text-xs text-navy/70 leading-relaxed">
          We use essential cookies to make this site work and optional analytics to improve it. You
          can change your choice anytime in our Privacy Policy.
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => accept("essential")}
            className="text-xs px-3 py-2 rounded-full bg-mist text-navy font-semibold hover:bg-aqua"
          >
            Essential only
          </button>
          <button
            onClick={() => accept("all")}
            className="text-xs px-3 py-2 rounded-full bg-teal text-white font-semibold hover:bg-teal-dark"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
