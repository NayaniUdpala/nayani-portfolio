import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { GraphicDesign } from './components/GraphicDesign';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
export function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white selection:bg-accent selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GraphicDesign />
        <Skills />
        <Contact />
      </main>
    </div>);

}