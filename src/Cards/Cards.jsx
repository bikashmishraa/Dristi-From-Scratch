import "./Cards.css";
import { useState, useEffect, useRef } from "react";

function Cards(props) {
  const [changeInTransform, setChangeInTransform] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setChangeInTransform(window.pageYOffset / 5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (props.id == "circleButtons") {
    return (
      <div
        className="glassCards glass"
        id={props.id}
        style={{
          transform: `translate(0, calc(-20vh - ${changeInTransform}px))`,
        }}
      >
        <div className="cardTitle">{props.title}</div>
        <div className="cardContent">
          <button className="activated">{props.button1}</button>
          <button className="deactivated">{props.button2}</button>
        </div>
      </div>
    );
  } else if (props.id == "image") {
    return (
      <div
        className="glassCards"
        id={props.id}
        style={{
          transform: `translate(0, calc(-20vh - ${changeInTransform}px))`,
        }}
      >
        <img src={props.src} />
      </div>
    );
  }
  return (
    <div
      className="glassCards glass"
      id={props.id}
      style={{
        transform: `translate(0, calc(-20vh - ${changeInTransform}px))`,
      }}
    >
      <div className="cardTitle">{props.title}</div>
      <div className="cardContent">{props.content}</div>
    </div>
  );
}

export default Cards;
