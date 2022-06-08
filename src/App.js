import Experience from './Experience';
import './App.css';

// https://mycareer.qodeinteractive.com/maria/

function App() {
  return (
    <div className="app">
      <header className="sidebar">
        <div className="allCenter picker">
          <nav>
            <ul className="navList">
              <li><a href="">About</a></li>
              <li><a href="">Experience</a></li>
              <li><a href="">Contact</a></li>
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
      <div className="wrapper">
        <div className="heroPage">
          <div className="bigFirstName">
            BRAY POLKINGHORNE
          </div>
          <div className="someInfo">
            Full-stack Developer Who Is Always Learning
          </div>
          <div className="action">
            <h3>Learn more below</h3>
          </div>

          {/* <div className="bigLastName">
              Polkinghorne
            </div> */}
        </div>
        <div className="around topPad">
          <div className="about topPad">
            <h1 className="allCenter spaceRight">About Me</h1>
            {/* 
              crypto
              spotify
              infra stuff
              web dev stuff
            */}

            <p className="spaceLeft">Technology, art, and the outdoors. What a weird combo, but those are things I love. Technology and art have this weird relationship of being opposite yet connected. During college, this opposition morphed into a compatibility that I'm so fortunate I found. I studied computer science and minored in photography at Montana State University. What a beautiful state! This satisfied the three things I mentioned earlier and gave me insight to the differences and similarities of engineers and artists. </p>
          </div>

          <div className="experience horizCenter topPad">
            <h1 className="bottomPad">Professional Experience</h1>
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
