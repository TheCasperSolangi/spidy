import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with payment integration and inventory management.",
      image: "bg-gradient-to-r from-blue-400 to-blue-600",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Healthcare App",
      description: "Mobile application for patient management and telemedicine consultations.",
      image: "bg-gradient-to-r from-green-400 to-green-600", 
      tags: ["Flutter", "Firebase", "REST API"]
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics dashboard for financial data visualization and reporting.",
      image: "bg-gradient-to-r from-purple-400 to-purple-600",
      tags: ["Vue.js", "D3.js", "Express"]
    },
    {
      title: "Logistics Management System",
      description: "End-to-end solution for tracking shipments and managing delivery operations.",
      image: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      tags: ["Angular", "Spring Boot", "PostgreSQL"]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
