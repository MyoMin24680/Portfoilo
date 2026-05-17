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
        <section ref={refs.home}><Home /></section>
      <section ref={refs.about}><About /></section>
      <section ref={refs.resume}><Resume /></section>
        <section ref={refs.project}><Project /></section>
        <section ref={refs.contact}><Contact /></section>

    </>
  )
}

export default Pages



