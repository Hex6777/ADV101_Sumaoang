import Link from "next/link";

const skills = [
  {
    title: "Virtual Assistance",
    text: "Administrative support, scheduling, organization, research, communication, and daily digital tasks.",
  },
  {
    title: "Social Media",
    text: "Content planning, scheduling, captions, hashtags, community engagement, and page management.",
  },
  {
    title: "SEO",
    text: "On-page SEO, meta titles, descriptions, keywords, image optimization, and basic analytics.",
  },
  {
    title: "Graphic Design",
    text: "Canva graphics, social media visuals, presentations, branding materials, and digital layouts.",
  },
  {
    title: "Lead Generation",
    text: "Researching potential leads, organizing information, data collection, and contact management.",
  },
  {
    title: "Website Management",
    text: "Website content updates, page organization, digital assets, and basic website maintenance.",
  },
  {
    title: "Data & Bookkeeping",
    text: "Data entry, records, invoices, expenses, spreadsheets, and basic bookkeeping workflows.",
  },
  {
    title: "Video Editing",
    text: "Basic video editing, social media clips, visual content preparation, and creative digital media.",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="inner-hero">
        <div>
          <span>MY PORTFOLIO</span>

          <h1>
            Skills built for
            <br />
            <em>digital work.</em>
          </h1>

          <p>
            A collection of skills and services that I can use to support
            digital projects and online businesses.
          </p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-grid">
          {skills.map((skill, index) => (
            <article className="portfolio-card" key={skill.title}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{skill.title}</h2>

              <p>{skill.text}</p>

              <div className="card-line"></div>
            </article>
          ))}
        </div>

        <div className="tools-section">
          <span>TOOLS & PLATFORMS</span>

          <div className="tools-list">
            {[
              "Canva",
              "Google Workspace",
              "Microsoft Office",
              "Notion",
              "Trello",
              "Slack",
              "ClickUp",
              "Asana",
              "CapCut",
              "WordPress",
              "Meta Business Suite",
              "ChatGPT",
            ].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>

        <div className="portfolio-buttons">
          <Link href="/projects" className="btn btn-primary">
            View Projects →
          </Link>

          <Link href="/gallery" className="btn btn-secondary">
            Open Gallery
          </Link>
        </div>
      </section>
    </main>
  );
}