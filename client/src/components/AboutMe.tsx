import { Card, CardContent } from "@/components/ui/card";
import { User, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@assets/Gemini_Generated_Image_wbis7cwbis7cwbis (1)_1759618785524.png";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about-me" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground" data-testid="heading-about-me">
              Get to Know Me
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative group">
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-1 bg-gradient-to-r from-primary to-chart-2 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"
              />
              <div className="relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={profileImage} 
                  alt="Jitendra Sethia"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-primary/20"
                  data-testid="img-about-profile"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="h-6 w-6 text-primary mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Who I Am</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a 3rd-year Computer Science student who believes in the power of technology to transform lives. 
                      Beyond the code and algorithms, I'm someone who genuinely enjoys solving puzzles, learning new things, 
                      and connecting with people who share a passion for innovation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-6 w-6 text-primary mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">My Journey</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From writing my first "Hello World" to building full-stack applications, my journey has been driven 
                      by curiosity and the desire to create meaningful solutions. Every project teaches me something new, 
                      and I'm always excited to push the boundaries of what I can build.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <User className="h-6 w-6 text-primary mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">What Drives Me</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm motivated by the impact my work can have on real people. Whether it's optimizing an algorithm 
                      to save processing time or designing an intuitive interface that makes technology accessible, 
                      I find joy in creating solutions that matter.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
