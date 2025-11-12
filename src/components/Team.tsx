import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ezraHeadshot from "@/assets/ezra-headshot.jpg";
import mahirHeadshot from "@/assets/mahir-headshot.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Ezra Hengeveld",
      role: "Co-Founder & Full-Stack Developer",
      bio: "Passionate about creating clean, efficient code and meaningful digital experiences. Specializes in JavaScript, Swift, and modern web technologies.",
      skills: ["JavaScript", "Swift", "UI/UX Design", "Performance Optimization", "SEO"],
      image: ezraHeadshot
    },
    {
      name: "Mahir",
      role: "Co-Founder & Business Development", 
      bio: "Focused on building client relationships and driving business growth. Expert in communications, strategy, and ensuring exceptional customer experiences.",
      skills: ["Business Strategy", "Client Relations", "Communications", "Project Management"],
      image: mahirHeadshot
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
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
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/10">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground font-medium mb-4">{member.role}</p>
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