import { Navigation } from "@/components/Portfolio/Navigation";
import { Hero } from "@/components/Portfolio/Hero";
import { About } from "@/components/Portfolio/About";
import { ProjectGrid } from "@/components/Portfolio/ProjectGrid";
import { Contact } from "@/components/Portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <ProjectGrid />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 3D Graphics Portfolio. Crafted with passion and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
