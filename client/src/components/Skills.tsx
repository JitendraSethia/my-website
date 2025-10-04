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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-muted/30">
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
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-card-border hover-elevate transition-all cursor-pointer"
                data-testid={`skill-${index}`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
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
    </section>
  );
}
