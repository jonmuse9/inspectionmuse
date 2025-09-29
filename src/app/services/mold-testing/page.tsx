import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplets, CheckCircle, Microscope, Calendar, FileText } from "lucide-react"
import { PartnershipInfo } from "@/components/services/PartnershipInfo"
import {
  ServiceHeroSection,
  ServiceCTASection,
  ChecklistSection
} from "@/components/services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mold Testing & Air Quality Assessment - Carroll County MD",
  description: "Professional mold testing and air quality assessment in Carroll County, MD. Lab-certified mold detection to protect your family from hidden health hazards.",
  keywords: "mold testing, air quality, mold inspection, Carroll County MD, indoor air quality, mold detection, Maryland mold testing, health hazards",
  alternates: {
    canonical: "https://inspectionmuse.com/services/mold-testing/",
  },
  openGraph: {
    title: "Mold Testing & Air Quality - InspectionMuse Carroll County",
    description: "Professional mold testing and air quality assessment in Carroll County, MD. Lab-certified analysis to protect your family's health.",
    url: "https://inspectionmuse.com/services/mold-testing/",
  },
}

export default function MoldTestingPage() {
  return (
    <main>
      <ServiceHeroSection
        title="Mold Testing & Air Quality"
        subtitle="Protect your family from hidden health hazards"
        image="/images/mold-testing.jpg"
        imageAlt="Professional mold testing equipment and inspection"
        ctaText="Schedule Mold Test"
        ctaHref="/schedule"
      />

      {/* Service Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-12">
              Professional mold testing to identify potential health hazards and moisture problems 
              in your home. Get accurate results with lab-certified analysis.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Testing Methods</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <Droplets className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Air Sampling</h3>
                <p className="text-muted-foreground">
                  Captures airborne mold spores to determine concentration levels and types present.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <Droplets className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Surface Testing</h3>
                <p className="text-muted-foreground">
                  Identifies mold species on surfaces to assess potential health risks.
                </p>
              </div>
            </div>

            <ChecklistSection
              title="When to Test for Mold"
              items={[
                { text: "Visible mold growth or discoloration" },
                { text: "Musty odors without visible source" },
                { text: "After water damage or flooding" },
                { text: "Health symptoms that improve when away from home" },
                { text: "Before purchasing a property" }
              ]}
              className="mb-12"
            />

            <PartnershipInfo
              title="Environmental Testing Specialists"
              description="Our mold testing services are performed by certified environmental testing specialists with expertise in indoor air quality assessment. InspectionMuse partners with licensed mold assessors who use calibrated equipment and follow IICRC standards for proper sampling protocols. All samples are analyzed by accredited laboratories, providing you with defensible results that include spore identification, concentration levels, and health risk assessments. We coordinate the entire process while ensuring professional standards are met."
              icon={Microscope}
            />
          </div>
        </div>
      </section>

      <ServiceCTASection
        title="Ready to Test Your Air Quality?"
        description="Protect your family's health with professional mold testing. Lab-certified results you can trust for peace of mind."
        image="/images/attic-112266_1280.jpg"
        imageAlt="Attic space requiring professional mold testing"
        primaryButton={{
          text: "Schedule Mold Test",
          href: "/schedule",
          icon: Calendar
        }}
        secondaryButton={{
          text: "Learn About Mold Health Effects",
          href: "https://www.epa.gov/mold/mold-and-health",
          external: true,
          icon: FileText
        }}
      />
    </main>
  )
}