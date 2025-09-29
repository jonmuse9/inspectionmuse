import {
  Clock,
  Users,
  ClipboardList,
  DollarSign,
  Home,
  CheckCircle,
  Calendar,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScheduleButton } from "@/components/ui/schedule-button";
import { CallButton } from "@/components/ui/call-button";
import Link from "next/link";
import {
  ServiceHeroSection,
  ServiceCTASection,
  ServiceGallerySection,
  ServiceOverviewSection,
  ChecklistSection,
} from "@/components/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walk & Talk Consultation - Quick Property Assessment Carroll County MD",
  description: "Walk & Talk consultation in Carroll County, MD. Quick 30-45 minute property assessment with immediate verbal feedback before making an offer.",
  keywords: "walk and talk, property consultation, quick assessment, Carroll County MD, pre-offer inspection, property evaluation, competitive market, Maryland",
  alternates: {
    canonical: "https://inspectionmuse.com/services/walk-and-talk/",
  },
  openGraph: {
    title: "Walk & Talk Consultation - InspectionMuse Carroll County",
    description: "Quick property assessment in Carroll County, MD. 30-45 minute consultation with immediate professional insights.",
    url: "https://inspectionmuse.com/services/walk-and-talk/",
  },
};

export default function WalkAndTalkPage() {
  return (
    <main>
      <ServiceHeroSection
        title="Walk & Talk Consultation"
        subtitle="Quick property insights before making an offer - perfect for today's competitive real estate market"
        image="/images/Nov-30-home-inspector-career.jpg"
        imageAlt="Professional home inspector conducting walk and talk consultation Carroll County MD property evaluation"
        ctaText="Schedule Walk & Talk"
        ctaHref="/schedule"
      />

      <ServiceOverviewSection
        sideImage={{
          src: "/images/T4Ga06A7REyYUlJUDWxm_How_Much_Does_a_Walk_and_Talk_Consultation_Cost.jpg",
          alt: "Professional walk and talk home consultation Carroll County Maryland real estate",
        }}
      >
        <p className="text-xl text-muted-foreground mb-8">
          A Walk & Talk consultation is a streamlined property evaluation where
          our certified inspector walks through the home with you, providing
          real-time professional insights about the property's condition.
          Perfect for quick insights before making an offer.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Clock className="h-6 w-6 text-primary mt-0.5" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick & Efficient</h3>
              <p className="text-muted-foreground">
                30-45 minute on-site consultation with immediate verbal
                feedback. Unlike a full inspection, this service provides verbal
                feedback only - no written report.
              </p>
            </div>
          </div>
        </div>
      </ServiceOverviewSection>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <ChecklistSection
                title="Ideal For"
                items={[
                  { text: "Pre-offer property assessment" },
                  { text: "Competitive market situations" },
                  { text: "Seller's pre-listing evaluation" },
                  { text: "Investment property quick assessment" },
                  { text: "Budget-conscious buyers" },
                  { text: "Waiving inspection contingencies" },
                ]}
              />

              <ChecklistSection
                title="What We Cover"
                items={[
                  { text: "Roof & Exterior evaluation" },
                  { text: "Structure & Foundation assessment" },
                  { text: "Electrical Systems overview" },
                  { text: "Plumbing Systems check" },
                  { text: "HVAC Systems evaluation" },
                  { text: "Interior conditions review" },
                  { text: "Safety concerns identification" },
                  { text: "Major appliances assessment" },
                ]}
              />
            </div>

            {/* Important Note */}
            <div className="bg-muted/50 p-6 rounded-lg border border-border mt-12">
              <h3 className="text-lg font-semibold mb-2">Important Note</h3>
              <p className="text-muted-foreground">
                This consultation provides verbal feedback only - no written
                report is provided. For loan requirements or negotiation
                documentation, consider our full home inspection service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">30-45 Minutes</h3>
                <p className="text-muted-foreground">
                  Quick walkthrough with immediate feedback
                </p>
              </div>
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Budget-Friendly</h3>
                <p className="text-muted-foreground">
                  Fraction of the cost of a full inspection
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive</h3>
                <p className="text-muted-foreground">
                  Ask questions and get answers in real-time
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-bold mx-auto mb-3">
                    1
                  </div>
                  <p className="font-semibold mb-1">Schedule</p>
                  <p className="text-sm text-muted-foreground">
                    Book your consultation online or by phone
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-bold mx-auto mb-3">
                    2
                  </div>
                  <p className="font-semibold mb-1">Walk Through</p>
                  <p className="text-sm text-muted-foreground">
                    Join us for the property walkthrough
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-bold mx-auto mb-3">
                    3
                  </div>
                  <p className="font-semibold mb-1">Learn</p>
                  <p className="text-sm text-muted-foreground">
                    Get immediate verbal feedback
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-bold mx-auto mb-3">
                    4
                  </div>
                  <p className="font-semibold mb-1">Decide</p>
                  <p className="text-sm text-muted-foreground">
                    Make an informed decision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Walk & Talk vs. Full Inspection
            </h2>

            <div className="bg-card rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Walk & Talk</th>
                    <th className="p-4 text-center">Full Inspection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Duration</td>
                    <td className="p-4 text-center">30-45 minutes</td>
                    <td className="p-4 text-center">2-4 hours</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Written Report</td>
                    <td className="p-4 text-center text-muted-foreground">
                      No
                    </td>
                    <td className="p-4 text-center text-primary">
                      Yes (Detailed)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Photos Included</td>
                    <td className="p-4 text-center text-muted-foreground">
                      No
                    </td>
                    <td className="p-4 text-center text-primary">Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Systems Evaluated</td>
                    <td className="p-4 text-center">Visual Overview</td>
                    <td className="p-4 text-center">Comprehensive Testing</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Best For</td>
                    <td className="p-4 text-center">Pre-offer Assessment</td>
                    <td className="p-4 text-center">
                      Post-offer Due Diligence
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">Price</td>
                    <td className="p-4 text-center text-primary font-semibold">
                      $150-250
                    </td>
                    <td className="p-4 text-center">$400-600+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ServiceGallerySection
        title="Walk & Talk Consultation Process"
        items={[
          {
            image: "/images/d8a6a264-0a9f-4575-901d-ddf68e6e6d8e.jpeg",
            imageAlt:
              "Inspector discussing findings with client during walkthrough",
            title: "Real-Time Discussion",
            subtitle: "Get immediate answers",
          },
          {
            image: "/images/colleagues-working-cozy-office-medium-shot.jpg",
            imageAlt: "Quick property assessment in progress",
            title: "Quick Assessment",
            subtitle: "30-45 minutes total",
          },
          {
            image:
              "/images/GettyImages-1344126439_2020x1140px-512c09-1440x813.jpg",
            imageAlt: "Professional consultation with home buyer",
            title: "Professional Insights",
            subtitle: "Expert guidance",
          },
        ]}
      />

      <ServiceCTASection
        title="Ready to Get Quick Property Insights?"
        description="Schedule your Walk & Talk consultation today for immediate professional guidance on your potential investment."
        image="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
        imageAlt="Beautiful home ready for walk and talk consultation"
        primaryButton={{
          text: "Schedule Walk & Talk",
          href: "/schedule",
          icon: Calendar,
        }}
        secondaryButton={{
          text: "View Full Inspection Options",
          href: "/services/home-inspections",
          icon: Home,
        }}
      />
    </main>
  );
}
