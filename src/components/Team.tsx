import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Ezra Hengeveld",
      role: "Co-Founder & Full-Stack Developer",
      bio: "Passionate about creating clean, efficient code and meaningful digital experiences. Specializes in JavaScript, Swift, and modern web technologies.",
      skills: ["JavaScript", "Swift", "UI/UX Design", "Performance Optimization", "SEO"],
      image: "/placeholder.svg" // Placeholder for now - they can upload real photos
    },
    {
      name: "Mahir",
      role: "Co-Founder & Full-Stack Developer", 
      bio: "Dedicated to building accessible, user-friendly websites that make a difference. Expert in responsive design and performance optimization.",
      skills: ["JavaScript", "Python", "UI/UX Design", "Performance Optimization"],
      image: "/placeholder.svg" // Placeholder for now - they can upload real photos
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Two young developers from Newfoundland with a shared passion for excellent code 
            and community impact. Get to know the faces behind Web Workers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-hero">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-4">{member.role}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                {member.bio}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 text-center">Specialties</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to work with us or learn more about our mission?
          </p>
          <Button size="lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;