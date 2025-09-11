import { Shield, Cpu, Headphones, Trophy, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-low latency gaming with blazing fast response times that keep you ahead of the competition."
  },
  {
    icon: Cpu,
    title: "Next-Gen Hardware",
    description: "Powered by cutting-edge processors and graphics cards for an unparalleled gaming experience."
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Advanced encryption and security measures protect your data and ensure fair gameplay."
  },
  {
    icon: Headphones,
    title: "Immersive Audio",
    description: "3D spatial audio technology that puts you right in the center of the action."
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Connect with millions of players worldwide in our vibrant gaming ecosystem."
  },
  {
    icon: Trophy,
    title: "Competitive Play",
    description: "Ranked tournaments and leagues with real prizes for the ultimate gaming challenge."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-black text-4xl md:text-6xl mb-6 text-neon">
            GAME FEATURES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of gaming with our revolutionary arcade platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card tilt-3d p-8 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-neon-cyan transition-colors duration-300" />
              </div>
              
              <h3 className="font-orbitron font-bold text-xl mb-4 text-foreground group-hover:text-neon-glow transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;