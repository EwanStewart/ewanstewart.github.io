import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';
import CV from './CV.pdf';

import profile from './images/profile.jpg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import launchpadLogo from './images/launchpadbuild_logo.jpeg';
import bitwiseLogo from './images/bitwise_ltd_logo.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PROJECTS_URL = `${process.env.PUBLIC_URL || ''}/?data=projects`;

const monthsBetween = (start: Date, end: Date): number => {
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
};

const formatDuration = (months: number): string => {
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts: string[] = [];
  if (yrs > 0) parts.push(`${yrs} yr${yrs === 1 ? '' : 's'}`);
  if (mos > 0) parts.push(`${mos} mo${mos === 1 ? '' : 's'}`);
  return parts.length ? parts.join(' ') : '0 mos';
};

const Portfolio: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const showProjects = params.get('data') === 'projects';

  const launchpadDuration = formatDuration(monthsBetween(new Date(2025, 10, 1), new Date()));

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
                <a href={PROJECTS_URL} className="btn-primary">
                  View Projects <FontAwesomeIcon icon={faArrowRight} />
                </a>
                <a href={CV} target="_blank" rel="noreferrer" className="btn-primary">
                  View My CV <FontAwesomeIcon icon={faArrowRight} />
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
            <article className="experience-item">
              <div className="experience-logo">
                <img src={launchpadLogo} alt="Launchpad Build" />
              </div>
              <div className="experience-body">
                <h3 className="experience-company-header">Launchpad Build</h3>
                <p className="experience-meta">{launchpadDuration}</p>
                <p className="experience-meta">Edinburgh, United Kingdom</p>

                <div className="experience-roles">
                  <div className="experience-role-block">
                    <h4 className="experience-role-sub">Software Engineer</h4>
                    <p className="experience-meta">Nov 2025 to Present · {launchpadDuration}</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-logo">
                <img src={bitwiseLogo} alt="Bitwise Limited" />
              </div>
              <div className="experience-body">
                <h3 className="experience-company-header">Bitwise Limited</h3>
                <p className="experience-meta">2 yrs 4 mos</p>
                <p className="experience-meta">Dunfermline, United Kingdom</p>

                <div className="experience-roles">
                  <div className="experience-role-block">
                    <h4 className="experience-role-sub">Software Engineer</h4>
                    <p className="experience-meta">Sep 2024 to Nov 2025 · 1 yr 2 mos</p>
                  </div>
                  <div className="experience-role-block">
                    <h4 className="experience-role-sub">Graduate Engineer</h4>
                    <p className="experience-meta">Jul 2023 to Sep 2024 · 1 yr 2 mos</p>
                  </div>
                </div>
              </div>
            </article>
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
