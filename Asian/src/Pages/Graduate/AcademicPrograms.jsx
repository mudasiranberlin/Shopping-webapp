import { Link } from "../../routing";
import "./AcademicPrograms.css";

const programs = [
  {
    id: 1,
    icon: "🎓",
    title: "Foundation Studies Department",
    description:
      "Build a strong academic foundation and develop the essential knowledge, skills and confidence needed for university-level study.",
    color: "blue",
    link: "/foundation-studies",
  },
  {
    id: 2,
    icon: "🔬",
    title: "College of Sciences",
    description:
      "Explore science, technology, computing, engineering and other disciplines that prepare students for careers in a rapidly changing world.",
    color: "red",
    link: "/college-of-sciences",
  },
  {
    id: 3,
    icon: "🌍",
    title: "College of Social Sciences",
    description:
      "Study society, human behavior, economics, development and social systems through practical and academic learning.",
    color: "gold",
    link: "/college-of-social-sciences",
  },
  {
    id: 4,
    icon: "📚",
    title: "College of Arts, Humanities and Languages",
    description:
      "Develop communication, cultural understanding, creativity and critical thinking through arts, humanities and language studies.",
    color: "purple",
    link: "/college-of-arts-humanities-languages",
  },
  {
    id: 5,
    icon: "⚕️",
    title: "Faculty of Health Sciences",
    description:
      "Prepare for meaningful careers in healthcare through professional education, practical training and health sciences.",
    color: "green",
    link: "/faculty-of-health-sciences",
  },
  {
    id: 6,
    icon: "🎓",
    title: "Graduate School",
    description:
      "Advance your academic and professional career through graduate-level education, research and specialized study.",
    color: "navy",
    link: "/graduate-school",
  },
];

function AcademicHero() {
  return (
    <section className="academic-hero">
      <div className="academic-hero-overlay">
        <div className="container">

          <span className="academic-hero-label">
            NORTON UNIVERSITY
          </span>

          <h1>Academic Programs</h1>

          <p>
            Discover academic programs designed to develop
            knowledge, professional skills and opportunities
            for your future.
          </p>

        </div>
      </div>
    </section>
  );
}

function Breadcrumb() {
  return (
    <div className="academic-breadcrumb">
      <div className="container">

        <Link to="/">Home</Link>

        <span>›</span>

        <strong>Academic Programs</strong>

      </div>
    </div>
  );
}

function ProgramCard({ program }) {
  return (
    <article className={`program-card ${program.color}`}>

      <div className="program-card-top">

        <div className="program-icon">
          {program.icon}
        </div>

        <span className="program-number">
          {String(program.id).padStart(2, "0")}
        </span>

      </div>

      <div className="program-card-content">

        <span className="program-label">
          ACADEMIC PROGRAM
        </span>

        <h2>{program.title}</h2>

        <p>
          {program.description}
        </p>

        <a
          href={program.link}
          className="program-link"
        >
          Explore Program
          <span>→</span>
        </a>

      </div>

    </article>
  );
}

function ProgramsSection() {
  return (
    <section className="academic-programs">

      <div className="container">

        <div className="academic-heading">

          <div>
            <span className="section-label">
              STUDY AT NORTON UNIVERSITY
            </span>

            <h2>
              Academic Programs
            </h2>
          </div>

          <a
            href="/academic-programs"
            className="view-all-button"
          >
            View All
            <span>→</span>
          </a>

        </div>

        <div className="program-grid">

          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

function AcademicCTA() {
  return (
    <section className="academic-cta">

      <div className="container">

        <div className="academic-cta-inner">

          <div className="academic-cta-icon">
            🎓
          </div>

          <div className="academic-cta-text">

            <span>
              FIND YOUR FUTURE
            </span>

            <h2>
              Choose the Program That Fits Your Goals
            </h2>

            <p>
              Explore our academic programs and discover
              the knowledge, skills and opportunities that
              can help shape your future.
            </p>

          </div>

          <a
            href="/admissions"
            className="academic-cta-button"
          >
            Apply Now
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default function AcademicPrograms() {
  return (
    <main className="academic-page">

      <AcademicHero />

      <Breadcrumb />

      <ProgramsSection />

      <AcademicCTA />

    </main>
  );
}
