const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project",
      tech: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Two",
      description: "A brief description of your second project",
      tech: ["Next.js", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section className="min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-lg border hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;