import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Formations from "@/components/sections/Formations";
import Members from "@/components/sections/Members";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Formations />
      <Members />
      <Gallery />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card/50 py-8 text-center border-t border-primary/20">
        <p className="text-muted-foreground">
          © 2024 CS Club - Ibn Tofail University. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
