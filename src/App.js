import React from 'react';
import Content from './components/Content';
import About from './components/About';
import Skills from './components/Skills';
import Expierience from './components/Expierience';
import Project from './components/Project';
import Contact from './components/Contact';
const App = () => {
  return (
    <div>
      <Content />
      <About />
      <Skills/>
      <Expierience/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default App;
