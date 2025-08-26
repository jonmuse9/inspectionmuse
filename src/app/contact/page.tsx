"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "Sorry, there was an error sending your message. Please try calling us directly at (443) 555-0100."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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
                        <a
                          href="tel:443-555-0100"
                          className="link-primary"
                        >
                          (443) 555-0100
                        </a>
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
                        <p className="text-muted">
                          Carroll County, MD
                          <br />
                          and surrounding areas
                        </p>
                      </div>
                    </div>

                    <div className="flex-start">
                      <Clock className="icon-inline mt-1" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-muted">
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
                <h2 className="heading-card element-spacing">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="form-label"
                    >
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
                    <label
                      htmlFor="email"
                      className="form-label"
                    >
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
                    <label
                      htmlFor="phone"
                      className="form-label"
                    >
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
                    <label
                      htmlFor="propertyAddress"
                      className="form-label"
                    >
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
                    <label
                      htmlFor="inspectionType"
                      className="form-label"
                    >
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
                      <option value="pre-listing">
                        Pre-Listing Inspection
                      </option>
                      <option value="new-construction">New Construction</option>
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
                    <label
                      htmlFor="message"
                      className="form-label"
                    >
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
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                <p className="text-sm text-muted mt-4 text-center">
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
