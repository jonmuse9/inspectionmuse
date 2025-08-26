import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Wrench,
  AlertTriangle,
  Camera,
  Info,
  ArrowRight,
} from "lucide-react";

export default function SewerScopePage() {
  return (
    <main>
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/pipes-2672184_1280.jpg"
          alt="Sewer inspection equipment and pipes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Sewer Scope Inspection
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Protect your investment from costly underground surprises
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Schedule Sewer Scope
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    The Hidden Risk
                  </h3>
                  <p className="text-muted-foreground">
                    The underground sewer line is the single most expensive
                    component of a home that is almost never considered during a
                    typical home inspection. These lines can remain unchecked
                    for many years, leading to sewer backups that can cost
                    thousands to repair or replace.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Overview with Side Image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-xl text-muted-foreground mb-6">
                  Our sewer scope inspection uses advanced camera technology to
                  thoroughly examine your underground sewer lines, identifying
                  potential problems before they become expensive emergencies.
                  This critical inspection is not part of a standard home
                  inspection but can save you thousands in unexpected repairs.
                </p>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Jim Krumm2.jpg"
                  alt="Professional sewer scope inspection specialist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">What We Inspect</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Camera className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Main Sewer Line</span>
                      <p className="text-sm text-muted-foreground">
                        Camera inspection from house to street/septic
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Water Supply Lines</span>
                      <p className="text-sm text-muted-foreground">
                        Evaluation of pipes and connections
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">
                        Drain Line Condition
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Check for cracks, bellies, and blockages
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Sump Pump Systems</span>
                      <p className="text-sm text-muted-foreground">
                        Testing and evaluation if present
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Hot Water Tank</span>
                      <p className="text-sm text-muted-foreground">
                        Age and functional assessment
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Common Issues We Find
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Tree Root Intrusion</span>
                      <p className="text-sm text-muted-foreground">
                        Roots penetrating and blocking pipes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Pipe Bellies</span>
                      <p className="text-sm text-muted-foreground">
                        Sagging sections that collect waste
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Cracks and Breaks</span>
                      <p className="text-sm text-muted-foreground">
                        Damaged pipes allowing leakage
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Offset Joints</span>
                      <p className="text-sm text-muted-foreground">
                        Misaligned connections causing blockages
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-semibold">Corrosion</span>
                      <p className="text-sm text-muted-foreground">
                        Deteriorating pipes, especially in older homes
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <h3 className="text-xl font-semibold mb-4">
                When Should You Get a Sewer Scope?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Before purchasing any home over 20 years old</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Homes with large trees near sewer lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Properties with clay or cast iron pipes</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Signs of slow drains or backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Wet spots in yard near sewer line</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>As part of routine home maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Schedule Sewer Scope Inspection
              </h2>
              <p className="text-muted-foreground mb-6">
                Don't let hidden sewer problems become expensive emergencies.
                Our comprehensive video inspection provides you with a clear
                view of your sewer line's condition, complete with a detailed
                report and video documentation.
              </p>
              <Button size="lg">Book Sewer Scope Inspection</Button>
            </div>

            <div className="bg-accent/20 border border-primary/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Specialized Equipment & Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Sewer scope inspections require specialized camera equipment
                    and technical expertise. We partner with certified plumbing
                    inspection specialists who have the proper equipment to
                    perform comprehensive video inspections of your sewer lines.
                    InspectionMuse coordinates all scheduling and ensures you
                    receive detailed video documentation and reporting. We
                    remain your single point of contact throughout the process,
                    providing seamless service with specialized expertise.
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
          src="/images/pipes-2672184_1280.jpg"
          alt="Professional sewer scope inspection equipment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Inspect Your Sewer Line?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Don't let hidden sewer problems become expensive emergencies. Get
              a comprehensive video inspection with detailed reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Schedule Sewer Scope
              </Button>
              <Link
                href="https://www.rocketmortgage.com/learn/sewer-scope-inspection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white hover:bg-white/20"
                >
                  Learn About Sewer Scope Inspections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
