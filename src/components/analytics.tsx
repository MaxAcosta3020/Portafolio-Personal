"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useState } from "react";

const CONSENT_KEY = "cookie_consent_v1";

function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "true";
}

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [consent] = useState<boolean | null>(() => hasAnalyticsConsent());

  if (!measurementId) return null;

  if (consent !== true) return null;

  return <GoogleAnalytics gaId={measurementId} />;
}
