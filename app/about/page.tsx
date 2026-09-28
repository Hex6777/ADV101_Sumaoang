import Link from "next/link";

const profileImage =
  "https://uploads.onecompiler.io/454a46uw9/1790503733223/Sumaoang,Aguinaldo%20Lawrence%20IPTS.png";

export default function AboutPage() {
  return (
    <main>
      <section className="inner-hero">
        <div>
          <span>ABOUT ME</span>

          <h1>
            Behind the
            <br />
            <em>work.</em>
          </h1>

          <p>
            A little about who I am, what I do, and how I approach digital
            projects.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-photo-card">
          <div className="about-photo">
            <img
              src={profileImage}
              alt="Aguinaldo Lawrence"
            />
          </div>

          <div className="photo-caption">
            <span>PROFILE / 01</span>
            <strong>CREATIVE DIGITAL PROFESSIONAL</strong>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">MY STORY</span>

          <h2>
            Reliable support
            <br />
            <em>with a creative side.</em>
          </h2>

          <p>
            I&apos;m a detail-oriented digital professional interested in
            helping clients keep their work organized, efficient, and moving
            forward.
          </p>

          <p>
            My experience and skills include virtual assistance, social media
            management, data entry, research, website management, SEO,
            graphic design, and other online tasks.
          </p>

          <div className="about-details">
            <div>
              <span>FOCUS</span>
              <strong>Digital Support</strong>
            </div>

            <div>
              <span>SPECIALTY</span>
              <strong>VA & Social Media</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>Creative Professional</strong>
            </div>
          </div>

          <div className="hero-buttons">
            <Link href="/portfolio" className="btn btn-primary">
              My Skills →
            </Link>

            <Link href="/projects" className="btn btn-secondary">
              My Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading">
          <span>MY SKILLS</span>

          <h2>
            Tools for
            <br />
            <em>digital work.</em>
          </h2>
        </div>

        <div className="skill-grid">
          {[
            "Virtual Assistance",
            "Social Media Management",
            "SEO",
            "Lead Generation",
            "Data Entry",
            "Website Management",
            "Graphic Design",
            "Video Editing",
            "Bookkeeping",
            "Email Management",
            "Research",
            "Content Planning",
          ].map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <span>WORK TOGETHER</span>

        <h2>
          Let&apos;s make
          <br />
          <em>something useful.</em>
        </h2>

        <a href="mailto:hopezetzu@gmail.com" className="btn btn-primary">
          Contact Me →
        </a>
      </section>
    </main>
  );
}