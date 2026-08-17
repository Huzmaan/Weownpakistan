import { useEffect } from "react";

/** Loads jQuery interactions after hydration only (jQuery needs a real DOM). */
export function useSiteInteractions() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    import("@/lib/interactions").then(({ initInteractions }) => {
      if (!cancelled) cleanup = initInteractions();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);
}
