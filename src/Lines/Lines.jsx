import "./Lines.css";
import { useEffect, useState } from "react";

function Lines() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Get the height of the document after its loaded
    const height = document.documentElement.getBoundingClientRect().height;
    const innerHeight = window.innerHeight;

    const bulbsMotion = () => {
      setScrollY(
        window.pageYOffset +
          (window.pageYOffset / (height - innerHeight + 300)) * innerHeight,
      );
    };
    bulbsMotion();
    window.addEventListener("scroll", bulbsMotion);

    return () => {
      window.removeEventListener("scroll", bulbsMotion);
    };
  }, []);

  return (
    <div className="lines">
      <div className="lineHorizontal"> </div>
      <div className="boxLeft">
        <div className="lineLeft">
          <div
            className="bulb"
            style={{
              translate: `0 ${scrollY}px`,
            }}
          ></div>
        </div>
      </div>
      <div className="boxCenter">
        <div className="lineCenter">
          <div
            className="bulb"
            style={{
              translate: `0 ${scrollY}px`,
            }}
          ></div>
        </div>
      </div>
      <div className="boxRight">
        <div className="lineRight">
          <div
            className="bulb"
            style={{
              translate: `0 ${scrollY}px`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Lines;
