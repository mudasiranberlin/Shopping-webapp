import { Link } from "../../routing";
import { useState } from "react";
import "./Collaborations.css";

const collaborationMenu = [
  {
    id: "mou",
    title: "MOU",
  },
  {
    id: "aupf",
    title: "AUPF",
  },
  {
    id: "governing-council",
    title: "Governing Council",
  },
];

const mouPartners = [
  {
    name: "Yangzhou University",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "VIT University",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "University Tunku Abdul Rahman",
    country: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "University of Cambridge",
    country: "UK",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Universiti Teknologi Malaysia",
    country: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Universiti Malaysia Perlis",
    country: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Universitas Tarumanagara",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Universitas Negeri Jakarta",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Universitas Gorontalo",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Swami Ramanand Teerth Marathwada University, Nanded",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sichuan University",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Siam University",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Providence University",
    country: "Taiwan",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Pai Chai University",
    country: "Korea",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Northumbria University",
    country: "England",
    image:
      "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kansai University of International Studies",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Gyeongju National University",
    country: "Korea",
    image:
      "https://images.unsplash.com/photo-1538485399081-7c897f3aefec?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Guangdong University of Foreign Studies",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Galilee Institute",
    country: "Israel",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Dongseo University",
    country: "Korea",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "De La Salle University, Lipa",
    country: "Philippines",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Christian University",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Ateneo De Zamboanga University",
    country: "Philippines",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Assumption University",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Active People's Microfinance Institution Ltd.",
    country: "Cambodia",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80",
  },
];

const aupfEvents = [
  {
    year: "2011",
    title: "10th AUPF",
    location: "VIT, India",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2010",
    title: "9th AUPF",
    location: "Norton University, Cambodia",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2009",
    title: "8th AUPF",
    location: "Universitas Negeri Jakarta, Indonesia",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2008",
    title: "7th AUPF",
    location: "Anhui University, China",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2007",
    title: "6th AUPF",
    location: "Providence University, Taiwan",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2006",
    title: "5th AUPF",
    location: "Bangkok University, Thailand",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1000&q=85",
  },
];

