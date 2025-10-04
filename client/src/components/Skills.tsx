import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers, Users, Lightbulb, Terminal, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

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

  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="heading-skills">
            Skills & Expertise
          </h2>
        </motion.div>
        
        {/* Desktop: Infinite Scroll */}
        <div className="hidden md:block relative">
          <motion.div 
            className="flex gap-4"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-card-border hover-elevate transition-all cursor-pointer min-w-[280px]"
                  data-testid={index < skills.length ? `skill-${index}` : undefined}
                >
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm md:text-base font-medium text-foreground">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile: Grid Layout */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-card-border hover-elevate transition-all cursor-pointer"
                data-testid={`skill-${index}`}
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                </motion.div>
                <span className="text-sm md:text-base font-medium text-foreground">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
