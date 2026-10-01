import { Link } from "../../routing";
import { useState } from "react";
import "./CollegeSciences.css";

const departments = [
  {
    id: "architecture",
    title: "Architecture Department",
    icon: "🏛️",
    menu: [
      "Message From Head",
      "Structure of Department",
      "Majors",
      "Curriculum",
      "Career Opportunity",
      "Contact Us",
    ],
  },
  {
    id: "computer-studies",
    title: "Computer Studies Department",
    icon: "💻",
    menu: [
      "Message From Head",
      "Structure of Department",
      "Course Description",
      "Majors",
      "Career Opportunity",
      "Contact Us",
    ],
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering Department",
    icon: "🏗️",
    menu: [
      "Message From Head",
      "Structure of Department",
      "Curriculum",
      "Majors",
      "Academic Activities",
      "Certificates and Awards",
      "Career Opportunity",
      "Contact Us",
    ],
  },
  {
    id: "electrical-engineering",
    title: "Electrical and Electronic Engineering Department",
    icon: "⚡",
    menu: [
      "Message From Head",
      "Structure of Department",
      "Majors",
      "Career Opportunity",
      "Facilities",
      "Contact Us",
    ],
  },
  {
    id: "research",
    title: "Research Department",
    icon: "🔬",
    menu: [
      "Message From the Dean",
      "History",
      "Achievements",
      "Current Activity",
    ],
  },
];

function CollegeHeader() {
  return (
    <section className="science-hero">
      <div className="science-hero-overlay">
        <div className="container">
          <span className="science-label">
            COLLEGE OF SCIENCES
          </span>

          <h1>
            College of Sciences
          </h1>

          <p>
            Advancing knowledge, innovation, technology and
            professional excellence through quality education
            and research.
          </p>
        </div>
      </div>
    </section>
  );
}

