type ContactEvent = 'whatsapp_click' | 'phone_call_click' | 'generate_lead';
type GoogleTag = (command: string, ...args: unknown[]) => void;

const GOOGLE_ADS_CONTACT_CONVERSION = 'AW-18553147578/do7kCKGjzbkdELqh6o5F';

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

export function trackGoogleAdsContactConversion() {
  window.gtag?.('event', 'conversion', {
    send_to: GOOGLE_ADS_CONTACT_CONVERSION,
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
