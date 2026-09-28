import Link from "next/link";

const profileImage =
  "https://uploads.onecompiler.io/454a46uw9/1790503733223/Sumaoang,Aguinaldo%20Lawrence%20IPTS.png";

const portfolioImage =
  "https://uploads.onecompiler.io/454a46uw9/1790503977886/portoflio%20github.png";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <div className="availability">
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="small-label">HELLO, I&apos;M</p>

          <h1>
            Aguinaldo
            <br />
            <span>Lawrence.</span>
          </h1>

          <p className="hero-description">
            A creative digital professional focused on virtual assistance,
            website management, social media, SEO, graphic design, and
            effective digital experiences.
          </p>

          <div className="hero-buttons">
            <Link href="/projects" className="btn btn-primary">
              Explore My Work →
            </Link>

            <Link href="/about" className="btn btn-secondary">
              About Me
            </Link>
          </div>

          <div className="stats">
            <div>
              <strong>01+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>DIGITAL SKILLS</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>CREATIVE IDEAS</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="purple-orb"></div>

          <div className="profile-card">
            <div className="card-top">
              <span>PROFILE / 01</span>
              <span>AVAILABLE</span>
            </div>

            <div className="profile-photo">
              <img
                src={profileImage}
                alt="Aguinaldo Lawrence portfolio profile"
              />
            </div>

            <div className="profile-info">
              <div>
                <span>NAME</span>
                <strong>Aguinaldo Lawrence</strong>
              </div>

              <div>
                <span>ROLE</span>
                <strong>Digital Professional</strong>
              </div>
            </div>
          </div>

          <div className="floating-card floating-left">
            <strong>10+</strong>
            <span>DIGITAL SKILLS</span>
          </div>

          <div className="floating-card floating-right">
            <strong>CREATIVE</strong>
            <span>DIGITAL WORK</span>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <span>WHAT I DO</span>
          <h2>
            Digital skills.
            <br />
            <em>Practical results.</em>
          </h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <div className="service-number">01</div>
            <h3>Virtual Assistance</h3>
            <p>
              Administrative support, organization, communication, research,
              scheduling, and digital task management.
            </p>
            <Link href="/portfolio">View Skills →</Link>
          </article>

          <article className="service-card">
            <div className="service-number">02</div>
            <h3>Social Media</h3>
            <p>
              Content planning, scheduling, captions, audience engagement,
              page management, and social media support.
            </p>
            <Link href="/portfolio">View Skills →</Link>
          </article>

          <article className="service-card">
            <div className="service-number">03</div>
            <h3>Website & SEO</h3>
            <p>
              Website management, content organization, on-page SEO,
              optimization, and digital content improvements.
            </p>
            <Link href="/portfolio">View Skills →</Link>
          </article>

          <article className="service-card">
            <div className="service-number">04</div>
            <h3>Creative Design</h3>
            <p>
              Canva graphics, visual content, branding materials, layouts, and
              creative digital assets.
            </p>
            <Link href="/gallery">View Gallery →</Link>
          </article>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <span>FEATURED WORK</span>
          <h2>
            A look at my
            <br />
            <em>digital work.</em>
          </h2>
        </div>

        <div className="featured-card">
          <div className="featured-image">
            <img src={portfolioImage} alt="Portfolio project preview" />
          </div>

          <div className="featured-content">
            <span>FEATURED PROJECT</span>

            <h3>Digital Portfolio</h3>

            <p>
              A personal portfolio concept designed to showcase digital
              skills, creative work, virtual assistance experience, and
              professional projects.
            </p>

            <Link href="/projects" className="btn btn-primary">
              See All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span>LET&apos;S CONNECT</span>

        <h2>
          Have a project
          <br />
          <em>in mind?</em>
        </h2>

        <p>
          Let&apos;s create something organized, creative, and useful
          together.
        </p>

        <a
          href="mailto:hopezetzu@gmail.com"
          className="btn btn-primary"
        >
          Send Me an Email →
        </a>
      </section>

      <footer className="site-footer">
        <span>© 2026 AGUINALDO LAWRENCE SUMAOANG</span>
        <span>DIGITAL PORTFOLIO</span>
      </footer>
    </main>
  );
}