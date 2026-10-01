import { Link } from "../../routing";
function Programs() {
    const programs = [
  {
    icon: "💻",
    title: "Computer Science",
    description:
      "Study programming, software development, information technology and modern digital systems.",
  },
  {
    icon: "📊",
    title: "Business Administration",
    description:
      "Develop knowledge in business management, accounting, marketing and entrepreneurship.",
  },
  {
    icon: "🌐",
    title: "International Relations",
    description:
      "Explore international cooperation, diplomacy, ASEAN studies and global affairs.",
  },
  {
    icon: "⚖️",
    title: "Law",
    description:
      "Study legal systems, regulations, justice and professional legal practice.",
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "Prepare for a career in education through teaching, leadership and educational development.",
  },
  {
    icon: "📚",
    title: "Social Sciences",
    description:
      "Explore society, culture, communication, development and human behavior.",
  },
];
  return (
    <section
      id="programs"
      className="section courses"
    >

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            ACADEMIC PROGRAMS
          </span>

          <h2>
            Explore Our Programs
          </h2>

          <p>
            Discover academic programs designed
            to develop your knowledge, skills and
            professional future.
          </p>

        </div>

        <div className="course-grid">

          {programs.map((program) => (

            <div
              className="course-card"
              key={program.title}
            >

              <div className="course-icon">
                {program.icon}
              </div>

              <h3>
                {program.title}
              </h3>

              <p>
                {program.description}
              </p>

              <Link to="/contact">
                View Program →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
export default Programs