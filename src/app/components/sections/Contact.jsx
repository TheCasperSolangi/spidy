// app/components/sections/Contact.jsx
'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-blue-500" />,
      title: "Phone",
      info: "+92 343 8021567"
    },
    {
      icon: <Mail className="h-5 w-5 text-purple-500" />,
      title: "Email",
      info: "contact@spidysofts.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-pink-500" />,
      title: "Address",
      info: "Flat-22 A, Gulshan E Maymar, Karachi"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form submission started'); // Debug log
    
    if (!validateForm()) {
      console.log('Form validation failed', errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      console.log('Sending request to /api/send'); // Debug log
      console.log('Form data:', formData); // Debug log
      
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          from: formData.email,
          to: "naveeddsolangi@gmail.com",
          subject: `New Contact Form Submission: ${formData.subject}`,
          text: `You've received a new message from ${formData.firstName} ${formData.lastName} (${formData.email}):
          
${formData.message}
          
Phone: ${formData.phone || 'Not provided'}`,
          html: `
            <div>
              <h2>New Contact Form Submission</h2>
              <p><strong>From:</strong> ${formData.firstName} ${formData.lastName} (${formData.email})</p>
              <p><strong>Subject:</strong> ${formData.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${formData.message.replace(/\n/g, '<br>')}</p>
              <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            </div>
          `
        }),
      });
      
      console.log('Response status:', response.status); // Debug log
      
      if (response.ok) {
        const result = await response.json();
        console.log('Success response:', result);
        setSubmitStatus('success');
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', subject: '', message: ''
        });
      } else {
        const errorText = await response.text();
        console.error('Server error:', response.status, errorText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add this function to test the button click
  const handleButtonClick = (e) => {
    console.log('Button clicked!', e.type);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a project in mind? Contact us today and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-gray-100 p-3 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-green-800 font-medium">Message sent successfully!</p>
                      <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-red-800 font-medium">Failed to send message</p>
                      <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                      <Input 
                        id="firstName"
                        name="firstName" 
                        value={formData.firstName || ''} 
                        onChange={handleInputChange}
                        placeholder="John" 
                        className={errors.firstName ? 'border-red-500' : ''}
                        required
                      />
                      {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                      <Input 
                        id="lastName"
                        name="lastName" 
                        value={formData.lastName || ''} 
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        className={errors.lastName ? 'border-red-500' : ''}
                        required
                      />
                      {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
                      <Input 
                        id="email"
                        type="email" 
                        name="email" 
                        value={formData.email || ''} 
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com" 
                        className={errors.email ? 'border-red-500' : ''}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <Input 
                        id="phone"
                        name="phone" 
                        value={formData.phone || ''} 
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
                    <Input 
                      id="subject"
                      name="subject" 
                      value={formData.subject || ''} 
                      onChange={handleInputChange}
                      placeholder="How can we help you?" 
                      className={errors.subject ? 'border-red-500' : ''}
                      required
                    />
                    {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <Textarea 
                      id="message"
                      name="message" 
                      value={formData.message || ''} 
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..." 
                      rows={5}
                      className={errors.message ? 'border-red-500' : ''}
                      required
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-bg" 
                    disabled={isSubmitting}
                    onClick={handleButtonClick}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
