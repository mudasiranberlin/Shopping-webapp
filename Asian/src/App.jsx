import "./App.css";
import { Router, RouteView, Link } from "./routing";

import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Hero from "./Pages/Hero/Hero";
import Stats from "./Pages/Stats/Stats";
import About from "./Pages/About/About";
import Programs from "./Pages/Programs/Programs";
import CallToAction from "./Pages/CallToAction/CallToAction";
import Teachers from "./Pages/Teacher/Teachers";
import Events from "./Pages/Events/Events";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Contact from "./Pages/Contact/Contact";
import Vision from "./Pages/Vision/Vision";
import Academics from "./Pages/Academic/Academics";
import CollegeSciences from "./Pages/Academic2/Acad";
import Admissions from "./Pages/Admission/undergraduate";
import Collaborations from "./Pages/Collaborations/Collaborations";
import MOUPage from "./Pages/Collaborations/Collaborationss";
import Publication from "./Pages/Publication/Publication";
import AcademicPrograms from "./Pages/Graduate/AcademicPrograms";
import StudentServices from "./Pages/StudentServices/StudentServices";
import NUCalendar2023 from "./Pages/Calendar/NUCalendar2023";
import {
  WhyNU, Campus, LibraryAndFacility, GovernmentRecognition,
  Internationalization, MissionVisionGoal, StructureOfNU,
  MessageOfViceRector
} from "./Pages/Reactor/Reactor";
import CollegeSciencesAlt from "./Pages/Academic3/Acad";

function Layout({ children }) {
  return <><Header />{children}<Footer /></>;
}

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <CallToAction />
        <Events />
        <Teachers />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

function InfoPage({ title, description }) {
  return <main className="section"><div className="container section-heading"><span className="section-label">AIC</span><h2>{title}</h2><p>{description}</p></div></main>;
}

function NotFound() {
  return (
    <main className="section">
      <div className="container section-heading">
        <span className="section-label">404</span>
        <h2>Page Not Found</h2>
        <p>The page you requested does not exist.</p>
        <Link className="btn btn-primary" to="/">Return Home →</Link>
      </div>
    </main>
  );
}

const simplePages = {
  "/about": About,
  "/history": About,
  "/mission": Vision,
  "/leadership": WhyNU,
  "/organization": StructureOfNU,
  "/faculties": CollegeSciences,
  "/programs": Programs,
  "/undergraduate": Admissions,
  "/graduate": AcademicPrograms,
  "/calendar": NUCalendar2023,
  "/requirements": Admissions,
  "/how-to-apply": Admissions,
  "/tuition": Admissions,
  "/scholarships": Admissions,
  "/application": Admissions,
  "/student-services": StudentServices,
  "/library": LibraryAndFacility,
  "/events": Events,
  "/activities": Events,
  "/facilities": LibraryAndFacility,
  "/gallery": Campus,
  "/news": Publication,
  "/contact": Contact,
  "/collaborations": Collaborations,
  "/mou": MOUPage,
  "/publications": Publication,
  "/why-us": WhyNU,
  "/campus": Campus,
  "/recognition": GovernmentRecognition,
  "/internationalization": Internationalization,
  "/mission-vision": MissionVisionGoal,
  "/structure": StructureOfNU,
  "/vice-rector": MessageOfViceRector,
  "/college-of-sciences": CollegeSciencesAlt,
  "/academic-programs": AcademicPrograms,
  "/admissions": Admissions,
  "/student-portal": () => <InfoPage title="Student Portal" description="Student portal access will be connected to the institution’s authentication service." />,
  "/staff-login": () => <InfoPage title="Staff Login" description="Staff access will be connected to the institution’s authentication service." />,
  "/clubs": () => <InfoPage title="Clubs & Activities" description="Student clubs and activities information." />,
  "/career": () => <InfoPage title="Career Center" description="Career guidance and student opportunities." />,
  "/privacy": () => <InfoPage title="Privacy Policy" description="AIC privacy information." />,
  "/terms": () => <InfoPage title="Terms & Conditions" description="AIC terms and conditions." />,
};

export default function App() {
  const routes = { "/": Home, ...simplePages };
  return <Router><Layout><RouteView routes={routes} notFound={NotFound} /></Layout></Router>;
}
