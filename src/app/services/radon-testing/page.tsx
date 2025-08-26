import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

export default function RadonTestingPage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/135148_pt_element86.jpg"
          alt="Radon element 86 - radioactive gas requiring professional testing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Professional Radon Testing
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Protect your family from this invisible health risk
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Radon Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Radon is a radioactive gas that you cannot see, smell, or taste. It's the second leading cause 
              of lung cancer in the United States. Testing is the only way to know your home's radon levels.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-0.5" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Why Radon Testing Matters</h2>
                  <p className="text-muted-foreground">
                    The EPA estimates that radon causes about 21,000 lung cancer deaths per year. 
                    Maryland and Pennsylvania have areas with elevated radon levels due to geological formations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Testing Process</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>48-hour continuous air monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>EPA-approved testing equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Professional placement and retrieval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Lab-certified results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Detailed report with recommendations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Understanding Results</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-semibold mb-1">Below 2.0 pCi/L</h3>
                    <p className="text-sm text-muted-foreground">Consider retesting in the future</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-semibold mb-1">2.0 - 4.0 pCi/L</h3>
                    <p className="text-sm text-muted-foreground">Consider mitigation to reduce levels</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-semibold mb-1">Above 4.0 pCi/L</h3>
                    <p className="text-sm text-muted-foreground">EPA recommends mitigation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">Schedule Radon Testing</h2>
              <p className="text-muted-foreground mb-6">
                Protect your family's health with professional radon testing. 
                Quick, accurate results you can trust.
              </p>
              <Button size="lg">Book Radon Test</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Radon Testing Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/basement-466197_1280.jpg"
                alt="Basement radon testing - primary testing location"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Basement Testing</p>
                <p className="text-sm text-white/80">Primary Location</p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
                alt="Home exterior - radon can affect any home"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Any Home Type</p>
                <p className="text-sm text-white/80">All Properties at Risk</p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden group">
              <Image
                src="/images/large-home-389271_1280.jpg"
                alt="Large home needing comprehensive radon testing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Comprehensive Testing</p>
                <p className="text-sm text-white/80">Professional Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20">
        <Image
          src="/images/basement-466197_1280.jpg"
          alt="Basement area requiring professional radon testing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Test Your Home for Radon?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Protect your family's health with professional radon testing. 
              EPA-approved methods with accurate, certified results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Radon Test
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Learn About Radon Levels
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}