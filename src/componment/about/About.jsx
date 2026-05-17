import React from 'react'
import './About.css'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'
import aboutimg from '../../assets/image/abimg.svg'

const About = () => {
  const [headerRef, headerVisible] = useAnimateOnScroll();
  const [imgRef, imgVisible]       = useAnimateOnScroll();
  const [textRef, textVisible]     = useAnimateOnScroll();

  return (
    <main>
      {/* Header */}
      <div
        ref={headerRef}
        className={`header-line reveal ${headerVisible ? 'visible' : ''}`}
      >
        <h1>About me</h1>
        <hr />
      </div>

      {/* Image + Text */}
      <div className="img-text">
        <img
          ref={imgRef}
          className={`reveal-left ${imgVisible ? 'visible' : ''}`}
          src={aboutimg}
          alt="Myo Min Khaing"
        />
        <div
          ref={textRef}
          className={`about-text reveal-right ${textVisible ? 'visible' : ''}`}
        >
          <h1>Hello!</h1>
          <p>
            I am a multi-faceted IT professional with a comprehensive
            background spanning web development, UI/UX design, and front-end development.
            My work is defined by my ability to merge strong analytical thinking with creative
            design. As a highly motivated and hardworking team player, I excel at turning complex
            challenges into elegant, user-centric solutions.
            My core advantage lies in my passion for creative problem-solving
            and my commitment to building seamless, impactful web applications.
          </p>
        </div>
      </div>
    </main>
  )
}

export default About