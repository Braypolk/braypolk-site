import React, { useRef, useEffect } from "react";
import ScrollHighlightNabbar from "./ScrollHighlightNavbar";

import Experience from './Experience';
import { DownloadButton, Linkedin, Github } from './assets/svg';

import './App.css';
import './Burger.css';
import resume from './assets/resume.pdf'

// https://mycareer.qodeinteractive.com/maria/

function App() {
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);

  const sectionRefs = [
    { section: "About", ref: about },
    { section: "Experience", ref: experience },
    { section: "Contact", ref: contact }
  ];

  return (
    <div className="app">
      {/* todo stop scroll when mobile view sidebar is open */}
      <input type="checkbox" id="toggler" />
      <div className="hamburger"><div></div></div>
      <header className="sidebar">
        <div className="allCenter picker">
          <ScrollHighlightNabbar sectionRefs={sectionRefs} />
        </div>
        <div className="downloadSection allCenter">
          {/* todo fix file extension when downloaded */}
          <a href={resume} download>
            <p>Download<br />Resume</p>
            <div className="fullWidth allCenter breath2"><DownloadButton /></div>
          </a>
        </div>
      </header>
      <div className="wrapper">
        <div className="heroPage">
          <div className="image absoluteCenter"></div>
          {/* todo: add name on left side for mobile view */}
          <div className="bigFirstName">
            BRAY POLKINGHORNE
          </div>
          <div className="someInfo">
            <p className="fullstack rad">Full-stack Developer</p>
            <p className="learning rad">Always Learning</p>
            <p className="action rad">Learn more below</p>
          </div>

          {/* <div className="bigLastName">
              Polkinghorne
            </div> */}
        </div>
        <div className="around topPad" >
          <div className="about topPad bottomPad" id="About" ref={about}>
            <h1 className="allCenter">About Me</h1>
            {/* 
              crypto
              spotify
              infra stuff
              web dev stuff
            */}
            {/*todo string together with outdoors */}
            <p className="aboutText spaceLeft">Technology, art, and the outdoors are things I love. Technology and art have a relationship of being opposite yet connected. During college, this opposition morphed into a compatibility that I'm so fortunate I found. I studied computer science and minored in photography at Montana State University. What a beautiful state! This satisfied the three things I mentioned earlier and gave me insight to the differences and similarities of engineers and artists. </p>
          </div>

          <div className="experience horizCenter topPad" ref={experience} id="Experience">
            <h1 className="bottomPad textCenter">Professional Experience</h1>
            <Experience />
          </div>
          <div className="about" ref={contact} id="Contact">
            <div className="allCenter spaceRight">
              <div className="fix">
                <h1>Let's<br />Connect</h1>
                <div className="social horizCenter">
                  <ul className="horizCenter">
                    <li>
                      <a href="https://www.linkedin.com/in/braypolk/">
                        {/* todo: fix this stuff <p>Linkedin</p> */}
                        <p>Linkedin</p>
                        <Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Braypolk">
                        {/* todo: fix this stuff <p>Github</p> */}
                        <p>Github</p>
                        <Github />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form">
              <form className="bottomPad">
                <input className="rad" type="text" id="name" name="name" placeholder="Name" />
                <input className="rad" type="text" id="email" name="email" placeholder="Email" />
                <textarea className="rad" cols="40" rows="8" id="message" name="message" placeholder="Your Message..." />
                <input className="rad horizCenter submit" type="submit" value="Submit" />
              </form>
              {/* todo still need a submit button and stuff */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
