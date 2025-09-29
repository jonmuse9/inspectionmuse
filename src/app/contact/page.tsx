"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import emailjs from "@emailjs/browser";

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters?: {
        event_category?: string;
        event_label?: string;
        event_action?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    inspectionType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formEngagementStartTime = useRef<number | null>(null);
  const hasEngaged = useRef(false);

  // Initialize EmailJS with your public key
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if environment variables are set
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log("EmailJS Config:", {
        serviceId: serviceId ? "Set" : "Missing",
        templateId: templateId ? "Set" : "Missing",
        publicKey: publicKey ? "Set" : "Missing",
      });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS is not properly configured. Please check environment variables."
        );
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        property_address: formData.propertyAddress || "Not provided",
        inspection_type: formData.inspectionType,
        message: formData.message || "No additional message provided",
        to_name: "InspectionMuse Team",
        reply_to: formData.email,
      };

      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log("EmailJS Result:", result);

      if (result.status === 200) {
        // Track successful form submission
        if (window.gtag) {
          // Calculate engagement time
          let engagementTime = 0;
          if (formEngagementStartTime.current) {
            engagementTime = Math.round((Date.now() - formEngagementStartTime.current) / 1000);
          }

          window.gtag('event', 'contact_form_submit', {
            event_category: 'engagement',
            event_label: 'contact_form',
            event_action: 'submit',
            value: engagementTime,
          });

          // Also track as a conversion event
          window.gtag('event', 'conversion', {
            send_to: 'AW-17580553822/NYmRCOCLuKIbEN7sh79B',
            value: 1.0,
            currency: 'USD',
            transaction_id: `contact_${Date.now()}`, // Generate unique ID for each submission
          });

          console.log(`Tracking: contact_form - submit (${engagementTime}s)`);
        }

        alert(
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyAddress: "",
          inspectionType: "",
          message: "",
        });

        // Reset engagement tracking
        hasEngaged.current = false;
        formEngagementStartTime.current = null;
      } else {
        throw new Error(`EmailJS returned status ${result.status}`);
      }
    } catch (error: any) {
      console.error("Error sending message:", error);

      // More detailed error message
      const errorMessage = error?.text || error?.message || "Unknown error";
      console.error("Detailed error:", errorMessage);

      if (
        errorMessage.includes("Invalid") ||
        errorMessage.includes("not found")
      ) {
        alert(
          "Configuration error: Please ensure EmailJS is properly set up. For now, please call us at (443) 508-8558."
        );
      } else {
        alert(
          "Sorry, there was an error sending your message. Please try calling us directly at (443) 508-8558."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // Track first engagement with form
    if (!hasEngaged.current && window.gtag) {
      hasEngaged.current = true;
      formEngagementStartTime.current = Date.now();

      window.gtag('event', 'widget_engagement', {
        event_category: 'engagement',
        event_label: 'contact_form',
        event_action: 'focus',
      });

      console.log('Tracking: contact_form - focus');
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="section-container">
        <div className="page-container">
          <div className="content-wrapper-lg">
            <h1 className="heading-page element-spacing text-center">
              Contact Us
            </h1>
            <p className="text-description text-center section-spacing">
              Get in touch with us for any questions or to discuss your
              inspection needs
            </p>

            <div className="two-column-grid">
              <div>
                <div className="card-base p-8 mb-8">
                  <h2 className="heading-card element-spacing">Get In Touch</h2>

                  <div className="space-y-4">
                    <div className="flex-start">
                      <Phone className="icon-inline mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <CallButton
                          variant="custom"
                          showNumber={true}
                          phoneNumber="443-508-8558"
                          className="link-primary p-0 h-auto"
                          iconPosition="none"
                        />
                      </div>
                    </div>

                    <div className="flex-start">
                      <Mail className="icon-inline mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a
                          href="mailto:info@inspectionmuse.com"
                          className="link-primary"
                        >
                          info@inspectionmuse.com
                        </a>
                      </div>
                    </div>

                    <div className="flex-start">
                      <MapPin className="icon-inline mt-1" />
                      <div>
                        <p className="font-semibold">Service Area</p>
                        <p className="link-primary">
                          Serving Central Maryland
                          <br />& South Central Pennsylvania
                        </p>
                      </div>
                    </div>

                    <div className="flex-start">
                      <Clock className="icon-inline mt-1" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="link-primary">
                          Monday - Friday: 8:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 4:00 PM
                          <br />
                          Sunday: By Appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-highlight">
                  <h3 className="text-xl font-bold tight-spacing">
                    Why Choose InspectionMuse?
                  </h3>
                  <ul className="feature-list">
                    <li className="feature-list-item">
                      <div className="bullet-point-dark" />
                      <span>Same week appointments available</span>
                    </li>
                    <li className="feature-list-item">
                      <div className="bullet-point-dark" />
                      <span>Detailed reports within 24 hours</span>
                    </li>
                    <li className="feature-list-item">
                      <div className="bullet-point-dark" />
                      <span>InterNACHI certified inspector</span>
                    </li>
                    <li className="feature-list-item">
                      <div className="bullet-point-dark" />
                      <span>Professional certified inspectors</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-base p-8">
                <h2 className="heading-card element-spacing">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="propertyAddress" className="form-label">
                      Property/Project Address
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="inspectionType" className="form-label">
                      How can we help you? *
                    </label>
                    <select
                      id="inspectionType"
                      name="inspectionType"
                      required
                      value={formData.inspectionType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select a service or inquiry type</option>
                      <option value="general">General Question</option>
                      <option value="quote">Request a Quote</option>
                      <option value="home">Home Inspection</option>
                      <option value="home">Walk & Talk Consultation</option>
                      <option value="pre-listing">
                        Pre-Listing Inspection
                      </option>
                      <option value="radon">Radon Testing</option>
                      <option value="termite">Termite/WDI Inspection</option>
                      <option value="mold">Mold & Air Quality Testing</option>
                      <option value="septic">Septic Inspection</option>
                      <option value="well">Well Water Testing</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Please share any details about your inquiry or what you'd like to know..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="btn-primary-large w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                <p className="text-sm link-primary mt-4 text-center">
                  * Required fields. We'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
