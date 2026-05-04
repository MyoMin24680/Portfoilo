import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { FaArrowRight, FaBars,FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import './nav.css'
import logo from '../../assets/image/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navagate=useNavigate();

  const [scroll,setScroll]=useState(false);

 const handleButtonClick =()=>{
   navagate('/contact')
   setIsOpen(false)
 }

  useEffect(()=>{
   const handelScroll=()=>{
      if(window.scrollY>20){
        setScroll(true);
      }else{
        setScroll(false)
      }
   }

   window.addEventListener('scroll',handelScroll)
   return ()=> window.removeEventListener('scroll',handelScroll)
  
  },[])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={scroll ? 'nav-scrolled' : ''} >
      <nav >
        <div className="logo">
          <img src={logo} alt=""  />
        </div>

    
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><Link to={'/home'} className='custom-link'>[Home]</Link></li>
          <li><Link to={'/about'} className='custom-link'>[About]</Link></li>
          <li><Link to={'/resume'} className='custom-link'>[Resume]</Link></li>
          <li><Link to={'/project'} className='custom-link'>[Project]</Link></li>
          <li><Link to={'/contact'} className='custom-link'>[Contact]</Link></li>
         
         {/* Only in mobile */}
          <li className="mobile-only">
             <button type="button" onClick={handleButtonClick}  className="contact-button">Contact Me <FaArrowRight /></button>
          </li>
        </ul>

       {/* Desktop view */}
        <button type="button" onClick={handleButtonClick} className="contact-button desktop-only">
          Contact Me <FaArrowRight className="arrow" />
        </button>

        <button className='nav-btn' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar