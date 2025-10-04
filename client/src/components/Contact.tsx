import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground" data-testid="heading-contact">
            Let's Connect
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            I'm always open to discussing new opportunities and collaborations
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="gap-2"
            onClick={() => window.open("https://www.linkedin.com/in/jitendra-sethia-b9aa3a342/", "_blank")}
            data-testid="button-linkedin"
          >
            <Linkedin className="h-5 w-5" />
            Connect on LinkedIn
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => window.location.href = "mailto:youremail@example.com"}
            data-testid="button-email"
          >
            <Mail className="h-5 w-5" />
            Send Email
          </Button>
        </div>
      </div>
    </section>
  );
}
