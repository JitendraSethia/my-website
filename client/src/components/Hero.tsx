import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Jitendra Sethia
          </h1>
          <div className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Aspiring Software Engineer & B.Tech CSE Student
          </div>
        </div>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Seeking Internship & Remote Opportunities in Software Engineering and Product Development
        </p>

        <div className="pt-4">
          <Button 
            variant="default"
            size="lg"
            onClick={scrollToProjects}
            className="gap-2"
            data-testid="button-view-projects"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
