import { CheckCircle, Heart, Code2, Zap, Users, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Code2,
      title: "Modern Technology Stack",
      description: "We use cutting-edge technologies like React, TypeScript, and modern deployment platforms to ensure your website is fast, secure, and scalable."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description: "Our streamlined development process and dedicated team means faster turnaround times without compromising on quality."
    },
    {
      icon: Shield,
      title: "Reliable & Professional",
      description: "Clear communication, transparent pricing, and on-time delivery. We treat your project with the same care as our own."
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "As a small team, we provide direct access to the developers building your site. No intermediaries, just genuine collaboration."
    },
    {
      icon: Heart,
      title: "Supporting a Great Cause",
      description: "Every dollar from your project goes to the Ronald McDonald House, helping families during difficult times while you get an exceptional website."
    },
    {
      icon: CheckCircle,
      title: "Complete Solutions",
      description: "From design to deployment, hosting to maintenance—we handle everything so you can focus on running your business."
    }
  ];

  const stats = [
    { number: "50+", label: "Websites Built" },
    { number: "$25K+", label: "Donated to RMH" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2", label: "Dedicated Developers" }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Web Workers?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            When you work with us, you get exceptional technical expertise combined with 
            the satisfaction of supporting families in need through the Ronald McDonald House.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make a Difference Together?
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Let's build something amazing while supporting families in need. 
              Your project + our expertise = positive impact for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-secondary hover:bg-white/90 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More About RMH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;