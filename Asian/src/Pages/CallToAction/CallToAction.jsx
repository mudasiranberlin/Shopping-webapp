import { Link } from "../../routing";
function CallToAction() {
  return (
    <section
      id="apply"
      className="cta"
    >

      <div className="container cta-content">

        <div>

          <span className="section-label light">
            ADMISSIONS ARE OPEN
          </span>

          <h2>
            Start Your Journey at AIC
          </h2>

          <p>
            Take the next step toward your
            academic and professional future.
          </p>

        </div>

        <a
          href="/application"
          className="btn btn-white"
        >
          Apply Now →
        </a>

      </div>

    </section>
  );
}
export default CallToAction