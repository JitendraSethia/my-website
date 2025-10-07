import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Your University Name",
      location: "City, State",
      period: "2023 - 2027",
      status: "3rd Year - In Progress"
    },
    {
      degree: "Class 12",
      field: "Computer Science",
      institution: "Pearls of God",
      location: "City, State",
      period: "2023",
      percentage: "87.75%"
    },
    {
      degree: "Class 10",
      field: "General",
      institution: "Pearls of God",
      location: "City, State",
      period: "2021",
      percentage: "86%"
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="education" className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Education</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground" data-testid="heading-education">
              Academic Journey
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              data-testid={`education-${index}`}
            >
              <Card className="hover-elevate transition-all">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <motion.div 
                          className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-primary font-medium">{edu.field}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-4 ml-15">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{edu.institution} • {edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        {edu.status && (
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">{edu.status}</span>
                        </div>
                      )}
                      {edu.percentage && (
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">{edu.percentage}</span>
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
