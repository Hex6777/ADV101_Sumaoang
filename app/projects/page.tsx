import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "DIGITAL MARKETING",
    title: "Social Media Management",
    text: "A project focused on planning, organizing, creating, and supporting social media content for digital audiences.",
    tags: ["Content", "Scheduling", "Research"],
  },
  {
    number: "02",
    category: "DATA MANAGEMENT",
    title: "Data Organization",
    text: "A structured workflow for organizing spreadsheets, lead lists, product information, records, and business data.",
    tags: ["Data Entry", "Excel", "Accuracy"],
  },
  {
    number: "03",
    category: "VIRTUAL ASSISTANCE",
    title: "Virtual Assistant Workflow",
    text: "A workflow showing how information, tasks, schedules, and administrative activities can be organized efficiently.",
    tags: ["VA", "Admin", "Organization"],
  },
  {
    number: "04",
    category: "WEB & SEO",
    title: "Website Management",
    text: "Digital website support involving content updates, organization, basic SEO, and maintaining a clean online presence.",
    tags: ["Website", "SEO", "Content"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="inner-hero">
        <div>
          <span>MY PROJECTS</span>

          <h1>
            Digital work
            <br />
            <em>with purpose.</em>
          </h1>

          <p>
            Explore selected projects and examples of different areas of my
            digital skills and experience.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">
                <span className="project-category">
                  {project.category}
                </span>

                <h2>{project.title}</h2>

                <p>{project.text}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-icon">↗</div>
            </article>
          ))}
        </div>

        <div className="back-link">
          <Link href="/">← Back to Home</Link>
        </div>
      </section>
    </main>
  );
} 