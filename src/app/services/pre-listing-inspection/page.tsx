import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ClipboardCheck, TrendingUp, Shield, Clock, FileText, ArrowRight } from "lucide-react"

export default function PreListingInspectionPage() {
  return (
    <main>
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/large-home-389271_1280.jpg"
          alt="Large home ready for pre-listing inspection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Pre-Listing Inspection
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Sell with confidence. Know your home's condition before you list.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Pre-Listing Inspection
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
              A pre-listing inspection gives you the advantage in the selling process. Discover and address 
              any issues before potential buyers do, allowing you to set realistic prices and negotiate from 
              a position of strength.
            </p>

            {/* Service Overview with Side Image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
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
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/businesswoman-using-tablet-analysis.jpg"
                  alt="Professional inspector analyzing property data for pre-listing report"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Why Get a Pre-Listing Inspection?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Set Realistic Pricing</span>
                      <p className="text-sm text-muted-foreground">Know your home's true condition to price it accurately</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Address Issues Early</span>
                      <p className="text-sm text-muted-foreground">Fix problems before listing or adjust price accordingly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Speed Up Negotiations</span>
                      <p className="text-sm text-muted-foreground">Fewer surprises mean smoother transactions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Build Buyer Confidence</span>
                      <p className="text-sm text-muted-foreground">Show transparency with a professional inspection report</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Marketing Advantage</span>
                      <p className="text-sm text-muted-foreground">Use inspection results as a selling point</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
                <p className="text-muted-foreground mb-4">
                  Our pre-listing inspection covers all the same areas as our comprehensive home inspection:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Roof, attic, and insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Foundation and structural components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>HVAC systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Plumbing and electrical systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Interior and exterior evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Detailed report with photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Repair recommendations and estimates</span>
                  </li>
                </ul>
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
              <Button size="lg">Book Pre-Listing Inspection</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20">
        <Image
          src="/images/large-home-389271_1280.jpg"
          alt="Large beautiful home ready for pre-listing inspection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get the Pre-Listing Advantage?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Sell with confidence and negotiate from a position of strength. 
              Know your home's condition before you list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Pre-Listing Inspection
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Learn More About Move-In Certified®
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}