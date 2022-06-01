import './App.css';

// https://mycareer.qodeinteractive.com/maria/

function App() {
  return (
    <div className="app">
      <header className="sidebar">
        <div className="center picker">
          <nav>
            <ul>
              <li><a href=""><span>About</span></a></li>
              <li><a href=""><span>Experience</span></a></li>
              <li><a href=""><span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="downloadSection">
          <a href="">
            <svg></svg>
            <span>Download Resume</span>
          </a>
          </div>
      </header>
      <div className="heroPage">
        <img src="" />
        <div className="words">
          <h1>Hi</h1>
          <h1>I'm Bray</h1>
        </div>
        <div className="someInfo">
          A Full-stack Developer Who Is Always Learning
        </div>
        <div className="action">
          <h3>Learn more below</h3>
        </div>
      </div>

      <div className="About">
        <h1>About Me</h1>
        {/* 
          crypto
          spotify
          infra stuff
          web dev stuff
        */}

        <p>Technology, art, and the outdoors. What a weird combo, but those are things I love. Technology and art have this weird relationship of being so opposite yet connected. During college, this opposition morphed into a compatibility that I'm so fortunate I found. I studied computer science and minored in photography at Montana State University. What a beautiful state! This satisfied the three things I mentioned earlier and gave me insight to the differences and similarities of engineers and artists. 
           
        </p>
      </div>

      <div className="experience">
        <h1>Professional Experience</h1>

        <div className="block">
          <div className="info">
            <h3 className="company">Maven Wave</h3>
            <p className="date">June 2021 - Present</p>
            <p className="title">DevOps Analyst</p>
            <ul className="jobPoints">
              <li>Worked with Capital One to re-platform infrastructure of acquired company. Ensuring security, stability, minimal down time, and compliance with organization</li>
              <li>Major role in deployment and improvement of multi-tenant, HITRUST environments for Mayo Clinic. Requiring deep understanding of large scale terraform deployment, organizational policies, and the ability to pivot based on customer needs.</li>
            </ul>
          </div>
          <img src="" />
        </div>

        <div className="block">
          <div className="info">
            <h3 className="company">Yellowstone Ecological Research Center </h3>
            <p className="date">September 2020 - May 2021</p>
            <p className="title">Computer Science Intern, Senior Capstone Team </p>
            <ul className="jobPoints">
              <li>Developing machine learning model based on statistical analysis to forecast watershed information through sensors and geographic information systems (GIS).</li>
              <li>Created structured database storing rationalized data to easily display analysis for interactive webservice.</li>
            </ul>
          </div>
          <img src="" />
        </div>

        <div className="block">
          <div className="info">
            <h3 className="company">Zoot Enterprises</h3>
            <p className="date">June - August 2020</p>
            <p className="title">Computer Science Intern, Microservices Team</p>
            <ul className="jobPoints">
              <li>Collaborated with technical leads, technical writers, and other developers to create attributes based on  specifications created from software architects.</li>
              <li>Audited attributes other developers created to ensure complete compatibility with the entire system. • Configured connections to data providers through company software.</li>
            </ul>
          </div>
          <img src="" />
        </div>

        <div className="block">
          <div className="info">
            <h3 className="company">Nextworld</h3>
            <p className="date">May - July 2019</p>
            <p className="title">Computer Science Intern, Integration & Implementation Team</p>
            <ul className="jobPoints">
              <li>Developed the full stack of a website to train customers on various functionality of Nextworld's enterprise platform; presented to company executives, including the CEO, using PowerPoint and a live demonstration.</li>
              <li>Built strong relationships with other teams and departments, which was critical to implementing projects on-time. • Integrated cross-reference functionality for general ledger accounts in partnership with finance.</li>
            </ul>
          </div>
          <img src="" />
        </div>

        <div className="block">
          <div className="info">
            <h3 className="company">Bray Polkinghorne Enterprises, Sole Proprietorship</h3>
            <p className="date">2017 - 2021</p>
            <p className="title"></p>
            <ul className="jobPoints">
              <li>Setup business and created website to showcase my photography at farmers' markets.</li>
              <li>Used as a tool to learn and expand my knowledge of different technologies like ReactJS, NodeJS, MongoDB, and GCP</li>
            </ul>
          </div>
          <img src="" />
        </div>
      </div>
    </div>
  );
}

export default App;
