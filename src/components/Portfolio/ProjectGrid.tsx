import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Chair Design",
    category: "Product Visualization",
    description: "High-end furniture visualization with photorealistic materials and studio lighting setup.",
    image: project1,
    tags: ["Blender", "Cycles", "Product Design"]
  },
  {
    id: 2,
    title: "Abstract Digital Art",
    category: "Digital Sculpture",
    description: "Flowing liquid metal forms exploring the boundaries between organic and synthetic.",
    image: project2,
    tags: ["Cinema 4D", "Octane", "Abstract"]
  },
  {
    id: 3,
    title: "Architectural Visualization",
    category: "Architecture",
    description: "Futuristic building design with dynamic lighting and atmospheric effects.",
    image: project3,
    tags: ["3ds Max", "V-Ray", "Architecture"]
  }
];

export const ProjectGrid = () => {
  return (
    <section className="py-20 px-4" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my latest 3D graphics projects, showcasing various 
            techniques and artistic approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group bg-gradient-glass border-border shadow-glass hover:shadow-neon transition-all duration-500 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-primary text-primary">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="bg-gradient-primary">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Open
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-accent font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded-md border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};