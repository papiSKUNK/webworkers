import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="team">
          <Team />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="why-us">
          <WhyChooseUs />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-secondary text-white py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Web Workers</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Professional web development from Newfoundland, supporting the Ronald McDonald House with every project.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2.5 text-white/90 text-sm">
                <li className="hover:text-white transition-colors">Business Websites</li>
                <li className="hover:text-white transition-colors">E-commerce Development</li>
                <li className="hover:text-white transition-colors">Web Applications</li>
                <li className="hover:text-white transition-colors">Maintenance & Support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Supporting</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Ronald McDonald House provides a home away from home for families with children receiving medical treatment.
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/80 text-sm">
            <p>&copy; 2024 Web Workers. All rights reserved. Building websites, building hope.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
