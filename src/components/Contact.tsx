import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours. Thank you for supporting our mission!",
    });
    setFormData({ name: "", email: "", company: "", project: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@webworkers.ca",
      subtext: "We typically respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (709) 555-0123",
      subtext: "Available Monday to Friday, 9 AM - 6 PM NST"
    },
    {
      icon: MapPin,
      title: "Based in",
      details: "Newfoundland, Canada",
      subtext: "Serving clients across North America"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to build something amazing while supporting a great cause? 
            We'd love to hear about your project and show you how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.subtext}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-warm rounded-2xl p-6 text-white animate-scale-in">
              <h3 className="text-lg font-semibold mb-3">Supporting Families</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                When you work with Web Workers, 100% of our proceeds go to the Ronald McDonald House, 
                helping families stay close to their children during medical treatment.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-soft animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <Input
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Business Website, E-commerce, etc."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your project *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message & Support RMH
              </Button>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                By submitting this form, you're helping us support the Ronald McDonald House. 
                We'll respond within 24 hours!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;