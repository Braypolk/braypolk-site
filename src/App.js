import React, { useRef, useEffect } from "react";
import ScrollHighlightNabbar from "./ScrollHighlightNavbar";

import Experience from './Experience';
import {DownloadButton, Linkedin, Github} from './assets/svg';

import './App.css';

// https://mycareer.qodeinteractive.com/maria/

function App() {
  const about = useRef();
  const experience = useRef();
  const contact = useRef();

  const navHeader = [
    {
      headerTitle: "About",
      headerRef: about,
      headerID: "about"
    },
    {
      headerTitle: "Experience",
      headerRef: experience,
      headerID: "experience"
    },
    {
      headerTitle: "Contact",
      headerRef: contact,
      headerID: "contact"
    }
  ];

  return (
    <div className="app">
      <header className="sidebar">
        <div className="allCenter picker">
          <ScrollHighlightNabbar contact={contact} navHeader={navHeader} />
        </div>
        <div className="downloadSection allCenter">
          <a className="" href="">
            <p>Download<br />Resume</p>
            <div className="fullWidth allCenter breath2"><DownloadButton /></div>
          </a>
        </div>
      </header>
      <div className="wrapper">
        <div className="heroPage">
          <div className="image absoluteCenter"></div>
          <div className="bigFirstName">
            BRAY POLKINGHORNE
          </div>
          <div className="someInfo">
            <p>Full-stack Developer<br />Always Learning</p>
            <h3 className="action">Learn more below</h3>
          </div>

          {/* <div className="bigLastName">
              Polkinghorne
            </div> */}
        </div>
        <div className="around topPad" id="about">
          <div className="about topPad bottomPad" ref={about}>
            <h1 className="allCenter">About Me</h1>
            {/* 
              crypto
              spotify
              infra stuff
              web dev stuff
            */}

            <p className="aboutText spaceLeft">Technology, art, and the outdoors. What a weird combo, but those are things I love. Technology and art have this weird relationship of being opposite yet connected. During college, this opposition morphed into a compatibility that I'm so fortunate I found. I studied computer science and minored in photography at Montana State University. What a beautiful state! This satisfied the three things I mentioned earlier and gave me insight to the differences and similarities of engineers and artists. </p>
          </div>

          <div className="experience horizCenter topPad" ref={experience} id="experience">
            <h1 className="bottomPad textCenter">Professional Experience</h1>
            <Experience />
          </div>

          <div className="about" ref={contact} id="contact">
            <div className="allCenter spaceRight">
              <div className="fix">
                <h1>Contact Me</h1>
                <div className="social horizCenter">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/braypolk/">
                        {/* todo: fix this stuff <p>Linkedin</p> */}
                        Linkedin
                        <Linkedin/>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Braypolk">
                        {/* todo: fix this stuff <p>Github</p> */}
                        Github
                        <Github/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form">
              <form>
                <input className="rad" type="text" id="name" name="name" placeholder="Name" />
                <input className="rad" type="text" id="email" name="email" placeholder="Email" />
                <textarea className="rad" cols="40" rows="8" id="message" name="message" placeholder="Your Message..." />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
