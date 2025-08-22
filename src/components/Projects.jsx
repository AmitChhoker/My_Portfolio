

export default function Projects() {
  const projects = [
    {
      title: "SVSU-QBank",
      description: "A repository of SVSU Question Papers with search and demo access.",
      tags: ["React", "CSS", "JavaScript"],
      live: "https://svsu-qbank.netlify.app/",
      github: "https://github.com/AmitChhoker/svsu-qbank",
      image: "https://github.com/AmitChhoker/My_Portfolio/blob/main/src/assets/qbank.png?raw=true",
    },
    {
      title: "Tic Tac Toe Game",
      description: "A fun tic-tac-toe game built with JavaScript logic.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AmitChhoker/Tic-Tae-Toe-Game",
      image: "https://github.com/AmitChhoker/My_Portfolio/blob/main/src/assets/tictactoe.png?raw=true",
    },
    {
      title: "Learnify",
      description: "An interactive learning platform for students.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/AmitChhoker/Learnify",
      image: "https://github.com/AmitChhoker/My_Portfolio/blob/main/src/assets/learnify.png?raw=true",
    },
    {
      title: "Smart Calculator",
      description: "An advanced calculator with history tracking and smart features.",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/AmitChhoker/Smart_calculator",
      image: "https://github.com/AmitChhoker/My_Portfolio/blob/main/src/assets/calculator.png?raw=true",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card" style={{ backgroundImage: `url(${proj.image})` }} >
            <div className="overlay">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tags">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="buttons">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn live"
                  >
                    🔗 Live Demo
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn github"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
