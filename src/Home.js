import React from 'react';
import './Home.css';
import { BsHeart, BsLaptop } from 'react-icons/bs';
import { FaProjectDiagram } from 'react-icons/fa';
import { CgGirl } from 'react-icons/cg';
import { VscSymbolMisc } from 'react-icons/vsc';
import { AiOutlineMail } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="aboutContainer">
        <div className="about">
          <CgGirl />
          <br/>
          <span>ABOUT</span>
        </div>
      </div>
      <div className="experienceContainer">
        <div>
          <BsLaptop />
          <br/>
          <span>EXPERIENCE</span>
        </div>
      </div>
      <div className="projectContainer">
        <div>
          <FaProjectDiagram />
          <br/>
          <span>PROJECTS</span>
        </div>
      </div>
      <div className="loveContainer">
        <div>
          <BsHeart />
          <br/>
          <span>LOVE</span>
        </div>
      </div>
      <div className="miscContainer">
        <div>
          <VscSymbolMisc />
          <br/>
          <span>MISC</span>
        </div>
      </div>
      <div className="contactContainer">
        <div>
          <AiOutlineMail />
          <br/>
          <span>CONTACT</span>
        </div>
      </div>
    </div>
  );
}

export default Home;