'use client';

import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Lightbulb, 
  Code, 
  LineChart, 
  Megaphone, 
  Layout,
  ArrowRight,
  Check,
  ChevronRight
} from 'lucide-react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

export default function OurServices() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      title: "Strategic Consulting",
      description: "Expert guidance to help your business grow and innovate",
      features: ["Market analysis", "Growth strategy", "Digital transformation"],
      category: "consulting"
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Web Development",
      description: "Custom websites and applications for your unique needs",
      features: ["Responsive design", "E-commerce solutions", "CMS integration"],
      category: "development"
    },
    {
      icon: <Layout className="h-8 w-8 text-indigo-500" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user experiences that convert",
      features: ["User research", "Wireframing", "Prototype development"],
      category: "design"
    },
    {
      icon: <Megaphone className="h-8 w-8 text-rose-500" />,
      title: "Digital Marketing",
      description: "Strategies that drive traffic and increase your reach",
      features: ["SEO optimization", "Content marketing", "Social media campaigns"],
      category: "marketing"
    },
    {
      icon: <LineChart className="h-8 w-8 text-emerald-500" />,
      title: "Data Analytics",
      description: "Turn your data into actionable business insights",
      features: ["Performance tracking", "Customer analytics", "Predictive modeling"],
      category: "analytics"
    },
    {
      icon: <Layout className="h-8 w-8 text-purple-500" />,
      title: "Mobile App Development",
      description: "Native and cross-platform apps for iOS and Android",
      features: ["Custom app design", "API integration", "App store optimization"],
      category: "development"
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <>
      <Header />
      <main className="container mx-auto py-16 px-4 md:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of solutions designed to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full gap-2 text-sm font-medium">
            <Check className="h-4 w-4 text-primary" />
            <span>Tailored Solutions</span>
            <span className="mx-2 text-slate-300">•</span>
            <Check className="h-4 w-4 text-primary" />
            <span>Expert Team</span>
            <span className="mx-2 text-slate-300">•</span>
            <Check className="h-4 w-4 text-primary" />
            <span>Proven Results</span>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="mb-16">
        <Tabs 
          defaultValue="all" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-1">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-slate-100 rounded-lg">{service.icon}</div>
                      <div className="bg-slate-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-4 w-4 text-slate-500" />
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                      Learn More <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a structured approach to ensure every project delivers exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "01", title: "Discover", description: "We start by understanding your business goals and requirements" },
            { number: "02", title: "Plan", description: "Creating a detailed roadmap tailored to your specific needs" },
            { number: "03", title: "Execute", description: "Implementing solutions with precision and attention to detail" },
            { number: "04", title: "Deliver", description: "Providing ongoing support to ensure sustainable success" }
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-100 rounded-lg p-6 h-full">
                <div className="text-3xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-lg text-slate-700 mb-6">
              Schedule a free consultation with our experts and discover how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-6">
                Book a Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-6">
                View Case Studies
              </Button>
            </div>
          </div>
          <div className="hidden md:block bg-white rounded-xl p-6 shadow-md">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Personalized Strategy</h4>
                  <p className="text-sm text-slate-500">Tailored to your specific needs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Dedicated Support</h4>
                  <p className="text-sm text-slate-500">Available throughout your journey</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Transparent Pricing</h4>
                  <p className="text-sm text-slate-500">No hidden fees or surprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}