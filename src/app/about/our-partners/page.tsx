import { Shield, Building, CheckCircle, ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CallButton } from "@/components/ui/call-button"
import { ScheduleButton } from "@/components/ui/schedule-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Partners - InspectionMuse | Structural Engineering Partnership",
  description: "Learn about InspectionMuse's partnership with JH Engineering for expert structural analysis. Get seamless referrals to trusted engineering experts when structural issues are identified.",
  alternates: {
    canonical: "https://inspectionmuse.com/about/our-partners/",
  },
  openGraph: {
    title: "Our Partners - InspectionMuse | Structural Engineering Partnership",
    description: "InspectionMuse partners with JH Engineering for expert structural analysis and evaluations.",
    url: "https://inspectionmuse.com/about/our-partners/",
  },
}

export default function OurPartnersPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Partners</h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Working together to provide comprehensive property assessment services
            </p>

            {/* Partner Header with Logo/Name */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20 p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Building className="h-16 w-16 text-primary" />
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 whitespace-nowrap">JH Engineering, LLC</h2>
                  <p className="text-lg text-muted-foreground">Licensed Structural Engineering Firm</p>
                  <p className="text-sm text-muted-foreground">20+ Years of Experience • MD, PA & DC</p>
                </div>
                <Link href="https://jhengr.com/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-primary-large">
                    Visit JH Engineering
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Main Content with Integrated Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Structural Engineering Partnership: Expert Analysis When It Matters
                </h3>
                <p className="text-foreground mb-6">
                  Home inspections can reveal signs of potential structural issues that require specialized expertise.
                  Through our partnership with <span className="whitespace-nowrap">JH Engineering, LLC</span>, we ensure you have
                  direct access to licensed structural engineers who can provide detailed analysis and solutions for:
                </p>

                <div className="bg-background rounded-lg border border-border p-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground">Foundation concerns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground">Load-bearing wall modifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground">Retaining wall evaluation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground">Structural damage assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground">Addition and renovation planning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Gemini_Generated_Image_qixpc2qixpc2qixp.png"
                  alt="Professional structural engineering assessment residential home Carroll County Maryland"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Partnership Benefits - Full Width */}
            <div className="bg-card rounded-lg border border-border p-8 mb-12">
              <h4 className="text-2xl font-semibold mb-6 text-center">This partnership means you get:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Seamless referrals to trusted engineering experts when structural issues are identified</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Coordinated communication between inspection and engineering assessments</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Peace of mind knowing you have access to professional structural analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Expert evaluation of foundations, retaining walls, renovations, and structural integrity</span>
                </div>
              </div>
            </div>

            {/* Why This Partnership Matters with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/Gemini_Generated_Image_svr7xsvr7xsvr7xs.png"
                  alt="Licensed structural engineer conducting detailed analysis Maryland home foundation systems"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-gray-200 rounded-lg border border-border p-8 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-black">Why This Partnership Matters</h3>
                </div>
                <p className="text-black mb-4">
                  Home inspections can identify potential structural concerns, but sometimes a specialized engineering
                  evaluation is needed to fully understand and address these issues. Our partnership with <span className="whitespace-nowrap">JH Engineering</span> ensures you have
                  immediate access to qualified structural engineers who can provide:
                </p>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Detailed structural assessments and reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Engineering solutions for identified problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Professional documentation for negotiations or repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Expert testimony and consultation when needed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Work Together */}
            <div className="bg-card rounded-lg border border-border overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4">How We Work Together</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-primary">1. Initial Inspection</h4>
                      <p className="text-muted-foreground">
                        During your home inspection, we identify any potential structural concerns that may require further evaluation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-primary">2. Expert Referral</h4>
                      <p className="text-muted-foreground">
                        If structural issues are found, we provide a direct referral to <span className="whitespace-nowrap">JH Engineering</span> for specialized assessment.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-primary">3. Coordinated Analysis</h4>
                      <p className="text-muted-foreground">
                        Both teams work together to ensure you receive comprehensive information about your property's condition.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-primary">4. Complete Solutions</h4>
                      <p className="text-muted-foreground">
                        You get both inspection findings and engineering solutions in one coordinated service experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] lg:h-auto min-h-[400px]">
                  <Image
                    src="/images/Gemini_Generated_Image_2lccj22lccj22lcc.png"
                    alt="Engineering inspection collaboration structural assessment Carroll County MD residential property"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Schedule Your Inspection?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get comprehensive home inspection services with the confidence of expert partnerships.
                Our collaboration with <span className="whitespace-nowrap">JH Engineering</span> ensures you have access to complete property assessment solutions.
              </p>
              <div className="flex gap-4 justify-center">
                <ScheduleButton />
                <CallButton variant="white-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}