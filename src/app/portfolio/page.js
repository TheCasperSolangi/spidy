'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Globe, ShoppingCart, Users } from 'lucide-react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';


const caseStudies = [
  {
    title: "E-Commerce Platform for Fashion Retailer",
    description: "Developed a custom e-commerce solution that increased online sales by 45% within three months of launch.",
    image: "https://cdn.sanity.io/images/hvisvj7q/production/1b305e5f9621081221640d792bd8bf013a583272-2160x1215.png",
    tags: ["E-commerce", "React", "Node.js", "MongoDB"],
    results: [
      "45% increase in online sales",
      "30% reduction in cart abandonment",
      "60% increase in mobile purchases"
    ],
    icon: <ShoppingCart className="h-5 w-5" />
  },
  {
    title: "Healthcare Provider Portal",
    description: "Built a secure patient management system that streamlined operations and improved patient experience.",
    image: "https://cdn.dribbble.com/userupload/16274099/file/original-67ee80ac8a6f8f02b8e1b7faf65dbac7.jpg?resize=400x0",
    tags: ["Healthcare", "Vue.js", "Laravel", "PostgreSQL"],
    results: [
      "Reduced administrative time by 30%",
      "Improved appointment scheduling efficiency by 50%",
      "Enhanced data security and HIPAA compliance"
    ],
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Real Estate Listing Platform",
    description: "Created a property listing website with advanced search and virtual tour capabilities.",
    image: "https://templatic.com/wp-themes/uploads/2017/03/detail-pagee1.png",
    tags: ["Real Estate", "Next.js", "MongoDB", "Google Maps API"],
    results: [
      "Increased property inquiries by 37%",
      "Reduced property listing time by 25%",
      "2x increase in user engagement"
    ],
    icon: <Globe className="h-5 w-5" />
  },
  {
    title: "On-Demand Delivery App",
    description: "Launched a delivery app for local businesses with real-time tracking and payments.",
    image: "https://fiverrbox.com/wp-content/uploads/2022/09/b86d81815b0a4b766e46693e7c678f43-7b70f4ab.jpg",
    tags: ["React Native", "Firebase", "Stripe"],
    results: [
      "Saved $20K in operational costs",
      "Reached 10K+ downloads in 3 months",
      "Improved customer retention by 40%"
    ]
  },
  {
    title: "Healthcare Appointment App",
    description: "Developed a secure mobile portal for patient booking and records access.",
    image: "https://propakistani.pk/wp-content/uploads/2018/12/oladoc-app-screens_1.png",
    tags: ["Flutter", "Firebase", "SQLite"],
    results: [
      "Streamlined appointment process",
      "Reduced administrative time by 30%",
      "HIPAA-compliant and secure"
    ]
  },
  {
    title: "Real Estate Finder App",
    description: "An app with interactive maps, property listings, and virtual tours.",
    image: "https://cdn-blog.zameen.com/blog/wp-content/uploads/2023/01/zameen-app-updates-body-image-1024x640.jpg",
    tags: ["Kotlin", "Google Maps API", "Realm"],
    results: [
      "2x increase in user engagement",
      "Enabled virtual property exploration",
      "Increased agent inquiries by 35%"
    ]
  }
];

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-36">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio & Case Studies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore how we've helped our clients grow with our tailored digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study, index) => (
            <Card key={index} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  {study.icon || <Check className="h-4 w-4" />}
                  <CardTitle className="text-xl font-semibold leading-tight">{study.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{study.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <Badge key={i} className="bg-primary/10 text-primary">{tag}</Badge>
                  ))}
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}