import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Atlantic Business Solutions",
      description: "Professional corporate website with modern design, responsive layout, and integrated contact management system.",
      image: portfolio1,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      category: "Business Website"
    },
    {
      title: "Coastal Commerce",
      description: "Full-featured e-commerce platform with payment processing, inventory management, and customer accounts.",
      image: portfolio2,
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      category: "E-commerce"
    },
    {
      title: "Harbor View Restaurant",
      description: "Elegant restaurant website featuring online reservations, menu management, and photo gallery.",
      image: portfolio3,
      technologies: ["React", "Sanity CMS", "Framer Motion", "Vercel"],
      category: "Restaurant"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every project we complete represents both technical excellence and community impact. 
            Here's a showcase of websites we've built while supporting the Ronald McDonald House.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} website screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-primary">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-primary">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to see your project featured here?
          </p>
          <Button size="lg">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;