import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers, Users, Lightbulb, Terminal, GitBranch } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "C", icon: Terminal },
    { name: "Python", icon: Code2 },
    { name: "Java", icon: Code2 },
    { name: "Web Development", icon: Layers },
    { name: "Problem-Solving", icon: Lightbulb },
    { name: "Data Structures & Algorithms", icon: Database },
    { name: "Team Collaboration", icon: Users },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="heading-skills">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-card-border hover-elevate transition-all"
                data-testid={`skill-${index}`}
              >
                <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
