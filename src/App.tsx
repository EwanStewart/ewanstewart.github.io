import React from 'react';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';

const App: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const showProjects = params.get('data') === 'projects';
  return showProjects ? <Projects /> : <Portfolio />;
};

export default App;
