'use client';
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  Code, 
  Globe, 
  ShoppingCart, 
  Search, 
  Smartphone, 
  Shield, 
  Zap, 
  Server, 
  Layout, 
  ArrowRight, 
  Check, 
  CheckCircle,
  X,
  ChevronRight,
  ChevronDown,
  Star,
  Users,
  Clock,
  Settings,
  Monitor,
  Database,
  
  Award,
  Terminal,
  Layers,
  FileText,
  BarChart,
  Phone,
  MessageSquare,
  Calendar,
  CreditCard,
  Laptop,
  Tablet,
  Lock,
  TowerControl
} from 'lucide-react';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import Link from 'next/link';


export default function WebDevelopmentService() {
 const [activeTab, setActiveTab] = useState('overview');
  const [openIndexes, setOpenIndexes] = useState({});
  const [isVisible, setIsVisible] = useState({});

  // Toggle function for FAQ accordions
  const toggle = (index) => {
    setOpenIndexes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  useEffect(() => {
  const timeout = setTimeout(() => {
    setIsVisible({
      'features': true,
      'value-props': true,
      'technologies': true,
      'case-studies': true,
      'services-section': true,
      'process-section': true,
      'pricing-plans': true,
      'addons': true,
      'faq-section': true,
      'testimonials': true,
    });
  }, 300);
  return () => clearTimeout(timeout);
}, []);


  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('[data-animate]').forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  

  const technologies = [
  {
    name: "Flutter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    description: "Crafting beautiful native apps for iOS and Android from a single codebase"
  },
  {
    name: "React Native",
    icon: "https://reactnative.dev/img/header_logo.svg",
    description: "Building high-performance mobile apps using React framework"
  },
  {
    name: "Swift",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
    description: "Native iOS development with Apple's modern programming language"
  },
  {
    name: "Kotlin",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    description: "Modern programming for native Android development"
  },
  {
    name: "Firebase",
    icon: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png",
    description: "Real-time backend and analytics for scalable mobile apps"
  },
  {
    name: "SQLite",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
    description: "Lightweight local database for offline mobile app functionality"
  },
  {
    name: "Realm",
    icon: "https://avatars.githubusercontent.com/u/7575099?s=280&v=4",
    description: "Mobile-first database designed for simplicity and speed"
  },
  {
    name: "Expo",
    icon: "https://avatars.githubusercontent.com/u/12504344?s=200&v=4",
    description: "Toolchain built around React Native to streamline development"
  }
];

 // Mobile App Service Packages
const packages = [
  {
    name: "Basic",
    price: "$500",
    description: "Ideal for startups or MVPs launching on a budget",
    features: [
      "Cross-platform mobile app (iOS & Android)",
      "Up to 3 core screens",
      "Basic UI/UX design",
      "Offline support",
      "Push notification setup",
    ],
    notIncluded: [
      "Backend integration",
      "User authentication",
      "App store deployment",
    ],
    popular: false,
    deliveryTime: "3-4 weeks",
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    name: "Professional",
    price: "$1,500",
    description: "Feature-rich app for growing businesses",
    features: [
      "Cross-platform mobile app (iOS & Android)",
      "Up to 8 screens with dynamic components",
      "Custom UI/UX design",
      "User authentication",
      "Push notifications",
      "Backend integration (Firebase / Supabase)",
      "App store submission",
      "Analytics integration",
      "Basic performance optimization"
    ],
    notIncluded: [
      "Real-time chat",
      "Custom animations & gestures"
    ],
    popular: true,
    deliveryTime: "5-7 weeks",
    icon: <Code className="h-6 w-6" />
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Robust solutions for large-scale and high-performance apps",
    features: [
      "Fully custom cross-platform mobile app",
      "Unlimited screens & components",
      "Custom animations & gestures",
      "Real-time chat and notifications",
      "Scalable backend architecture",
      "Advanced security & encryption",
      "Multi-language support",
      "Third-party API integrations",
      "Custom analytics & reporting",
      "CI/CD setup",
      "Complete documentation & support"
    ],
    notIncluded: [],
    popular: false,
    deliveryTime: "8-12 weeks",
    icon: <Server className="h-6 w-6" />
  }
];

// Case Studies
const caseStudies = [
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

  // FAQs
const faqItems = [
  {
    question: "How long does it take to build a mobile app?",
    answer: "Timelines vary based on app complexity, from 3 weeks for simple apps to 12+ weeks for enterprise-level solutions."
  },
  {
    question: "Do you publish the app to the App Store and Google Play?",
    answer: "Yes, we handle the full deployment process, including compliance checks and store submission."
  },
  {
    question: "Can you help with app maintenance?",
    answer: "We offer ongoing support plans that cover updates, bug fixes, analytics monitoring, and new features."
  },
  {
    question: "Do you offer design services?",
    answer: "Absolutely. Our team includes UI/UX designers who create intuitive, engaging mobile app interfaces."
  },
  {
    question: "Can I integrate third-party services like Stripe or Google Maps?",
    answer: "Yes, we specialize in integrating a wide range of APIs and services to extend your app’s capabilities."
  },
  {
    question: "Will my app work on both iOS and Android?",
    answer: "Yes, unless specifically requested otherwise, all apps are built with cross-platform support."
  }
];
// Value Propositions
  // Value propositions
  const valueProps = [
    {
      title: "Expertise",
      description: "Our team of senior developers brings 15+ years of experience across diverse industries",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "Quality",
      description: "We follow industry best practices and rigorous testing to ensure top-notch results",
      icon: <Star className="h-6 w-6 text-primary" />
    },
    {
      title: "Support",
      description: "Dedicated support team available to address issues and implement updates promptly",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of web technology to provide cutting-edge solutions",
      icon: <Zap className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary border-none">Web Development</Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Custom Mobile <span className="text-primary">App Development Solutions</span> for Your Business
                </h1>
                <p className="text-xl text-muted-foreground">
                  We design and develop high-performance Android and iOS Applications that drive business growth and deliver exceptional user experiences.
                </p>
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8">
                    <span>Schedule Consultation</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </Link>
                  <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="border-slate-300">
                    View Portfolio
                  </Button>
                  </Link>
                </div>
                
                
                <div className="flex flex-wrap gap-6 pt-6">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">SEO Optimized</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">Fast Performance</span>
                  </div>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-2xl transform rotate-3 scale-95 opacity-20 blur-xl"></div>
                <div className="relative">
                  <img 
                    src="/api/placeholder/650/500" 
                    alt="Web Development" 
                    className="rounded-2xl shadow-xl object-cover w-full h-full transform -rotate-2"
                  />
                  <div className="absolute -bottom-8 -left-8 p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex items-center gap-4 p-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Clean Code</div>
                        <div className="text-xs text-muted-foreground">Maintainable & Scalable</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-8 p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex items-center gap-4 p-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Lightning Fast</div>
                        <div className="text-xs text-muted-foreground">Optimized Performance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats/Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-white rounded-xl p-8 shadow-lg border border-slate-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-white" id="value-props" data-animate="true">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with creative design to deliver web solutions that exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((prop, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-xl border border-slate-100 shadow-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
                    isVisible['value-props'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
       <Tabs defaultValue="overview" className="w-full">
  <div className="flex justify-center mb-16">
    <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-1 p-1 bg-white shadow-md rounded-lg border border-slate-100">
      <TabsTrigger value="overview" className="rounded-md py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
        <Layout className="h-4 w-4 mr-2" />
        Overview
      </TabsTrigger>
      <TabsTrigger value="services" className="rounded-md py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
        <Settings className="h-4 w-4 mr-2" />
        Our Services
      </TabsTrigger>
      <TabsTrigger value="process" className="rounded-md py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
        <Layers className="h-4 w-4 mr-2" />
        Our Process
      </TabsTrigger>
      <TabsTrigger value="pricing" className="rounded-md py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
        <BarChart className="h-4 w-4 mr-2" />
        Pricing
      </TabsTrigger>
    </TabsList>
  </div>
           {/* Overview Tab - Mobile App Development */}
<TabsContent value="overview" className="mt-0">
  <div className="space-y-24">
    {/* Why Choose Us */}
    <div id="features" data-animate="true">
      <div className="text-center mb-16">
        <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Features</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Our Mobile Apps Stand Out</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We create mobile apps that are not only visually stunning but also high-performing and scalable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <Card className={`border-none shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 ${
          isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '0ms' }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-blue-500/80"></div>
          <CardHeader>
            <div className="bg-primary/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Lightning Fast</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our mobile apps are engineered for performance, ensuring smooth user experiences and faster load times across all devices.
            </p>
            <div className="mt-6 bg-slate-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">App Speed</span>
                <span className="text-xs text-muted-foreground">95-100%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card className={`border-none shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 ${
          isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '100ms' }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-blue-500/80"></div>
          <CardHeader>
            <div className="bg-primary/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Device Compatibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built to perform seamlessly on Android, iOS, and tablets — providing a flawless experience no matter the screen size.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <Smartphone className="h-6 w-6 text-primary" />
              <Tablet className="h-6 w-6 text-primary" />
              <Monitor className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>

        {/* Feature 3 */}
        <Card className={`border-none shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 ${
          isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-blue-500/80"></div>
          <CardHeader>
            <div className="bg-primary/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">App Store Visibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We optimize your mobile app for higher rankings on Google Play & Apple App Store, driving more downloads and visibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-slate-50">App Store SEO</Badge>
              <Badge variant="outline" className="bg-slate-50">Metadata</Badge>
              <Badge variant="outline" className="bg-slate-50">User Reviews</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Feature 4 */}
        <Card className={`border-none shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 ${
          isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-blue-500/80"></div>
          <CardHeader>
            <div className="bg-primary/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Enterprise-Grade Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our apps are fortified with advanced security layers including encryption, biometric access, and secure APIs.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                <Lock className="h-4 w-4 text-primary" />
                <span className="text-sm">Biometric Login</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm">Encrypted Storage</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature 5 */}
        <Card className={`border-none shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 ${
          isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-blue-500/80"></div>
          <CardHeader>
            <div className="bg-primary/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Layout className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Tailored UI/UX</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our designers craft sleek, intuitive user interfaces that align with your brand and engage users on every touchpoint.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <img src="/api/placeholder/260/130" alt="UI/UX Design" className="rounded-lg shadow-sm" />
            </div>
          </CardContent>
        </Card>

        {/* Feature 6 */}
        <Card className={`border-none shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 ${
          isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '500ms' }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-blue-500/80"></div>
          <CardHeader>
            <div className="bg-primary/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Scalable Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Whether you starting with an MVP or a full-fledged system, our mobile apps scale with your business needs.
            </p>
            <div className="mt-6 flex justify-between">
              <div className="text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">Users</span>
              </div>
              <div className="text-center">
                <Database className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">Data</span>
              </div>
              <div className="text-center">
                <Settings className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">Features</span>
              </div>
            </div>
          </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div id="technologies" data-animate="true">
                    <div className="text-center mb-16">
                      <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Tech Stack</Badge>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Work With</h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We use the latest and most reliable technologies to build robust web solutions.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {technologies.map((tech, index) => (
                        <div 
                          key={index} 
                          className={`flex flex-col items-center p-8 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                            isVisible['technologies'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                          }`}
                          style={{ transitionDelay: `${index * 75}ms` }}
                        >
                          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 p-4">
                            <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                          </div>
                          <h3 className="font-bold text-lg text-center mb-3">{tech.name}</h3>
                          <p className="text-sm text-muted-foreground text-center">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Studies */}
                  <div id="case-studies" data-animate="true">
                    <div className="text-center mb-16">
                      <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Results</Badge>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Case Studies</h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Take a look at some of our recent web development projects and the results they have achieved.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {caseStudies.map((study, index) => (
                        <Card 
                          key={index} 
                          className={`overflow-hidden hover:shadow-xl transition-all duration-500 group border border-slate-200 ${
                            isVisible['case-studies'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          }`}
                          style={{ transitionDelay: `${index * 150}ms` }}
                        >
                          <div className="relative h-56 overflow-hidden">
                            <img 
                              src={study.image} 
                              alt={study.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 right-4 flex-col gap-2 items-start hidden group-hover:flex transition-all duration-300">
                              <Badge className="bg-white/90 text-primary hover:bg-white/100">{study.tags[0]}</Badge>
                              <div className="text-white font-medium drop-shadow-md">View Case Study</div>
                            </div>
                          </div>
                          <CardHeader className="border-b border-slate-100 bg-white">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                {study.icon}
                              </div>
                              <CardTitle className="text-xl">{study.title}</CardTitle>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {study.tags.map((tag, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardHeader>
                          <CardContent className="pt-6">
                            <p className="text-muted-foreground mb-6">{study.description}</p>
                            <div className="space-y-3">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
                                  <div className="mt-0.5">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                  </div>
                                  <span className="text-sm font-medium">{result}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="border-t border-slate-100">
                            <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                              View Case Study <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
           {/* Services Tab - Mobile App Development */}
<TabsContent value="services" className="mt-0">
  <div className="space-y-24">
    {/* Mobile App Services */}
    <div id="services-section" data-animate="true">
      <div className="text-center mb-16">
        <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Services</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mobile App Development Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From MVPs to enterprise-grade apps, we provide end-to-end mobile app development tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Custom App Development */}
        <Card className={`overflow-hidden hover:shadow-xl transition-all duration-500 h-full border border-slate-200 group ${
          isVisible['services-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center gap-5 relative">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm group-hover:border-primary/30 transition-colors">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Custom Mobile App Development</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <p className="text-muted-foreground mb-6">
              We build tailor-made mobile apps with native performance and cross-platform flexibility, focusing on scalability, UX, and efficiency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Custom Features</h4>
                </div>
                <p className="text-sm text-muted-foreground">Built around your unique business goals</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Optimized Performance</h4>
                </div>
                <p className="text-sm text-muted-foreground">High performance on both Android & iOS</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Custom UI/UX with pixel-perfect design</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Scalable backend and cloud integration</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Native and hybrid technology options</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Offline access & local data caching</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Biometric & social login integrations</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* E-Commerce Apps */}
        <Card className={`overflow-hidden hover:shadow-xl transition-all duration-500 h-full border border-slate-200 group ${
          isVisible['services-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center gap-5 relative">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm group-hover:border-primary/30 transition-colors">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">E-Commerce Mobile Apps</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <p className="text-muted-foreground mb-6">
              We develop powerful e-commerce apps that deliver seamless shopping experiences, inventory management, and secure checkouts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Smart Catalog</h4>
                </div>
                <p className="text-sm text-muted-foreground">Dynamic product listings with filters</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Payment Systems</h4>
                </div>
                <p className="text-sm text-muted-foreground">Multiple gateways like Stripe, PayPal</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Cart, checkout, and wish list features</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Push notifications and personalized offers</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Real-time order tracking</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Customer profile and loyalty programs</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Admin dashboards and analytics</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Enterprise & SaaS Apps */}
        <Card className={`overflow-hidden hover:shadow-xl transition-all duration-500 h-full border border-slate-200 group ${
          isVisible['services-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '150ms' }}>
          <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center gap-5 relative">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm group-hover:border-primary/30 transition-colors">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Enterprise & SaaS Mobile Apps</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <p className="text-muted-foreground mb-6">
              We create secure, scalable, and intelligent mobile platforms for internal operations or SaaS-based businesses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Custom Workflows</h4>
                </div>
                <p className="text-sm text-muted-foreground">Business-specific logic and automation</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Cloud Sync</h4>
                </div>
                <p className="text-sm text-muted-foreground">Real-time database and file storage</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>User authentication and role management</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Offline capabilities and sync conflict handling</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Integration with ERP, CRM, and APIs</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Usage analytics and audit trails</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Security-first architecture</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Maintenance & Support */}
        <Card className={`overflow-hidden hover:shadow-xl transition-all duration-500 h-full border border-slate-200 group ${
          isVisible['services-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center gap-5 relative">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm group-hover:border-primary/30 transition-colors">
                <TowerControl className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">App Maintenance & Support</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <p className="text-muted-foreground mb-6">
              We offer continuous support and maintenance services to ensure your app remains updated, secure, and performant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl">
                <Shield className="h-4 w-4 text-primary" />
                <h4 className="font-medium">Security & Patches</h4>
                <p className="text-sm text-muted-foreground">Timely fixes and vulnerability scans</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <Zap className="h-4 w-4 text-primary" />
                <h4 className="font-medium">Performance Tuning</h4>
                <p className="text-sm text-muted-foreground">Ongoing speed & crash optimizations</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Bug fixing and platform updates</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Regular compatibility checks</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>App store compliance and re-submission</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Customer support and crash reporting</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>Analytics and performance insights</span></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</TabsContent>

              
              {/* Process Tab */}
              <TabsContent value="process" className="mt-0">
                <div id="process-section" data-animate="true">
                  <div className="text-center mb-16">
                    <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Our Approach</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We follow a structured approach to ensure every web project is delivered successfully and meets your goals.
                    </p>
                  </div>
                  
                  <div className="relative">
                    {/* Process timeline connector */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-blue-500/50 to-primary/20 hidden md:block rounded-full"></div>
                    
                    <div className="space-y-20 md:space-y-0">
                      {/* Step 1 */}
                      <div 
                        className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 ${
                          isVisible['process-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                      >
                        <div className="md:text-right order-2 md:order-1">
                          <div className="mb-6">
                            <Badge className="px-3 py-1 bg-primary text-white border-none shadow-md">Step 1</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Discovery & Planning</h3>
                          <p className="text-muted-foreground mb-6">
                            We start by understanding your business goals, target audience, and project requirements through in-depth consultation and research.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 md:justify-end bg-white p-3 rounded-lg shadow-sm">
                              <span className="font-medium">Requirement gathering</span>
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary order-first md:order-last" />
                              </div>
                            </div>
                            <div className="flex items-center gap-3 md:justify-end bg-white p-3 rounded-lg shadow-sm">
                              <span className="font-medium">Market research</span>
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary order-first md:order-last" />
                              </div>
                            </div>
                            <div className="flex items-center gap-3 md:justify-end bg-white p-3 rounded-lg shadow-sm">
                              <span className="font-medium">Competitor analysis</span>
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary order-first md:order-last" />
                              </div>
                            </div>
                            <div className="flex items-center gap-3 md:justify-end bg-white p-3 rounded-lg shadow-sm">
                              <span className="font-medium">Project scope definition</span>
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary order-first md:order-last" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="order-1 md:order-2 flex md:justify-start justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6 scale-105 opacity-30"></div>
                            <div className="bg-gradient-to-tr from-slate-50 to-white p-6 rounded-2xl shadow-lg relative z-10 border border-slate-100">
                              <div className="absolute -left-4 -top-4 flex items-center justify-center z-20">
                                <div className="bg-white p-2 rounded-full shadow-lg border border-slate-100">
                                  <div className="flex items-center justify-center bg-gradient-to-r from-primary to-blue-500 text-white w-12 h-12 rounded-full font-bold text-lg">1</div>
                                </div>
                              </div>
                              <img src="/api/placeholder/400/300" alt="Discovery" className="rounded-lg shadow-sm" />
                              <div className="mt-6 flex items-center gap-3">
                                <FileText className="h-6 w-6 text-primary" />
                                <div>
                                  <div className="font-medium">Project Brief</div>
                                  <div className="text-sm text-muted-foreground">Documenting your requirements</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div 
                        className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 ${
                          isVisible['process-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '150ms' }}
                      >
                        <div className="flex md:justify-end justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-6 scale-105 opacity-30"></div>
                            <div className="bg-gradient-to-tr from-slate-50 to-white p-6 rounded-2xl shadow-lg relative z-10 border border-slate-100">
                              <div className="absolute -right-4 -top-4 flex items-center justify-center z-20">
                                <div className="bg-white p-2 rounded-full shadow-lg border border-slate-100">
                                  <div className="flex items-center justify-center bg-gradient-to-r from-primary to-blue-500 text-white w-12 h-12 rounded-full font-bold text-lg">2</div>
                                </div>
                              </div>
                              <img src="/api/placeholder/400/300" alt="Design" className="rounded-lg shadow-sm" />
                              <div className="mt-6 flex items-center gap-3">
                                <Layout className="h-6 w-6 text-primary" />
                                <div>
                                  <div className="font-medium">UI/UX Design</div>
                                  <div className="text-sm text-muted-foreground">Visualizing the user experience</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:text-left">
                          <div className="mb-6">
                            <Badge className="px-3 py-1 bg-primary text-white border-none shadow-md">Step 2</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Design & Prototyping</h3>
                          <p className="text-muted-foreground mb-6">
                            Our designers create wireframes and mockups to visualize the user interface and experience before development begins, ensuring we capture your vision.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">Wireframing and information architecture</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">UI/UX design with custom elements</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">Brand integration and visual identity</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">Interactive prototypes for feedback</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Continue with other steps following the same enhanced pattern */}
                      {/* Step 3 */}
                      <div 
                        className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 ${
                          isVisible['process-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '300ms' }}
                      >
                        <div className="md:text-right order-2 md:order-1">
                          <div className="mb-6">
                            <Badge className="px-3 py-1 bg-primary text-white border-none shadow-md">Step 3</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Development</h3>
                          <p className="text-muted-foreground mb-6">
                            Our developers bring the designs to life using modern technologies and best coding practices, with regular progress updates.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 md:justify-end bg-white p-3 rounded-lg shadow-sm">
                              <span className="font-medium">Frontend development with modern frameworks</span>
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary order-first md:order-last" />
                              </div>
                            </div>
                            <div className="flex items-center gap-3 md:justify-end bg-white p-3 rounded-lg shadow-sm">
                              <span className="font-medium">Backend development and API creation</span>
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary order-first md:order-last" />
                              </div>
                            </div>
                            <div className="flex items-center gap-3 md:justify-end bg-white p-3 rounded-lg shadow-sm">
                              <span className="font-medium">Database integration and optimization</span>
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary order-first md:order-last" />
                              </div>
                            </div>
                            <div className="flex items-center gap-3 md:justify-end bg-white p-3 rounded-lg shadow-sm">
                              <span className="font-medium">Third-party API integration and testing</span>
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary order-first md:order-last" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="order-1 md:order-2 flex md:justify-start justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6 scale-105 opacity-30"></div>
                            <div className="bg-gradient-to-tr from-slate-50 to-white p-6 rounded-2xl shadow-lg relative z-10 border border-slate-100">
                              <div className="absolute -left-4 -top-4 flex items-center justify-center z-20">
                                <div className="bg-white p-2 rounded-full shadow-lg border border-slate-100">
                                  <div className="flex items-center justify-center bg-gradient-to-r from-primary to-blue-500 text-white w-12 h-12 rounded-full font-bold text-lg">3</div>
                                </div>
                              </div>
                              <img src="/api/placeholder/400/300" alt="Development" className="rounded-lg shadow-sm" />
                              <div className="mt-6 flex items-center gap-3">
                                <Code className="h-6 w-6 text-primary" />
                                <div>
                                  <div className="font-medium">Clean Code</div>
                                  <div className="text-sm text-muted-foreground">Building with best practices</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Remaining steps would follow the same enhanced pattern... */}
                      {/* Step 4 */}
                      <div 
                        className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 ${
                          isVisible['process-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '450ms' }}
                      >
                        <div className="flex md:justify-end justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-6 scale-105 opacity-30"></div>
                            <div className="bg-gradient-to-tr from-slate-50 to-white p-6 rounded-2xl shadow-lg relative z-10 border border-slate-100">
                              <div className="absolute -right-4 -top-4 flex items-center justify-center z-20">
                                <div className="bg-white p-2 rounded-full shadow-lg border border-slate-100">
                                  <div className="flex items-center justify-center bg-gradient-to-r from-primary to-blue-500 text-white w-12 h-12 rounded-full font-bold text-lg">4</div>
                                </div>
                              </div>
                              <img src="/api/placeholder/400/300" alt="Testing" className="rounded-lg shadow-sm" />
                              <div className="mt-6 flex items-center gap-3">
                                <Shield className="h-6 w-6 text-primary" />
                                <div>
                                  <div className="font-medium">Quality Assurance</div>
                                  <div className="text-sm text-muted-foreground">Ensuring flawless performance</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:text-left">
                          <div className="mb-6">
                            <Badge className="px-3 py-1 bg-primary text-white border-none shadow-md">Step 4</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Testing & Quality Assurance</h3>
                          <p className="text-muted-foreground mb-6">
                            We rigorously test the website across devices and browsers to ensure flawless performance, security, and user experience.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">Comprehensive functionality testing</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">Cross-browser and device compatibility</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">Performance and speed optimization</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                              <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">Security and vulnerability assessment</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Pricing Tab */}
              <TabsContent value="pricing" className="mt-0">
                <div className="space-y-24">
                  {/* Pricing Plans */}
                  <div id="pricing-plans" data-animate="true">
                    <div className="text-center mb-16">
                      <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Pricing</Badge>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Web Development Packages</h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We offer flexible pricing options to suit businesses of all sizes and requirements, with transparent pricing and no hidden fees.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {packages.map((pkg, index) => (
                        <div 
                          key={index}
                          className={`${
                            isVisible['pricing-plans'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          }`}
                          style={{ transitionDelay: `${index * 150}ms` }}
                        >
                          <Card 
                            className={`relative overflow-hidden transition-all duration-500 h-full ${
                              pkg.popular 
                                ? 'border-primary shadow-lg transform hover:-translate-y-2' 
                                : 'shadow-md border-slate-200 hover:border-primary/30 hover:shadow-lg'
                            }`}
                          >
                            {pkg.popular && (
                              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-blue-500 text-white text-xs font-bold py-1.5 px-6 transform translate-x-8 translate-y-4 rotate-45">
                                POPULAR
                              </div>
                            )}
                            <CardHeader className={`border-b ${pkg.popular ? 'bg-primary/5' : 'bg-slate-50'}`}>
                              <div className="mb-3 flex items-center gap-4">
                                <div className={`p-3 rounded-full ${pkg.popular ? 'bg-primary/10' : 'bg-white'}`}>
                                  {React.cloneElement(pkg.icon, { className: `h-6 w-6 text-primary` })}
                                </div>
                                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                              </div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold">{pkg.price}</span>
                                {pkg.price !== "Custom" && (
                                  <span className="text-sm text-muted-foreground">one-time</span>
                                )}
                              </div>
                              <CardDescription className="mt-2 text-base">{pkg.description}</CardDescription>
                              <div className="mt-4 flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Delivery time: </span>
                                <span className="font-medium">{pkg.deliveryTime}</span>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-medium mb-4 flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    <span>Includes:</span>
                                  </h4>
                                  <ul className="space-y-3">
                                    {pkg.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
                                        <div className="mt-0.5 flex-shrink-0">
                                          <Check className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                {pkg.notIncluded.length > 0 && (
                                  <div>
                                    <h4 className="font-medium mb-4 flex items-center gap-2">
                                      <X className="h-4 w-4 text-slate-400" />
                                      <span>Not included:</span>
                                    </h4>
                                    <ul className="space-y-3">
                                      {pkg.notIncluded.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 bg-slate-50/50 p-3 rounded-lg">
                                          <div className="mt-0.5 flex-shrink-0">
                                            <X className="h-4 w-4 text-slate-300" />
                                          </div>
                                          <span className="text-sm text-muted-foreground">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                            <CardFooter className="border-t pt-6">
                                <Link href="/contact">
                              <Button 
                                className="w-full py-6 text-base font-medium" 
                                variant={pkg.popular ? "default" : "outline"}
                              >
                                {pkg.popular ? (
                                  <>Get Started <ArrowRight className="ml-2 h-5 w-5" /></>
                                ) : (
                                  'Get Started'
                                )}
                              </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Dont see a package that fits your needs? We offer completely custom solutions tailored to your specific requirements and budget.
                      </p>
                      <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md border-slate-200 hover:border-primary/30">
                        <span>Request Custom Quote</span>
                        <MessageSquare className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Add-ons */}
                  <div id="addons" data-animate="true">
                    <div className="text-center mb-16">
                      <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Enhancements</Badge>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Services</h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Enhance your website with these optional add-ons to extend functionality and maximize performance.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <Card 
                        className={`hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-primary/30 ${
                          isVisible['addons'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '0ms' }}
                      >
                        <CardHeader>
                          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                            <Search className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-xl">SEO Optimization</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-6">
                            Improve your search engine rankings with our comprehensive SEO services, including keyword research and content optimization.
                          </p>
                          <div className="flex items-baseline">
                            <div className="text-2xl font-bold text-primary">$500</div>
                            <div className="text-sm text-muted-foreground ml-2">starting price</div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card 
                        className={`hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-primary/30 ${
                          isVisible['addons'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '100ms' }}
                      >
                        <CardHeader>
                          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                            <ShoppingCart className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-xl">E-Commerce Setup</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-6">
                            Add online store functionality to your website with product listings, payment processing, and order management.
                          </p>
                          <div className="flex items-baseline">
                            <div className="text-2xl font-bold text-primary">$1,500</div>
                            <div className="text-sm text-muted-foreground ml-2">starting price</div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card 
                        className={`hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-primary/30 ${
                          isVisible['addons'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                      >
                        <CardHeader>
                          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                            <Shield className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-xl">Security Package</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-6">
                            Enhanced security measures including malware protection, firewall configuration, and regular security audits.
                          </p>
                          <div className="flex items-baseline">
                            <div className="text-2xl font-bold text-primary">$300</div>
                            <div className="text-sm text-muted-foreground ml-2">per year</div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card 
                        className={`hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-primary/30 ${
                          isVisible['addons'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '300ms' }}
                      >
                        <CardHeader>
                          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-4 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                            <Server className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-xl">Hosting & Maintenance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-6">
                            Let us handle hosting, updates, backups, and technical support for your website with 99.9% uptime guarantee.
                          </p>
                          <div className="flex items-baseline">
                            <div className="text-2xl font-bold text-primary">$50</div>
                            <div className="text-sm text-muted-foreground ml-2">per month</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-white" id="faq-section" data-animate="true">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Support</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our web development services and process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <Collapsible
                  key={index}
                  open={openIndexes[index] || false}
                  onOpenChange={() => toggle(index)}
                  className={`${
                    isVisible['faq-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } transition-all duration-500`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CollapsibleTrigger className="w-full text-left flex items-center justify-between p-5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-2 rounded-full border border-slate-200">
                        <ChevronDown
                          className={`h-5 w-5 text-primary transition-transform duration-300 ${
                            openIndexes[index] ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <span className="font-medium text-lg">{item.question}</span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="p-5 pt-4 pl-16 border border-t-0 border-slate-200 rounded-b-xl bg-white">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Still have questions? Our team is ready to help you with any inquiries about our web development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Contact Us
                </Button>
                <Button variant="outline" size="lg" className="gap-2 border-slate-200">
                  <Phone className="h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-slate-50" id="testimonials" data-animate="true">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-none">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dont just take our word for it. Heres what our clients have to say about working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div 
                className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative ${
                  isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transition-all duration-500`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="absolute -top-5 left-8 text-6xl text-primary/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    The team delivered an exceptional e-commerce website that exceeded our expectations. Sales have increased by 45% since launch, and the user experience is fantastic.
                  </p>
                  <div className="flex items-center gap-4">
                   {/* Author Info */}
    <div className="flex items-center gap-4">
      <img 
        src="https://www.larepublica.net/storage/images/2024/05/24/20240524112631.untitled-design-2024-05-24t112555655.png?mrf-size=m" 
        alt="Dr. Michael Chen" 
        className="w-12 h-12 rounded-full object-cover border border-primary/20 shadow-sm"
      />
      <div>
        <div className="font-medium">Brayan Brabolanos</div>
        <div className="text-sm text-muted-foreground">CEO, Tara Solutions</div>
      </div>
    </div>
                  </div>
                </div>
              </div>
              
            {/* Enhanced Testimonial 2 with Network Image */}
<div 
  className={`bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative ${
    isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  } transition-all duration-500 ease-out`}
  style={{ transitionDelay: '150ms' }}
>
  {/* Decorative Quote */}
  <div className="absolute -top-5 left-8 text-6xl text-primary/20 select-none" aria-hidden="true">
    &ldquo;
  </div>

  <div className="relative z-10 space-y-6">
    {/* Star Rating */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    {/* Testimonial Text */}
    <blockquote className="italic text-muted-foreground">
      “Working with this team was a pleasure from start to finish. They understood our requirements perfectly and delivered a secure healthcare portal that streamlined our operations.”
    </blockquote>

    {/* Author Info */}
    <div className="flex items-center gap-4">
      <img 
        src="https://media.licdn.com/dms/image/v2/C5103AQGPpDv5pqnLUg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1546595772748?e=1753315200&v=beta&t=QhyxI0oM8WXXCNdAEpdh1xNKvNMeyLVlJXr3DkjlGFg" 
        alt="Dr. Michael Chen" 
        className="w-12 h-12 rounded-full object-cover border border-primary/20 shadow-sm"
      />
      <div>
        <div className="font-medium">Dr. Surinder Kumar</div>
        <div className="text-sm text-muted-foreground">CEO, SME Digital Marketing</div>
      </div>
    </div>
  </div>
</div>
              
            {/* Testimonial 3 */}
<div
  className={`bg-white p-8 rounded-2xl shadow-xl border border-slate-200 relative ${
    isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  } transition-all duration-700 ease-out`}
  style={{ transitionDelay: '300ms' }}
>
  {/* Decorative Quote Mark */}
  <div className="absolute -top-6 left-6 text-7xl text-primary/10 font-serif leading-none">
    &ldquo;
  </div>

  {/* Testimonial Content */}
  <div className="relative z-10">
    {/* Star Rating */}
    <div className="flex items-center gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    {/* Review Text */}
    <p className="text-muted-foreground italic text-base mb-6">
      “The real estate platform they built has revolutionized our operations. With robust search
      filters and immersive virtual tours, our client inquiries have skyrocketed. Truly a game-changer.”
    </p>

    {/* Reviewer Info with Image */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20 shadow-sm">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQGyHD7Gra1pww/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731570961587?e=2147483647&v=beta&t=TP16Jh5Gfc6FPP3nda7ZPZaL5BCcGiRx-8ShGfLsOpc" // Replace with actual image URL
          alt="Amanda Rodriguez"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="font-semibold text-gray-900">Jaffery Chandler</div>
        <div className="text-sm text-muted-foreground">CEO, IME Technologies</div>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-600/90"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-48 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 px-3 py-1.5 bg-white/20 text-white border-none backdrop-blur-sm">Lets Work Together</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Dream Project?</h2>
              <p className="text-xl text-white/80 mb-10">
                Lets discuss your project and create a custom solution that meets your business needs and exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact">
                <Button size="lg" >
                  <span className="font-medium">Get a Free Quote</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
                <Link href="/contact">
                <Button variant="outline" size="lg" >
                  <Calendar className="mr-2 h-5 w-5" />
                  <span className="font-medium">Schedule a Call</span>
                </Button>
                </Link>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white font-medium">Fast Turnaround</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white font-medium">Quality Guarantee</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <TowerControl className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white font-medium">Expert Support</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white font-medium">Future-Proof</div>
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