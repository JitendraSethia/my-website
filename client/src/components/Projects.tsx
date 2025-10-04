import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Web-Based Chat Application",
      description: "A personal project demonstrating full-stack development skills, focusing on real-time communication and efficient database handling.",
      status: "live",
      link: "https://c2glbo7g0aaj.trickle.host/",
      tags: ["Full-Stack", "Real-time", "Database"],
    },
    {
      title: "Amazon Clone",
      description: "E-commerce platform replicating Amazon's core features including product listings, shopping cart, and checkout functionality.",
      status: "coming-soon",
      tags: ["React", "Node.js", "E-commerce"],
    },
    {
      title: "Medical Pharmacy Website",
      description: "Healthcare platform for online medicine ordering, prescription management, and pharmacy services.",
      status: "coming-soon",
      tags: ["Healthcare", "Web App", "Database"],
    },
    {
      title: "DSA Visualization Tool",
      description: "Interactive tool for visualizing data structures and algorithms to enhance learning and understanding.",
      status: "coming-soon",
      tags: ["React", "Algorithms", "Education"],
    },
    {
      title: "Data Analysis Script",
      description: "Python-based automation tool for processing and analyzing large datasets efficiently.",
      status: "coming-soon",
      tags: ["Python", "Data Science", "Automation"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Continuous floating animation variants
  const floatingVariants = (index: number) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3 + (index * 0.3),
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  });

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="heading-projects">
            Featured Projects
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              {...floatingVariants(index)}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              data-testid={`project-${index}`}
            >
              <Card 
                className={`h-full transition-shadow hover:shadow-xl relative overflow-hidden ${project.status === "coming-soon" ? "opacity-80" : ""}`}
              >
                {/* Animated gradient border effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(var(--primary), 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.status === "coming-soon" && (
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Clock className="h-3 w-3" />
                          </motion.div>
                          Soon
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: tagIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="relative z-10">
                  {project.status === "live" && project.link ? (
                    <motion.div
                      className="w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="default"
                        className="w-full gap-2"
                        onClick={() => window.open(project.link, "_blank")}
                        data-testid={`button-view-project-${index}`}
                      >
                        View Project
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  ) : (
                    <Button 
                      variant="secondary"
                      className="w-full"
                      disabled
                      data-testid={`button-coming-soon-${index}`}
                    >
                      Coming Soon
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
