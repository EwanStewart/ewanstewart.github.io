import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';

import profile from './images/profile.jpg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PROJECTS_URL = `${process.env.PUBLIC_URL || ''}/?data=projects`;

const Portfolio: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const showProjects = params.get('data') === 'projects';

  if (showProjects) {
    return <Projects />;
  }

  return (
    <>
      <Helmet>
        <title>Ewan Stewart | Portfolio</title>
      </Helmet>
      <Navbar />
      <main className="page">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Portfolio</p>
              <h1 className="nameTitle">Ewan Stewart</h1>
              <p className="tagline">Software Developer · Computing Graduate</p>
              <p className="bio">
                A recent Computing graduate from the University of Abertay with a 2:1 BSc Hons Degree.
                I am passionate about software development and creating effective, well-considered user experiences.
              </p>
              <div className="contact-list">
                <a className="contact-item" href="tel:+447484275241">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+44 7484 275 241</span>
                </a>
                <a className="contact-item" href="mailto:ewan-stewart@outlook.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>ewan-stewart@outlook.com</span>
                </a>
              </div>
              <div className="hero-actions">
                <a href={PROJECTS_URL} className="btn-primary">
                  View Projects <FontAwesomeIcon icon={faArrowRight} />
                </a>
                <div className="social-row">
                  <a href="https://www.linkedin.com/in/ewan-stewart-4905b0266/" aria-label="LinkedIn">
                    <img src={linkedin} className="social-icon" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/EwanStewart" aria-label="GitHub">
                    <img src={github} className="social-icon" alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-portrait">
              <img src={profile} className="profilePic" alt="Ewan Stewart" />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>© Ewan Stewart {new Date().getFullYear()}</span>
      </footer>
    </>
  );
};

export default Portfolio;
