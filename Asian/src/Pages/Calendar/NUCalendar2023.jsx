import { Link } from "../../routing";
import "./NUCalendar2023.css";

const universityEvents = [
  {
    month: "JAN",
    date: "09",
    title: "New Academic Year Opening",
    category: "ACADEMIC",
    icon: "🎓",
    description:
      "Opening of the new academic year and welcoming students back to Norton University.",
  },
  {
    month: "JAN",
    date: "16",
    title: "New Student Orientation",
    category: "STUDENT LIFE",
    icon: "👋",
    description:
      "Orientation activities for newly enrolled students and introduction to university life.",
  },
  {
    month: "FEB",
    date: "10",
    title: "Academic Excellence Seminar",
    category: "ACADEMIC",
    icon: "📚",
    description:
      "Academic seminar focusing on learning strategies, research and professional development.",
  },
  {
    month: "MAR",
    date: "08",
    title: "International Women's Day",
    category: "UNIVERSITY EVENT",
    icon: "🌷",
    description:
      "University activities celebrating women's achievements, education and leadership.",
  },
  {
    month: "MAR",
    date: "24",
    title: "Student Research Conference",
    category: "RESEARCH",
    icon: "🔬",
    description:
      "Students and faculty present research projects, academic papers and innovative ideas.",
  },
  {
    month: "APR",
    date: "03",
    title: "Mid-Semester Examination",
    category: "EXAMINATION",
    icon: "📝",
    description:
      "Mid-semester examination period for undergraduate and graduate students.",
  },
  {
    month: "APR",
    date: "21",
    title: "Khmer New Year Celebration",
    category: "CULTURAL EVENT",
    icon: "🇰🇭",
    description:
      "University community celebration of Khmer New Year with cultural activities.",
  },
  {
    month: "MAY",
    date: "19",
    title: "Academic Awards Ceremony",
    category: "AWARDS",
    icon: "🏆",
    description:
      "Recognition ceremony honoring outstanding students, academic achievements and faculty contributions.",
  },
  {
    month: "JUN",
    date: "09",
    title: "Career & Internship Fair",
    category: "CAREER",
    icon: "💼",
    description:
      "Students meet employers and explore internship, employment and career opportunities.",
  },
  {
    month: "JUN",
    date: "23",
    title: "Graduation Ceremony",
    category: "GRADUATION",
    icon: "🎓",
    description:
      "Norton University graduation ceremony celebrating students completing their academic programs.",
    featured: true,
  },
  {
    month: "JUL",
    date: "07",
    title: "Faculty Development Workshop",
    category: "FACULTY",
    icon: "👨‍🏫",
    description:
      "Professional development activities for lecturers and academic staff.",
  },
  {
    month: "AUG",
    date: "18",
    title: "International Partnership Forum",
    category: "COLLABORATION",
    icon: "🌏",
    description:
      "Academic and institutional partners meet to discuss international collaboration and opportunities.",
  },
  {
    month: "SEP",
    date: "04",
    title: "New Student Orientation",
    category: "STUDENT LIFE",
    icon: "🎒",
    description:
      "Orientation and campus introduction for students beginning a new academic program.",
  },
  {
    month: "SEP",
    date: "22",
    title: "University Sports Day",
    category: "STUDENT LIFE",
    icon: "🏅",
    description:
      "Annual sports and recreational activities bringing students, faculty and staff together.",
  },
  {
    month: "OCT",
    date: "06",
    title: "Annual Research Exhibition",
    category: "RESEARCH",
    icon: "💡",
    description:
      "Exhibition featuring student projects, research activities and innovative academic work.",
  },
  {
    month: "OCT",
    date: "20",
    title: "Student Leadership Awards",
    category: "AWARDS",
    icon: "🏆",
    description:
      "Recognition of students who demonstrate leadership, service and contribution to university life.",
  },
  {
    month: "NOV",
    date: "10",
    title: "International Education Conference",
    category: "CONFERENCE",
    icon: "🌐",
    description:
      "Academic conference bringing together educators, researchers, students and institutional partners.",
  },
  {
    month: "NOV",
    date: "24",
    title: "Graduation Rehearsal",
    category: "GRADUATION",
    icon: "🎓",
    description:
      "Official graduation rehearsal and preparation for graduating students.",
  },
  {
    month: "DEC",
    date: "01",
    title: "Graduation Ceremony",
    category: "GRADUATION",
    icon: "🎓",
    description:
      "Annual graduation ceremony celebrating the achievements of graduating students.",
    featured: true,
  },
  {
    month: "DEC",
    date: "15",
    title: "Annual University Awards Ceremony",
    category: "AWARDS",
    icon: "🏆",
    description:
      "Annual ceremony recognizing outstanding academic, research, leadership and community achievements.",
    featured: true,
  },
  {
    month: "DEC",
    date: "22",
    title: "End of Academic Year",
    category: "ACADEMIC",
    icon: "📅",
    description:
      "Completion of the academic year and preparation for the next academic session.",
  },
];

