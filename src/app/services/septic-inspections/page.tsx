import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trash2, CheckCircle, Info, ArrowRight } from "lucide-react"

export default function SepticInspectionsPage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/1702219498banner-septic-inspection.jpg"
          alt="Septic system inspection equipment and setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Septic System Inspections
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Protect your property from costly underground issues
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview with Side Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive septic system evaluations to ensure proper function and identify 
                potential issues before they become costly problems.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/beautiful-shot-big-farmhouse-clear-blue-sky.jpg"
                alt="Rural farmhouse with septic system"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Inspect</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Septic tank condition and liquid levels</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Distribution box and baffles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Drain field condition and absorption</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Pumps and electrical components</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Flow test from house to tank</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <Trash2 className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Visual Inspection</h3>
                <p className="text-muted-foreground">
                  Camera inspection of tank interior, checking for cracks, leaks, and structural issues.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <Trash2 className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Functional Testing</h3>
                <p className="text-muted-foreground">
                  Running water through the system to verify proper flow and drainage.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border mb-12">
              <h2 className="text-2xl font-semibold mb-4">Schedule Septic Inspection</h2>
              <p className="text-muted-foreground mb-6">
                Essential for rural properties and homes not connected to municipal sewer. 
                Protect your investment and health with regular inspections.
              </p>
              <Button size="lg">Book Inspection</Button>
            </div>

            <div className="bg-accent/20 border border-primary/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Specialized Septic Professionals</h3>
                  <p className="text-muted-foreground">
                    Septic system inspections require specialized equipment and expertise. We partner with 
                    certified septic system inspectors who have the proper licensing and equipment to perform 
                    comprehensive evaluations, including camera inspections and hydraulic testing. InspectionMuse 
                    coordinates the entire process, ensuring timely service and detailed reporting. You work 
                    with us as your single point of contact while benefiting from specialized expertise that 
                    protects your investment and health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20">
        <Image
          src="/images/1702219498banner-septic-inspection.jpg"
          alt="Professional septic system inspection in progress"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Inspect Your Septic System?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Essential for rural properties and homes not connected to municipal sewer. 
              Protect your investment with comprehensive septic evaluations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Septic Inspection
              </Button>
              <Link href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Learn About Septic Maintenance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}