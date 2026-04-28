import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'PhotoVault',
    description:
      'A Raspberry Pi 7-inch touchscreen photo frame running as a Flask kiosk. Pulls photos from Google Drive with a live Spotify overlay. A side panel controls TP-Link Tapo smart bulbs on the same network.',
    url: 'https://github.com/EwanStewart/PhotoVault',
    tags: ['Python', 'Flask', 'Raspberry Pi', 'Spotify API'],
  },
  {
    title: 'Genetic Pong',
    description:
      'A genetic approach to creating an infinite Pong game. The graphical display uses SFML and the genetic algorithm is implemented in C++, applying mutation, crossover and selection to evolve generations of paddles.',
    url: 'https://github.com/EwanStewart/Genetic-Pong---CMP304',
    tags: ['C++', 'SFML'],
  },
  {
    title: 'Weather Indicator',
    description:
      'A device that displays current and forecast weather through GPIO LEDs. Powered by a Raspberry Pi and hosted on AWS.',
    url: 'https://github.com/EwanStewart/Weather-Indicator',
    tags: ['Python', 'AWS', 'C', 'Raspberry Pi'],
  },
  {
    title: 'Explore Dundee',
    description:
      'An Android app for recording exercises and collating visited locations using the Google Maps API and Geofencing. Users can share their journey publicly.',
    url: 'https://github.com/EwanStewart/Explore-Dundee---CMP309',
    tags: ['Android', 'Java'],
  },
  {
    title: 'Gamified Programming',
    description:
      'Honours project that tackles the problem of teaching programming through gamification techniques in a mobile application.',
    url: 'https://github.com/EwanStewart/HonoursProject',
    tags: ['C#', 'Unity'],
  },
  {
    title: 'Tapo L530 Smart Bulb Control',
    description:
      'A Wemos circuit that toggles a smart bulb with a button and adjusts colour through a potentiometer.',
    url: 'https://github.com/EwanStewart/Tapo-L530-Light-Control',
    tags: ['Wemos', 'Python', 'Arduino'],
  },
  {
    title: 'FC24 Web App Automation',
    description:
      'Selenium-based scripts that automate elements of the FC 24 web application.',
    url: 'https://github.com/EwanStewart/FIFA24-Automation',
    tags: ['Python', 'Raspberry Pi'],
  },
  {
    title: 'Asset Management',
    description:
      'Asset management system that uses the NIST API to highlight vulnerabilities. Built with Python and SQL.',
    url: 'https://github.com/cmp307/Asset-Management---CMP307',
    tags: ['Python', 'SQL'],
  },
  {
    title: 'The Artefact',
    description:
      'An adventure game built in Unreal Engine as part of a 48-hour Game Jam.',
    url: 'https://ejstewart.itch.io/the-artifact',
    tags: ['Unreal Engine'],
  },
];

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
