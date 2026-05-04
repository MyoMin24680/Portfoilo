import React from 'react'
import  './About.css'

import aboutimg from '../../assets/image/abimg.svg'
const About = () => {
  return (
    <main>
      
      {/* About-1 */}
      
      <div className="header-line">
        <h1>About me</h1>
        <hr />
      </div>

    {/* About-2 */}
    <div className="img-text">
      <img src={aboutimg} alt="about image" />

   
      <div className='about-text'>
 <h1>Hello! </h1>
 <p>
         I am a multi-faceted it professional with a comprehensive
         background spanning web development, UI/UX design,and front-end development.
         my work id defined by my ability to merge strong analytical thinking with creative
         design. as a highly motivation and hardworking team player,i excel at turning complex 
         challenges into elegant, user-contric solutions.
         my core advantage lies in my passion for creative problem-solving 
         and my commitment to building seamless,impactful web applications

      </p>
      </div>
    </div>
     
    


    </main>
  )
}

export default About