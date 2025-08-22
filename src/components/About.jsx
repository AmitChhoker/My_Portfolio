import React from "react";
import myPhoto from "../assets/myPhoto.jpg"; // Ensure the path is correct

export default function Header() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-photo">
          <img src="https://github.com/AmitChhoker/My_Portfolio/blob/main/myPhoto.jpg?raw=true" alt="Profile" />

        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <hr />
          <p>
            Hello! I'm Amit CHhoker passionate About Mern Stack Developement also with Blockchain Developement
            enthusiast currently pursuing B.Tech in Computer Engineering with Minor In Blockchain 
            from the Shri Vishwakarma Skill University Dudhola Palwal. Currently i am in 3rd year with 8.7 CGPA still 2nd Year I have a keen interest in exploring new Technologies.
          </p>
          <p>
            I have a strong foundation in C++ with STL, HTML, CSS, JavaScript, React.js, Node.js, and MongoDB, along with hands-on experience in data analytics.  
            With practical knowledge across these technologies and numerous project implementations, my expertise lies in building scalable web applications, designing efficient algorithms, managing databases, and delivering data-driven solutions.  
            I am passionate about problem-solving, exploring emerging technologies, and applying my skills to create impactful real-world projects.

          </p>
          
          <hr />
          <div className="contact-info">
            <div>
              <strong className="strong">📞 Contact No.</strong>
              <p className="p">+91 93066-31330</p>
            </div>
            <div>
              <strong className="strong">📧 Gmail id</strong>
              <p className="p">amitchhoker758@gmail.com</p>
            </div>
            <div>
              <strong className="strong">💻 GitHub Profile</strong>
              <p className="p">AmitChhoker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
