"use client";

import { useEffect } from "react";

// Using the existing gtag type from other components

export default function TestTrackingPage() {
  useEffect(() => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('✅ Google Tag (gtag) is loaded and available');

      // Test sending a test event
      window.gtag('event', 'test_tracking', {
        event_category: 'test',
        event_label: 'tracking_verification',
        event_action: 'page_load'
      });

      console.log('📊 Test event sent to Google Analytics');
    } else {
      console.log('❌ Google Tag (gtag) is not available');
    }
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Tracking Test Page</h1>

      <div className="space-y-4 bg-card p-6 rounded-lg border">
        <h2 className="text-xl font-semibold">Google Analytics Tracking Status</h2>
        <p className="text-muted-foreground">
          Open the browser console to see if Google Tag is properly loaded.
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Tracked Events:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><strong>Instant Quote Widget:</strong> Focus/blur events on /services-fees page</li>
            <li><strong>Schedule Inspection Widget:</strong> Focus/blur events on /schedule page</li>
            <li><strong>Contact Form:</strong> Focus and submit events on /contact page</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">How to Test:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Open Chrome DevTools (F12)</li>
            <li>Go to the Network tab</li>
            <li>Filter by "collect" or "gtag"</li>
            <li>Visit the pages and interact with the widgets</li>
            <li>You should see requests to Google Analytics with your events</li>
          </ol>
        </div>

        <div className="mt-6 p-4 bg-muted rounded">
          <p className="text-sm">
            <strong>Note:</strong> Events are logged to the console with the format:
          </p>
          <code className="text-xs block mt-2">
            Tracking: [widget_name] - [action] ([engagement_time]s)
          </code>
        </div>
      </div>
    </div>
  );
}