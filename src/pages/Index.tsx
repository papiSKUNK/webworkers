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

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Web Workers</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Professional web development from Newfoundland, supporting the Ronald McDonald House with every project.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Business Websites</li>
                <li>E-commerce Development</li>
                <li>Web Applications</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Supporting</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Ronald McDonald House provides a home away from home for families with children receiving medical treatment.
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 Web Workers. All rights reserved. Building websites, building hope.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
