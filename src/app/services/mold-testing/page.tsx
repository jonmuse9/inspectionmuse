import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplets, CheckCircle, Info, ArrowRight } from "lucide-react"

export default function MoldTestingPage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/mold-testing.jpg"
          alt="Professional mold testing equipment and inspection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Mold Testing & Air Quality
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Protect your family from hidden health hazards
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Mold Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

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

            <h2 className="text-2xl font-semibold mb-4">When to Test for Mold</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Visible mold growth or discoloration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Musty odors without visible source</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>After water damage or flooding</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Health symptoms that improve when away from home</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Before purchasing a property</span>
              </li>
            </ul>

            <div className="bg-card p-8 rounded-lg border mb-12">
              <h2 className="text-2xl font-semibold mb-4">Schedule Mold Testing</h2>
              <p className="text-muted-foreground mb-6">
                Protect your family's health with professional mold testing. 
                Lab results typically available within 3-5 business days.
              </p>
              <Button size="lg">Book Mold Test</Button>
            </div>

            <div className="bg-accent/20 border border-primary/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Partnership with Certified Specialists</h3>
                  <p className="text-muted-foreground">
                    To provide you with the most accurate and reliable results, our mold testing services are 
                    performed by certified environmental testing specialists. InspectionMuse coordinates all 
                    scheduling and ensures our trusted partners meet the highest industry standards. You'll 
                    receive comprehensive lab-certified results through our unified reporting system, with 
                    InspectionMuse as your single point of contact throughout the process.
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
          src="/images/attic-112266_1280.jpg"
          alt="Attic space requiring professional mold testing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Test Your Air Quality?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Protect your family's health with professional mold testing. 
              Lab-certified results you can trust for peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Mold Test
              </Button>
              <Link href="https://www.epa.gov/mold/mold-and-health" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Learn About Mold Health Effects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}