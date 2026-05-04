import React, { useState } from "react";
import "./Project.css";

// Import your images correctly
import coffee from "../../assets/image/coffee.png";
import burmer from "../../assets/image/bumer.png";   
import riot from "../../assets/image/Riot.png";

// Small images
import cap from "../../assets/image/cap.png";
import lac from "../../assets/image/bum.png";
import toy from "../../assets/image/toy.png";

const Project = () => {
  const [active, setActive] = useState("COFFEE");

  return (
    <main>
      {/* PROJECT TITLE */}
      <div className="header-line">
        <h1>PROJECT</h1>
        <hr />
      </div>

      {/* PROJECT FIRST SECTION */}
      <div className="proFirstSection">
        <div className="projectName">
          <button
            onClick={() => setActive("COFFEE")}
            className={`project-btn ${active === "COFFEE" ? "active" : ""}`}
          >
            COFFEE
          </button>
          <button
            onClick={() => setActive("LACQUER")}
            className={`project-btn ${active === "LACQUER" ? "active" : ""}`}
          >
            LACQUER
          </button>
          <button
            onClick={() => setActive("GAME")}
            className={`project-btn ${active === "GAME" ? "active" : ""}`}
          >
            GAME
          </button>
        </div>

        <div className="proImageGp">
          <img
            src={coffee}
            className={`project-img ${active === "COFFEE" ? "active" : ""}`}
            alt="Coffee Project"
          />
          <img
            src={burmer}
            className={`project-img ${active === "LACQUER" ? "active" : ""}`}
            alt="Lacquer Project"
          />
          <img
            src={riot}
            className={`project-img ${active === "GAME" ? "active" : ""}`}
            alt="Game Project"
          />
        </div>
      </div>

      {/* PROJECT SECOND SECTION */}
      <div className="proSecondSection">
        <div className="title-imgGp">
          <div className="title-container">
            <div className="pj-title">
              {active === "COFFEE" ? (
                <p className="title">coffee project</p>
              ) : active === "LACQUER" ? (
                <p className="title">lacquer project</p>
              ) : (
                <p className="title">game project</p>
              )}
            </div>
          </div>

          <div className="image-container">
            <div className="pj-image">
              {active === "COFFEE" ? (
                <img src={cap} alt="Coffee cap" />
              ) : active === "LACQUER" ? (
                <img src={lac} alt="Lacquer item" />
              ) : (
                <img src={toy} alt="Game toy" />
              )}
            </div>
          </div>
        </div>

        <div className="pj-detail">
          {active === "COFFEE" ? (
            <p className="detail">
              <strong>Arabian Cafe – Premium Coffee Brand Identity</strong><br />
      A sophisticated web design project for Arabian Cafe, a premium coffee brand 
      that celebrates the rich heritage of coffee culture. The design features 
      warm earthy tones, custom 3D cup mockups, and a flavor-focused layout that 
      highlights signature blends. Key sections include a welcoming hero area, 
      menu showcase, and seamless shop integration. The responsive layout ensures 
      an optimal browsing experience across all devices, inviting users to explore 
      the journey from bean to cup.
            </p>
          ) : active === "LACQUER" ? (
            <p className="detail">
             <strong>Burmer Art – Handcrafted Pottery & Ceramic Showcase</strong><br />
      A minimalist, art-focused website designed for Burmer Art, celebrating 
      handcrafted ceramic vessels and pottery art. The design places emphasis 
      on high-quality product photography, intricate textures, and a clean 
      layout that lets the artwork speak for itself. Navigation includes easy 
      access to the shop, workshop events, and customer reviews. The responsive 
      design maintains visual impact across desktop, tablet, and mobile, creating 
      an immersive gallery-like experience that connects artisans with collectors.
            </p>
          ) : (
            <p className="detail">
              <strong>Riot Games – High-Energy Gaming Concept Redesign</strong><br />
      A bold, dark-themed homepage redesign inspired by Riot Games' iconic 
      aesthetic. This concept focuses on creating an immersive, high-energy 
      experience with dramatic typography, dynamic hero visuals, and a clean 
      navigation bar. The layout captures the intense gaming vibe while maintaining 
      functional clarity. Fully responsive design ensures the energy translates 
      seamlessly from desktop to mobile, making it ideal for showcasing game 
      launches, events, and community content.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Project;