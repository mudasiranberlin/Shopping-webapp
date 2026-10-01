import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] =
    useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to send message");
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <section
      id="contact"
      className="section contact"
    >

      <div className="container contact-grid">

        <div className="contact-info">

          <span className="section-label">
            CONTACT AIC
          </span>

          <h2>
            We Are Here to Help
          </h2>

          <p>
            Contact ASEAN Institute of Cambodia
            for information about admissions,
            academic programs and student services.
          </p>

          <div className="contact-item">

            <div>📍</div>

            <div>

              <strong>
                Address
              </strong>

              <p>
                Phnom Penh, Cambodia
              </p>

            </div>

          </div>

          <div className="contact-item">

            <div>📞</div>

            <div>

              <strong>
                Phone
              </strong>

              <p>
                +855 12 345 678
              </p>

            </div>

          </div>

          <div className="contact-item">

            <div>✉</div>

            <div>

              <strong>
                Email
              </strong>

              <p>
                info@aic.edu.kh
              </p>

            </div>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {submitted && (

            <div className="success-message">
              Thank you! Your message has
              been submitted successfully.
            </div>

          )}

          <div className="form-row">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            rows="7"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}
export default Contact