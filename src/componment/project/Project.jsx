import React, { useState } from "react";
import "./Project.css";
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';

import coffee from "../../assets/image/coffee.png";
import burmer from "../../assets/image/bumer.png";
import riot from "../../assets/image/Riot.png";
import cap from "../../assets/image/cap.png";
import lac from "../../assets/image/bum.png";
import toy from "../../assets/image/toy.png";

const projects = {
  COFFEE: {
    mainImg: coffee, miniImg: cap,
    subtitle: "Arabian Cafe – Premium Coffee Brand Identity",
    desc: `A sophisticated web design project for Arabian Cafe, a premium coffee brand that celebrates the rich heritage of coffee culture. The design features warm earthy tones, custom 3D cup mockups, and a flavor-focused layout that highlights signature blends. Key sections include a welcoming hero area, menu showcase, and seamless shop integration. The responsive layout ensures an optimal browsing experience across all devices, inviting users to explore the journey from bean to cup.`,
  },
  LACQUER: {
    mainImg: burmer, miniImg: lac,
    subtitle: "Burmer Art – Handcrafted Pottery",
    desc: `A minimalist, art-focused website designed for Burmer Art, celebrating handcrafted ceramic vessels and pottery art. The design places emphasis on high-quality product photography, intricate textures, and a clean layout that lets the artwork speak for itself. Navigation includes easy access to the shop, workshop events, and customer reviews. The responsive design maintains visual impact across desktop, tablet, and mobile, creating an immersive gallery-like experience that connects artisans with collectors.`,
  },
  GAME: {
    mainImg: riot, miniImg: toy,
    subtitle: "Riot Games – High-Energy Gaming",
    desc: `A bold, dark-themed homepage redesign inspired by Riot Games' iconic aesthetic. This concept focuses on creating an immersive, high-energy experience with dramatic typography, dynamic hero visuals, and a clean navigation bar. The layout captures the intense gaming vibe while maintaining functional clarity. Fully responsive design ensures the energy translates seamlessly from desktop to mobile, making it ideal for showcasing game launches, events, and community content.`,
  },
};

const Project = () => {
  const [active, setActive]   = useState("COFFEE");
  const [prev,   setPrev]     = useState(null);

  const [headerRef, headerVisible] = useAnimateOnScroll();
  const [nameRef,   nameVisible]   = useAnimateOnScroll();
  const [imgRef,    imgVisible]    = useAnimateOnScroll();
  const [secRef,    secVisible]    = useAnimateOnScroll();

  const handleSwitch = (name) => {
    if (name === active) return;
    setPrev(active);
    setActive(name);
    setTimeout(() => setPrev(null), 800);
  };

  const getImgClass = (key) => {
    if (key === active) return "project-img active";
    if (key === prev)   return "project-img hidden";
    return "project-img";
  };

  return (
    <main className="project-page">

      {/* Header */}
      <div
        ref={headerRef}
        className={`header-line reveal ${headerVisible ? 'visible' : ''}`}
      >
        <h1>PROJECT</h1>
        <hr />
      </div>

      {/* First Section */}
      <div className="proFirstSection">
        <div
          ref={nameRef}
          className={`projectName reveal-left ${nameVisible ? 'visible' : ''}`}
        >
          {Object.keys(projects).map((name) => (
            <button
              key={name}
              onClick={() => handleSwitch(name)}
              className={`project-btn ${active === name ? "active" : ""}`}
            >
              {name}
            </button>
          ))}
        </div>

        <div
          ref={imgRef}
          className={`proImageGp reveal ${imgVisible ? 'visible' : ''}`}
        >
          {Object.entries(projects).map(([key, val]) => (
            <img
              key={key}
              src={val.mainImg}
              alt={key}
              className={getImgClass(key)}
            />
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div
        ref={secRef}
        className={`proSecondSection reveal ${secVisible ? 'visible' : ''}`}
      >
        <div className="content-wrapper">
          <div className="title-imgGp">
            <div className="title-left">
              <h2 className="pj-main-title">{active} PROJECT</h2>
              <div className="title-underline"></div>
            </div>
            <div className="mini-img-box">
              <img src={projects[active].miniImg} alt="mini" />
            </div>
          </div>
          <div className="pj-detail">
            <div className="detail-content">
              <p className="detail-text">
                <span className="pj-subtitle">{projects[active].subtitle}</span>
                {"\n"}{projects[active].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Project;