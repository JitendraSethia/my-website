import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Megaphone, GraduationCap, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Passions() {
  const passions = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working with diverse teams to build amazing products together and fostering a collaborative environment",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "User Experience (UX) Focus",
      description: "Building intuitive, accessible interfaces and features that put the user experience first, ensuring technology is a joy, not a hurdle",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Megaphone,
      title: "Marketing & Social Media",
      description: "Passionate about digital marketing and social media management, creating impactful campaigns and engaging content",
      color: "from-orange-500 to-red-500"
    }
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="passions" className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">My Passions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="heading-passions">
              What I'm Passionate About
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The driving forces behind my work and the principles that guide my journey
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {passions.map((passion, index) => {
            const Icon = passion.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                data-testid={`passion-${index}`}
              >
                <Card className="h-full hover-elevate transition-all relative overflow-hidden group">
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, var(--primary), var(--chart-2))`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <CardContent className="pt-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.div 
                        className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center relative"
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          animate={{ 
                            rotate: 360,
                          }}
                          transition={{ 
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10"
                        />
                        <Icon className="h-8 w-8 text-primary relative z-10" />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {passion.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {passion.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Student Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <GraduationCap className="h-12 w-12 text-primary mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-foreground">My Vision as a Student</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  "As a student, I'm on a journey of continuous growth and exploration. Every challenge is an opportunity to learn, 
                  every project is a chance to innovate, and every collaboration is a step toward becoming not just a better developer, 
                  but a better leader and team player. I believe in learning by doing, growing by sharing, and succeeding together."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
