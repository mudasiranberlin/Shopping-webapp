import { Link } from "../../routing";
import "./StudentServices.css";

const documents = [
  {
    id: 1,
    title: "Student's Permission Letter",
    shortTitle: "Permission Letter",
    description:
      "Official permission letter format and guidelines for students who require authorization for academic or university-related activities.",
    file: "/pdfs/students-permission-letter.pdf",
    type: "STUDENT AFFAIRS",
  },
  {
    id: 2,
    title: "Norton's Format Thesis",
    shortTitle: "Thesis Format",
    description:
      "Official thesis formatting guidelines for students preparing and submitting academic research at Norton University.",
    file: "/pdfs/norton-format-thesis.pdf",
    type: "ACADEMIC GUIDELINES",
  },
  {
    id: 3,
    title:
      "Norton's Format Thesis and Research Papers (Faculty of Health Sciences)",
    shortTitle: "Thesis & Research Papers",
    description:
      "Thesis and research paper formatting guidelines specifically prepared for students and researchers in the Faculty of Health Sciences.",
    file: "/pdfs/norton-format-thesis-research-fhs.pdf",
    type: "FACULTY OF HEALTH SCIENCES",
  },
  {
    id: 4,
    title: "Internal Regulation",
    shortTitle: "Internal Regulation",
    description:
      "University internal regulations and important policies that students should understand and follow during their studies.",
    file: "/pdfs/internal-regulation.pdf",
    type: "UNIVERSITY REGULATION",
  },
];

function StudentServicesHero() {
  return (
    <section className="student-services-hero">
      <div className="student-services-hero-overlay">

        <div className="container">

          <span className="student-services-label">
            NORTON UNIVERSITY
          </span>

          <h1>Student's Services</h1>

          <p>
            Access important documents, academic guidelines,
            student forms and university regulations in one place.
          </p>

        </div>

      </div>
    </section>
  );
}

function Breadcrumb() {
  return (
    <div className="student-services-breadcrumb">

      <div className="container">

        <Link to="/">Home</Link>

        <span>›</span>

        <strong>Student's Services</strong>

      </div>

    </div>
  );
}

function StudentAffairsIntro() {
  return (
    <section className="student-services-intro">

      <span className="section-label">
        STUDENT AFFAIRS
      </span>

      <h2>
        Student's <span>Services</span>
      </h2>

      <p>
        Norton University provides students with access to
        important academic documents, regulations and
        resources to support their university experience.
      </p>

      <p>
        Students can view or download the official documents
        below for academic activities, research, administrative
        procedures and other university requirements.
      </p>

    </section>
  );
}

function DocumentCard({ document }) {
  return (
    <article className="student-document-card">

      <div className="document-top">

        <div className="pdf-icon">

          <div className="pdf-icon-paper">
            <span>PDF</span>
          </div>

        </div>

        <span className="document-number">
          {String(document.id).padStart(2, "0")}
        </span>

      </div>

      <div className="document-content">

        <span className="document-type">
          {document.type}
        </span>

        <h3>
          {document.title}
        </h3>

        <p>
          {document.description}
        </p>

        <div className="document-actions">

          <a
            href={document.file}
            target="_blank"
            rel="noopener noreferrer"
            className="document-view"
          >
            <span>↗</span>
            View PDF
          </a>

          <a
            href={document.file}
            download
            className="document-download"
          >
            <span>↓</span>
            Download
          </a>

        </div>

      </div>

    </article>
  );
}

function StudentDocuments() {
  return (
    <section className="student-documents">

      <div className="container">

        <div className="student-documents-heading">

          <div>

            <span className="section-label">
              IMPORTANT DOCUMENTS
            </span>

            <h2>
              Student Affairs Resources
            </h2>

          </div>

          <div className="document-count">
            <strong>04</strong>
            <span>Documents</span>
          </div>

        </div>

        <div className="student-document-grid">

          {documents.map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

function HelpSection() {
  return (
    <section className="student-services-help">

      <div className="container">

        <div className="student-help-inner">

          <div className="student-help-icon">
            🎓
          </div>

          <div className="student-help-content">

            <span>
              STUDENT SUPPORT
            </span>

            <h2>
              Need Help With a Student Document?
            </h2>

            <p>
              If you have questions about any of these
              documents, formats or university procedures,
              please contact the appropriate university
              office for assistance.
            </p>

          </div>

          <a
            href="/contact"
            className="student-help-button"
          >
            Contact Us
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default function StudentServices() {
  return (
    <main className="student-services-page">

      <StudentServicesHero />

      <Breadcrumb />

      <StudentAffairsIntro />

      <StudentDocuments />

      <HelpSection />

    </main>
  );
}
