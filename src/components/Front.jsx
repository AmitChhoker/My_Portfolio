import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import resume from "./images/My_Resume.pdf";


export default function Contact() {
  const texts = ["I am Amit Chhoker.", "Welcome to my portfolio!"];
  const [index, setIndex] = useState(0); // kis sentence par hai
  const [subIndex, setSubIndex] = useState(0); // kitne characters dikh rahe hain
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      // sentence complete -> delete karne se pehle pause
      setTimeout(() => setDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && deleting) {
      // pura delete hone ke baad next sentence
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 70 : 150); // typing slow, delete fast

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  // Cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="contact-container">
      <div className="profile-card">
        <div className="profile-img">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQF4xiyA97_RcQ/profile-displayphoto-shrink_200_200/B56ZR3dy7RGQAc-/0/1737171088169?e=2147483647&v=beta&t=VZdUTsJOgAQMrTjQWSx--H7n8h0QabZkmCsglahJfqo"
            alt="Amit Chhoker"
          />
        </div>

        {/* Typing effect heading */}
        <h1 className="h1">
          HEY,{" "}
          <span className="typing">
            {texts[index].substring(0, subIndex)}
            {blink ? "|" : ""}
          </span>
        </h1>

        <h3 className="subtitle">
          Aspiring Web Developers | Passionate About Coding | Tech Enthusiast | B.Tech CE Student
        </h3>

        <p className="desc">
          I love transforming data into meaningful solutions and building impactful projects.
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/AmitChhoker" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amit-chhoker-520735313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/amitchhoker_07?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:amitchhoker758@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        {/* Resume Button */}
        {/* <a href="./my" className="resume-btn" target="_blank" rel="noopener noreferrer">
          Open Resume
        </a> */}
        <a href="https://drive.google.com/file/d/1nDwfCr_tgXGjFM2_oAvwURMB_wi1Q7Gd/view?usp=drive_link" className="resume-btn" target="_blank" rel="noreferrer">
          📄 My Resume
        </a>
      </div>
    </div>
  );
}
