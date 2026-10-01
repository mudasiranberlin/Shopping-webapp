import { Link } from "../../routing";
import './Reactor.css'

function PageHero({ label="wel", title="wel", description="wel" }) {
  return (
    <>
      <section className="university-page-hero">
        <div className="university-page-hero-overlay">
          <div className="container">
            <span className="page-hero-label">{label}</span>

            <h1>{title}</h1>

            {description && (
              <p>{description}</p>
            )}
          </div>
        </div>
      </section>

      <div className="page-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>{title}</strong>
        </div>
      </div>
    </>
  );
}


/* =========================================================
   WHY NU
========================================================= */



export function WhyNU() {
  return (
    <main className="university-page">

      <PageHero
        label="ABOUT OUR INSTITUTION"
        title="Why NU?"
        description="Discover the values, opportunities and educational environment that make our institution a place to learn, grow and succeed."
      />

      <section className="info-section">
        <div className="container">

          <div className="section-heading-left">
            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2>
              Why Study at
              <span> NU?</span>
            </h2>

            <p>
              Choosing a university is an important decision.
              Our institution is committed to providing students
              with an educational environment that supports
              academic achievement, personal development and
              professional growth.
            </p>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon">🎓</div>
              <h3>Quality Education</h3>
              <p>
                We strive to provide students with quality
                education through dedicated lecturers,
                academic programs and practical learning.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">👨‍🏫</div>
              <h3>Qualified Lecturers</h3>
              <p>
                Students have the opportunity to learn from
                experienced educators who are committed to
                teaching and student development.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🌏</div>
              <h3>International Opportunities</h3>
              <p>
                Academic partnerships and international
                networks help students gain broader exposure
                to regional and global opportunities.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💡</div>
              <h3>Practical Learning</h3>
              <p>
                Our educational approach encourages students
                to connect academic knowledge with practical
                skills and real-world challenges.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Community</h3>
              <p>
                Students become part of an academic community
                where cooperation, respect and social
                responsibility are encouraged.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>Future Development</h3>
              <p>
                We encourage students to develop the skills,
                confidence and knowledge necessary for their
                future careers.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="blue-highlight">
        <div className="container highlight-content">
          <span className="section-label light">
            YOUR FUTURE STARTS HERE
          </span>

          <h2>
            Learn. Grow. Lead.
          </h2>

          <p>
            Our goal is to help every student discover their
            potential and prepare for meaningful participation
            in society.
          </p>

          <a href="/contact" className="page-button">
            Contact Us →
          </a>
        </div>
      </section>

    </main>
  );
}


/* =========================================================
   CONTACT US
========================================================= */



export function ContactUs() {
  return (
    <main className="university-page">

      <PageHero
        label="GET IN TOUCH"
        title="Contact Us"
        description="We are here to answer your questions and provide information about admissions, programs and university life."
      />

      <section className="info-section contact-page-section">
        <div className="container">

          <div className="contact-layout">

            <div className="contact-details">

              <span className="section-label">
                CONTACT INFORMATION
              </span>

              <h2>
                We'd Love to
                <span> Hear From You</span>
              </h2>

              <p>
                If you have questions about our academic programs,
                admissions, campus or other university services,
                please contact us.
              </p>

              <div className="contact-detail">
                <div className="detail-icon">📍</div>

                <div>
                  <h3>Address</h3>
                  <p>
                    Daun Cham Village, Sangkat Kratie,
                    Kratie Town, Kratie Province, Cambodia
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">📞</div>

                <div>
                  <h3>Phone</h3>
                  <p>
                    +855 XX XXX XXX
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">✉</div>

                <div>
                  <h3>Email</h3>
                  <p>
                    info@aic-edu.net
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">🌐</div>

                <div>
                  <h3>Website</h3>
                  <p>
                    www.aic-edu.net
                  </p>
                </div>
              </div>

            </div>

            <ContactForm />

          </div>

        </div>
      </section>

      <section className="map-placeholder">
        <div className="container">
          <div className="map-box">
            <div>
              <span>📍</span>
              <h3>Our Location</h3>
              <p>
                Kratie Town, Kratie Province, Cambodia
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


/* =========================================================
   CONTACT FORM
========================================================= */



function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    alert(
      "Thank you for contacting us. Your message has been received."
    );
  }

  return (
    <form
      className="university-contact-form"
      onSubmit={handleSubmit}
    >

      <h3>Send Us a Message</h3>

      <div className="form-two">
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
      />

      <textarea
        rows="7"
        placeholder="Your Message"
        required
      />

      <button type="submit" className="page-button">
        Send Message →
      </button>

    </form>
  );
}


/* =========================================================
   CAMPUS
========================================================= */



