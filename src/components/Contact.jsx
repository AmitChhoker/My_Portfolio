import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        I'd love to hear from you! Fill the form below 👇
      </p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn-submit">
          🚀 Send Message
        </button>
      </form>
    </section>
  );
}
