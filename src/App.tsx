import React from 'react';
import Dashboard from './sections/Dashboard';
import Project from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';


function App() {
  return (
    <div className="App">
    <Dashboard/>
    <Project />
    <About />
    <Contact />
    </div>
  );
}

export default App;
