import { Button } from "@/components/ui/button";
import { Code2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                background: `radial-gradient(circle, hsl(var(--primary) / ${Math.random() * 0.3}) 0%, transparent 70%)`,
                animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h20v20h20v20h20" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
                <circle cx="10" cy="10" r="3" fill="currentColor" className="text-accent"/>
                <circle cx="30" cy="30" r="3" fill="currentColor" className="text-accent"/>
                <circle cx="50" cy="50" r="3" fill="currentColor" className="text-accent"/>
                <circle cx="70" cy="70" r="3" fill="currentColor" className="text-accent"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="flex items-center justify-center mb-6 gap-3">
          <Code2 className="w-12 h-12 text-primary animate-pulse" />
          <Sparkles className="w-8 h-8 text-accent animate-pulse" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
          CS CLUB
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
          Ibn Tofail University
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-foreground/80">
          Empowering future developers through innovation, collaboration, and hands-on learning
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="btn-glow text-lg px-8"
            onClick={() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Formations
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-primary hover:bg-primary/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
