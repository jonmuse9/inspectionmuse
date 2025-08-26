import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Camera, Clock, FileText, Shield, Users, Calendar } from "lucide-react";

export default function YourInspectionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Inspection
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern home inspection reports designed with YOU in mind. 
              We provide comprehensive, visual inspections that give you the peace of mind you deserve.
            </p>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              {/* Roof Inspection Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-6">
                <Image
                  src="/images/roof-inspection-on-residential-home.jpg"
                  alt="Professional roof inspection on residential home"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Professional Inspection Services</h2>
              <p className="text-muted-foreground mb-4">
                Our certified inspectors use the latest tools and technology to provide thorough evaluations of every accessible area of your home.
              </p>
              <p className="text-muted-foreground mb-6">
                From structural components to electrical systems, we leave no stone unturned in ensuring you have complete knowledge about your investment.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg border border-border mb-6">
                <p className="text-foreground font-medium mb-4">
                  See a sample of our comprehensive inspection reports before booking. Experience how we present 
                  findings with detailed photos and clear explanations.
                </p>
                <Link 
                  href="https://app.spectora.com/home-inspectors/my-inspection-company-20b1ca4e0f/sample_report?sample_id=16772"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="default">
                    View Sample Report
                  </Button>
                </Link>
              </div>
              
              {/* Inspection Process */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Our Inspection Process</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-primary">1</span>
                        </div>
                        <CardTitle className="text-lg">Schedule Your Inspection</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Book your inspection online or call us. We offer flexible scheduling to meet your needs.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-primary">2</span>
                        </div>
                        <CardTitle className="text-lg">Thorough Inspection</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Our certified inspectors examine every accessible area of your home with meticulous attention to detail.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-primary">3</span>
                        </div>
                        <CardTitle className="text-lg">Receive Your Report</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Get your comprehensive, visual report within 24 hours, complete with photos and detailed findings.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Schedule Inspection Card */}
              <div className="mt-8">
                <Card className="border-green-600 text-center" style={{ backgroundColor: '#01E701' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-black">
                      <Calendar className="h-5 w-5 text-black" />
                      Schedule Your Inspection Today
                    </CardTitle>
                    <CardDescription className="text-black/70">
                      Fast, reliable inspections with reports delivered within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <p className="text-black/80 text-sm mb-4 text-center">
                      Book your comprehensive home inspection online or call us. 
                      Same-week appointments available with flexible scheduling.
                    </p>
                    <div className="flex flex-col gap-3 items-center">
                      <Link href="/schedule">
                        <Button className="bg-black hover:bg-gray-800 font-semibold" size="lg" style={{ color: '#01E701' }}>
                          <Calendar className="h-4 w-4 mr-2" style={{ color: '#01E701' }} />
                          Schedule Inspection Now
                        </Button>
                      </Link>
                      <a href="tel:443-555-0100" className="text-black font-semibold hover:underline">
                        Call (443) 555-0100
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[1293px] md:h-[1547px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/what-included-home-inspection-1-768x2753.jpg"
                  alt="Complete home inspection checklist infographic"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Report Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Your Comprehensive Report
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Report Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">High-Quality Photos & Videos</h4>
                      <p className="text-muted-foreground">Visual documentation of all findings</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Mobile-Friendly Format</h4>
                      <p className="text-muted-foreground">Access your report anywhere, anytime</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">24-Hour Delivery</h4>
                      <p className="text-muted-foreground">Quick turnaround via email</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Detailed Findings</h4>
                      <p className="text-muted-foreground">Clear explanations and recommendations</p>
                    </div>
                  </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="mb-4 text-muted-foreground">
                        Every inspection report includes:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✓ Executive summary of major findings</li>
                        <li>✓ Detailed system-by-system analysis</li>
                        <li>✓ Safety concerns highlighted</li>
                        <li>✓ Maintenance recommendations</li>
                        <li>✓ Repair request assistance tool</li>
                        <li>✓ Follow-up support</li>
                      </ul>
                      <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong>You're not just buying an inspection.</strong> You're buying peace of mind and professional expertise to make informed decisions about your investment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/rear-view-young-college-student.jpg"
                  alt="Person reviewing detailed inspection report"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            What to Expect During Your Inspection
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Inspection Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Structural Components & Foundation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Roof, Attic & Insulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Electrical Systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Plumbing Systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>HVAC Systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Interior & Exterior Components</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Duration & Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A typical home inspection takes <strong className="text-primary">2-4 hours</strong>, depending on the size and condition of the property.
                </p>
                <p className="mb-4">
                  You're encouraged to attend the inspection! This is a great opportunity to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ask questions about your future home</li>
                  <li>• Learn about maintenance requirements</li>
                  <li>• Understand any issues firsthand</li>
                  <li>• Get professional advice from our inspectors</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/businesswoman-using-tablet-analysis.jpg"
            alt="Professional reviewing inspection report on tablet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>
        <div className="relative z-10 container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              See What Your Report Looks Like
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Experience our comprehensive, visual inspection reports before you buy. 
              See exactly how we present findings with detailed photos and clear explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                asChild
              >
                <Link 
                  href="https://app.spectora.com/home-inspectors/my-inspection-company-20b1ca4e0f/sample_report?sample_id=16772"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Sample Report
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/schedule">
                  Schedule Your Inspection
                </Link>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">
              * Sample report opens in a new window
            </p>
            <div className="mt-8 text-primary-foreground">
              <p className="mb-2">Or call us directly:</p>
              <a href="tel:1-800-123-4567" className="text-2xl font-bold hover:underline">
                1-800-123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}