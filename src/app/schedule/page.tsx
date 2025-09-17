"use client";

import Image from "next/image";
import { Calendar, Clock, CheckCircle, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import { CallButton } from "@/components/ui/call-button";

export default function SchedulePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the Spectora domain for security
      if (event.origin !== "https://app.spectora.com") return;

      if (event.data && typeof event.data.height === "number") {
        const iframe = iframeRef.current;
        if (iframe) {
          iframe.style.height = `${event.data.height}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] bg-gradient-to-br from-blue-900 to-blue-700">
        <Image
          src="/images/businesswoman-using-tablet-analysis.jpg"
          alt="Professional scheduling inspection"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Schedule Your Inspection
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-blue-100">
              Book your comprehensive home inspection online in just a few
              minutes
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-background py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
              <p className="text-sm font-semibold text-foreground">
                Licensed & Insured
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-semibold text-foreground">
                Same Day Reports
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-purple-600 mb-2" />
              <p className="text-sm font-semibold text-foreground">
                InterNACHI Certified
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-orange-600 mb-2" />
              <p className="text-sm font-semibold text-foreground">
                Flexible Scheduling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Form Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Easy Online Booking
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your service, pick a date and time that works for you, and
              we'll handle the rest. You'll receive instant confirmation and
              reminders.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-xl overflow-hidden border border-border">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4">
              <p className="text-center font-semibold">
                Secure Online Scheduling Portal
              </p>
            </div>
            <iframe
              ref={iframeRef}
              src="https://app.spectora.com/home-inspectors/my-inspection-company-706d6fa7e4/schedule?iframe=1"
              style={{
                border: 0,
                height: "600px",
                width: "100%",
                minHeight: "600px",
              }}
              title="Schedule Inspection"
            />
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Need Help?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to assist you with scheduling
              </p>
              <CallButton 
                variant="custom"
                showNumber={true}
                phoneNumber="443-508-8558"
                className="text-primary font-semibold hover:underline p-0 h-auto"
                iconPosition="none"
              />
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Quick Response
              </h3>
              <p className="text-muted-foreground">
                We'll confirm your appointment within 2 hours during business
                hours
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Flexible Options
              </h3>
              <p className="text-muted-foreground">
                Weekend and evening appointments available upon request
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
