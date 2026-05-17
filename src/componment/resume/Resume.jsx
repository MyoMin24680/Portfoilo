import React from "react";
import "./Resume.css";
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';

const Resume = () => {
  const [headerRef, headerVisible] = useAnimateOnScroll();
  const [exRef,     exVisible]     = useAnimateOnScroll();
  const [skRef,     skVisible]     = useAnimateOnScroll();
  const [edRef,     edVisible]     = useAnimateOnScroll();

  return (
    <main>
      {/* Header */}
      <div
        ref={headerRef}
        className={`header-line reveal ${headerVisible ? 'visible' : ''}`}
      >
        <h1>Career Journey</h1>
        <hr />
      </div>

      <div className="container">

        {/* Experience + Skill row */}
        <div
          ref={exRef}
          className={`ex-sk reveal ${exVisible ? 'visible' : ''}`}
        >
          {/* Experience */}
          <div className="container-ex">
            <div className="ex-sk-header">
              <h2>[ Experience &amp; Skill ]</h2>
            </div>
            <div className="ex-header">
              <h3>[ Work Experience ]</h3>
              <hr />
            </div>
            <div className="ex-body">
              <p>Senior IT Technician    <span>2021 - 2023</span></p>
              <p>Data Analyst            <span>2019 - 2021</span></p>
              <p>Frontend Developer <br />Web Design &amp; UI <span>2024 - 2024</span></p>
              <p>Owner of Partnership    <span>2023 - 2024</span></p>
            </div>
          </div>

          {/* Skill */}
          <div
            ref={skRef}
            className={`container-sk reveal d-2 ${skVisible ? 'visible' : ''}`}
          >
            <div className="sk-ex-header">
              <h2>[ Skill ]</h2>
            </div>
            <div className="sk-header">
              <h3>[Personal Skill]</h3>
              <hr />
            </div>
            <div className="sk-body">
              <p>Communication</p>
              <p>Design Thinking</p>
              <p>Creativity</p>
              <p>Time Management</p>
              <p>Adaptability</p>
              <p>Logical Thinking</p>
              <p>Critical Thinking</p>
              <p>Punctual</p>
            </div>
          </div>
        </div>

        {/* Education + Software */}
        <div
          ref={edRef}
          className={`ed-so reveal d-3 ${edVisible ? 'visible' : ''}`}
        >
          <div className="education">
            <div className="ed-header">
              <h3>[ Education ]</h3>
              <hr />
            </div>
            <div className="ed-body">
              <p>Software Engineering</p>
              <p>Network Engineering</p>
              <p>UI/UX</p>
              <p>History Degree</p>
              <p>Web Development</p>
            </div>
          </div>

          <div className="software">
            <div className="so-header">
              <h3>[ Software Skill ]</h3>
              <hr />
            </div>
            <div className="so-body">
              <p>Html</p>
              <p>Bootstrap</p>
              <p>Css</p>
              <p>Javascript</p>
              <p>Sass</p>
              <p>Sql</p>
              <p>React Js</p>
              <p>Redux</p>
              <p>Figma</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Resume;