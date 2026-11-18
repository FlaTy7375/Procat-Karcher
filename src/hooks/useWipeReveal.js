import { useEffect, useRef, useState } from "react";

/**
 * Одноразовое появление заголовка «протиркой» (clip-path слева направо)
 * при попадании в область видимости. При prefers-reduced-motion: reduce
 * элемент виден сразу.
 */
export default function useWipeReveal(options = {}) {
  const { threshold = 0.08, rootMargin = "0px 0px -4% 0px" } = options;
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window === "undefined") return true;
    return Boolean(
      window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  useEffect(() => {
    if (isRevealed) return undefined;

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isRevealed, threshold, rootMargin]);

  return { ref, isRevealed };
}
