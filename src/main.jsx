import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AllRoute from './pages/AllRoute'
import Footer from './componment/footer/Footer'
import Navbar from './pages/navbar/Navbar'



import {BrowserRouter as Router} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <section>
  <Router>
  <Navbar/>
  <AllRoute/>
  </Router>
  <Footer/>


 
  </section>,
)
