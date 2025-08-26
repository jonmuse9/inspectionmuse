import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TestTube, CheckCircle, ArrowRight } from "lucide-react"

export default function WellWaterTestingPage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/water-well-inspection-541292430.jpg"
          alt="Well water testing equipment and setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Well Water Testing
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Ensure your family's water safety with professional testing
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Water Test
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
                Ensure your well water is safe for your family. Our comprehensive testing identifies 
                bacteria, chemicals, and minerals that could affect water quality and health.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/McCleary_150717_4075-scaled.jpg"
                alt="Professional well water testing and analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Test</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Basic Testing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <TestTube className="h-4 w-4 text-primary mt-0.5" />
                    <span>Total coliform bacteria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TestTube className="h-4 w-4 text-primary mt-0.5" />
                    <span>E. coli bacteria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TestTube className="h-4 w-4 text-primary mt-0.5" />
                    <span>Nitrates and nitrites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TestTube className="h-4 w-4 text-primary mt-0.5" />
                    <span>pH levels</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Testing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <TestTube className="h-4 w-4 text-primary mt-0.5" />
                    <span>Lead and copper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TestTube className="h-4 w-4 text-primary mt-0.5" />
                    <span>Iron and manganese</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TestTube className="h-4 w-4 text-primary mt-0.5" />
                    <span>Hardness minerals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TestTube className="h-4 w-4 text-primary mt-0.5" />
                    <span>Pesticides and VOCs</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Why Test Your Well Water?</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Private wells are not regulated by the EPA</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Contamination can occur without visible signs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Required for FHA and VA loans</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Recommended annual testing by health departments</span>
              </li>
            </ul>

            <div className="bg-card p-8 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">Schedule Water Testing</h2>
              <p className="text-muted-foreground mb-6">
                State-certified laboratory analysis with results in 3-5 business days. 
                Treatment recommendations included if issues are found.
              </p>
              <Button size="lg">Book Water Test</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20">
        <Image
          src="/images/water-well-inspection-541292430.jpg"
          alt="Well water testing for safe drinking water"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Test Your Well Water?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Private wells require regular testing to ensure safety. 
              Get state-certified lab results with expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Water Test
              </Button>
              <Link href="https://mde.maryland.gov/programs/Water/Water_Supply/Pages/Be_Well_Wise.aspx" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Learn About Water Quality
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}