let parallaxEls = document.getElementsByClassName("parallaxEl");
import { useState, useEffect } from "react";
let parallaxElsPos = [];

const lerp = 5;

function Parallax() {
  const [changeInTransform, setChangeInTransform] = useState();

  useEffect(() => {
    for (let i = 0; i < parallaxEls.length; i++) {
      parallaxElsPos.push(
        window.pageYOffset + parallaxEls[i].getBoundingClientRect().top,
      );
    }

    const handleScroll = () => {
      setChangeInTransform(window.pageYOffset / lerp);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    for (let i = 0; i < parallaxEls.length; i++) {
      parallaxEls[i].style.transform =
        `translate(0, calc(${-changeInTransform + parallaxElsPos[i] / lerp}px - ${50 / lerp}vh))`;
    }
  }, [changeInTransform]);
}

export default Parallax;
