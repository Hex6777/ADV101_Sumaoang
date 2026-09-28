const portfolioImage =
  "https://uploads.onecompiler.io/454a46uw9/1790503977886/portoflio%20github.png";

const profileImage =
  "https://uploads.onecompiler.io/454a46uw9/1790503733223/Sumaoang,Aguinaldo%20Lawrence%20IPTS.png";

const galleryItems = [
  {
    image: portfolioImage,
    title: "Portfolio Design",
    category: "DIGITAL WORK",
  },
  {
    image: profileImage,
    title: "Professional Profile",
    category: "PROFILE",
  },
  {
    image: portfolioImage,
    title: "Website Concept",
    category: "WEB DESIGN",
  },
  {
    image: profileImage,
    title: "Creative Profile",
    category: "BRANDING",
  },
  {
    image: portfolioImage,
    title: "Project Showcase",
    category: "PORTFOLIO",
  },
  {
    image: profileImage,
    title: "Professional Identity",
    category: "DESIGN",
  },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="inner-hero">
        <div>
          <span>GALLERY</span>

          <h1>
            A visual look
            <br />
            <em>at my work.</em>
          </h1>

          <p>
            A collection of portfolio visuals, creative work, project
            previews, and professional designs.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article className="gallery-card" key={index}>
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="gallery-info">
                <span>{item.category}</span>
                <h2>{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}