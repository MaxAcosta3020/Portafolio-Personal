"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/** Reveal secuencial de los pasos de un flujo al entrar en viewport.
 * Solo opacity y transform: sin layout shifts. Respeta prefers-reduced-motion
 * y se interrumpe (kill) al desmontar. Si el contenedor ya está visible al
 * montar, no oculta los pasos (evita flash). */
export function PipelineReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const steps = container.querySelectorAll<HTMLElement>(".case-flow-step");

    const rect = container.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (reduceMotion || alreadyVisible || steps.length === 0) {
      gsap.set(steps, { opacity: 1, y: 0, clearProps: "opacity,y" });
      return;
    }

    gsap.set(steps, { opacity: 0, y: 12 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(steps, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.12,
              ease: "power2.out",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(steps);
      gsap.set(steps, { clearProps: "opacity,y" });
    };
  }, []);

  return <div ref={containerRef} className="reveal-container">{children}</div>;
}