function CalendarHero() {
  return (
    <section className="nu-calendar-hero">
      <div className="nu-calendar-hero-overlay">
        <div className="container">

          <span className="nu-calendar-label">
            NORTON UNIVERSITY
          </span>

          <h1>NU Calendar 2023</h1>

          <p>
            Academic activities, university events,
            graduation ceremonies, awards and important
            dates for the 2023 academic year.
          </p>

        </div>
      </div>
    </section>
  );
}

function Breadcrumb() {
  return (
    <div className="nu-calendar-breadcrumb">

      <div className="container">

        <Link to="/">Home</Link>

        <span>›</span>

        <Link to="/calendar">Calendar</Link>

        <span>›</span>

        <strong>NU Calendar 2023</strong>

      </div>

    </div>
  );
}

function CalendarIntroduction() {
  return (
    <section className="nu-calendar-intro">

      <div className="container">

        <div className="calendar-intro-content">

          <span className="section-label">
            UNIVERSITY CALENDAR
          </span>

          <h2>
            Norton University
            <span> Calendar 2023</span>
          </h2>

          <p>
            The NU Calendar provides students, faculty,
            staff and partners with an overview of important
            academic activities and university events
            throughout the year.
          </p>

          <p>
            The calendar includes academic activities,
            examinations, student events, research
            activities, graduation ceremonies, award
            ceremonies and major university programs.
          </p>

        </div>

        <div className="calendar-year-box">

          <strong>2023</strong>

          <span>
            UNIVERSITY
            <br />
            CALENDAR
          </span>

        </div>

      </div>

    </section>
  );
}

function EventCard({ event }) {
  return (
    <article
      className={
        event.featured
          ? "nu-event-card featured"
          : "nu-event-card"
      }
    >

      <div className="event-date-box">

        <span>{event.month}</span>

        <strong>{event.date}</strong>

      </div>

      <div className="event-icon">
        {event.icon}
      </div>

      <div className="event-details">

        <span className="event-category">
          {event.category}
        </span>

        <h3>{event.title}</h3>

        <p>{event.description}</p>

      </div>

      {event.featured && (
        <div className="featured-event">
          IMPORTANT
        </div>
      )}

    </article>
  );
}

function UniversityEvents() {
  return (
    <section className="nu-events">

      <div className="container">

        <div className="nu-events-heading">

          <div>

            <span className="section-label">
              IMPORTANT DATES
            </span>

            <h2>
              University Events
            </h2>

          </div>

          <div className="events-total">
            <strong>{universityEvents.length}</strong>
            <span>Events</span>
          </div>

        </div>

        <div className="nu-event-list">

          {universityEvents.map((event, index) => (
            <EventCard
              event={event}
              key={`${event.title}-${index}`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

function CalendarHighlights() {
  return (
    <section className="calendar-highlights">

      <div className="container">

        <div className="calendar-highlight-grid">

          <div>
            <span>🎓</span>
            <strong>Graduation</strong>
            <p>
              Celebrate the achievements of our
              graduating students.
            </p>
          </div>

          <div>
            <span>🏆</span>
            <strong>Awards</strong>
            <p>
              Recognizing academic excellence,
              leadership and achievement.
            </p>
          </div>

          <div>
            <span>🔬</span>
            <strong>Research</strong>
            <p>
              Conferences, exhibitions and
              research activities.
            </p>
          </div>

          <div>
            <span>🌏</span>
            <strong>Community</strong>
            <p>
              Cultural, student and international
              university activities.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default function NUCalendar2023() {
  return (
    <main className="nu-calendar-page">

      <CalendarHero />

      <Breadcrumb />

      <CalendarIntroduction />

      <CalendarHighlights />

      <UniversityEvents />

    </main>
  );
}
