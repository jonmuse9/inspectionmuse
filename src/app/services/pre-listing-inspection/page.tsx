import { Button } from "@/components/ui/button"
import { CheckCircle, ClipboardCheck, TrendingUp, Shield, Clock, FileText, Calendar } from "lucide-react"
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection"
import { ServiceCTASection } from "@/components/services/ServiceCTASection"
import { ServiceOverviewSection } from "@/components/services/ServiceOverviewSection"
import { ChecklistSection } from "@/components/services/ChecklistSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pre-Listing Inspection - Sell with Confidence Carroll County MD",
  description: "Pre-listing inspection in Carroll County, MD. Know your home's condition before listing. Move-In Certified® inspection to build buyer confidence and sell faster.",
  keywords: "pre-listing inspection, home selling, Move-In Certified, Carroll County MD, seller inspection, listing preparation, Maryland home selling, property condition",
  alternates: {
    canonical: "https://inspectionmuse.com/services/pre-listing-inspection/",
  },
  openGraph: {
    title: "Pre-Listing Inspection - InspectionMuse Carroll County",
    description: "Pre-listing inspection in Carroll County, MD. Sell with confidence knowing your home's condition before listing.",
    url: "https://inspectionmuse.com/services/pre-listing-inspection/",
  },
}

export default function PreListingInspectionPage() {
  return (
    <main>
      <ServiceHeroSection
        title="Pre-Listing Inspection"
        subtitle="Sell with confidence. Know your home's condition before you list."
        image="/images/large-home-389271_1280.jpg"
        imageAlt="Large residential home Carroll County MD ready for professional pre-listing inspection"
        ctaText="Schedule Pre-Listing Inspection"
        ctaHref="#schedule"
      />

      <ServiceOverviewSection
        sideImage={{
          src: "/images/businesswoman-using-tablet-analysis.jpg",
          alt: "Professional home inspector analyzing property data pre-listing report Carroll County Maryland"
        }}
      >
        <p className="text-xl text-muted-foreground mb-8">
          A pre-listing inspection gives you the advantage in the selling process. Discover and address 
          any issues before potential buyers do, allowing you to set realistic prices and negotiate from 
          a position of strength.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <Shield className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Move-In Certified® Advantage</h2>
              <p className="text-muted-foreground">
                A Move-In Certified® home has been pre-inspected, which means you can confirm there are 
                no major systems in need of immediate repair or replacement, and no known safety hazards. 
                This certification builds buyer confidence and can help your home sell faster and for a 
                better price.
              </p>
            </div>
          </div>
        </div>
      </ServiceOverviewSection>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ChecklistSection
            title="Why Get a Pre-Listing Inspection?"
            icon={TrendingUp}
            items={[
              { 
                text: "Set Realistic Pricing", 
                description: "Know your home's true condition to price it accurately" 
              },
              { 
                text: "Address Issues Early", 
                description: "Fix problems before listing or adjust price accordingly" 
              },
              { 
                text: "Speed Up Negotiations", 
                description: "Fewer surprises mean smoother transactions" 
              },
              { 
                text: "Build Buyer Confidence", 
                description: "Show transparency with a professional inspection report" 
              },
              { 
                text: "Marketing Advantage", 
                description: "Use inspection results as a selling point" 
              }
            ]}
          />
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
            <p className="text-muted-foreground mb-4">
              Our pre-listing inspection covers all the same areas as our comprehensive home inspection, 
              complete with a detailed report featuring photos and repair recommendations with estimates.
            </p>
            <ChecklistSection
              title=""
              items={[
                { text: "Roof, attic, and insulation" },
                { text: "Foundation and structural components" },
                { text: "HVAC systems" },
                { text: "Plumbing and electrical systems" },
                { text: "Interior and exterior evaluation" }
              ]}
              icon={CheckCircle}
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-12">
          <h3 className="text-xl font-semibold mb-4">The Pre-Listing Advantage</h3>
          <p className="text-muted-foreground mb-4">
            With extensive experience in the Carroll County area, we understand what buyers and 
            their inspectors look for. Our pre-listing inspection helps you:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-primary rounded-full mt-2" />
              <p className="text-muted-foreground">
                Identify any checklist items that could be deal-breakers
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-primary rounded-full mt-2" />
              <p className="text-muted-foreground">
                Make repairs that can increase your home's value
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-primary rounded-full mt-2" />
              <p className="text-muted-foreground">
                Avoid last-minute negotiation surprises
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-primary rounded-full mt-2" />
              <p className="text-muted-foreground">
                Provide documentation to support your asking price
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Schedule Your Pre-Listing Inspection</h2>
          <p className="text-muted-foreground mb-6">
            Get ahead of the market with a professional pre-listing inspection. 
            Knowledge is power, and we're here to give you the advantage in your home sale.
          </p>
          <Button size="lg" className="btn-primary-large">Book Pre-Listing Inspection</Button>
        </div>
          </div>
        </div>
      </section>

      <ServiceCTASection
        title="Ready to Get the Pre-Listing Advantage?"
        description="Sell with confidence and negotiate from a position of strength. Know your home's condition before you list."
        image="/images/large-home-389271_1280.jpg"
        imageAlt="Beautiful residential property Carroll County MD ready for comprehensive pre-listing inspection"
        primaryButton={{
          text: "Schedule Pre-Listing Inspection",
          href: "#schedule",
          icon: Calendar
        }}
        secondaryButton={{
          text: "Learn More About Move-In Certified®",
          href: "#move-in-certified",
          icon: FileText
        }}
      />
    </main>
  )
}