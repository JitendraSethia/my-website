import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Passions from "@/components/Passions";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function Portfolio() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <AboutMe />
        <Education />
        <Passions />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
