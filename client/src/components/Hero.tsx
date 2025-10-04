import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Code2, Trophy } from "lucide-react";
import coverImage from "@assets/Gemini_Generated_Image_lust37lust37lust_1759618785523.png";
import profileImage from "@assets/Gemini_Generated_Image_wbis7cwbis7cwbis (1)_1759618785524.png";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-16 overflow-hidden">
      {/* Background Cover Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Available for Opportunities</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Jitendra Sethia
              </h1>
              
              <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Software Engineer | Problem Solver | Tech Enthusiast
              </div>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A passionate B.Tech CSE student transforming innovative ideas into elegant solutions. 
              Seeking opportunities to contribute, learn, and grow in dynamic tech environments.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center p-3 rounded-lg bg-card/50 border border-card-border">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Languages</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 border border-card-border">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 border border-card-border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Dedication</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Button 
                variant="default"
                size="lg"
                onClick={scrollToProjects}
                className="gap-2"
                data-testid="button-view-projects"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="gap-2"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-chart-2 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Jitendra Sethia"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border-2 border-primary/20"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <div className="text-xs">Scroll to explore</div>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
