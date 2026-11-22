type ContactEvent = 'whatsapp_click' | 'phone_call_click' | 'generate_lead';
type GoogleTag = (command: string, ...args: unknown[]) => void;

const GOOGLE_ADS_LEAD_CONVERSION = 'AW-18553147578/W8CcCML1x7wdELqh6o5F';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: GoogleTag;
  }
}

export function trackEvent(event: ContactEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}

export function trackGoogleAdsLeadConversion() {
  window.gtag?.('event', 'conversion', {
    send_to: GOOGLE_ADS_LEAD_CONVERSION,
    value: 1.0,
    currency: 'INR',
  });
}

// Delegate so links on every page (including nested icons and dynamically rendered
// form links) are covered without changing their navigation behavior.
export function trackContactClicks() {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest('a[href]');
    if (!(link instanceof HTMLAnchorElement)) return;
    const href = link.getAttribute('href') || '';
    if (/^tel:/i.test(href)) {
      trackEvent('phone_call_click');
    } else if (/^https?:\/\/(?:www\.)?(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)(?:[/:?#]|$)/i.test(href)) {
      trackEvent('whatsapp_click');
    }
  });
}
