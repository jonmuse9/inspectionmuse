import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Wrench,
  AlertTriangle,
  Camera,
  Calendar,
  FileText,
} from "lucide-react";
import { PartnershipInfo } from "@/components/services/PartnershipInfo";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceCTASection } from "@/components/services/ServiceCTASection";
import { ServiceOverviewSection } from "@/components/services/ServiceOverviewSection";
import { ChecklistSection } from "@/components/services/ChecklistSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Scope Inspection - Video Camera Pipe Inspection Carroll County MD",
  description: "Professional sewer scope inspections in Carroll County, MD. Video camera inspections of underground sewer lines to prevent costly repair surprises.",
  keywords: "sewer scope, sewer inspection, video pipe inspection, Carroll County MD, sewer line, drain inspection, plumbing inspection, Maryland sewer scope",
  alternates: {
    canonical: "https://inspectionmuse.com/services/sewer-scope/",
  },
  openGraph: {
    title: "Sewer Scope Inspection - InspectionMuse Carroll County",
    description: "Professional sewer scope inspections in Carroll County, MD. Video camera technology to inspect underground sewer lines.",
    url: "https://inspectionmuse.com/services/sewer-scope/",
  },
};

export default function SewerScopePage() {
  return (
    <main>
      <ServiceHeroSection
        title="Sewer Scope Inspection"
        subtitle="Protect your investment from costly underground surprises"
        image="/images/pipes-2672184_1280.jpg"
        imageAlt="Sewer inspection equipment and pipes"
        ctaText="Schedule Sewer Scope"
        ctaHref="#contact"
      />

      <ServiceOverviewSection
        sideImage={{
          src: "/images/Jim Krumm2.jpg",
          alt: "Professional sewer scope inspection specialist",
        }}
      >
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">The Hidden Risk</h3>
              <p className="text-muted-foreground">
                The underground sewer line is the single most expensive
                component of a home that is almost never considered during a
                typical home inspection. These lines can remain unchecked for
                many years, leading to sewer backups that can cost thousands to
                repair or replace.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xl text-muted-foreground">
          Our sewer scope inspection uses advanced camera technology to
          thoroughly examine your underground sewer lines, identifying potential
          problems before they become expensive emergencies. This critical
          inspection is not part of a standard home inspection but can save you
          thousands in unexpected repairs.
        </p>
      </ServiceOverviewSection>

      <section className="pt-16 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <ChecklistSection
                title="What We Inspect"
                items={[
                  {
                    text: "Main Sewer Line",
                    description:
                      "Camera inspection from house to street/septic",
                  },
                  {
                    text: "Water Supply Lines",
                    description: "Evaluation of pipes and connections",
                  },
                  {
                    text: "Drain Line Condition",
                    description: "Check for cracks, bellies, and blockages",
                  },
                  {
                    text: "Sump Pump Systems",
                    description: "Testing and evaluation if present",
                  },
                  {
                    text: "Hot Water Tank",
                    description: "Age and functional assessment",
                  },
                ]}
                icon={Camera}
              />

              <ChecklistSection
                title="Common Issues We Find"
                items={[
                  {
                    text: "Tree Root Intrusion",
                    description: "Roots penetrating and blocking pipes",
                  },
                  {
                    text: "Pipe Bellies",
                    description: "Sagging sections that collect waste",
                  },
                  {
                    text: "Cracks and Breaks",
                    description: "Damaged pipes allowing leakage",
                  },
                  {
                    text: "Offset Joints",
                    description: "Misaligned connections causing blockages",
                  },
                  {
                    text: "Corrosion",
                    description:
                      "Deteriorating pipes, especially in older homes",
                  },
                ]}
                icon={Wrench}
              />
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-8 mb-12 mt-12">
                <h3 className="text-xl font-semibold mb-4">
                  When Should You Get a Sewer Scope?
                </h3>
                <ChecklistSection
                  title=""
                  items={[
                    { text: "Before purchasing any home over 20 years old" },
                    { text: "Homes with large trees near sewer lines" },
                    { text: "Properties with clay or cast iron pipes" },
                    { text: "Signs of slow drains or backups" },
                    { text: "Wet spots in yard near sewer line" },
                    { text: "As part of routine home maintenance" },
                  ]}
                  columns={2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <PartnershipInfo
                title="Licensed Plumbing Inspection Partnership"
                description="Sewer scope inspections require specialized camera equipment and technical expertise. We partner with certified plumbing inspection specialists who have the proper equipment to perform comprehensive video inspections of your sewer lines. InspectionMuse coordinates all scheduling and ensures you receive detailed video documentation and reporting. We remain your single point of contact throughout the process, providing seamless service with specialized expertise."
                icon={Camera}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceCTASection
        title="Ready to Inspect Your Sewer Line?"
        description="Don't let hidden sewer problems become expensive emergencies. Get a comprehensive video inspection with detailed reporting."
        image="/images/pipes-2672184_1280.jpg"
        imageAlt="Professional sewer scope inspection equipment"
        primaryButton={{
          text: "Schedule Sewer Scope",
          href: "#contact",
          icon: Calendar,
        }}
        secondaryButton={{
          text: "Learn About Sewer Scope Inspections",
          href: "https://www.rocketmortgage.com/learn/sewer-scope-inspection",
          external: true,
          icon: FileText,
        }}
      />
    </main>
  );
}
