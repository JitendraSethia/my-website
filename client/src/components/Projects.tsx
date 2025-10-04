import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock } from "lucide-react";

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

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="heading-projects">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={project.status === "coming-soon" ? "opacity-80" : ""}
              data-testid={`project-${index}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.status === "coming-soon" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Soon
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                {project.status === "live" && project.link ? (
                  <Button 
                    variant="default"
                    className="w-full gap-2"
                    onClick={() => window.open(project.link, "_blank")}
                    data-testid={`button-view-project-${index}`}
                  >
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </Button>
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
          ))}
        </div>
      </div>
    </section>
  );
}