function DeanMessage() {
  return (
    <section className="science-section dean-section" id="dean-message">
      <div className="container">
        <div className="science-two-column">

          <div className="dean-image">
            <div className="dean-placeholder">
              <span>CS</span>
            </div>
          </div>

          <div className="dean-content">
            <span className="section-label">
              COLLEGE OF SCIENCES
            </span>

            <h2>
              Message from the
              <span> Dean</span>
            </h2>

            <p>
              Welcome to the College of Sciences at the
              Asian Institute of Cambodia. Our college is
              committed to developing knowledgeable,
              creative and professionally capable graduates
              who can contribute to the development of
              Cambodia and the wider ASEAN community.
            </p>

            <p>
              We provide students with opportunities to
              develop strong theoretical foundations together
              with practical skills, critical thinking,
              problem-solving abilities and professional
              experience.
            </p>

            <p>
              Through our academic departments, qualified
              lecturers, modern learning approaches and
              research activities, we strive to create an
              environment where students can discover their
              potential and prepare for successful careers.
            </p>

            <div className="dean-signature">
              <strong>Dean</strong>
              <span>College of Sciences</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function DepartmentCard({ department, onSelect }) {
  return (
    <button
      className="department-card"
      onClick={() => onSelect(department.id)}
    >
      <div className="department-icon">
        {department.icon}
      </div>

      <div>
        <h3>{department.title}</h3>

        <p>
          Explore department information, programs,
          academic activities and career opportunities.
        </p>

        <span>
          Explore Department →
        </span>
      </div>
    </button>
  );
}

function DepartmentNavigation({ activeDepartment, setActiveDepartment }) {
  return (
    <aside className="department-sidebar">

      <div className="sidebar-title">
        <span>COLLEGE OF SCIENCES</span>
        <h3>Departments</h3>
      </div>

      <nav>
        {departments.map((department) => (
          <button
            key={department.id}
            className={
              activeDepartment === department.id
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveDepartment(department.id)
            }
          >
            <span>{department.icon}</span>
            <strong>{department.title}</strong>
          </button>
        ))}
      </nav>

    </aside>
  );
}

function ArchitectureDepartment() {
  return (
    <DepartmentLayout
      id="architecture"
      icon="🏛️"
      title="Architecture Department"
      subtitle="Designing the built environment of tomorrow."
    >
      <DepartmentMessage
        title="Message From Head"
        text={[
          "The Architecture Department is committed to developing creative and technically capable professionals who understand the relationship between people, buildings and the environment.",
          "Our programs encourage students to combine creativity, architectural theory, technical knowledge and practical design skills.",
        ]}
      />

      <DepartmentSection
        title="Structure of Department"
        text="The Architecture Department brings together academic staff, design professionals and supporting personnel to provide students with a comprehensive architectural education."
      />

      <InfoCards
        title="Majors"
        items={[
          "Architecture",
          "Architectural Design",
          "Building Design",
          "Urban and Environmental Design",
        ]}
      />

      <DepartmentSection
        title="Curriculum"
        text="The curriculum combines architectural design, drawing, building technology, architectural history, computer-aided design, environmental studies and professional practice."
      />

      <CareerSection
        careers={[
          "Architect",
          "Architectural Designer",
          "Interior Designer",
          "Urban Planner",
          "Building Consultant",
          "Construction Project Coordinator",
        ]}
      />

      <ContactSection department="Architecture Department" />
    </DepartmentLayout>
  );
}

function ComputerStudiesDepartment() {
  return (
    <DepartmentLayout
      id="computer-studies"
      icon="💻"
      title="Computer Studies Department"
      subtitle="Preparing students for the digital future."
    >
      <DepartmentMessage
        title="Message From Head"
        text={[
          "The Computer Studies Department prepares students with the knowledge and practical skills required in today's rapidly changing digital environment.",
          "Students are encouraged to develop programming, analytical thinking, software development and information technology skills while exploring emerging technologies.",
        ]}
      />

      <DepartmentSection
        title="Structure of Department"
        text="The department consists of academic lecturers, technical staff and supporting personnel who work together to deliver quality computer and information technology education."
      />

      <DepartmentSection
        title="Course Description"
        text="Courses cover programming, database systems, web development, software engineering, computer networks, information systems, cybersecurity and other areas of modern computing."
      />

      <InfoCards
        title="Majors"
        items={[
          "Computer Science",
          "Information Technology",
          "Software Development",
          "Information Systems",
          "Computer Networking",
        ]}
      />

      <CareerSection
        careers={[
          "Software Developer",
          "Web Developer",
          "System Administrator",
          "Database Administrator",
          "Network Engineer",
          "IT Support Specialist",
          "Systems Analyst",
          "Cybersecurity Professional",
        ]}
      />

      <ContactSection department="Computer Studies Department" />
    </DepartmentLayout>
  );
}

function CivilEngineeringDepartment() {
  return (
    <DepartmentLayout
      id="civil-engineering"
      icon="🏗️"
      title="Civil Engineering Department"
      subtitle="Building knowledge for sustainable infrastructure."
    >
      <DepartmentMessage
        title="Message From Head"
        text={[
          "The Civil Engineering Department aims to prepare students to become competent engineers capable of contributing to infrastructure development and sustainable construction.",
          "Our students develop knowledge in engineering science, design, construction, materials and project management through academic and practical learning.",
        ]}
      />

      <DepartmentSection
        title="Structure of Department"
        text="The department is supported by qualified engineering lecturers and technical personnel who provide theoretical instruction, practical activities and professional guidance."
      />

      <DepartmentSection
        title="Curriculum"
        text="The curriculum covers mathematics, physics, engineering mechanics, surveying, structural engineering, construction materials, geotechnical engineering, transportation, hydraulics and construction management."
      />

      <InfoCards
        title="Majors"
        items={[
          "Civil Engineering",
          "Structural Engineering",
          "Construction Engineering",
          "Transportation Engineering",
          "Water Resources",
        ]}
      />

      <DepartmentSection
        title="Academic Activities"
        text="Students participate in laboratory activities, field visits, design projects, technical presentations, workshops and other academic activities that connect classroom learning with real engineering practice."
      />

      <AwardsSection />

      <CareerSection
        careers={[
          "Civil Engineer",
          "Structural Engineer",
          "Construction Engineer",
          "Site Engineer",
          "Project Engineer",
          "Quantity Surveyor",
          "Infrastructure Consultant",
        ]}
      />

      <ContactSection department="Civil Engineering Department" />
    </DepartmentLayout>
  );
}

function ElectricalEngineeringDepartment() {
  return (
    <DepartmentLayout
      id="electrical-engineering"
      icon="⚡"
      title="Electrical and Electronic Engineering Department"
      subtitle="Powering innovation through engineering and technology."
    >
      <DepartmentMessage
        title="Message From Head"
        text={[
          "The Electrical and Electronic Engineering Department provides students with the knowledge and practical skills required to understand, design and maintain modern electrical and electronic systems.",
          "Our goal is to develop innovative engineers who can contribute to energy, electronics, automation, communication and technological development.",
        ]}
      />

      <DepartmentSection
        title="Structure of Department"
        text="The department consists of academic lecturers, technical personnel and supporting staff who provide instruction and practical training in electrical and electronic engineering."
      />

      <InfoCards
        title="Majors"
        items={[
          "Electrical Engineering",
          "Electronic Engineering",
          "Power Systems",
          "Automation and Control",
          "Telecommunication",
        ]}
      />

      <CareerSection
        careers={[
          "Electrical Engineer",
          "Electronic Engineer",
          "Power Engineer",
          "Automation Engineer",
          "Control Engineer",
          "Telecommunication Engineer",
          "Maintenance Engineer",
        ]}
      />

      <FacilitiesSection />

      <ContactSection department="Electrical and Electronic Engineering Department" />
    </DepartmentLayout>
  );
}

function ResearchDepartment() {
  return (
    <DepartmentLayout
      id="research"
      icon="🔬"
      title="Research Department"
      subtitle="Creating knowledge through research and innovation."
    >
      <DepartmentMessage
        title="Message From the Dean"
        text={[
          "Research is an essential part of academic development. The Research Department supports academic staff and students in developing research activities that address important challenges facing Cambodia and the wider region.",
          "We encourage collaboration, innovation, knowledge sharing and research that can contribute to social and economic development.",
        ]}
      />

      <DepartmentSection
        title="History"
        text="The Research Department was established to strengthen research culture within the institution and to encourage faculty members and students to participate in academic inquiry, innovation and knowledge development."
      />

      <AchievementsSection />

      <DepartmentSection
        title="Current Activity"
        text="Current research activities include academic research, student research projects, community-focused studies, collaborative research, workshops, seminars and knowledge-sharing activities."
      />

      <div className="research-highlight">
        <div>
          <span>01</span>
          <h3>Research</h3>
          <p>
            Promoting meaningful academic and applied research.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Innovation</h3>
          <p>
            Supporting new ideas and practical solutions.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Collaboration</h3>
          <p>
            Building research partnerships locally and internationally.
          </p>
        </div>
      </div>
    </DepartmentLayout>
  );
}

function DepartmentLayout({
  id,
  icon,
  title,
  subtitle,
  children,
}) {
  return (
    <div
      id={id}
      className="department-detail"
    >
      <div className="department-detail-header">
        <div className="detail-icon">
          {icon}
        </div>

        <div>
          <span>
            COLLEGE OF SCIENCES
          </span>

          <h2>{title}</h2>

          <p>{subtitle}</p>
        </div>
      </div>

      <div className="department-detail-content">
        {children}
      </div>
    </div>
  );
}

function DepartmentMessage({ title, text }) {
  return (
    <div className="detail-section message-box">
      <span className="detail-label">
        MESSAGE
      </span>

      <h3>{title}</h3>

      {text.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function DepartmentSection({ title, text }) {
  return (
    <div className="detail-section">
      <span className="detail-label">
        COLLEGE OF SCIENCES
      </span>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function InfoCards({ title, items }) {
  return (
    <div className="detail-section">

      <span className="detail-label">
        ACADEMIC PROGRAMS
      </span>

      <h3>{title}</h3>

      <div className="info-card-grid">
        {items.map((item, index) => (
          <div className="info-card" key={item}>
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{item}</strong>
          </div>
        ))}
      </div>

    </div>
  );
}

function CareerSection({ careers }) {
  return (
    <div className="detail-section">

      <span className="detail-label">
        CAREER DEVELOPMENT
      </span>

      <h3>
        Career Opportunity
      </h3>

      <p>
        Graduates can pursue professional opportunities
        across public organizations, private companies,
        academic institutions, development organizations
        and other professional sectors.
      </p>

      <div className="career-list">
        {careers.map((career) => (
          <div key={career}>
            <span>✓</span>
            {career}
          </div>
        ))}
      </div>

    </div>
  );
}

function AwardsSection() {
  return (
    <div className="detail-section">

      <span className="detail-label">
        STUDENT ACHIEVEMENT
      </span>

      <h3>
        Certificates and Awards
      </h3>

      <p>
        The department encourages students to participate
        in academic competitions, technical activities,
        workshops and professional development programs.
        Outstanding participation and achievement may be
        recognized through certificates and awards.
      </p>

      <div className="achievement-grid">
        <div>
          <span>🏆</span>
          <strong>Academic Achievement</strong>
        </div>

        <div>
          <span>📜</span>
          <strong>Professional Certificates</strong>
        </div>

        <div>
          <span>🥇</span>
          <strong>Competition Awards</strong>
        </div>
      </div>

    </div>
  );
}

function FacilitiesSection() {
  return (
    <div className="detail-section">

      <span className="detail-label">
        LEARNING ENVIRONMENT
      </span>

      <h3>
        Facilities
      </h3>

      <div className="facility-grid">

        <div>
          <span>⚡</span>
          <h4>Electrical Laboratory</h4>
          <p>
            Practical learning and electrical engineering
            experiments.
          </p>
        </div>

        <div>
          <span>🔌</span>
          <h4>Electronic Laboratory</h4>
          <p>
            Learning resources for electronic systems and
            circuits.
          </p>
        </div>

        <div>
          <span>💻</span>
          <h4>Computer Facilities</h4>
          <p>
            Computing resources supporting engineering
            education and design.
          </p>
        </div>

        <div>
          <span>🔧</span>
          <h4>Practical Workshops</h4>
          <p>
            Hands-on activities for developing practical
            engineering skills.
          </p>
        </div>

      </div>

    </div>
  );
}

function AchievementsSection() {
  return (
    <div className="detail-section">

      <span className="detail-label">
        RESEARCH DEVELOPMENT
      </span>

      <h3>
        Achievements
      </h3>

      <p>
        The Research Department supports the development
        of academic research and encourages faculty and
        students to share research findings through
        seminars, presentations, publications and
        collaborative activities.
      </p>

      <div className="achievement-grid">

        <div>
          <span>📚</span>
          <strong>Research Publications</strong>
        </div>

        <div>
          <span>🌐</span>
          <strong>Academic Collaboration</strong>
        </div>

        <div>
          <span>🎓</span>
          <strong>Student Research</strong>
        </div>

      </div>

    </div>
  );
}

function ContactSection({ department }) {
  return (
    <div className="detail-contact">

      <div>
        <span className="detail-label">
          CONTACT US
        </span>

        <h3>
          {department}
        </h3>

        <p>
          For information about programs, admission,
          academic activities or department services,
          please contact the College of Sciences.
        </p>
      </div>

      <div className="contact-buttons">

        <a href="mailto:info@aic-edu.net">
          ✉ Email Us
        </a>

        <a href="#contact">
          Contact Office →
        </a>

      </div>

    </div>
  );
}

export default function CollegeOfSciences() {
  const [activeDepartment, setActiveDepartment] =
    useState("architecture");

  function selectDepartment(id) {
    setActiveDepartment(id);

    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  }

  return (
    <main className="college-sciences-page">

      <CollegeHeader />

      {/* Breadcrumb */}

      <div className="science-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>College of Sciences</strong>
        </div>
      </div>

      {/* Dean Message */}

      <DeanMessage />

      {/* Department Overview */}

      <section className="department-overview">
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              ACADEMIC DEPARTMENTS
            </span>

            <h2>
              Explore the College
            </h2>

            <p>
              Discover our departments, academic programs,
              research activities and professional opportunities.
            </p>
          </div>

          <div className="department-card-grid">

            {departments.map((department) => (
              <DepartmentCard
                key={department.id}
                department={department}
                onSelect={selectDepartment}
              />
            ))}

          </div>

        </div>
      </section>

      {/* Department Area */}

      <section className="department-area">
        <div className="container department-layout">

          <DepartmentNavigation
            activeDepartment={activeDepartment}
            setActiveDepartment={selectDepartment}
          />

          <div className="department-main">

            <ArchitectureDepartment />

            <ComputerStudiesDepartment />

            <CivilEngineeringDepartment />

            <ElectricalEngineeringDepartment />

            <ResearchDepartment />

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="science-cta">

        <div className="container">

          <span className="section-label light">
            COLLEGE OF SCIENCES
          </span>

          <h2>
            Build Your Future Through
            Science & Technology
          </h2>

          <p>
            Explore academic opportunities at the Asian
            Institute of Cambodia and begin your journey
            toward a successful professional career.
          </p>

          <div className="science-cta-buttons">

            <a href="#programs">
              Explore Programs →
            </a>

            <a href="#contact">
              Contact Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
