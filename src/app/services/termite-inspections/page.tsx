import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bug, CheckCircle, Info, ArrowRight } from "lucide-react"

export default function TermiteInspectionsPage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/man-checks-the-interior-of-a-crawl-space.jpg"
          alt="Professional inspector checking crawl space for termites"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Termite & Wood-Destroying Insect Inspections
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Protect your investment from costly damage
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
                Protect your investment from costly damage. Our certified inspectors identify termites 
                and other wood-destroying organisms before they become major problems.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/homeguide-foundation-with-cracks-and-crumbing-concrete.jpg"
                alt="Foundation damage from wood-destroying insects"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Look For</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Bug className="h-5 w-5 text-primary mt-0.5" />
                  <span>Subterranean termites</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bug className="h-5 w-5 text-primary mt-0.5" />
                  <span>Drywood termites</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bug className="h-5 w-5 text-primary mt-0.5" />
                  <span>Carpenter ants</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Bug className="h-5 w-5 text-primary mt-0.5" />
                  <span>Powder post beetles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bug className="h-5 w-5 text-primary mt-0.5" />
                  <span>Carpenter bees</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bug className="h-5 w-5 text-primary mt-0.5" />
                  <span>Wood decay fungi</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Inspection Areas</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Foundation and crawl spaces</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Basement and interior walls</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Attic spaces and roof structure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Exterior siding and trim</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Garage and outbuildings</span>
              </li>
            </ul>

            <div className="bg-card p-8 rounded-lg border mb-12">
              <h2 className="text-2xl font-semibold mb-4">Schedule Termite Inspection</h2>
              <p className="text-muted-foreground mb-6">
                Essential for real estate transactions and regular home maintenance. 
                Get your official Wood-Destroying Insect Report (NPMA-33).
              </p>
              <Button size="lg">Book Inspection</Button>
            </div>

            <div className="bg-accent/20 border border-primary/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Licensed Pest Control Partnership</h3>
                  <p className="text-muted-foreground">
                    Our termite and wood-destroying insect inspections are performed by licensed pest control 
                    professionals who specialize in WDI detection and reporting. InspectionMuse partners with 
                    certified inspectors who are authorized to issue official NPMA-33 forms required for most 
                    real estate transactions. We coordinate scheduling and ensure all reports meet state and 
                    lender requirements, providing you with seamless service and expert results through a 
                    single point of contact.
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
          src="/images/man-checks-the-interior-of-a-crawl-space.jpg"
          alt="Professional inspector examining crawl space for termites"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Don't let termites and wood-destroying insects damage your property. 
              Get your official NPMA-33 inspection report today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule WDI Inspection
              </Button>
              <Link href="https://www.npmapestworld.org/your-team-tools/npma-forms-npma3399a99b/npma-forms-information/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Learn About NPMA-33 Reports
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}