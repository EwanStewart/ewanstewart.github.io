import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Ewan Stewart</title>
      </Helmet>
      <Navbar />
      <main className="page">
        <header className="section-header">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            A collection of academic and personal projects.
          </p>
        </header>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </article>
          ))}
        </div>
      </main>
      <footer className="footer">
        <span>© Ewan Stewart {new Date().getFullYear()}</span>
      </footer>
    </>
  );
};

export default Projects;
