import React , { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import "./Navbar.css"
import { logo } from '../../assets'
const Navbar = () => {

  const Section = () => {

    useEffect(() => {
      
      
      Events.scrollEvent.register('begin', (to, element) => {
        console.log('begin', to, element);
      });
  
      
      Events.scrollEvent.register('end', (to, element) => {
        console.log('end', to, element);
      });
  
      
      scrollSpy.update();
  
     
      return () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      };
    }, []);
  
  
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    const scrollToBottom = () => {
      scroll.scrollToBottom();
    };
  
    const scrollTo = () => {
      scroll.scrollTo(100); 
    };
  
    const scrollMore = () => {
      scroll.scrollMore(100); 
    };
  
   
    const handleSetActive = (to) => {
      console.log(to);
    };

  }

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = ()=>{
    setShowMenu(showMenu ? false:true)
  }
  return (
    <nav className='navbar'>
        <div className="container">
        <img src={logo} className="logo" />
        <div className={`links ${showMenu?'show':''}` }>
            <Link  smooth={true} 
      offset={-50} 
      duration={500} 
      to="hero">Home</Link>
      <Link  smooth={true} 
      offset={-50} 
      duration={500} to="about">About Us</Link>
      <Link  smooth={true} 
      offset={-50} 
      duration={500} to="programs">Programs</Link>
      <Link  smooth={true} 
      offset={-50} 
      duration={500} to="testimonial">Testimonial</Link>
  
      <Link  smooth={true} 
      offset={-100} 
      duration={500} to="gallery">Gallery</Link>
      <Link  smooth={true} 
      offset={-50} 
      duration={500} to="contact">Contact Us</Link>
        </div>
        <button className="btn" onClick={toggleMenu}>Menu</button>
       </div>
    </nav>
  )
}

export default Navbar