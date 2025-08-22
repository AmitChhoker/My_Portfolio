import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";   // sirf routing ke liye
import { Link } from "react-scroll";     
import About from "./src/components/About";           // scroll ke liye
import Front from "./src/components/Front";
import Skills from './src/components/skills';
import Education from './src/components/Education';
import Projects from './src/components/Projects';
import Contact from './src/components/contact';
import './src/components/Front.css'; 
import './src/components/Header.css';
import './src/components/About.css';
import './src/components/skills.css';
import './src/components/Education.css';
import './src/components/Projects.css';
import './src/components/Contact.css';


function Main() {
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <div className="logo">
            <h1>Amit</h1>
          </div>
          <nav className='navbar'>
            <Link to="about-section" smooth={true}  duration={600}  offset={-50}>About</Link>
            <Link to="skills-section" smooth={true} duration={600}>Skills</Link>
            <Link to="education-section" smooth={true} duration={600}>Education</Link>
            <Link to="projects-section" smooth={true} duration={600}>Projects</Link>
            <Link to="contact-section" smooth={true} duration={600}>Contact</Link>
          </nav>
        </header>

        <Front />

        <section id="about-section"><About /></section>
        <section id="skills-section"><Skills /></section>
        <section id="education-section"><Education /></section>
        <section id="projects-section"><Projects /></section>
        <section id="contact-section"><Contact /></section>
         

      </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
