import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Rocket, Brain, Users, Award } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges with elegant, efficient solutions"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt and master new technologies, frameworks, and methodologies"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong collaborator with excellent communication and interpersonal skills"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to writing clean, maintainable code and delivering exceptional results"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="heading-about">
            Building Tomorrow's Solutions Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A driven Computer Science student on a mission to create meaningful impact through technology
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Main Bio */}
          <div className="prose prose-lg max-w-none">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  I'm a 3rd-year B.Tech student in Computer Science & Engineering, passionate about leveraging technology to solve real-world problems. 
                  With a solid foundation in programming, software development, and data structures, I thrive on building efficient, scalable solutions 
                  that make a tangible difference.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  What drives me? The excitement of transforming complex challenges into elegant solutions. Whether it's optimizing algorithms, 
                  designing intuitive interfaces, or architecting robust systems, I bring dedication, creativity, and analytical thinking to every project. 
                  I'm actively seeking internship and remote opportunities where I can contribute my skills while learning from industry experts.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  My career vision encompasses <strong className="text-foreground">Software Engineering</strong>, <strong className="text-foreground">Product Development</strong>, 
                  and <strong className="text-foreground">Data-Driven Solutions</strong>, with aspirations to grow into tech leadership and management roles. 
                  I'm particularly interested in opportunities that challenge me to learn cutting-edge technologies and contribute to products that positively impact users' lives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Vision Statement */}
          <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">My Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To continuously expand my technical expertise, contribute to innovative solutions, and grow into a role where I can lead teams, 
                    mentor others, and drive technological advancement that creates lasting value.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