const councilMeetings = [
  {
    year: "2011",
    title: "13th GCM",
    location: "G111 Rm, Main Building, NU, New Campus",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2010",
    title: "12th GCM",
    location: "G111 Rm, Main Building NU, New Campus",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2009",
    title: "11th GCM",
    location: "Sunway Hotel, Phnom Penh, Cambodia",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2008",
    title: "10th GCM",
    location: "AS1 Rm, NU, Old Campus",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",
  },
  {
    year: "2007",
    title: "9th GCM",
    location: "AS1 Rm, NU, Old Campus",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
];

function Hero() {
  return (
    <section className="collaboration-hero">
      <div className="collaboration-overlay">
        <div className="container">
          <span>ASIAN INSTITUTE OF CAMBODIA</span>

          <h1>Collaborations</h1>

          <p>
            Connecting AIC with universities, institutions
            and academic communities across the world.
          </p>
        </div>
      </div>
    </section>
  );
}

function Breadcrumb({ activeSection }) {
  const title =
    activeSection === "mou"
      ? "MOU"
      : activeSection === "aupf"
      ? "AUPF"
      : "Governing Council";

  return (
    <div className="collaboration-breadcrumb">
      <div className="container">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Collaborations</span>
        <span>/</span>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

function Sidebar({
  activeSection,
  setActiveSection,
}) {
  return (
    <aside className="collaboration-sidebar">

      <div className="collaboration-sidebar-heading">
        <span>COLLABORATIONS</span>
        <h3>AUPF</h3>
      </div>

      <nav>
        {collaborationMenu.map((item) => (
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

function Introduction() {
  return (
    <section className="collaboration-introduction">

      <span className="section-label">
        INTERNATIONAL RELATIONS
      </span>

      <h2>
        Connecting
        <span> Global Communities</span>
      </h2>

      <p>
        The Asian Institute of Cambodia is committed to
        developing strong academic and institutional
        relationships with universities and organizations
        throughout Asia and around the world.
      </p>

      <p>
        Through international collaboration, AIC supports
        academic exchange, research, professional
        development, institutional cooperation and
        opportunities for students and faculty.
      </p>

      <div className="collaboration-stats">

        <div>
          <strong>25+</strong>
          <span>Partner Institutions</span>
        </div>

        <div>
          <strong>10+</strong>
          <span>Countries</span>
        </div>

        <div>
          <strong>Global</strong>
          <span>Academic Network</span>
        </div>

      </div>

    </section>
  );
}

function MOUPage() {
  return (
    <section className="collaboration-content">

      <span className="content-label">
        MEMORANDUM OF UNDERSTANDING
      </span>

      <h2>Our MOU Partners</h2>

      <p className="content-lead">
        The Asian Institute of Cambodia maintains
        partnerships with universities and organizations
        from different countries. These partnerships
        encourage academic cooperation, knowledge exchange,
        research and institutional development.
      </p>

      <div className="partner-grid">

        {mouPartners.map((partner, index) => (
          <article
            className="partner-photo-card"
            key={partner.name}
          >

            <div className="partner-photo">

              <img
                src={partner.image}
                alt={partner.name}
              />

              <div className="partner-number">
                {String(index + 1).padStart(2, "0")}
              </div>

            </div>

            <div className="partner-photo-content">

              <span>
                {partner.country}
              </span>

              <h3>
                {partner.name}
              </h3>

              <a href="#contact">
                Partnership Details →
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

function AUPFPage() {
  return (
    <section className="collaboration-content">

      <span className="content-label">
        ASIAN UNIVERSITY PRESIDENTS' FORUM
      </span>

      <h2>AUPF</h2>

      <p className="content-lead">
        The Asian University Presidents' Forum provides
        opportunities for university leaders and academic
        institutions to meet, exchange ideas and strengthen
        cooperation across Asia.
      </p>

      <div className="event-introduction">

        <div>
          <strong>5+</strong>
          <span>Historical AUPF Meetings</span>
        </div>

        <p>
          AIC has participated in and supported regional
          academic cooperation through the AUPF network,
          bringing together universities and educational
          leaders from across Asia.
        </p>

      </div>

      <div className="event-grid">

        {aupfEvents.map((event) => (
          <article
            className="collaboration-event-card"
            key={event.title}
          >

            <div className="event-image">

              <img
                src={event.image}
                alt={event.title}
              />

              <div className="event-year">
                {event.year}
              </div>

            </div>

            <div className="event-card-content">

              <span>
                AUPF MEETING
              </span>

              <h3>
                {event.title}
              </h3>

              <p>
                📍 {event.location}
              </p>

              <a href="#contact">
                View Event →
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

function GoverningCouncilPage() {
  return (
    <section className="collaboration-content">

      <span className="content-label">
        GOVERNING COUNCIL
      </span>

      <h2>Governing Council Meetings</h2>

      <p className="content-lead">
        The Governing Council meetings provide an
        important platform for university leaders and
        representatives to discuss institutional
        development, academic cooperation and future
        directions.
      </p>

      <div className="council-timeline">

        {councilMeetings.map((meeting, index) => (
          <article
            className="council-card"
            key={meeting.title}
          >

            <div className="council-image">

              <img
                src={meeting.image}
                alt={meeting.title}
              />

              <div className="council-year">
                {meeting.year}
              </div>

            </div>

            <div className="council-content">

              <span>
                GOVERNING COUNCIL MEETING
              </span>

              <h3>
                {meeting.title}
              </h3>

              <p>
                {meeting.location}
              </p>

              <a href="#contact">
                Meeting Details →
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

function ContactCTA() {
  return (
    <section className="collaboration-cta">

      <div>

        <span>
          INTERNATIONAL COOPERATION
        </span>

        <h2>
          Interested in Working With AIC?
        </h2>

        <p>
          We welcome universities, organizations and
          institutions interested in developing academic
          and professional partnerships.
        </p>

      </div>

      <a href="mailto:info@aic-edu.net">
        ✉ Contact Us
      </a>

    </section>
  );
}

export default function Collaborations() {

  const [activeSection, setActiveSection] =
    useState("mou");

  return (
    <main className="collaborations-page">

      <Hero />

      <Breadcrumb
        activeSection={activeSection}
      />

      <section className="collaboration-main">

        <div className="container">

          <Introduction />

          <div className="collaboration-layout">

            <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

            <div className="collaboration-content-wrapper">

              {activeSection === "mou" && (
                <MOUPage />
              )}

              {activeSection === "aupf" && (
                <AUPFPage />
              )}

              {activeSection ===
                "governing-council" && (
                <GoverningCouncilPage />
              )}

              <ContactCTA />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
