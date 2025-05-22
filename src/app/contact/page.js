// app/components/sections/Contact.jsx
"use client"
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/sections/Header';
import Services from '../components/sections/Services';
import Footer from '../components/sections/Footer';
import Contact from '../components/sections/Contact';
export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-blue-500" />,
      title: "Phone",
      info: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="h-5 w-5 text-purple-500" />,
      title: "Email",
      info: "contact@nexustech.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-pink-500" />,
      title: "Address",
      info: "123 Innovation Street, Tech City, CA 94000"
    }
  ];

  return (
    <>
    <Header />
   
    <Contact />
     <Services />
     <Footer />
    </>
  );
}

// app/components/sections/CTA.jsx