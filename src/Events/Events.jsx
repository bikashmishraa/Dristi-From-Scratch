import eventGraphic from "/events_bg.png";
import Cards from "../Cards/Cards";
import Parallax from "../Parallax/Parallax";
import Lines from "../Lines/Lines.jsx";
import LenisComponent from "../Lenis/Lenis.js";
import "./Events.css";
function Events() {
  return (
    <>
      <LenisComponent />
      <Parallax />
      <Lines />
      <div className="events">
        <div className="eventImage">
          <img src={eventGraphic} alt="" />
        </div>
        <div className="eventContent">
          <div className="eventTitle">Our Events</div>
          <div className="Eventlists">
            <Cards
              id="Eventscard"
              title="Hackathon 1950"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus esse ab magni."
            />
            <div className="emptyspace"></div>
          </div>
          <div className="Eventlists">
            <div className="emptyspace"></div>
            <Cards
              id="Eventscard"
              title="Blockchain Documentation"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus esse ab magni."
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Events;
