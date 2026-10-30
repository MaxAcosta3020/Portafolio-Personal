"use client";

import { useState } from "react";
import { Icon } from "@/components/ui";

const CONSENT_KEY = "cookie_consent_v1";

function readConsent(): boolean | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === null) return null;
  return stored === "true";
}

export function CookieConsent() {
  const [open, setOpen] = useState<boolean | null>(() => readConsent() === null);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "true");
    setOpen(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "false");
    setOpen(false);
  };

  return (
    <>
      {open === true && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[50] bg-surface border-t border-border p-page flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:p-[1.5rem]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          <div className="space-y-2 max-w-md">
            <h3 id="cookie-title" className="text-title font-semibold">
              Cookies y medición
            </h3>
            <p className="text-body text-foreground">
              Este sitio es estático y no recopila datos personales directamente.
              Usa Google Analytics 4 para medir el tráfico y la interacción (páginas
              visitadas, dispositivo, navegador, ubicación aproximada). Esa medición
              requiere cookies de terceros. ¿Las aceptas?
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-end md:justify-start">
            <button onClick={reject} className="button-secondary">
              Rechazar
            </button>
            <button onClick={accept} className="button">
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function LinkPreferenciasCookies() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem(CONSENT_KEY);
        window.location.reload();
      }}
      className="text-link text-label"
      aria-label="Preferencias de cookies"
    >
      Preferencias de cookies
      <Icon name="arrow" />
    </button>
  );
}
