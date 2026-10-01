import { Link } from "../../routing";
import { useState } from "react";
import "./Admissions.css";

const admissionMenu = [
  {
    id: "regulation",
    title: "Regulation on Enrolment",
  },
  {
    id: "admission",
    title: "Admission",
  },
  {
    id: "local-students",
    title: "Under Graduate",
  },
  {
    id: "foreign-students",
    title: "Foreign Students",
  },
  {
    id: "graduate-schools",
    title: "Graduate School",
  },
];

/* =========================================================
   HERO
========================================================= */

function AdmissionsHero() {
  return (
    <section className="admission-hero">
      <div className="admission-hero-overlay">
        <div className="container">
          <span className="admission-label">
            ASIAN INSTITUTE OF CAMBODIA
          </span>

          <h1>Admissions</h1>

          <p>
            Begin your academic journey with the Asian Institute
            of Cambodia and discover opportunities for learning,
            professional development and personal growth.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BREADCRUMB
========================================================= */

function Breadcrumb() {
  return (
    <div className="admission-breadcrumb">
      <div className="container">
        <Link to="/">Home</Link>

        <span>/</span>

        <strong>Admissions</strong>
      </div>
    </div>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function AdmissionsSidebar({
  activeSection,
  setActiveSection,
}) {
  return (
    <aside className="admission-sidebar">

      <div className="admission-sidebar-title">
        <span>ADMISSIONS</span>

        <h3>Admission Menu</h3>
      </div>

      <nav>
        {admissionMenu.map((item) => (
          <button
            type="button"
            key={item.id}
            className={
              activeSection === item.id
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveSection(item.id)
            }
          >
            <span>›</span>

            {item.title}
          </button>
        ))}
      </nav>

    </aside>
  );
}

/* =========================================================
   INTRODUCTION
========================================================= */

function Introduction() {
  return (
    <section className="admission-introduction">

      <span className="section-label">
        JOIN OUR UNIVERSITY
      </span>

      <h2>
        Start Your Journey
        <span> With AIC</span>
      </h2>

      <p>
        The Asian Institute of Cambodia welcomes students
        who are interested in pursuing higher education and
        developing the knowledge and skills necessary for
        their future careers.
      </p>

      <p>
        Our admission process is designed to provide clear
        requirements and guidance for both local and
        international students. Applicants are encouraged
        to carefully review the admission requirements
        before submitting their applications.
      </p>

      <div className="admission-highlights">

        <div>
          <span>01</span>

          <strong>Undergraduate</strong>

          <p>
            Programs for students beginning their university
            education.
          </p>
        </div>

        <div>
          <span>02</span>

          <strong>Graduate School</strong>

          <p>
            Advanced academic opportunities for degree
            holders.
          </p>
        </div>

        <div>
          <span>03</span>

          <strong>International Students</strong>

          <p>
            Admission support for students from around
            the world.
          </p>
        </div>

      </div>

    </section>
  );
}

/* =========================================================
   REGULATION
========================================================= */

function Regulation() {
  return (
    <section
      id="regulation"
      className="admission-content-section"
    >

      <span className="content-label">
        ADMISSIONS POLICY
      </span>

      <h2>Regulation on Enrolment</h2>

      <div className="content-intro">
        <p>
          The Asian Institute of Cambodia establishes
          admission and enrolment regulations to ensure
          that students meet the appropriate academic
          requirements before beginning their studies.
        </p>
      </div>

      <div className="regulation-list">

        <div className="regulation-item">
          <span>01</span>

          <div>
            <h3>Foundation Studies</h3>

            <p>
              Enrolment in Year I (Foundation Studies) shall
              be made only when students have a High School
              Certificate (GCE) or an equivalent
              certificate or document.
            </p>
          </div>
        </div>

        <div className="regulation-item">
          <span>02</span>

          <div>
            <h3>Graduate Students</h3>

            <p>
              Graduate students shall possess a Bachelor's
              degree or an equivalent degree from a
              recognized educational institution.
            </p>
          </div>
        </div>

        <div className="regulation-item">
          <span>03</span>

          <div>
            <h3>Entrance Examination</h3>

            <p>
              Students shall take the entrance examination
              or satisfy other admission requirements
              established by the university.
            </p>
          </div>
        </div>

        <div className="regulation-item">
          <span>04</span>

          <div>
            <h3>Transfer Students</h3>

            <p>
              Students holding degrees or certificates from
              other educational institutions who wish to
              pursue studies in the second or third year
              shall undergo an evaluation process conducted
              by the Academic Board and approved by the
              relevant Ministry of Education, Youth and
              Sports.
            </p>
          </div>
        </div>

        <div className="regulation-item">
          <span>05</span>

          <div>
            <h3>Tuition Fees</h3>

            <p>
              All students shall pay tuition fees to the
              university before the beginning of the next
              academic year. Tuition fees are
              non-refundable.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

/* =========================================================
   ADMISSION
========================================================= */

function AdmissionSection() {
  return (
    <section
      id="admission"
      className="admission-content-section"
    >

      <span className="content-label">
        APPLICATION PROCESS
      </span>

      <h2>Admission</h2>

      <p>
        Applicants are expected to complete the required
        admission procedures and submit all necessary
        documents within the designated admission period.
      </p>

      <div className="process-grid">

        <div className="process-card">
          <div className="process-number">
            01
          </div>

          <h3>Prepare Documents</h3>

          <p>
            Prepare all academic records, identification
            documents, photographs and other required
            materials.
          </p>
        </div>

        <div className="process-card">
          <div className="process-number">
            02
          </div>

          <h3>Submit Application</h3>

          <p>
            Complete the application form and submit it
            together with the required admission fee and
            supporting documents.
          </p>
        </div>

        <div className="process-card">
          <div className="process-number">
            03
          </div>

          <h3>Entrance Test</h3>

          <p>
            Applicants may be required to take an entrance
            examination or meet other academic requirements.
          </p>
        </div>

        <div className="process-card">
          <div className="process-number">
            04
          </div>

          <h3>Enrolment</h3>

          <p>
            Successful applicants complete the final
            enrolment process and prepare to begin their
            studies.
          </p>
        </div>

      </div>

    </section>
  );
}

/* =========================================================
   REQUIREMENT LIST
========================================================= */

function RequirementList({
  requirements,
}) {
  return (
    <div className="requirements">

      {requirements.map(
        (requirement, index) => (
          <div
            className="requirement"
            key={requirement}
          >

            <span>
              {String(index + 1).padStart(
                2,
                "0"
              )}
            </span>

            <p>{requirement}</p>

          </div>
        )
      )}

    </div>
  );
}

/* =========================================================
   UNDERGRADUATE
========================================================= */

function UnderGraduate() {
  const requirements = [
    "Original copy of BACC II (G12 National Examination Certificate).",
    "Four (4) copies of 4cm × 6cm photographs.",
    "Completed Application Form and Registration Fee.",
    "Entrance Test.",
    "High School Transcript.",
  ];

  return (
    <section
      id="local-students"
      className="admission-content-section"
    >

      <span className="content-label">
        UNDERGRADUATE ADMISSION
      </span>

      <h2>Under Graduate</h2>

      <p>
        The Asian Institute of Cambodia welcomes
        undergraduate students who have successfully
        completed their secondary education and meet the
        university's admission requirements.
      </p>

      <p>
        Local applicants should prepare the following
        documents and complete the required admission
        procedures.
      </p>

      <RequirementList
        requirements={requirements}
      />

    </section>
  );
}

/* =========================================================
   FOREIGN STUDENTS
========================================================= */

function ForeignStudents() {
  const requirements = [
    "Original High School Diploma with English translation, if the original document is not written in English.",
    "Original Alien Certificate of Registration (ACR) issued by the Ministry of Foreign Affairs or passport.",
    "Personal History Statement.",
    "Completed application form and admission fee of USD 15.00.",
    "Six (6) copies of 4cm × 6cm photographs.",
    "Transcript of records with English translation.",
    "A passing mark in the English language test. In case of poor English comprehension, the student may be required to enroll in an English language program.",
    "Medical health certificate with standard-size chest X-ray.",
  ];

  return (
    <section
      id="foreign-students"
      className="admission-content-section"
    >

      <span className="content-label">
        INTERNATIONAL ADMISSION
      </span>

      <h2>For Foreign Students</h2>

      <p>
        International applicants are welcome to apply to
        the Asian Institute of Cambodia. Foreign students
        should prepare the following documents.
      </p>

      <RequirementList
        requirements={requirements}
      />

      <div className="international-note">

        <span>🌐</span>

        <div>

          <h3>English Language Requirement</h3>

          <p>
            Applicants are expected to demonstrate an
            appropriate level of English language
            comprehension. Students who require additional
            English language support may be asked to take
            special English classes.
          </p>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   GRADUATE SCHOOL
========================================================= */

function GraduateSchool() {
  const admissionRequirements = [
    "Hold a Bachelor's degree in a related field of study from an institution recognized by the government of the country in which the institution is located.",
    "Be proficient in English.",
    "Have at least two years of related working experience.",
    "Pass the written and oral examinations conducted by the Graduate School.",
  ];

  const applicationDocuments = [
    "A completed application form.",
    "An authenticated copy of the Transcript of Record.",
    "Two copies of 3cm × 4cm photographs with any background.",
    "One copy of 4cm × 6cm photograph with any background.",
  ];

  return (
    <section
      id="graduate-schools"
      className="admission-content-section graduate-section"
    >

      <span className="content-label">
        ADVANCED STUDIES
      </span>

      <h2>Graduate School</h2>

      <p>
        The Graduate School provides advanced educational
        opportunities for qualified students who wish to
        continue their academic and professional development.
      </p>

      <p>
        Applicants are expected to meet the academic,
        professional and language requirements established
        by the Graduate School before beginning their
        studies.
      </p>

      {/* GENERAL ADMISSION REQUIREMENTS */}

      <div className="graduate-admission-block">

        <div className="graduate-block-heading">

          <div className="graduate-block-icon">
            🎓
          </div>

          <div>
            <span>
              GRADUATE ADMISSION
            </span>

            <h3>
              General Admission Requirements
            </h3>
          </div>

        </div>

        <p className="graduate-description">
          The applicant should:
        </p>

        <div className="requirements">

          {admissionRequirements.map(
            (requirement, index) => (
              <div
                className="requirement"
                key={requirement}
              >

                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>{requirement}</p>

              </div>
            )
          )}

        </div>

      </div>

      {/* APPLICATION DOCUMENTS */}

      <div className="graduate-admission-block documents-block">

        <div className="graduate-block-heading">

          <div className="graduate-block-icon red">
            📄
          </div>

          <div>
            <span>
              APPLICATION PROCESS
            </span>

            <h3>
              Application Documents
            </h3>
          </div>

        </div>

        <p className="graduate-description">
          The following items must be submitted on the
          date of application:
        </p>

        <div className="requirements">

          {applicationDocuments.map(
            (document, index) => (
              <div
                className="requirement"
                key={document}
              >

                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>{document}</p>

              </div>
            )
          )}

        </div>

      </div>

      {/* IMPORTANT INFORMATION */}

      <div className="graduate-info-box">

        <div className="graduate-info-icon">
          !
        </div>

        <div>

          <h3>
            Important Information
          </h3>

          <p>
            Applicants should ensure that all documents
            submitted for admission are complete and
            properly authenticated where required.
            Candidates must also satisfy the examination
            requirements of the Graduate School.
          </p>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function ContactAdmission() {
  return (
    <section className="admission-contact">

      <div>

        <span>
          NEED HELP?
        </span>

        <h2>
          Have Questions About Admission?
        </h2>

        <p>
          Our admission team is ready to help you with
          application procedures, academic programs and
          admission requirements.
        </p>

      </div>

      <div className="admission-contact-buttons">

        <a href="mailto:info@aic-edu.net">
          ✉ Email Admissions
        </a>

        <a href="tel:+85500000000">
          📞 Contact Us
        </a>

      </div>

    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Admissions() {

  const [
    activeSection,
    setActiveSection,
  ] = useState("regulation");

  function selectSection(id) {

    setActiveSection(id);

    setTimeout(() => {

      const element =
        document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

    }, 50);
  }

  return (
    <main className="admissions-page">

      {/* HERO */}

      <AdmissionsHero />

      {/* BREADCRUMB */}

      <Breadcrumb />

      {/* MAIN */}

      <section className="admission-main">

        <div className="container">

          {/* INTRO */}

          <Introduction />

          <div className="admission-layout">

            {/* SIDEBAR */}

            <AdmissionsSidebar
              activeSection={activeSection}
              setActiveSection={selectSection}
            />

            {/* CONTENT */}

            <div className="admission-content">

              <Regulation />

              <AdmissionSection />

              <UnderGraduate />

              <ForeignStudents />

              <GraduateSchool />

              <ContactAdmission />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
