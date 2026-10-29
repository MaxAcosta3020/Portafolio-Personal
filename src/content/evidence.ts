import type { Evidence, SupportedText } from "./types";

/** The CV is a declaration by its author, not an independent code audit. */
export function cvEvidence(location: string): Evidence {
  return { source: "CV_MAX-2.pdf", location, kind: "document" };
}

export function supported(text: string, evidence: Evidence): SupportedText {
  return { text, evidence: [evidence] };
}
