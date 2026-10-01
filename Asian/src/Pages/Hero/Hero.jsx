import { Link } from "../../routing";
import './Hero.css'
function Hero() {
  return (
    <section
      id="home"
      className="hero"
    >
      <div className="hero-overlay">

        <div className="container hero-content">

          <span className="hero-small">
            WELCOME TO ASEAN INSTITUTE OF CAMBODIA
          </span>

          <h1>
            Education for
            <br />

            <span>
              a Better Future.
            </span>
          </h1>

          <p>
            ASEAN Institute of Cambodia is committed
            to providing quality education, developing
            talented students and building future
            leaders for Cambodia and ASEAN.
          </p>

          <div className="hero-buttons">

            <a
              href="/programs"
              className="btn btn-primary"
            >
              Explore Programs
            </a>

            <a
              href="/about"
              className="btn btn-outline"
            >
              Discover AIC
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
export default Hero