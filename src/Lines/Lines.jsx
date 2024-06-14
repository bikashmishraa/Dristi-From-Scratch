import "./Lines.css";
import { useEffect, useState } from "react";

function Lines() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const bulbsMotion = () => {
      setScrollY(window.pageYOffset * 1.5);
    };
    bulbsMotion();
    window.addEventListener("scroll", bulbsMotion);

    return () => {
      window.removeEventListener("scroll", bulbsMotion);
    };
  }, []);

  return (
    <div className="lines">
      <div className="lineHorizontal">
        <div
          className="bulb"
          style={{
            translate: `0 ${scrollY}px`,
          }}
        ></div>
      </div>
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
