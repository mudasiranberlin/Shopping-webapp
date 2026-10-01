import { Link } from "../../routing";
function Events() {
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
  return (
    <section
      id="events"
      className="section events"
    >

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            NEWS & EVENTS
          </span>

          <h2>
            Upcoming Events
          </h2>

          <p>
            Stay connected with activities,
            conferences and events at AIC.
          </p>

        </div>

        <div className="event-grid">

          {events.map((event) => (

            <article
              className="event-card"
              key={event.title}
            >

              <div className="event-date">

                <strong>
                  {event.date}
                </strong>

                <span>
                  {event.month}
                </span>

              </div>

              <div className="event-content">

                <span>
                  AIC EVENT
                </span>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.text}
                </p>

                <Link to="/contact">
                  View Details →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
export default Events