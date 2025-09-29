import { Button } from "@/components/ui/button";
import { Trash2, CheckCircle, Calendar, FileText } from "lucide-react";
import { PartnershipInfo } from "@/components/services/PartnershipInfo";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceCTASection } from "@/components/services/ServiceCTASection";
import { ServiceOverviewSection } from "@/components/services/ServiceOverviewSection";
import { ChecklistSection } from "@/components/services/ChecklistSection";
import { ServiceProcessCard } from "@/components/services/ServiceProcessCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Septic System Inspections - InspectionMuse Carroll County MD",
  description: "Professional septic system inspections in Carroll County, MD. Comprehensive evaluations of septic tanks, drain fields, and pumps to protect your property from costly issues.",
  alternates: {
    canonical: "https://inspectionmuse.com/services/septic-inspections/",
  },
  openGraph: {
    title: "Septic System Inspections - InspectionMuse",
    description: "Protect your property from costly underground issues with professional septic system inspections.",
    url: "https://inspectionmuse.com/services/septic-inspections/",
  },
};

export default function SepticInspectionsPage() {
  return (
    <main>
      <ServiceHeroSection
        title="Septic System Inspections"
        subtitle="Protect your property from costly underground issues"
        image="/images/1702219498banner-septic-inspection.jpg"
        imageAlt="Septic system inspection equipment and setup"
        ctaText="Schedule Inspection"
        ctaHref="#contact"
      />

      <ServiceOverviewSection
        sideImage={{
          src: "/images/beautiful-shot-big-farmhouse-clear-blue-sky.jpg",
          alt: "Rural farmhouse with septic system",
        }}
      >
        <p className="text-xl text-muted-foreground mb-8">
          Comprehensive septic system evaluations to ensure proper function and
          identify potential issues before they become costly problems.
        </p>

        <ChecklistSection
          title="What We Inspect"
          items={[
            { text: "Septic tank condition and liquid levels" },
            { text: "Distribution box and baffles" },
            { text: "Drain field condition and absorption" },
            { text: "Pumps and electrical components" },
            { text: "Flow test from house to tank" },
          ]}
        />
      </ServiceOverviewSection>

      <section className="pt-8 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ServiceProcessCard
              title=""
              items={[
                {
                  icon: Trash2,
                  title: "Visual Inspection",
                  description:
                    "Camera inspection of tank interior, checking for cracks, leaks, and structural issues.",
                },
                {
                  icon: Trash2,
                  title: "Functional Testing",
                  description:
                    "Running water through the system to verify proper flow and drainage.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PartnershipInfo
              title="Specialized Septic Professionals"
              description="Septic system inspections require specialized equipment and expertise. We partner with certified septic system inspectors who have the proper licensing and equipment to perform comprehensive evaluations, including camera inspections and hydraulic testing. InspectionMuse coordinates the entire process, ensuring timely service and detailed reporting. You work with us as your single point of contact while benefiting from specialized expertise that protects your investment and health."
            />
          </div>
        </div>
      </section>

      <ServiceCTASection
        title="Ready to Inspect Your Septic System?"
        description="Essential for rural properties and homes not connected to municipal sewer. Protect your investment with comprehensive septic evaluations."
        image="/images/1702219498banner-septic-inspection.jpg"
        imageAlt="Professional septic system inspection in progress"
        primaryButton={{
          text: "Schedule Septic Inspection",
          href: "#contact",
          icon: Calendar,
        }}
        secondaryButton={{
          text: "Learn About Septic Maintenance",
          href: "https://www.epa.gov/septic/how-care-your-septic-system",
          external: true,
          icon: FileText,
        }}
      />
    </main>
  );
}
