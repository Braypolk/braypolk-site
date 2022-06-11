import Image from 'next/image';
import React, { useRef, useEffect } from "react";
import ScrollHighlightNabbar from "../utils/ScrollHighlightNavbar";

import Experience from '../utils/Experience';
import { DownloadButton, Linkedin, Github } from '../utils/svg.js';
import portrait from "../public/assets/portrait.jpg";

export default function Home() {
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);

  const sectionRefs = [
    { section: "About", ref: about },
    { section: "Experience", ref: experience },
    { section: "Contact", ref: contact }
  ];

  async function handleOnSubmit(e) {
    e.preventDefault(e);
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name ) return;
      formData[field.name] = field.value;
    });

    fetch('api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })

    var form = document.getElementById("form");
    form.reset();
    // todo: on success show a messsage
  }

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
          {/* todo have file be called only when downloaded */}
          <a href="/assets/resume.pdf" download>
            <p>Download<br />Resume</p>
            <div className="fullWidth allCenter breath2"><DownloadButton /></div>
          </a>
        </div>
      </header>
      <div className="wrapper">
        <div className="heroPage">
          <div className="image absoluteCenter">
            <Image
              alt="Mountains"
              src={portrait}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              placeholder="blur"
              priority="true"
            />
          </div>
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
            <p className="aboutText spaceLeft">Technology, art, and the outdoors are things I love. Technology and art have a relationship of being opposite yet connected. During college, this opposition morphed into a compatibility that I&apos;m so fortunate I found. I studied computer science and minored in photography at Montana State University. What a beautiful state! This satisfied the three things I mentioned earlier and gave me insight to the differences and similarities of engineers and artists. </p>
          </div>

          <div className="experience horizCenter topPad" ref={experience} id="Experience">
            <h1 className="bottomPad textCenter">Professional Experience</h1>
            <Experience />
          </div>
          <div className="about" ref={contact} id="Contact">
            <div className="allCenter spaceRight">
              <div className="fix">
                <h1>Let&apos;s<br />Connect</h1>
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
            {/* todo on submit clear form */}
            <div className="form" >
              <form id="form" className="bottomPad" method="post" onSubmit={handleOnSubmit}>
                <input className="rad" type="text" id="name" name="name" placeholder="Name" />
                <input className="rad" type="email" id="email" name="email" placeholder="Email" />
                <textarea className="rad" cols="40" rows="8" id="message" name="message" placeholder="Your Message..." />
                <button className="rad horizCenter submit" type="submit">Submit</button>
              </form>
              {/* todo still need a submit button and stuff */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
