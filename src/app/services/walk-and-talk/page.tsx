import { Clock, Users, ClipboardList, DollarSign, Home, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WalkAndTalkPage() {
  return (
    <main>
      <section className="section-container">
        <div className="page-container">
          <div className="content-wrapper">
            <h1 className="heading-page element-spacing text-center">
              Walk & Talk Consultation
            </h1>
            <p className="text-description text-center section-spacing">
              Get immediate, professional insights about a property before making an offer - 
              perfect for today's competitive real estate market.
            </p>

            <div className="card-highlight mb-8">
              <div className="flex items-start gap-4">
                <Clock className="icon-feature mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick & Efficient</h3>
                  <p>30-45 minute on-site consultation with immediate verbal feedback</p>
                </div>
              </div>
            </div>

            <div className="two-column-grid">
              <div>
                <h2 className="heading-card element-spacing">What is a Walk & Talk?</h2>
                <p className="text-muted tight-spacing">
                  A Walk & Talk consultation is a streamlined property evaluation where our certified 
                  inspector walks through the home with you, providing real-time professional insights 
                  about the property's condition.
                </p>
                <p className="text-muted element-spacing">
                  Unlike a full inspection, this service provides verbal feedback only - no written 
                  report. It's perfect for buyers who need quick insights before making an offer or 
                  for those considering waiving inspection contingencies.
                </p>

                <h3 className="text-xl font-semibold tight-spacing">Ideal For:</h3>
                <ul className="feature-list element-spacing">
                  <li className="feature-list-item">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Pre-offer property assessment</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Competitive market situations</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Seller's pre-listing evaluation</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Investment property quick assessment</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Budget-conscious buyers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="heading-card element-spacing">What We Cover</h2>
                <p className="text-muted tight-spacing">
                  During our Walk & Talk consultation, we'll visually evaluate all major home systems:
                </p>
                
                <div className="grid grid-cols-2 gap-3 element-spacing">
                  <div className="feature-list">
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Roof & Exterior</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Structure & Foundation</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Electrical Systems</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Plumbing Systems</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>HVAC Systems</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Interior Conditions</span>
                    </div>
                  </div>
                  <div className="feature-list">
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Insulation & Ventilation</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Windows & Doors</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Water Control Systems</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Major Appliances</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Safety Concerns</span>
                    </div>
                    <div className="feature-list-item text-sm">
                      <div className="bullet-point" />
                      <span>Visible Issues</span>
                    </div>
                  </div>
                </div>

                <div className="card-base">
                  <h3 className="text-lg font-semibold tight-spacing">Important Note</h3>
                  <p className="text-sm text-muted">
                    This consultation provides verbal feedback only - no written report is provided. 
                    For loan requirements or negotiation documentation, consider our full home inspection service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container-alt">
        <div className="page-container">
          <div className="content-wrapper">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Clock className="icon-card mx-auto" />
                <h3 className="text-xl font-semibold mb-2">30-45 Minutes</h3>
                <p className="text-muted">Quick walkthrough with immediate feedback</p>
              </div>
              <div className="text-center">
                <DollarSign className="icon-card mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Budget-Friendly</h3>
                <p className="text-muted">Fraction of the cost of a full inspection</p>
              </div>
              <div className="text-center">
                <Users className="icon-card mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Interactive</h3>
                <p className="text-muted">Ask questions and get answers in real-time</p>
              </div>
            </div>

            <div className="card-base text-center">
              <h2 className="heading-section">How It Works</h2>
              
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div>
                  <div className="flex-center element-spacing">
                    <div className="w-10 h-10 rounded-full bg-primary text-black flex-center font-bold">1</div>
                  </div>
                  <p className="font-semibold">Schedule</p>
                  <p className="text-sm text-muted">Book your consultation online or by phone</p>
                </div>
                <div>
                  <div className="flex-center element-spacing">
                    <div className="w-10 h-10 rounded-full bg-primary text-black flex-center font-bold">2</div>
                  </div>
                  <p className="font-semibold">Walk Through</p>
                  <p className="text-sm text-muted">Join us for the property walkthrough</p>
                </div>
                <div>
                  <div className="flex-center element-spacing">
                    <div className="w-10 h-10 rounded-full bg-primary text-black flex-center font-bold">3</div>
                  </div>
                  <p className="font-semibold">Learn</p>
                  <p className="text-sm text-muted">Get immediate verbal feedback</p>
                </div>
                <div>
                  <div className="flex-center element-spacing">
                    <div className="w-10 h-10 rounded-full bg-primary text-black flex-center font-bold">4</div>
                  </div>
                  <p className="font-semibold">Decide</p>
                  <p className="text-sm text-muted">Make an informed decision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="page-container">
          <div className="content-wrapper text-center">
            <h2 className="heading-section">Walk & Talk vs. Full Inspection</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="p-4">Feature</th>
                    <th className="p-4 text-center">Walk & Talk</th>
                    <th className="p-4 text-center">Full Inspection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4">Duration</td>
                    <td className="p-4 text-center">30-45 minutes</td>
                    <td className="p-4 text-center">2-4 hours</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Written Report</td>
                    <td className="p-4 text-center text-muted">No</td>
                    <td className="p-4 text-center text-primary">Yes (Detailed)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Photos Included</td>
                    <td className="p-4 text-center text-muted">No</td>
                    <td className="p-4 text-center text-primary">Yes</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Systems Evaluated</td>
                    <td className="p-4 text-center">Visual Overview</td>
                    <td className="p-4 text-center">Comprehensive Testing</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Best For</td>
                    <td className="p-4 text-center">Pre-offer Assessment</td>
                    <td className="p-4 text-center">Post-offer Due Diligence</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Price</td>
                    <td className="p-4 text-center text-primary font-semibold">$150-250</td>
                    <td className="p-4 text-center">$400-600+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <Button size="lg" className="btn-primary-large">
                  Schedule Walk & Talk
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Have Questions? Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}