import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Web Workers development team workspace" 
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight drop-shadow-sm">
            Professional Websites
            <span className="block text-white/95">for a Good Cause</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            We're Web Workers—two young developers from Newfoundland building clean, responsive websites while supporting the Ronald McDonald House with every project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3 bg-white text-primary hover:bg-white/95 shadow-elevated">
              Work With Us
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;