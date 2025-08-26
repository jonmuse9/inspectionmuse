import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function HomeInspectionsPage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
          alt="Beautiful home ready for comprehensive inspection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Comprehensive Home Inspections
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Thorough evaluations to protect your investment and ensure peace of mind
              </p>
              <Link href="/schedule">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Schedule Inspection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Our detailed home inspections provide you with a complete understanding of your property's condition, 
              helping you make informed decisions about your investment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">What We Inspect</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Roof, attic, and visible insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Exterior walls, windows, and doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Foundation and structural components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Heating and cooling systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Plumbing system and fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Electrical system and components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Interior walls, ceilings, and floors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Basement and crawl spaces</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Inspection Process</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">1. Visual Examination</h3>
                    <p className="text-muted-foreground">Thorough visual inspection of all accessible areas</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">2. System Testing</h3>
                    <p className="text-muted-foreground">Operating all systems and built-in appliances</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">3. Documentation</h3>
                    <p className="text-muted-foreground">Detailed notes and photos of all findings</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">4. Report Generation</h3>
                    <p className="text-muted-foreground">Comprehensive report delivered within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Inspection Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/attic-112266_1280.jpg"
                alt="Attic inspection - checking insulation and structural elements"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Attic Inspection</p>
                <p className="text-sm text-white/80">Insulation & Structure</p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/basement-466197_1280.jpg"
                alt="Basement inspection - foundation and systems check"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Basement Analysis</p>
                <p className="text-sm text-white/80">Foundation & Systems</p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/Roof-Inspection-1-scaled.jpg"
                alt="Professional roof inspection for structural integrity"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Roof Inspection</p>
                <p className="text-sm text-white/80">Structural Integrity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20">
        <Image
          src="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
          alt="Beautiful home exterior ready for professional inspection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Home Inspection?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get peace of mind with our comprehensive home inspection service. 
              Professional, thorough, and reliable inspections you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Schedule Inspection
                </Button>
              </Link>
              <Link 
                href="https://app.spectora.com/home-inspectors/my-inspection-company-20b1ca4e0f/sample_report?sample_id=16772"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  View Sample Report
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}