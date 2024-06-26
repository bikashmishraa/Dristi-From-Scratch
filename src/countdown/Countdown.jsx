import { useState } from "react";
import "./Countdown.css";
import mouseImg from "/m1.png";

function Countdown() {
  // const deadline = new Date('May 15 24 00:00:00');
  const deadline = new Date("June 24 24 00:00:00");
  const event = "Advanced Machine Learning";
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSec] = useState(0);

  setInterval(() => {
    const today = new Date();
    let tsec = (deadline.getTime() - today.getTime()) / 1000;
    if (tsec > 0) {
      setDays(
        Math.floor(tsec / 86400).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      );
      setHours(
        Math.floor((tsec % 86400) / 3600).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      );
      setMins(
        Math.floor((tsec % 3600) / 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      );
      setSec(
        Math.floor(tsec % 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      );

      //console.log(countVar)
    } else {
      countVar = `Today!`;
    }
  }, 1000);

  return (
    <>
      <div className="countdown">
        <div className="countdownObj">
          <div className="dayshour">
            {days}:{hours}
          </div>
          <div className="minsec">
            {mins}:{secs}
          </div>
        </div>
        <div className="notcountdown">
          left for <br />
          {event}
          <br />
        </div>
        <img className="mouseimg" src={mouseImg} alt="mouse img" />
      </div>
    </>
  );
}

export default Countdown;
