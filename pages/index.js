import Image from "next/legacy/image"
import Head from 'next/head'
import React, { useRef, useEffect, useState } from 'react'

import ScrollHighlightNabbar, { boxChange } from '../utils/ScrollHighlightNavbar'
import Experience from '../utils/Experience'
import { DownloadButton, Linkedin, Github } from '../utils/svg.js'

import portrait from '../public/assets/portrait.jpg'

export default function Home() {
  const about = useRef(null)
  const experience = useRef(null)
  const contact = useRef(null)

  const sectionRefs = [
    { section: 'About', ref: about },
    { section: 'Experience', ref: experience },
    { section: 'Contact', ref: contact }
  ]

  return (
    <div className='app'>
      <Head>
        <title>BrayPolk</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/* todo stop scroll when mobile view sidebar is open */}
      <input type='checkbox' id='toggler' onChange={boxChange} />
      <div className='hamburger'>
        <div></div>
      </div>
      <header className='sidebar'>
        <div className='allCenter picker'>
          <ScrollHighlightNabbar sectionRefs={sectionRefs} />
        </div>
        <div className='downloadSection allCenter'>
          <a
            href='/assets/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>
              View
              <br />
              Resume
            </p>
            <div className='fullWidth allCenter breath2'>
              <DownloadButton />
            </div>
          </a>
        </div>
      </header>
      {/* todo: bug when switching from small to large view */}
      <div id='bigFirstName'>BRAY POLKINGHORNE</div>
      <div id='otherSidebar'></div>
      <div className='wrapper'>
        <div className='heroPage'>
          <div className='image absoluteCenter'>
            <Image
              alt='Professional portrait of Bray'
              src={portrait}
              layout='fill'
              objectFit='cover'
              objectPosition='top'
              placeholder='blur'
              priority='true'
            />
          </div>
          {/* <Link href='https://untitled.bray.dev' className='untitledLink'>
            <div className='untitledHead'>
              <h1 className='untitledHead'>[untitled] click here</h1>
            </div>
          </Link> */}

          {/* todo fix for mobile display: do a max width and then compress with smaller widths*/}
          <div className='someInfo'>
            <p className='fullstack rad'>Full-stack Developer</p>
            <p className='learning rad'>Always Learning</p>
            <p className='action rad'>Learn more below</p>
          </div>

          {/* <div className="bigLastName">
              Polkinghorne
            </div> */}
        </div>
        <div className='around topPad'>
          <div className='about topPad bottomPad' id='About' ref={about}>
            <h1 className='allCenter'>About Me</h1>
            {/* 
              crypto
              spotify
              infra stuff
              web dev stuff
            */}
            {/*todo string together with outdoors */}
            <p className='aboutText spaceLeft'>
              Technology, art, and the outdoors are things I love. Technology
              and art have a relationship of being opposite yet connected.
              During college, this opposition morphed into a compatibility that
              I&apos;m so fortunate I found. I studied computer science and
              minored in photography at Montana State University. What a
              beautiful state! This satisfied the three things I mentioned
              earlier and gave me insight to the differences and similarities of
              engineers and artists.{' '}
            </p>
          </div>

          <div
            className='experience horizCenter topPad bottomPad'
            ref={experience}
            id='Experience'
          >
            <h1 className='bottomPad textCenter'>Professional Experience</h1>
            <Experience />
          </div>
          <div className='topPad' ref={contact} id='Contact'>
            {/* <div className='fix'> */}
            <h1>
              Let&apos;s
              <br />
              Connect
            </h1>
            <div className='social'>
              <ul className='horizCenter connectUl'>
                <li className='connect'>
                  <a
                    href='https://www.linkedin.com/in/braypolk/'
                    target='blank'
                  >
                    <p>Linkedin</p>
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/Braypolk' target='blank'>
                    <p>Github</p>
                    <Github />
                  </a>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
          <div className='bottom'></div>
        </div>
      </div>
    </div>
  )
}