export function Campus() {
  return (
    <main className="university-page">

      <PageHero
        label="OUR CAMPUS"
        title="Campus"
        description="A welcoming academic environment designed to support teaching, learning and student development."
      />

      <section className="info-section">
        <div className="container">

          <div className="image-text-layout">

            <div className="large-page-image">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                alt="University campus"
              />
            </div>

            <div className="page-text">

              <span className="section-label">
                OUR CAMPUS
              </span>

              <h2>
                A Place to
                <span> Learn and Grow</span>
              </h2>

              <p>
                The campus provides an environment where students
                can pursue their studies while participating in
                academic, social and community activities.
              </p>

              <p>
                Located in Kratie Town, the institution benefits
                from its connection with the local community and
                the unique natural and cultural environment of
                Kratie Province.
              </p>

              <p>
                Our campus continues to develop in response to
                the educational needs of students and the
                changing requirements of higher education.
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="grey-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              CAMPUS ENVIRONMENT
            </span>

            <h2>
              Supporting Student Life
            </h2>

          </div>

          <div className="feature-grid">

            <div className="feature-box">
              <span>🏫</span>
              <h3>Academic Environment</h3>
              <p>
                Spaces dedicated to teaching, learning and
                academic development.
              </p>
            </div>

            <div className="feature-box">
              <span>💻</span>
              <h3>Technology</h3>
              <p>
                Access to digital resources and Internet
                connectivity supporting modern learning.
              </p>
            </div>

            <div className="feature-box">
              <span>🌳</span>
              <h3>Community Environment</h3>
              <p>
                A campus environment connected to the local
                community and surrounding region.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   LIBRARY AND FACILITY
========================================================= */



export function LibraryAndFacility() {
  return (
    <main className="university-page">

      <PageHero
        label="STUDENT RESOURCES"
        title="Library and Facility"
        description="Resources and facilities that support students, lecturers and academic activities."
      />

      <section className="info-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              LIBRARY & FACILITIES
            </span>

            <h2>
              Resources for
              <span> Academic Success</span>
            </h2>

            <p>
              The institution recognizes that effective learning
              requires access to appropriate academic resources,
              facilities and technology.
            </p>

          </div>

          <div className="facility-grid">

            <div className="facility-card">
              <div className="facility-icon">
                📚
              </div>

              <h3>
                Library
              </h3>

              <p>
                A learning resource environment supporting
                students in reading, research and academic
                study.
              </p>

              <a href="#library">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                💻
              </div>

              <h3>
                Computer Facilities
              </h3>

              <p>
                Computer and Internet resources that help
                students access digital information and
                educational materials.
              </p>

              <a href="#computer">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                🏫
              </div>

              <h3>
                Classrooms
              </h3>

              <p>
                Learning spaces designed to support lectures,
                discussions, presentations and collaborative
                activities.
              </p>

              <a href="#classrooms">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                🔬
              </div>

              <h3>
                Academic Resources
              </h3>

              <p>
                Educational resources supporting academic
                programs, teaching and research activities.
              </p>

              <a href="#resources">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                👥
              </div>

              <h3>
                Student Areas
              </h3>

              <p>
                Spaces where students can interact, collaborate
                and participate in university activities.
              </p>

              <a href="#students">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                🌐
              </div>

              <h3>
                Internet Access
              </h3>

              <p>
                Internet connectivity helps connect students
                and staff to global academic information.
              </p>

              <a href="#internet">
                Learn More →
              </a>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   GOVERNMENT RECOGNITION
========================================================= */

export function GovernmentRecognition() {
  return (
    <main className="university-page">

      <PageHero
        label="OFFICIAL STATUS"
        title="Government Recognition"
        description="Our institution's development and recognition within Cambodia's higher education system."
      />

      <section className="info-section">

        <div className="container">

          <div className="recognition-box">

            <div className="recognition-icon">
              🏛️
            </div>

            <div>

              <span className="section-label">
                GOVERNMENT RECOGNITION
              </span>

              <h2>
                Recognized as a
                <span> Higher Education Institution</span>
              </h2>

              <p>
                Asian Institute of Cambodia was established on
                August 17, 2011 as a private higher education
                institution in Kratie Province.
              </p>

              <p>
                The institution received a Sub-Decree from the
                Royal Government of Cambodia on September 26,
                2012.
              </p>

              <p>
                AIC is committed to operating in accordance
                with applicable Cambodian regulations and
                maintaining its commitment to quality education,
                professional development and responsible
                institutional management.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="timeline-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              OUR HISTORY
            </span>

            <h2>
              Institutional Milestones
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                2011
              </div>

              <div className="timeline-content">
                <h3>
                  Institution Established
                </h3>

                <p>
                  Asian Institute of Cambodia was established
                  in Kratie Province.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">
                2012
              </div>

              <div className="timeline-content">
                <h3>
                  Government Recognition
                </h3>

                <p>
                  AIC received a Sub-Decree from the Royal
                  Government of Cambodia.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">
                Today
              </div>

              <div className="timeline-content">
                <h3>
                  Continuing Development
                </h3>

                <p>
                  The institution continues to develop its
                  academic programs, partnerships, research
                  activities and community engagement.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   INTERNATIONALIZATION
========================================================= */

export function Internationalization() {
  return (
    <main className="university-page">

      <PageHero
        label="GLOBAL CONNECTION"
        title="Internationalization"
        description="Building international academic relationships and connecting Cambodia with the wider ASEAN community."
      />

      <section className="info-section">

        <div className="container">

          <div className="image-text-layout reverse">

            <div className="page-text">

              <span className="section-label">
                INTERNATIONALIZATION
              </span>

              <h2>
                Connected to the
                <span> ASEAN Community</span>
              </h2>

              <p>
                Despite its relatively young history, Asian
                Institute of Cambodia has worked to build and
                expand networks with universities and higher
                education institutions in ASEAN.
              </p>

              <p>
                Through international cooperation, students
                and faculty can gain exposure to different
                educational systems, cultures, academic ideas
                and professional opportunities.
              </p>

              <p>
                AIC believes internationalization is an
                important part of preparing students to
                participate in an increasingly connected world.
              </p>

            </div>

            <div className="large-page-image">

              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"
                alt="International students"
              />

            </div>

          </div>

        </div>

      </section>

      <section className="grey-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              INTERNATIONAL NETWORKS
            </span>

            <h2>
              Regional Cooperation
            </h2>

          </div>

          <div className="international-grid">

            <div className="international-card">

              <span>01</span>

              <h3>
                Passage to ASEAN
              </h3>

              <p>
                AIC became a member of the Passage to ASEAN
                (P2A), supporting connections among higher
                education institutions across ASEAN.
              </p>

            </div>

            <div className="international-card">

              <span>02</span>

              <h3>
                ACNET-EngTech
              </h3>

              <p>
                AIC has participated in the ACNET-EngTech
                network involving higher education institutions
                from ASEAN and China.
              </p>

            </div>

            <div className="international-card">

              <span>03</span>

              <h3>
                Academic Partnerships
              </h3>

              <p>
                The institution continues to seek cooperation
                with universities, colleges and organizations
                for mutual academic development.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   MISSION VISION AND GOAL
========================================================= */

export function MissionVisionGoal() {
  return (
    <main className="university-page">

      <PageHero
        label="OUR DIRECTION"
        title="Mission Vision and Goal"
        description="Our commitment to education, human resource development, research and community service."
      />

      <section className="info-section">

        <div className="container">

          <div className="mission-grid">

            <div className="mission-card vision-card">

              <div className="mission-icon">
                👁️
              </div>

              <span>
                OUR VISION
              </span>

              <h2>
                A Better Future
              </h2>

              <p>
                To contribute to the development of capable,
                responsible and globally minded human resources
                through quality education and academic
                cooperation.
              </p>

            </div>

            <div className="mission-card">

              <div className="mission-icon">
                🎯
              </div>

              <span>
                OUR MISSION
              </span>

              <h2>
                Education & Development
              </h2>

              <p>
                To provide students with academic knowledge,
                practical skills and opportunities for personal
                and professional development.
              </p>

              <p>
                To encourage research, innovation, international
                cooperation and community participation.
              </p>

            </div>

            <div className="mission-card goal-card">

              <div className="mission-icon">
                🚀
              </div>

              <span>
                OUR GOALS
              </span>

              <h2>
                Creating Opportunities
              </h2>

              <p>
                To continuously improve academic quality,
                strengthen partnerships and develop an
                educational environment that serves students
                and society.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="blue-highlight">

        <div className="container highlight-content">

          <span className="section-label light">
            OUR COMMITMENT
          </span>

          <h2>
            Developing Human Resources
            for a Changing World
          </h2>

          <p>
            We believe education is one of the most important
            foundations for individual opportunity, social
            development and national progress.
          </p>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   STRUCTURE OF NU
========================================================= */

export function StructureOfNU() {
  return (
    <main className="university-page">

      <PageHero
        label="ORGANIZATION"
        title="Structure Of NU"
        description="An academic and administrative structure designed to support effective university management and education."
      />

      <section className="info-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              ORGANIZATIONAL STRUCTURE
            </span>

            <h2>
              Structure of
              <span> NU</span>
            </h2>

            <p>
              The institution's organizational structure brings
              together academic leadership, administration,
              colleges, faculty members and support services.
            </p>

          </div>

          <div className="organization-chart">

            <div className="org-level">

              <div className="org-box main-org">
                <strong>
                  Board / Governing Body
                </strong>

                <span>
                  Institutional Governance
                </span>
              </div>

            </div>

            <div className="org-line"></div>

            <div className="org-level">

              <div className="org-box rector-org">
                <strong>
                  Rector / President
                </strong>

                <span>
                  Institutional Leadership
                </span>
              </div>

            </div>

            <div className="org-line"></div>

            <div className="org-columns">

              <div className="org-box">
                <strong>
                  Vice Rector
                </strong>

                <span>
                  Academic & Administration
                </span>
              </div>

              <div className="org-box">
                <strong>
                  Academic Affairs
                </strong>

                <span>
                  Programs & Faculty
                </span>
              </div>

              <div className="org-box">
                <strong>
                  Administration
                </strong>

                <span>
                  Institutional Services
                </span>
              </div>

            </div>

            <div className="org-line"></div>

            <div className="org-columns">

              <div className="org-box small-org">
                <strong>
                  Colleges
                </strong>

                <span>
                  Academic Programs
                </span>
              </div>

              <div className="org-box small-org">
                <strong>
                  Research
                </strong>

                <span>
                  Research & Innovation
                </span>
              </div>

              <div className="org-box small-org">
                <strong>
                  Student Services
                </strong>

                <span>
                  Student Support
                </span>
              </div>

              <div className="org-box small-org">
                <strong>
                  International Relations
                </strong>

                <span>
                  Global Partnerships
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   MESSAGE OF VICE RECTOR
========================================================= */

export function MessageOfViceRector() {
  return (
    <main className="university-page">

      <PageHero
        label="LEADERSHIP MESSAGE"
        title="Message Of Vice Rector"
        description="A message from the Vice Rector to students, faculty, partners and the wider university community."
      />

      <section className="info-section vice-rector-section">

        <div className="container">

          <div className="vice-message-layout">

            <div className="vice-photo">

              <div className="vice-photo-placeholder">
                <span>👤</span>

                <p>
                  Vice Rector
                </p>
              </div>

            </div>

            <div className="vice-message">

              <span className="section-label">
                MESSAGE FROM THE VICE RECTOR
              </span>

              <h2>
                Welcome to
                <span> Our Academic Community</span>
              </h2>

              <p>
                Dear Students, Faculty Members, Staff,
                Partners and Friends,
              </p>

              <p>
                It is my great pleasure to welcome you to
                our institution. Higher education is not only
                about obtaining a qualification; it is also
                about developing knowledge, character,
                confidence and a sense of responsibility.
              </p>

              <p>
                At our institution, we are committed to creating
                an educational environment where students can
                develop their abilities and prepare themselves
                for their future careers and responsibilities
                in society.
              </p>

              <p>
                We encourage our students to be curious,
                responsible and open to new ideas. We also
                believe that cooperation among students,
                lecturers, universities, communities and
                international partners is essential for
                sustainable development.
              </p>

              <p>
                As Cambodia and the wider ASEAN region continue
                to change, our graduates need more than
                academic knowledge. They need communication
                skills, creativity, critical thinking,
                professional competence and the ability to
                work with people from different backgrounds.
              </p>

              <p>
                We will continue working to strengthen our
                academic programs, support our faculty and
                staff, encourage research and expand
                opportunities for international cooperation.
              </p>

              <p>
                I encourage every student to make full use of
                your time at the university. Learn from your
                lecturers, learn from your classmates, take
                part in activities and contribute positively
                to your community.
              </p>

              <p>
                Together, we can build a stronger academic
                community and contribute to the development
                of Cambodia and the ASEAN region.
              </p>

              <p>
                With best wishes for your academic journey
                and future success.
              </p>

              <div className="vice-signature">

                <strong>
                  Vice Rector
                </strong>

                <span>
                  Asian Institute of Cambodia
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="blue-highlight">

        <div className="container highlight-content">

          <span className="section-label light">
            OUR SHARED FUTURE
          </span>

          <h2>
            One Community, One Destiny
          </h2>

          <p>
            Working together to develop good human resources
            in a global family.
          </p>

        </div>

      </section>

    </main>
  );
}

export default function Reactor() {
  return (
    <>
      <PageHero />

      <MessageOfViceRector/>
      <StructureOfNU/>
      <MissionVisionGoal/>
      <Internationalization/>
      <MissionVisionGoal/>

      <GovernmentRecognition/> <LibraryAndFacility/> <Campus/> <ContactForm/> <ContactUs/> <WhyNU/>

      
    </>
  );
}