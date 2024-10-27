import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import About from './components/About';
import Playful from './components/Playful';

function App() {
  return (
    <div className='w-full h-screen  text-white'>
        <Navbar />
        <Landingpage />
        <Marquee />
        <About />
        <Playful />
        
    </div>
  )
}

export default App