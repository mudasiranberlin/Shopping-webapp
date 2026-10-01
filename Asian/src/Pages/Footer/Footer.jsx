import { useState } from "react";
import { Link } from "../../routing";
function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const subscribe = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/newsletter`, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ email }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Subscription failed");
      setMessage("Subscribed successfully."); setEmail("");
    } catch (error) { setMessage(error.message); }
  };
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* ABOUT */}

        <div className="footer-about">

          <Link
            to="/"
            className="footer-brand"
          >

            <img
              src="/aic-logo.jpg"
              alt="AIC Logo"
            />

            <span>
              ASEAN INSTITUTE
              <small>
                OF CAMBODIA
              </small>
            </span>

          </Link>

          <p>
            ASEAN Institute of Cambodia is
            committed to quality education,
            professional development and
            building future leaders.
          </p>

          <div className="footer-social">

            <a href="#facebook">
              f
            </a>

            <a href="#youtube">
              ▶
            </a>

            <a href="#telegram">
              ✈
            </a>

            <a href="#linkedin">
              in
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <Link to="/about">
                About AIC
              </Link>
            </li>

            <li>
              <Link to="/programs">
                Programs
              </Link>
            </li>

            <li>
              <Link to="/events">
                Events
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* ADMISSIONS */}

        <div>

          <h3>
            Admissions
          </h3>

          <ul>

            <li>
              <Link to="/requirements">
                Requirements
              </Link>
            </li>

            <li>
              <Link to="/application">
                Apply Online
              </Link>
            </li>

            <li>
              <Link to="/tuition">
                Tuition & Fees
              </Link>
            </li>

            <li>
              <Link to="/scholarships">
                Scholarships
              </Link>
            </li>

          </ul>

        </div>

        {/* NEWSLETTER */}

        <div>

          <h3>
            Newsletter
          </h3>

          <p>
            Subscribe to receive AIC news
            and announcements.
          </p>

          <div className="newsletter">

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />

            <button type="button" onClick={subscribe}>
              →
            </button>
            {message && <small>{message}</small>}

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="copyright">

        <div className="container">

          <p>
            © {new Date().getFullYear()} ASEAN
            Institute of Cambodia. All rights
            reserved.
          </p>

          <div>

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
export default Footer