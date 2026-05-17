
import { FaArrowRight} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import './Home.css'
import photo from '../../assets/image/heroimage.png'
import line from '../../assets/image/line9.png'



import figma from '../../assets/image/figma.png'
import html from '../../assets/image/html.png'
import css from '../../assets/image/css.png'
import sass from '../../assets/image/sass.png'
import mysql from '../../assets/image/mysql.png'
import js from '../../assets/image/js.png'
import react from '../../assets/image/React.png'
import redux from '../../assets/image/redux.png'

import bootstrap from '../../assets/image/bootstrap.png'
const Home = () => {
   const navagate=useNavigate();


 const handleButtonClick =()=>{
   navagate('/project')
 }

  return (
<>

    <section id='home' data-aos="fade-up">
      <header><strong>myo min khaing</strong></header>

      <div className="img-gp">
        <img src={line} className='line' alt="line"  />
        <img src={photo} className='person' alt="photo"  />
      </div>

      <div className="detail">
        <p>web developer & ui/ux designer</p>

        <div className="icon-gp">
          <img src={css} alt="css"  />
          <img src={html} alt="html"  />
          <img src={js} alt="js"  />
          <img src={react} alt="react"  />
          <img src={bootstrap} alt="bootstrap"  />
          
          <img src={redux} alt="redux"  />
          <img src={sass} alt="sass"  />
          <img src={mysql} alt="mysql"  />
          <img src={figma} alt="figma"  />
        </div>

        <button type="button" onClick={handleButtonClick}>project <FaArrowRight className='arrow'/> </button>
      </div>

   </section>
  
   </>
   
   
    
  
  )
}

export default Home