const Interviews = () => {
  const interviews = [
    {
      title: "Entrevista con Gabriela Caballero - Cómo conseguir trabajo en el extranjero",
      url: "https://www.youtube.com/watch?v=7TF6DWTW6jg&t=1s",
      platform: "YouTube",
      date: "2024",
    },
    {
      title: "Gabriela Caballero - De Argentina a Londres como Product Manager",
      url: "https://www.youtube.com/watch?v=9wEfFLcN14E",
      platform: "YouTube",
      date: "2024",
    },
    {
      title: "Beyond SWE: Exploring Non-Engineering Roles in Tech",
      url: "https://careersonair.withgoogle.com/events/beyond-swe",
      platform: "Google Careers OnAir",
      date: "2024",
    },
    {
      title: "Gabriela Caballero - Product Manager Interview",
      url: "https://www.youtube.com/watch?v=8NieLyKCrbM",
      platform: "YouTube",
      date: "2024",
    },
    {
      title: "Taller de Proyectos Personales",
      url: "https://careersonair.withgoogle.com/events/taller-de-proyectos-personales",
      platform: "Google Careers OnAir",
      date: "2024",
    },
  ];

  return (
    <section className="min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Interviews & Talks</h1>
        <div className="space-y-8">
          {interviews.map((interview) => (
            <article
              key={interview.url}
              className="p-6 rounded-lg border hover:border-primary transition-colors"
            >
              <a
                href={interview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <h2 className="text-2xl font-semibold mb-2 text-primary">
                  {interview.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{interview.platform}</span>
                  <span>•</span>
                  <time>{interview.date}</time>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interviews;