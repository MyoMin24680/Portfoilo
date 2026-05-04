import React from 'react'

// import {Home,About,Resume,Project,Contact} from './index'
import {Home, About, Resume, Project, Contact} from './index'
import { useEffect,useRef } from 'react'

const Pages = ({section}) => {
    const refs={
        home:useRef(null),
        about:useRef(null),
        resume:useRef(null),
        project:useRef(null),
        contact:useRef(null),
    }
    useEffect(()=>{
        const currentSection=refs[section];
        if(currentSection && currentSection.current){
             currentSection.current.scrollIntoView({ behavior: 'smooth' });
        }
    },[section])
  return (
    <>
        <section ref={refs.home} className={section === 'home' ? 'active' : ''} id='home'><Home/></section>
        <section ref={refs.about} className={section === 'about' ? 'active' : ''} id='about'><About/></section>
        <section ref={refs.resume} className={section === 'resume' ? 'active' : ''} id='resume'><Resume/></section>
        <section ref={refs.project} className={section === 'project' ? 'active' : ''} id='project'><Project/></section>
        <section ref={refs.contact} className={section === 'contact' ? 'active' : ''} id='contact'><Contact/></section>
    </>
  )
}

export default Pages



// import React, { useEffect, useRef } from 'react';
// import { Home, About, Resume, Project, Contact } from './index';   // or direct imports

// const Pages = ({ section }) => {
//   const refs = {
//     home: useRef(null),
//     about: useRef(null),
//     resume: useRef(null),
//     project: useRef(null),
//     contact: useRef(null),
//   };

//   useEffect(() => {
//     const targetRef = refs[section?.toLowerCase()];   // safer lowercase match
//     if (targetRef?.current) {
//       targetRef.current.scrollIntoView({ 
//         behavior: 'smooth', 
//         block: 'start'     // makes sure it goes to very top
//       });
//     }
//   }, [section]);   // runs when section changes

//   return (
//     <>
//       <section ref={refs.home}    id="home"    className={section === 'home' ? 'active' : ''}>
//         <Home />
//       </section>
//       <section ref={refs.about}   id="about"   className={section === 'about' ? 'active' : ''}>
//         <About />
//       </section>
//       <section ref={refs.resume}  id="resume"  className={section === 'resume' ? 'active' : ''}>
//         <Resume />
//       </section>
//       <section ref={refs.project} id="project" className={section === 'project' ? 'active' : ''}>
//         <Project />
//       </section>
//       <section ref={refs.contact} id="contact" className={section === 'contact' ? 'active' : ''}>
//         <Contact />
//       </section>
//     </>
//   );
// };

// export default Pages;