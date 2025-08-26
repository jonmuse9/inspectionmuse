'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, CheckCircle } from 'lucide-react';

export default function SchedulePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyCity: '',
    propertyState: '',
    propertyZip: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    additionalServices: [] as string[],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter((s: string) => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In production, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        propertyAddress: '',
        propertyCity: '',
        propertyState: '',
        propertyZip: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        additionalServices: [],
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Calendar className="w-16 h-16 text-primary mx-auto lg:mx-0 mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Schedule Your Inspection
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Book your comprehensive home inspection online in just a few minutes. Professional service with detailed reporting.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/businesswoman-using-tablet-analysis.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Inspection Request Form</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll contact you within 24 hours to confirm.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Property Details Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Property Details</h3>
                  <div>
                    <Label htmlFor="propertyAddress">Property Address *</Label>
                    <Input
                      id="propertyAddress"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="propertyCity">City *</Label>
                      <Input
                        id="propertyCity"
                        name="propertyCity"
                        value={formData.propertyCity}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="propertyState">State *</Label>
                      <Input
                        id="propertyState"
                        name="propertyState"
                        value={formData.propertyState}
                        onChange={handleInputChange}
                        placeholder="FL"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="propertyZip">ZIP Code *</Label>
                      <Input
                        id="propertyZip"
                        name="propertyZip"
                        value={formData.propertyZip}
                        onChange={handleInputChange}
                        placeholder="12345"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Service Selection</h3>
                  <div>
                    <Label htmlFor="serviceType">Primary Service *</Label>
                    <Select 
                      name="serviceType"
                      value={formData.serviceType}
                      onValueChange={(value) => handleSelectChange('serviceType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-inspection">Home Inspection</SelectItem>
                        <SelectItem value="pre-listing">Pre-Listing Inspection</SelectItem>
                        <SelectItem value="new-construction">New Construction Inspection</SelectItem>
                        <SelectItem value="condo">Condo Inspection</SelectItem>
                        <SelectItem value="commercial">Commercial Inspection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Additional Services</Label>
                    <div className="space-y-2">
                      {[
                        { id: 'radon', label: 'Radon Testing' },
                        { id: 'mold', label: 'Mold & Air Quality Testing' },
                        { id: 'termite', label: 'Termite Inspection' },
                        { id: 'sewer', label: 'Sewer Scope Inspections' },
                        { id: 'septic', label: 'Septic Inspection' },
                        { id: 'water', label: 'Well Water Testing' }
                      ].map((service) => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.id}
                            checked={formData.additionalServices.includes(service.id)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange(service.id, checked as boolean)
                            }
                          />
                          <Label htmlFor={service.id} className="font-normal cursor-pointer">
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scheduling Preferences Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Scheduling Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select 
                        name="preferredTime"
                        value={formData.preferredTime}
                        onValueChange={(value) => handleSelectChange('preferredTime', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM - 7PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  <div>
                    <Label htmlFor="message">Special Requests or Comments</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific concerns or areas you'd like us to focus on..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inspection Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>
    </div>
  );
}