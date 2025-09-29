import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters?: {
        event_category?: string;
        event_label?: string;
        event_action?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

interface UseIframeTrackingOptions {
  eventLabel: string;
  eventCategory?: string;
  trackEngagementTime?: boolean;
}

export function useIframeTracking(
  iframeRef: React.RefObject<HTMLIFrameElement | null>,
  options: UseIframeTrackingOptions
) {
  const engagementStartTime = useRef<number | null>(null);
  const isFocused = useRef(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || typeof window === 'undefined' || !window.gtag) return;

    const handleFocus = () => {
      if (!isFocused.current) {
        isFocused.current = true;
        engagementStartTime.current = Date.now();

        // Track focus event
        window.gtag?.('event', 'widget_engagement', {
          event_category: options.eventCategory || 'engagement',
          event_label: options.eventLabel,
          event_action: 'focus',
        });

        console.log(`Tracking: ${options.eventLabel} - focus`);
      }
    };

    const handleBlur = () => {
      if (isFocused.current) {
        isFocused.current = false;

        // Calculate engagement time if tracking is enabled
        let engagementTime = 0;
        if (options.trackEngagementTime && engagementStartTime.current) {
          engagementTime = Math.round((Date.now() - engagementStartTime.current) / 1000);
        }

        // Track blur event with engagement time
        window.gtag?.('event', 'widget_engagement', {
          event_category: options.eventCategory || 'engagement',
          event_label: options.eventLabel,
          event_action: 'blur',
          value: engagementTime,
        });

        console.log(`Tracking: ${options.eventLabel} - blur (${engagementTime}s)`);
        engagementStartTime.current = null;
      }
    };

    // Detect clicks that might indicate iframe interaction
    const handleWindowClick = (e: MouseEvent) => {
      const rect = iframe.getBoundingClientRect();
      const isClickInsideIframe =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isClickInsideIframe) {
        handleFocus();
      } else if (isFocused.current) {
        handleBlur();
      }
    };

    // Detect when window loses focus (user might be interacting with iframe)
    const handleWindowBlur = () => {
      // Small delay to check if an iframe is the cause
      setTimeout(() => {
        if (document.activeElement === iframe) {
          handleFocus();
        }
      }, 0);
    };

    // Detect when window regains focus
    const handleWindowFocus = () => {
      if (isFocused.current && document.activeElement !== iframe) {
        handleBlur();
      }
    };

    // Add event listeners
    window.addEventListener('click', handleWindowClick);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    // Cleanup
    return () => {
      // Track final blur if still focused
      if (isFocused.current) {
        handleBlur();
      }

      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [iframeRef, options.eventLabel, options.eventCategory, options.trackEngagementTime]);
}