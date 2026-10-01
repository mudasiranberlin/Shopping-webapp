import { Link } from "../../routing";
import "./Collaborationss.css";

const mouPartners = [
  {
    name: "Yangzhou University",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "VIT University",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "University Tunku Abdul Rahman",
    country: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "University of Cambridge",
    country: "UK",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Universiti Teknologi Malaysia",
    country: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Universiti Malaysia Perlis",
    country: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Universitas Tarumanagara",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1561089489-f13d5e730d72?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Universitas Negeri Jakarta",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Universitas Gorontalo",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Swami Ramanand Teerth Marathwada University",
    country: "Nanded, India",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Sichuan University",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Siam University",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Providence University",
    country: "Taiwan",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Pai Chai University",
    country: "Korea",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Northumbria University",
    country: "England",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Kansai University of International Studies",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Gyeongju National University",
    country: "Korea",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Guangdong University of Foreign Studies",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Galilee Institute",
    country: "Israel",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Dongseo University",
    country: "Korea",
    image:
      "https://images.unsplash.com/photo-1561089489-f13d5e730d72?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "De La Salle University, Lipa",
    country: "Philippines",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Christian University",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Ateneo De Zambonga University",
    country: "Philippines",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Assumption University",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Active People's Microfinance Institution Ltd",
    country: "Cambodia",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=90",
  },
];

const aupfEvents = [
  {
    title: "10th AUPF 2011",
    location: "VIT, India",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "9th AUPF 2010",
    location: "Norton University, Cambodia",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "8th AUPF 2009",
    location: "Universitas Negeri Jakarta, Indonesia",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "7th AUPF 2008",
    location: "Anhui University, China",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "6th AUPF 2007",
    location: "Providence University, Taiwan",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "5th AUPF 2006",
    location: "Bangkok University, Thailand",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=90",
  },
];

const governingCouncil = [
  {
    title: "13th GCM 2011",
    location: "G111 Rm, Main Building, NU, New Campus",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "12th GCM 2010",
    location: "G111 Rm, Main Building NU, New Campus",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "11th GCM 2009",
    location: "Sunway Hotel, Phnom Penh, Cambodia",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "10th GCM 2008",
    location: "AS1 Rm, NU, Old Campus",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "9th GCM 2007",
    location: "AS1 Rm, NU, Old Campus",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=90",
  },
];

function PageHero({ label, title, text }) {
  return (
    <section className="collaboration-hero">
      <div className="collaboration-hero-overlay">
        <div className="container">
          <span>{label}</span>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

function Breadcrumb({ current }) {
  return (
    <div className="collaboration-breadcrumb">
      <div className="container">
        <Link to="/">Home</Link>
        <span>›</span>
        <a href="#collaborations">Collaborations</a>
        <span>›</span>
        <strong>{current}</strong>
      </div>
    </div>
  );
}

function SectionHeading({ label, title, text }) {
  return (
    <div className="collaboration-heading">
      <span>{label}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function MOUPage() {
  return (
    <main>
      <PageHero
        label="COLLABORATIONS"
        title="Memorandum of Understanding"
        text="Building strong academic partnerships and international cooperation with universities and institutions around the world."
      />

      <Breadcrumb current="MOU" />

      <section className="collaboration-section">
        <div className="container">
          <SectionHeading
            label="INTERNATIONAL PARTNERS"
            title="Our MOU Partners"
            text="The Asian Institute of Cambodia has established academic and professional relationships with universities and institutions across Asia and beyond."
          />

          <div className="partner-grid">
            {mouPartners.map((partner, index) => (
              <article className="partner-card" key={partner.name}>
                <div className="partner-image">
                  <img
                    src={partner.image}
                    alt={partner.name}
                  />

                  <div className="partner-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="partner-content">
                  <span>{partner.country}</span>
                  <h3>{partner.name}</h3>
                  <p>
                    Academic collaboration and international
                    partnership.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function AUPFPage() {
  return (
    <main>
      <PageHero
        label="COLLABORATIONS"
        title="AUPF"
        text="Asian University Presidents' Forum and international academic cooperation."
      />

      <Breadcrumb current="AUPF" />

      <section className="collaboration-section">
        <div className="container">
          <SectionHeading
            label="AUPF ACTIVITIES"
            title="Asian University Presidents' Forum"
            text="AIC has participated in important AUPF meetings and international academic activities with universities across Asia."
          />

          <div className="event-gallery">
            {aupfEvents.map((event) => (
              <article className="large-photo-card" key={event.title}>
                <div className="large-photo">
                  <img
                    src={event.image}
                    alt={event.title}
                  />
                </div>

                <div className="large-photo-info">
                  <span>AUPF MEETING</span>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function GoverningCouncilPage() {
  return (
    <main>
      <PageHero
        label="COLLABORATIONS"
        title="Governing Council"
        text="A record of Governing Council meetings and institutional leadership activities."
      />

      <Breadcrumb current="Governing Council" />

      <section className="collaboration-section">
        <div className="container">
          <SectionHeading
            label="GOVERNING COUNCIL"
            title="Governing Council Meetings"
            text="Explore the history of Governing Council meetings held at different locations and campuses."
          />

          <div className="event-gallery council-gallery">
            {governingCouncil.map((meeting) => (
              <article className="large-photo-card" key={meeting.title}>
                <div className="large-photo">
                  <img
                    src={meeting.image}
                    alt={meeting.title}
                  />
                </div>

                <div className="large-photo-info">
                  <span>GOVERNING COUNCIL</span>
                  <h3>{meeting.title}</h3>
                  <p>{meeting.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export {
  MOUPage,
  AUPFPage,
  GoverningCouncilPage,
};

export default MOUPage;


