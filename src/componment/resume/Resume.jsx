import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <main>
      {/* Header - Fade Up အရင်ဆုံးပေါ်မယ် */}
      <div className="header-line" data-aos="fade-up">
        <h1>Resume</h1>
        <hr />
      </div>

      <div className="container">
        <div className="ex-sk">
          {/* Experience Section - နည်းနည်းနောက်ကျပြီးမှ ပေါ်မယ် */}
          <div className="container-ex" data-aos="fade-up" data-aos-delay="200">
            <div className="ex-sk-header">
              <h2>[experience & Skill]</h2>
            </div>
            <div className="ex-header">
              <h3>[work experience]</h3>
              <hr />
            </div>
            <div className="ex-body">
              <p>Data analyst <span>2019-2021</span></p>
              <p>senior it technician <span>2021-2032</span></p>
              <p>owner of partnership <span>2023-2024</span></p>
              <p>Frontend developer <br /> web design & ui <span>2024-2024</span></p>
            </div>
          </div>

          {/* Skill Section - Experience ထက် ပိုနောက်ကျပြီးမှ ပေါ်မယ် */}
          <div className="container-sk" data-aos="fade-up" data-aos-delay="400">
            <div className="sk-ex-header">
              <h2>[ Skill ]</h2>
            </div>
            <div className="sk-header">
              <h3>[personal skill]</h3>
              <hr />
            </div>
            <div className="sk-body">
              <p>communication</p>
              <p>creativity</p>
              <p>adaptability</p>
              <p>critical thinking</p>
              <p>design thinking</p>
              <p>time management</p>
              <p>logical thinking</p>
              <p>punctual</p>
            </div>
          </div>
        </div>

        {/* Education & Software Section - အောက်ဆုံးရောက်မှ ပေါ်မယ် */}
        <div className="ed-so" data-aos="fade-up" data-aos-delay="600">
          <div className="education">
            <div className="ed-header">
              <h3>[EDUCATION]</h3>
              <hr />
            </div>
            <div className="ed-body">
              <p>software engineering</p>
              <p>network engineering</p>
              <p>ui/ux</p>
              <p>history degree</p>
              <p>web development</p>
            </div>
          </div>

          <div className="software">
            <div className="so-header">
              <h3>[SOFTWARE SKILL]</h3>
              <hr />
            </div>
            <div className="so-body">
              <p>html</p>
              <p>bootstrap</p>
              <p>css</p>
              <p>javascript</p>
              <p>sass</p>
              <p>sql</p>
              <p>react js</p>
              <p>redux</p>
              <p>figma</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;