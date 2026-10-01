import { Link } from "../../routing";
import "./Publication.css";

const publications = [
  {
    id: 1,
    title: "Master Brochure 2026",
    category: "University Publication",
    description:
      "Explore the Master Brochure 2026 for information about academic programs, university facilities, admissions and opportunities at Norton University.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",

    // Put your PDF inside: public/pdf/
    pdf: "/pdf/Master-Brochure-2026.pdf",
  },

  {
    id: 2,
    title: "NU Newsletter 2022",
    category: "Newsletter",
    description:
      "Read the latest news, activities, achievements and important events from Norton University.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85",

    pdf: "/pdf/NU-Newsletter-2022.pdf",
  },

  {
    id: 3,
    title: "Norton Tech News 2022",
    category: "Technology Publication",
    description:
      "Discover technology news, projects, innovations and activities from Norton University.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",

    pdf: "/pdf/Norton-Tech-News-2022.pdf",
  },

  {
    id: 4,
    title: "Internal Regulation",
    category: "Regulation",
    description:
      "Read the internal regulations and guidelines governing academic and university activities.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",

    pdf: "/pdf/Internal-Regulation.pdf",
  },
];

function PublicationHero() {
  return (
    <section className="publication-hero">
      <div className="publication-hero-overlay">
        <div className="container">

          <span className="publication-label">
            NORTON UNIVERSITY
          </span>

          <h1>Publication</h1>

          <p>
            Explore our university publications, newsletters,
            brochures, regulations and academic resources.
          </p>

        </div>
      </div>
    </section>
  );
}

function Breadcrumb() {
  return (
    <div className="publication-breadcrumb">
      <div className="container">

        <Link to="/">Home</Link>

        <span>›</span>

        <strong>Publication</strong>

      </div>
    </div>
  );
}

function PublicationCard({ publication }) {
  return (
    <article className="publication-card">

      <div className="publication-image">

        <img
          src={publication.image}
          alt={publication.title}
        />

        <div className="publication-category">
          {publication.category}
        </div>

      </div>

      <div className="publication-card-content">

        <span className="publication-small-label">
          PUBLICATION
        </span>

        <h2>{publication.title}</h2>

        <p>
          {publication.description}
        </p>

        <div className="publication-actions">

          <a
            href={publication.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="publication-read"
          >
            Read More
            <span>→</span>
          </a>

          <a
            href={publication.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="publication-pdf"
          >
            <span className="pdf-icon">PDF</span>
            View PDF
          </a>

        </div>

      </div>

    </article>
  );
}

function PublicationList() {
  return (
    <section className="publication-section">

      <div className="container">

        <div className="publication-heading">

          <div>
            <span className="section-label">
              UNIVERSITY RESOURCES
            </span>

            <h2>
              Publications
            </h2>
          </div>

          <p>
            Access important university publications,
            brochures, newsletters and regulations.
          </p>

        </div>

        <div className="publication-grid">

          {publications.map((publication) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

function PublicationInfo() {
  return (
    <section className="publication-info">

      <div className="container">

        <div className="publication-info-inner">

          <div className="publication-info-icon">
            📚
          </div>

          <div>

            <span>
              UNIVERSITY LIBRARY
            </span>

            <h2>
              Explore Our Publications
            </h2>

            <p>
              Our publications provide students, faculty,
              researchers and visitors with useful information
              about Norton University, its academic programs,
              activities, achievements and regulations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default function Publication() {
  return (
    <main className="publication-page">

      <PublicationHero />

      <Breadcrumb />

      <PublicationList />

      <PublicationInfo />

    </main>
  );
}
