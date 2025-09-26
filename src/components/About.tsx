import { Heart, Code, Users, Shield } from "lucide-react";
const About = () => {
  const values = [{
    icon: Code,
    title: "Technical Excellence",
    description: "Clean, modern code with responsive design and optimal performance."
  }, {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Professional service with transparent communication and on-time delivery."
  }, {
    icon: Users,
    title: "Community Impact",
    description: "Every project supports families through the Ronald McDonald House."
  }, {
    icon: Heart,
    title: "Personal Touch",
    description: "Two developers who care about your success and our shared mission."
  }];
  return <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Web Workers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">We're Ezra Hengeveld and Mahir Kaiser,
 two passionate developers from Newfoundland, Canada. Unlike typical coding businesses, we're a nonprofit organization dedicated to creating exceptional websites while supporting families in need.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every website we build serves a dual purpose: helping our clients succeed online 
              while generating funds for the Ronald McDonald House. When you choose Web Workers, 
              you're not just hiring developers—you're supporting families during their most 
              challenging times.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Newfoundland, we understand the importance of community and giving back. 
              Our nonprofit model allows us to focus on what matters most: creating outstanding 
              digital experiences while making a meaningful difference.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We combine technical expertise with genuine care for our clients and community. 
              Our lean, dedicated team ensures personal attention to every project, from initial 
              consultation to final launch and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe great websites should be accessible to everyone, which is why we offer 
              competitive pricing while maintaining the highest standards of quality and service.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => <div key={index} className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-elevated transition-all duration-300 animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-full mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;