import React, { useRef, useEffect, useState } from "react";

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
      const scrollPosition = window.scrollY ;
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
    <ul className="navList" >
      {sectionRefs.map((header, index) => (
        <li key={index}>
          <a
            className={visibleSection === header.section ? "selected" : ""}
            onClick={() => {
              scrollTo(header.ref.current);
              let toggle = document.getElementById("toggler");
              toggle.checked = !toggle.checked
            }}
          >
            {header.section}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ScrollHighlightNabbar;
