import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  ArrowRight, 
  Zap,
  PenTool
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      color: "bg-blue-500",
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business needs and challenges.",
      tags: ["Enterprise", "Integration", "Scalable"],
      cta: "Explore Solutions"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      color: "bg-purple-500",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      tags: ["iOS", "Android", "React Native"],
      cta: "View Mobile Portfolio"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      color: "bg-pink-500",
      title: "Web Development",
      description: "Responsive, fast, and engaging web applications built with modern technologies.",
      tags: ["React", "Next.js", "UI/UX"],
      cta: "See Web Projects"
    },
    {
      icon: <Database className="h-12 w-12" />,
      color: "bg-yellow-500",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure designed for reliability and performance.",
      tags: ["AWS", "Azure", "DevOps"],
      cta: "Explore Cloud Services"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      color: "bg-green-500",
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions and best practices.",
      tags: ["Audits", "Compliance", "Testing"],
      cta: "Learn About Security"
    },
    {
      icon: <PenTool className="h-12 w-12" />,
      color: "bg-indigo-500",
      title: "UI/UX Design",
      description: "Create intuitive and beautiful interfaces that delight users and drive engagement.",
      tags: ["Wireframing", "Prototyping", "User Testing"],
      cta: "View Design Process"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-1 bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">Our Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Services We Deliver</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer comprehensive software development services to transform your ideas into powerful digital solutions that drive growth and innovation.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredCard(index)} 
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl group">
                <div className={`h-2 ${service.color} w-full`}></div>
                <CardHeader className="pt-8 pb-0">
                  <div className={`p-4 rounded-lg inline-flex items-center justify-center bg-opacity-10 mb-6 ${service.color.replace('bg-', 'bg-opacity-10 text-')}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="inline-block text-xs font-medium py-1 px-2 rounded bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent group"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to start your project?</h3>
                <p className="text-blue-100">Get in touch to discuss how we can help bring your vision to life.</p>
              </div>
              <Link href="/contact">
    <Button href="/contact" className="bg-black  text-blue-600 hover:bg-blue-50 shadow-md">
                <Zap className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}