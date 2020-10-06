import React, {Component, Fragment, useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import Content from './Content';
import Tank1 from '../images/Tank1.jpg';
import Tank2 from '../images/Tank2.jpg';
import Tank3 from '../images/Tank3.jpg';
import Tank4 from '../images/Tank4.jpg';
import './styles/Core.css';

const images = [Tank1, Tank2, Tank3, Tank4]
function Core() {


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
  </div> );
}


export default Core;