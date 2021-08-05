import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/Home.css';
import { BsHeart, BsLaptop } from 'react-icons/bs';
import { FaProjectDiagram } from 'react-icons/fa';
import { CgGirl } from 'react-icons/cg';
import { VscSymbolMisc } from 'react-icons/vsc';
import { AiOutlineMail } from 'react-icons/ai';

const Home = () => {
  const history = useHistory();
  const handlePageClick = useCallback(container => history.push(`/${container}`), [history]);

  return (
    <div className="homeContainer">
      <div className="aboutContainer" onClick={() => handlePageClick('about')}>
        <div className="about">
          <CgGirl className="icons" />
          <br/>
          <span>ABOUT</span>
        </div>
      </div>
      <div className="experienceContainer" onClick={() => handlePageClick('experience')}>
        <div>
          <BsLaptop className="icons experienceIcon"/>
          <br/>
          <span>EXPERIENCE</span>
        </div>
      </div>
      <div className="projectContainer" onClick={() => handlePageClick('projects')}>
        <div>
          <FaProjectDiagram className="icons projectIcon" />
          <br/>
          <span>PROJECTS</span>
        </div>
      </div>
      <div className="loveContainer" onClick={() => handlePageClick('love')}>
        <div>
          <BsHeart className="icons loveIcon" />
          <br/>
          <span>LOVE</span>
        </div>
      </div>
      <div className="miscContainer" onClick={() => handlePageClick('misc')}>
        <div>
          <VscSymbolMisc className="icons miscIcon" />
          <br/>
          <span>MISC</span>
        </div>
      </div>
      <div className="contactContainer" onClick={() => handlePageClick('contact')}>
        <div>
          <AiOutlineMail className="icons contactIcon" />
          <br/>
          <span>CONTACT</span>
        </div>
      </div>
    </div>
  );
}

export default Home;