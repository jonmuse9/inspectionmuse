import Image from "next/image";
import Link from "next/link";
import {
  DollarSign,
  CheckCircle,
  Shield,
  Clock,
  FileText,
  Award,
  ArrowRight,
  Home,
  Wind,
  Bug,
  Droplets,
  Trash2,
  TestTube,
  Search,
  Waves,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScheduleButton } from "@/components/ui/schedule-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesFeesPage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/businesswoman-using-tablet-analysis.jpg"
          alt="Professional providing transparent pricing analysis for home inspection services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Services & Fees
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Transparent pricing for comprehensive home inspection services.
                Get an instant quote for your property inspection needs.
              </p>
              <Link href="#instant-quote">
                <Button size="lg" className="btn-primary-large">
                  <Calculator className="mr-2 h-5 w-5" />
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Inspection Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional home inspection services designed to give you
              complete confidence in your property investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link
              href="/services/home-inspections"
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow text-center block group"
            >
              <Home className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Home Inspections
              </h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive evaluation of all major systems and structural
                components
              </p>
              <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services/pre-listing-inspection"
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow text-center block group"
            >
              <Search className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Pre-Listing Inspection
              </h3>
              <p className="text-muted-foreground text-sm">
                Get ahead of potential issues before listing your home for sale
              </p>
              <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services/radon-testing"
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow text-center block group"
            >
              <Wind className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Radon Testing
              </h3>
              <p className="text-muted-foreground text-sm">
                Professional radon gas testing with EPA-approved methods and
                detailed reports
              </p>
              <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services/termite-inspections"
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow text-center block group"
            >
              <Bug className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Termite Inspections
              </h3>
              <p className="text-muted-foreground text-sm">
                Thorough inspection for termites and wood-destroying insects
                with treatment recommendations
              </p>
              <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services/mold-testing"
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow text-center block group"
            >
              <Droplets className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Mold & Air Quality Testing
              </h3>
              <p className="text-muted-foreground text-sm">
                Air quality and surface testing to detect mold presence and
                types
              </p>
              <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services/septic-inspections"
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow text-center block group"
            >
              <Trash2 className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Septic Inspections
              </h3>
              <p className="text-muted-foreground text-sm">
                Complete septic system evaluation including tank and drain field
              </p>
              <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services/well-water-testing"
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow text-center block group"
            >
              <TestTube className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Well Water Testing
              </h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive water quality testing for private wells
              </p>
              <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services/sewer-scope"
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow text-center block group"
            >
              <Waves className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Sewer Scope Inspections
              </h3>
              <p className="text-muted-foreground text-sm">
                Video inspection of sewer lines to identify blockages and damage
              </p>
              <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Widget Section */}
      <section id="instant-quote" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Instant Quote
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Use our interactive calculator below to get accurate, transparent
              pricing for your inspection needs. Simply enter your property
              details and receive an instant quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Instant Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <iframe
                  src="https://widgets.spectora.com/#/my-inspection-company-706d6fa7e4/quote"
                  style={{ border: 0, height: "1100px", width: "100%" }}
                  title="Inspection Quote Calculator"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section with Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Inspection Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional expertise, advanced technology, and transparent
              pricing make us the trusted choice for home inspections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4 group">
                <Image
                  src="/images/Roof-Inspection-1-scaled.jpg"
                  alt="Professional roof inspection using advanced techniques"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Shield className="h-6 w-6 mb-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Expertise
              </h3>
              <p className="text-muted-foreground">
                Licensed inspectors with years of experience and ongoing
                training in the latest inspection techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4 group">
                <Image
                  src="/images/attic-112266_1280.jpg"
                  alt="Thorough attic inspection showing attention to detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Clock className="h-6 w-6 mb-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Thorough & Timely</h3>
              <p className="text-muted-foreground">
                Comprehensive inspections completed efficiently with detailed
                reports delivered within 24 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4 group">
                <Image
                  src="/images/basement-466197_1280.jpg"
                  alt="Detailed basement inspection with comprehensive reporting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <FileText className="h-6 w-6 mb-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Reporting</h3>
              <p className="text-muted-foreground">
                Easy-to-understand reports with photos, recommendations, and
                maintenance tips for your peace of mind.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-6 bg-muted p-6 rounded-lg">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="font-semibold">InterNACHI Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                <span className="font-semibold">Same-Day Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20">
        <Image
          src="/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg"
          alt="Beautiful home exterior ready for professional inspection services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your Inspection Quote?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get transparent pricing with our instant quote calculator above,
              or contact us directly to discuss your specific inspection needs
              and schedule your appointment.
            </p>
            <div className="flex justify-center">
              <ScheduleButton
                text="Schedule Inspection"
                iconSize="h-5 w-5"
                showArrow={true}
                arrowPosition="right"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
