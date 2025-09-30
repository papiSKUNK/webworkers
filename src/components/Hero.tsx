import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-glow">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Web Workers development team workspace" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Professional Websites
            <span className="block mt-2">for a Good Cause</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Two developers from Newfoundland building exceptional websites while supporting families through the Ronald McDonald House.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-10 py-6 text-base font-semibold bg-white text-primary hover:bg-white/95 shadow-lg hover:shadow-xl transition-all">
              Work With Us
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-6 text-base font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;