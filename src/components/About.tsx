import { Sparkles, Target, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-12 md:p-16 tilt-3d">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-neon-pink animate-pulse" />
              <h2 className="font-orbitron font-black text-4xl md:text-5xl text-neon">
                ABOUT NEON ARCADE
              </h2>
              <Sparkles className="w-8 h-8 text-neon-cyan animate-pulse" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to the future of gaming! Neon Arcade is more than just a gaming platform – 
                it's a revolutionary experience that combines cutting-edge technology with the 
                nostalgic charm of classic arcade gaming.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to create the most immersive, fair, and exciting gaming environment 
                where players from around the world can compete, connect, and level up their skills 
                in a vibrant neon-lit virtual universe.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-neon-green">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Precision Gaming</span>
                </div>
                <div className="flex items-center gap-2 text-neon-blue">
                  <Rocket className="w-5 h-5" />
                  <span className="font-semibold">Next-Gen Tech</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 text-center">
                <div className="text-6xl font-orbitron font-black text-neon mb-4">
                  500K+
                </div>
                <p className="text-xl text-muted-foreground mb-6">Active Players</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-neon-cyan">150+</div>
                    <div className="text-sm text-muted-foreground">Games</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-pink">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Floating glow effects */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-pink/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neon-blue/30 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;