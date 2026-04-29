import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import CV from '../assets/CV.pdf';

import profile from '../assets/images/profile.jpg';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { experience, launchpadStart } from '../data/experience';
import { monthsBetween, formatDuration } from '../utils/duration';

const PROJECTS_URL = `${process.env.PUBLIC_URL || ''}/?data=projects`;

const Portfolio: React.FC = () => {
  const launchpadDuration = formatDuration(monthsBetween(launchpadStart, new Date()));

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
              <h1 className="nameTitle">Ewan Stewart</h1>
              <p className="bio">
                Software Engineer with three years of industry experience in both consultancy and startup environments.
                Produced production software and involved in the full software development lifecycle across defence, medical and robotics projects.
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
                <a href={CV} target="_blank" rel="noreferrer" className="btn-primary">
                  View My CV <FontAwesomeIcon icon={faArrowRight} />
                </a>
                <a href={PROJECTS_URL} className="btn-primary">
                  View Projects <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
            <div className="hero-portrait">
              <img src={profile} className="profilePic" alt="Ewan Stewart" />
              <div className="social-row">
                <a href="https://www.linkedin.com/in/ewan-stewart/" aria-label="LinkedIn">
                  <img src={linkedin} className="social-icon" alt="LinkedIn" />
                </a>
                <a href="https://github.com/EwanStewart" aria-label="GitHub">
                  <img src={github} className="social-icon" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <header className="section-header">
            <h2 className="section-title">Experience</h2>
          </header>

          <div className="experience-list">
            {experience.map((item) => {
              const duration = item.duration ?? launchpadDuration;
              return (
                <article className="experience-item" key={item.company}>
                  <div className="experience-logo">
                    <img src={item.logo} alt={item.company} />
                  </div>
                  <div className="experience-body">
                    <h3 className="experience-company-header">{item.company}</h3>
                    <p className="experience-meta">{duration}</p>
                    <p className="experience-meta">{item.location}</p>

                    <div className="experience-roles">
                      {item.roles.map((role) => {
                        const period = role.period === 'Nov 2025 to Present'
                          ? `${role.period} · ${launchpadDuration}`
                          : role.period;
                        return (
                          <div className="experience-role-block" key={role.title}>
                            <h4 className="experience-role-sub">{role.title}</h4>
                            <p className="experience-meta">{period}</p>
                          </div>
                        );
                      })}
                    </div>

                    <ul className="experience-points">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
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
