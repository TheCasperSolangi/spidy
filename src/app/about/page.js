"use client"
import { useState, useEffect } from 'react';
import { CheckCircle, Code, Users, Calendar, Award } from 'lucide-react';
import Header from '../components/sections/Header';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function About() {
  const stats = [
    { value: 50, label: "Clients", icon: <Users className="h-6 w-6 text-blue-500" /> },
    { value: 63, label: "Projects", icon: <Code className="h-6 w-6 text-indigo-500" /> },
    { value: 7, label: "Years", icon: <Calendar className="h-6 w-6 text-purple-500" /> },
    { value: 6, label: "Experts", icon: <Award className="h-6 w-6 text-pink-500" /> }
  ];

  // State for counting animation
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;
    
    const intervals = stats.map((stat, index) => {
      // Duration for the animation (ms)
      const duration = 2000;
      // Calculate the increment step
      const step = stat.value / (duration / 50);
      
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + step, stat.value);
          }
          return newCounters;
        });
      }, 50);
    });
    
    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isVisible, stats]);

  // Intersection observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    
    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <>
    <Header />
    <section id="about" className="py-35 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-square relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>
              <div className="absolute left-8 right-8 top-8 bottom-8 bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="https://www.innovationinbusiness.com/wp-content/uploads/2022/08/Technology-inspire-teamwork.png" 
                  alt="NexusTech team at work" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm font-medium">Our team collaborating on innovative solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div className="relative">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3"></div>
              <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
            </div>
            
            <p className="text-gray-600">
              NexusTech is a forward-thinking software development company dedicated to creating innovative digital solutions that help businesses succeed in today's competitive landscape.
            </p>
            <p className="text-gray-600">
              Founded in 2015, we've grown from a small team of passionate developers to a full-service software house with expertise across multiple domains and technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "Experienced Team", 
                "Cutting-edge Technology",
                "Client-focused Approach",
                "Agile Development"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {Math.round(counters[i])}{stat.value > 1 ? "+" : ""}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Contact />
    <Footer />
    </>
  );
}