import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-arcade.jpg";

const Hero = () => {
  const handleGetStarted = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Neon arcade gaming setup"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Gamepad2 className="w-8 h-8 text-neon-cyan animate-pulse" />
          <span className="text-neon-pink font-orbitron font-bold tracking-wider">NEON ARCADE</span>
          <Zap className="w-8 h-8 text-neon-green animate-pulse" />
        </div>
        
        <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-6 text-neon-glow leading-tight">
          LEVEL UP
          <br />
          <span className="text-neon">YOUR GAME</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Enter the future of gaming with cutting-edge neon arcade experiences. 
          Immerse yourself in a world where retro meets futuristic.
        </p>
        
        <Button 
          onClick={handleGetStarted}
          className="btn-magnetic text-lg font-orbitron font-bold"
          size="lg"
        >
          ENTER THE ARCADE
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span>Available Now</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            <span>Cross Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
            <span>Ultra HD</span>
          </div>
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;