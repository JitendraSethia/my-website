export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8" data-testid="heading-about">
          About Me
        </h2>
        
        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p className="text-foreground">
            I'm a 3rd-year B.Tech student in Computer Science & Engineering, passionate about using technology to solve real-world problems. With a strong foundation in programming, software development, and data structures, I enjoy building efficient solutions that make a meaningful impact.
          </p>
          
          <p className="text-muted-foreground">
            I'm actively seeking internship and remote opportunities where I can apply my technical skills and continue learning from experienced professionals. I bring adaptability, strong communication, and a growth mindset to every project I work on.
          </p>
          
          <p className="text-muted-foreground">
            My career interests include Software Engineering, Product Development, Data-Driven Solutions, and eventually growing into tech leadership and management roles. I'm excited about opportunities that challenge me to learn new technologies and contribute to innovative products.
          </p>
        </div>
      </div>
    </section>
  );
}
