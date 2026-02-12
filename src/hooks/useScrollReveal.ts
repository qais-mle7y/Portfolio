import { useCallback, useRef } from 'react';

/**
 * Returns a callback ref that attaches an IntersectionObserver to the element.
 * When the element enters the viewport it receives the `visible` class,
 * triggering the CSS reveal animation defined in index.css.
 *
 * Uses a callback ref so it works correctly with conditionally rendered
 * elements (e.g. content that appears after an async fetch).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (node: T | null) => {
      // Disconnect any previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add('visible');
            observer.unobserve(node);
          }
        },
        { threshold }
      );

      observer.observe(node);
      observerRef.current = observer;
    },
    [threshold]
  );

  return ref;
}
