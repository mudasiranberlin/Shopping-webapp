function About() {
  return (
    <section
      id="about"
      className="section about"
    >

      <div className="container about-grid">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85"
            alt="ASEAN Institute of Cambodia campus"
          />

          <div className="experience-box">

            <strong>20+</strong>

            <span>
              Years of Education
            </span>

          </div>

        </div>

        <div className="about-content">

          <span className="section-label">
            ABOUT AIC
          </span>

          <h2>
            Building Knowledge.
            <span>
              Creating Leaders.
            </span>
          </h2>

          <p>
            ASEAN Institute of Cambodia is an
            educational institution dedicated to
            academic excellence, professional
            development and the advancement of
            Cambodian and ASEAN society.
          </p>

          <p>
            We provide students with knowledge,
            practical skills and opportunities to
            prepare them for successful careers
            and responsible leadership.
          </p>

          <div className="about-features">

            <div>
              <span>✓</span>
              <p>Qualified Lecturers</p>
            </div>

            <div>
              <span>✓</span>
              <p>Modern Learning</p>
            </div>

            <div>
              <span>✓</span>
              <p>Practical Education</p>
            </div>

            <div>
              <span>✓</span>
              <p>ASEAN Opportunities</p>
            </div>

          </div>

          <a
            href="#history"
            className="btn btn-primary"
          >
            Learn More
          </a>

        </div>

      </div>

    </section>
  );
}
export default About