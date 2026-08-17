import * as SlickModule from "react-slick";
import type { Settings } from "react-slick";
import { Children, useEffect, useMemo, useState, type ReactNode } from "react";

/**
 * Slick Slider wrapper.
 * react-slick ships a CJS default export; Vite's interop can hand back the
 * module namespace object, so we normalise it here once for the whole site.
 */
function unwrap(mod: unknown): unknown {
  let value = mod;
  while (value && typeof value === "object" && "default" in (value as Record<string, unknown>)) {
    value = (value as Record<string, unknown>)["default"];
  }
  return value;
}

const Slick = unwrap(SlickModule) as React.ComponentType<Settings & { children?: ReactNode }>;

/** Current viewport width, tracked on the client only. */
function useViewportWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return width;
}

/**
 * Slick measures the DOM on mount and its own `responsive` breakpoints proved
 * unreliable after hydration, so we mount client-side only and resolve the
 * matching breakpoint settings ourselves from the live viewport width.
 */
export function Carousel({ children, responsive, ...props }: Settings & { children?: ReactNode }) {
  const width = useViewportWidth();
  const mounted = width > 0;

  const settings = useMemo(() => {
    if (!responsive || !width) return props;
    const match = [...responsive]
      .sort((a, b) => a.breakpoint - b.breakpoint)
      .find((entry) => width <= entry.breakpoint);
    if (!match || match.settings === "unslick") return props;
    return { ...props, ...match.settings };
  }, [responsive, width, props]);

  useEffect(() => {
    if (!mounted) return;
    const id = window.requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
    return () => window.cancelAnimationFrame(id);
  }, [mounted]);

  if (!mounted) {
    // Static first slide so SSR / first paint still shows real content.
    const first = Children.toArray(children)[0];
    return <div className={props.className}>{first}</div>;
  }

  return (
    <Slick key={String(settings.slidesToShow ?? 1)} {...settings}>
      {children}
    </Slick>
  );
}
