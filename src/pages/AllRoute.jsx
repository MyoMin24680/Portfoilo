import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Pages from './Pages'


const AllRoute = () => {
  
  return (
    <>
      
<Routes>
  <Route path="/" element={<Navigate to="/home" replace />} />
  <Route path="/home" element={<Pages section="home" />} />
  <Route path="/about" element={<Pages section="about" />} />
  <Route path="/resume" element={<Pages section="resume" />} />
  <Route path="/project" element={<Pages section="project" />} />
  <Route path="/contact" element={<Pages section="contact" />} />
</Routes>
    </>
  )
}

export default AllRoute