// Lightweight, provider-agnostic event tracking.
//
// In production: calls window.plausible(...) if Plausible is loaded.
// Plausible is gated on NEXT_PUBLIC_PLAUSIBLE_DOMAIN (see app/layout.tsx).
//
// Compatible with any provider that exposes a window.plausible-style
// (event_name, { props }) interface. Swap providers without changing call sites.

export type AnalyticsEvent =
  | "cta_start_project"
  | "cta_see_our_work"
  | "cta_see_how_we_work"
  | "cta_read_manifesto"
  | "cta_read_case_study"
  | "cta_read_post"
  | "cta_all_writing"
  | "cta_more_writing"
  | "cta_more_on_pillar"
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"
  | "nav_service_clicked"
  | "pillar_card_clicked";

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, props?: EventProps) {
  if (typeof window === "undefined") return;

  if (typeof window.plausible === "function") {
    window.plausible(event, props ? { props } : undefined);
    return;
  }

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[analytics:noop]", event, props);
  }
}
