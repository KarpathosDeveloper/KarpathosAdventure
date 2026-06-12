import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export const I = {
  Menu: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
  ),
  Close: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
  ),
  Search: (p: Props) => (
    <svg {...base(p.size)} {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
  ),
  Filter: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M4 6h16M7 12h10M10 18h4" /></svg>
  ),
  Sort: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M3 6h18M6 12h12M9 18h6" /></svg>
  ),
  Map: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  Grid: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  Pin: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  Clock: (p: Props) => (
    <svg {...base(p.size)} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  ),
  Users: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M21.5 19a4.5 4.5 0 0 0-6-4" />
    </svg>
  ),
  Mountain: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M3 20l6-10 4 6 3-4 5 8z" /><circle cx="17" cy="6" r="1.5" /></svg>
  ),
  Boat: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <path d="M3 17c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
      <path d="M4 15l2-6h12l2 6" />
      <path d="M12 3v6" />
    </svg>
  ),
  Wave: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <path d="M2 8c3-3 5-3 8 0s5 3 8 0 3-1 4 0" />
      <path d="M2 14c3-3 5-3 8 0s5 3 8 0 3-1 4 0" />
      <path d="M2 20c3-3 5-3 8 0s5 3 8 0 3-1 4 0" />
    </svg>
  ),
  Wine: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <path d="M8 3h8l-1 7a3 3 0 0 1-3 3 3 3 0 0 1-3-3l-1-7z" />
      <path d="M12 13v7M9 21h6" />
    </svg>
  ),
  Chef: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <path d="M7 11a4 4 0 1 1 1.5-7.7 4 4 0 0 1 7 0A4 4 0 1 1 17 11v3H7v-3z" />
      <path d="M7 14v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4" />
    </svg>
  ),
  Atv: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M4 13l3-5h7l3 5h2" />
      <path d="M9 13h6" />
    </svg>
  ),
  Whatsapp: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <path d="M20.5 12a8.5 8.5 0 1 1-15.7 4.5L3.5 20.5l4.1-1.2A8.5 8.5 0 0 0 20.5 12z" />
      <path d="M8.5 9.5c.4 2.4 2.6 4.6 5 5 .6.1 1.3-.1 1.7-.6l.6-.8a.8.8 0 0 0-.2-1.1l-1.3-.8a.8.8 0 0 0-1 .1l-.4.4a5.4 5.4 0 0 1-2.6-2.6l.4-.4a.8.8 0 0 0 .1-1l-.8-1.3a.8.8 0 0 0-1.1-.2l-.8.6c-.5.4-.7 1.1-.6 1.7z" />
    </svg>
  ),
  Check: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M5 13l4 4L19 7" /></svg>
  ),
  X: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
  ),
  Star: (p: Props) => (
    <svg {...base(p.size)} {...p} fill="currentColor" stroke="none">
      <path d="M12 2l3 6.5 7 .8-5.2 4.7L18.2 22 12 18.2 5.8 22l1.4-8L2 9.3l7-.8L12 2z" />
    </svg>
  ),
  Sun: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  Heart: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6C19 16.5 12 21 12 21z" /></svg>
  ),
  Arrow: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  Sparkle: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zM19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" /></svg>
  ),
  Shield: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
  ),
  Calendar: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  ),
  Mail: (p: Props) => (
    <svg {...base(p.size)} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  ChevronDown: (p: Props) => (
    <svg {...base(p.size)} {...p}><path d="M6 9l6 6 6-6" /></svg>
  ),
};
