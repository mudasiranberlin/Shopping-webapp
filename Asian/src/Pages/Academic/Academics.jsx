import { Link } from "../../routing";
import { useState } from "react";
import "./Academics.css";

const academicUnits = [
  {
    id: "foundation",
    number: "01",
    title: "Foundation Studies Department",
    shortTitle: "Foundation Studies",
    description:
      "The Foundation Studies Department provides students with essential academic preparation and foundational knowledge for successful university study.",
    color: "blue",
    menu: [
      "Welcome Message",
      "Organization Chart",
      "Mission Vision and Goal",
      "Programs",
    ],
  },

  {
    id: "sciences",
    number: "02",
    title: "College of Sciences",
    shortTitle: "Sciences",
    description:
      "The College of Sciences provides academic programs in science, technology, engineering and related disciplines, supporting knowledge, innovation and practical skills.",
    color: "red",
    menu: [
      "Message from the Dean",
      "Architecture Department",
      "Computer Studies Department",
      "Civil Engineering Department",
      "Electrical and Electronic Engineering Department",
      "Research Department",
    ],
  },

  {
    id: "social-sciences",
    number: "03",
    title: "College of Social Sciences",
    shortTitle: "Social Sciences",
    description:
      "The College of Social Sciences brings together programs focused on business, economics, law, government, hospitality and tourism.",
    color: "gold",
    menu: [
      "Message from the Dean",
      "Organization Chart (CSS)",
      "School of Business",
      "School of Economics",
      "School of Law and Government",
      "School of Hospitality and Tourism Management",
    ],
  },

  {
    id: "arts",
    number: "04",
    title: "College of Arts, Humanities and Languages",
    shortTitle: "Arts, Humanities & Languages",
    description:
      "The College of Arts, Humanities and Languages supports learning in the humanities, languages, communication and related academic disciplines.",
    color: "purple",
    menu: [
      "Message from the Dean of CAHL",
      "Organization Chart",
      "Majors",
      "CAHL Alumni",
      "Contact Us",
    ],
  },

  {
    id: "health",
    number: "05",
    title: "Faculty of Health Sciences",
    shortTitle: "Health Sciences",
    description:
      "The Faculty of Health Sciences provides academic opportunities focused on health, professional development, research and student preparation.",
    color: "green",
    menu: [
      "Message from the Dean",
      "Organization Chart",
      "Degrees",
      "Guidelines Thesis Paper",
      "Academic Activities",
      "Career Opportunity",
    ],
  },

  {
    id: "graduate",
    number: "06",
    title: "Graduate School",
    shortTitle: "Graduate School",
    description:
      "The Graduate School supports advanced academic study, research, postgraduate development and scholarly activities.",
    color: "navy",
    menu: [
      "History",
      "Message From The Interim Head",
      "Organization Chart",
      "Mission Vision and Goal",
      "Programs",
      "Collection of Abstracts",
      "Alumni Book",
      "Contact Us",
    ],
  },
];

function AcademicHero() {
  return (
    <section className="academics-hero">
      <div className="academics-hero-overlay">
        <div className="container">
          <span className="academics-hero-label">
            ACADEMIC EXCELLENCE
          </span>

          <h1>Academics</h1>

          <p>
            Discover our academic departments, colleges, faculties
            and graduate programs designed to support learning,
            research and professional development.
          </p>
        </div>
      </div>
    </section>
  );
}

function Breadcrumb() {
  return (
    <div className="academics-breadcrumb">
      <div className="container">
        <Link to="/">Home</Link>
        <span>/</span>
        <strong>Academics</strong>
      </div>
    </div>
  );
}

function AcademicOverview() {
  return (
    <section className="academic-overview">
      <div className="container">

        <div className="academic-intro">

          <div>
            <span className="section-label">
              OUR ACADEMIC STRUCTURE
            </span>

            <h2>
              Education Designed for
              <span> Knowledge & Opportunity</span>
            </h2>
          </div>

          <div>
            <p>
              Our academic structure brings together foundation
              studies, sciences, social sciences, arts and
              humanities, health sciences and graduate education.
            </p>

            <p>
              Explore each academic unit to discover its departments,
              programs, academic activities and opportunities.
            </p>
          </div>

        </div>

        <div className="academic-stat-grid">

          <div className="academic-stat">
            <strong>06</strong>
            <span>Academic Units</span>
          </div>

          <div className="academic-stat">
            <strong>15+</strong>
            <span>Departments & Schools</span>
          </div>

          <div className="academic-stat">
            <strong>01</strong>
            <span>Graduate School</span>
          </div>

          <div className="academic-stat">
            <strong>∞</strong>
            <span>Learning Opportunities</span>
          </div>

        </div>

      </div>
    </section>
  );
}

