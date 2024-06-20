import React, { useRef, useEffect, useState } from "react";
import Toggle from "./Toggle";

export const boxChange = () => {
  const otherside = document.getElementById('otherSidebar')
  const bigName = document.getElementById('bigFirstName')
  const checkbox = document.getElementById('toggler')
  if (window.matchMedia('(max-width: 1000px)').matches) {
    if (checkbox.checked) {
      otherside.style.transform = 'translateX(' + -30 + 'vw)'
      bigName.style.transform = 'translateY(' + 0 + 'vh'
      document.body.classList.add('stop-scrolling')
    } else {
      otherside.style.transform = 'translateX(' + 30 + 'vw)'
      bigName.style.transform = 'translateY(' + -100 + 'vh)'
      document.body.classList.remove('stop-scrolling')
    }
  }
}

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

// https://codesandbox.io/s/github/codedailyio/StickyHeaderSections?file=/src/App.css

// todo: works decent, but I want it to be based on what section has the highest percentage on screen rather than a fixed point
function ScrollHighlightNabbar({ sectionRefs }) {
  const [visibleSection, setVisibleSection] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const eleValues = ele.getBoundingClientRect();
          return eleValues.top <= 100 && eleValues.bottom >= 100;
        }
      });
      // console.log(selected)
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);


  return (
    <>

      <ul className="navList" >
        {/* <button id="colorSchemeToggle" onClick={toggleColorScheme}>Toggle Color Scheme</button> */}
        {/* <li key='toggle'>
          <a
            onClick={toggleColorScheme}
          >
            Toggle Color Scheme
          </a>
        </li> */}
        <li><Toggle /></li>
        {sectionRefs.map((header, index) => (
          <li key={index}>
            <a
              className={visibleSection === header.section ? "selected" : ""}
              onClick={() => {
                scrollTo(header.ref.current);
                let toggle = document.getElementById("toggler");
                toggle.checked = toggle.checked ? !toggle.checked : toggle.checked;
                boxChange();
              }}
            >
              {header.section}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ScrollHighlightNabbar;
