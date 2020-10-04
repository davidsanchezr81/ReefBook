import React, { Component, Fragment, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Content from './components/Content';
import Tank1 from './images/Tank1.jpg';
import Tank2 from './images/Tank2.jpg';
import Tank3 from './images/Tank3.jpg';
import Tank4 from './images/Tank4.jpg';

const images = [Tank1, Tank2, Tank3, Tank4]
function App() {


  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Navbar />
      </div>
      <div><Slider className="slider" slides={images} /></div>
      <div><Content className="content"/></div>
      <div><Footer /></div>
    </div>
  );
}



export default App;

