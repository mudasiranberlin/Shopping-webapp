function Teachers() {
  const events = [
  {
    date: "15",
    month: "SEP",
    title: "New Student Orientation",
    text: "Welcome program for new students joining AIC.",
  },
  {
    date: "22",
    month: "SEP",
    title: "ASEAN Education Conference",
    text: "Connect with educators, researchers and students from across ASEAN.",
  },
  {
    date: "05",
    month: "OCT",
    title: "AIC Student Festival",
    text: "A day of student activities, cultural performances and competitions.",
  },
];
const teachers = [
  {
    name: "Dr. Ahmed Khan",
    role: "Professor of Computer Science",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Professor of Business",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. James Wilson",
    role: "Professor of International Studies",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];
  return (
    <section
      id="teachers"
      className="section teachers"
    >

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            OUR FACULTY
          </span>

          <h2>
            Meet Our Lecturers
          </h2>

          <p>
            Learn from experienced academics
            and professionals.
          </p>

        </div>

        <div className="teacher-grid">

          {teachers.map((teacher) => (

            <div
              className="teacher-card"
              key={teacher.name}
            >

              <div className="teacher-image">

                <img
                  src={teacher.image}
                  alt={teacher.name}
                />

                <div className="teacher-social">

                  <a href="#facebook">
                    f
                  </a>

                  <a href="#twitter">
                    𝕏
                  </a>

                  <a href="#linkedin">
                    in
                  </a>

                </div>

              </div>

              <div className="teacher-info">

                <h3>
                  {teacher.name}
                </h3>

                <p>
                  {teacher.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Teachers