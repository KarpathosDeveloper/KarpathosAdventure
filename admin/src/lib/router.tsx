import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type RouterCtx = {
  path: string;
  navigate: (to: string) => void;
};

const Ctx = createContext<RouterCtx>({ path: "/", navigate: () => {} });

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(() =>
    typeof window === "undefined" ? "/" : window.location.hash.replace(/^#/, "") || "/"
  );

  useEffect(() => {
    const onHash = () => {
      const next = window.location.hash.replace(/^#/, "") || "/";
      setPath(next);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith("http")) {
      window.open(to, "_blank", "noopener");
      return;
    }
    window.location.hash = to;
  };

  return <Ctx.Provider value={{ path, navigate }}>{children}</Ctx.Provider>;
}

export function useRouter() {
  return useContext(Ctx);
}

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Link({ to, children, className, onClick, ariaLabel }: LinkProps) {
  const { navigate } = useRouter();
  const isExternal = to.startsWith("http");
  return (
    <a
      href={isExternal ? to : `#${to}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => {
        if (isExternal) return;
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