function AcademicNavigation() {
  const [active, setActive] = useState("foundation");

  return (
    <section className="academic-navigation">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            ACADEMIC PROGRAMS
          </span>

          <h2>
            Explore Our Academics
          </h2>

          <p>
            Select an academic unit to explore its departments,
            programs and resources.
          </p>
        </div>

        <div className="academic-tabs">

          <div className="academic-tab-list">

            {academicUnits.map((unit) => (
              <button
                key={unit.id}
                className={
                  active === unit.id
                    ? "academic-tab active"
                    : "academic-tab"
                }
                onClick={() => setActive(unit.id)}
              >
                <span className={`tab-number ${unit.color}`}>
                  {unit.number}
                </span>

                <span>
                  {unit.shortTitle}
                </span>

                <b>→</b>
              </button>
            ))}

          </div>

          <div className="academic-tab-content">

            {academicUnits
              .filter((unit) => unit.id === active)
              .map((unit) => (
                <AcademicUnit
                  key={unit.id}
                  unit={unit}
                />
              ))}

          </div>

        </div>

      </div>
    </section>
  );
}

function AcademicUnit({ unit }) {
  return (
    <div className={`academic-unit ${unit.color}`}>

      <div className="academic-unit-header">

        <div>
          <span>
            {unit.number} / ACADEMIC UNIT
          </span>

          <h3>
            {unit.title}
          </h3>
        </div>

        <div className="academic-unit-symbol">
          {unit.number}
        </div>

      </div>

      <p className="academic-unit-description">
        {unit.description}
      </p>

      <div className="academic-menu-grid">

        {unit.menu.map((item, index) => (
          <a
            href={`#${item
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="academic-menu-card"
            key={item}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>
              {item}
            </strong>

            <b>
              →
            </b>
          </a>
        ))}

      </div>

    </div>
  );
}

function FoundationSection() {
  return (
    <section
      id="foundation-studies"
      className="academic-detail-section"
    >
      <div className="container">

        <div className="detail-grid">

          <div>
            <span className="section-label">
              FOUNDATION STUDIES DEPARTMENT
            </span>

            <h2>
              Building the Foundation
              <span> for University Success</span>
            </h2>

            <p>
              Foundation Studies provides students with the
              academic preparation and essential skills required
              to begin their university journey successfully.
            </p>

            <p>
              The department focuses on developing academic
              confidence, communication, study skills and
              foundational knowledge.
            </p>
          </div>

          <div className="detail-card">

            <h3>
              Foundation Studies
            </h3>

            <ul>
              <li>Welcome Message</li>
              <li>Organization Chart</li>
              <li>Mission, Vision and Goal</li>
              <li>Programs</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

function SciencesSection() {
  const departments = [
    "Architecture Department",
    "Computer Studies Department",
    "Civil Engineering Department",
    "Electrical and Electronic Engineering Department",
    "Research Department",
  ];

  return (
    <section
      id="college-of-sciences"
      className="academic-detail-section light"
    >
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            COLLEGE OF SCIENCES
          </span>

          <h2>
            Science, Technology
            <span> & Engineering</span>
          </h2>

          <p>
            Explore the departments and academic areas within
            the College of Sciences.
          </p>
        </div>

        <div className="department-grid">

          {departments.map((department, index) => (
            <div
              className="department-card"
              key={department}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {department}
              </h3>

              <a href="#programs">
                Explore Department →
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

function SocialSciencesSection() {
  const schools = [
    {
      title: "School of Business",
      icon: "▦",
    },
    {
      title: "School of Economics",
      icon: "◈",
    },
    {
      title: "School of Law and Government",
      icon: "⚖",
    },
    {
      title: "School of Hospitality and Tourism Management",
      icon: "✦",
    },
  ];

  return (
    <section
      id="college-of-social-sciences"
      className="academic-detail-section"
    >
      <div className="container">

        <div className="detail-grid">

          <div>

            <span className="section-label">
              COLLEGE OF SOCIAL SCIENCES
            </span>

            <h2>
              Understanding Society,
              <span> Business & Government</span>
            </h2>

            <p>
              The College of Social Sciences brings together
              academic areas that prepare students for careers
              in business, economics, law, government,
              hospitality and tourism.
            </p>

            <p>
              Students can explore a variety of academic and
              professional pathways through the schools within
              the college.
            </p>

          </div>

          <div className="social-school-list">

            {schools.map((school) => (
              <a
                href="#programs"
                className="social-school"
                key={school.title}
              >
                <span>
                  {school.icon}
                </span>

                <strong>
                  {school.title}
                </strong>

                <b>→</b>
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

function ArtsSection() {
  return (
    <section
      id="college-of-arts"
      className="academic-detail-section arts-section"
    >
      <div className="container">

        <div className="arts-content">

          <div>

            <span className="section-label">
              COLLEGE OF ARTS, HUMANITIES AND LANGUAGES
            </span>

            <h2>
              Arts, Humanities
              <span> & Languages</span>
            </h2>

            <p>
              The College of Arts, Humanities and Languages
              encourages students to develop communication,
              critical thinking, cultural understanding and
              creative abilities.
            </p>

          </div>

          <div className="arts-links">

            <a href="#dean">
              <span>01</span>
              Message from the Dean of CAHL
              <b>→</b>
            </a>

            <a href="#organization">
              <span>02</span>
              Organization Chart
              <b>→</b>
            </a>

            <a href="#majors">
              <span>03</span>
              Majors
              <b>→</b>
            </a>

            <a href="#alumni">
              <span>04</span>
              CAHL Alumni
              <b>→</b>
            </a>

            <a href="#contact">
              <span>05</span>
              Contact Us
              <b>→</b>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

function HealthSection() {
  const links = [
    "Message from the Dean",
    "Organization Chart",
    "Degrees",
    "Guidelines Thesis Paper",
    "Academic Activities",
    "Career Opportunity",
  ];

  return (
    <section
      id="faculty-health-sciences"
      className="academic-detail-section light"
    >
      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            FACULTY OF HEALTH SCIENCES
          </span>

          <h2>
            Health Sciences
            <span> & Professional Development</span>
          </h2>

          <p>
            Explore academic information, degrees, research,
            activities and career opportunities within the
            Faculty of Health Sciences.
          </p>

        </div>

        <div className="health-grid">

          {links.map((link, index) => (
            <a
              href="#health"
              className="health-card"
              key={link}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {link}
              </h3>

              <b>
                →
              </b>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

function GraduateSchoolSection() {
  const links = [
    "History",
    "Message From The Interim Head",
    "Organization Chart",
    "Mission Vision and Goal",
    "Programs",
    "Collection of Abstracts",
    "Alumni Book",
    "Contact Us",
  ];

  return (
    <section
      id="graduate-school"
      className="graduate-section"
    >
      <div className="container">

        <div className="graduate-grid">

          <div className="graduate-intro">

            <span className="section-label light">
              GRADUATE SCHOOL
            </span>

            <h2>
              Advanced Study
              <span> & Research</span>
            </h2>

            <p>
              The Graduate School provides a platform for
              advanced academic study, research and scholarly
              development.
            </p>

            <p>
              Explore information about graduate programs,
              research, academic activities and alumni.
            </p>

          </div>

          <div className="graduate-links">

            {links.map((link, index) => (
              <a
                href="#graduate"
                key={link}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {link}
                </strong>

                <b>
                  →
                </b>
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

function AcademicCTA() {
  return (
    <section className="academic-cta">

      <div className="container">

        <div className="academic-cta-content">

          <div>
            <span>
              FIND YOUR ACADEMIC PATH
            </span>

            <h2>
              Explore Programs & Opportunities
            </h2>

            <p>
              Discover the academic area that matches your
              interests, goals and future career.
            </p>
          </div>

          <div className="cta-buttons">

            <a
              href="#programs"
              className="academic-btn primary"
            >
              View Programs →
            </a>

            <a
              href="#contact"
              className="academic-btn outline"
            >
              Contact Us
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default function Academics() {
  return (
    <main className="academics-page">

      <AcademicHero />

      <Breadcrumb />

      <AcademicOverview />

      <AcademicNavigation />

      <FoundationSection />

      <SciencesSection />

      <SocialSciencesSection />

      <ArtsSection />

      <HealthSection />

      <GraduateSchoolSection />

      <AcademicCTA />

    </main>
  );
}