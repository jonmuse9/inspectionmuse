"use client";

import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { ScheduleButton } from "@/components/ui/schedule-button";
import { Mail, Shield, Award, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-section">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/large-home-389271_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />
      </div>

      <div className="page-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-hero text-white mb-4">
            Professional Home Inspections in Carroll County, MD
          </h1>
          <p className="text-subtitle">
            Your muse for smart home decisions
          </p>
          <p className="text-lead">
            Making your biggest investment your safest investment. Comprehensive
            inspections you can trust, detailed reports you can understand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <ScheduleButton />
            <Link href="/services-fees#instant-quote">
              <Button size="lg" className="btn-green-outline border-2">
                <DollarSign className="mr-2" />
                Get a Quote
              </Button>
            </Link>
            <CallButton variant="white-overlay" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="flex items-center gap-3">
              <Shield className="icon-feature" />
              <div>
                <p className="font-semibold">Licensed & Insured</p>
                <p className="text-sm text-gray-300">MD License #12345</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="icon-feature" />
              <div>
                <p className="font-semibold">Certified Inspector</p>
                <p className="text-sm text-gray-300">InterNACHI Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="icon-feature" />
              <div>
                <p className="font-semibold">Same Week Service</p>
                <p className="text-sm text-gray-300">Fast scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
