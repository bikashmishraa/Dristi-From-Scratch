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
              title="Workshops ans Seminars"
              description="We organize regular workshops and seminars on cutting-edge technologies such as Artificial Intelligence, Machine Learning, Cybersecurity, Web Development, and more. These sessions are led by industry experts and distinguished alumni, providing valuable insights into current trends and real-world applications."
            />
            <div className="emptyspace"></div>
          </div>
          <div className="Eventlists">
            <div className="emptyspace"></div>
            <Cards
              id="Eventscard"
              title="Hackathons and Competitions"
              description="The club hosts hackathons and coding competitions to stimulate problem-solving and innovative thinking. These events offer a competitive yet supportive environment for students to demonstrate their skills and creativity."
            />
          </div>
          <div className="Eventlists">
            <Cards
              id="Eventscard"
              title="Project Development"
              description="We mentor and support students in developing their own projects, providing hands-on experience and fostering confidence in their technical abilities. This practical approach helps members to apply theoretical knowledge effectively."
            />
            <div className="emptyspace"></div>
          </div>
          <div className="Eventlists">
            <div className="emptyspace"></div>
            <Cards
              id="Eventscard"
              title="Industry Connect"
              description="The club facilitates interactions with industry professionals through guest lectures, webinars, and networking events. These connections provide students with insights into industry trends and career opportunities, helping them to stay updated and prepared for the professional world."
            />
          </div>
        </div>
      </div>
    </>
  );
}
      export default Events;