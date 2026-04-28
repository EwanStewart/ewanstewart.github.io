import React from 'react';
import CV from './CV.pdf';

const HOME_URL = 'https://ewanstewart.github.io/portfolio/';
const PROJECTS_URL = 'https://ewanstewart.github.io/portfolio/?data=projects';

const Navbar: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const onProjects = params.get('data') === 'projects';

  return (
    <nav className="topbar">
      <div className="topbar-inner">
        <a href={HOME_URL} className="brand">Ewan Stewart</a>
        <div className="nav-links">
          {onProjects ? (
            <a href={HOME_URL} className="nav-link">About</a>
          ) : (
            <a href={PROJECTS_URL} className="nav-link">Projects</a>
          )}
          <a href={CV} target="_blank" rel="noreferrer" className="nav-link">CV</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
