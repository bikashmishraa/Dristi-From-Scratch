import { useEffect } from "react";
import Countdown from "./countdown/Countdown.jsx";
import Nav from "./Nav/Nav.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Footer from "./Footer/Footer.jsx";
import Parallax from "./Parallax/Parallax.js";
import Cards from "./Cards/Cards.jsx";
import "./App.css";
import Lenis from "lenis";
import kecImg from "/kec_peeps.png";
import Lines from "./Lines/Lines.jsx";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Parallax />
      <Lines />
      <Nav />
      <Countdown />
      <div className="pageContent">
        <Cards
          id="circleButtons"
          title="KEC IT Club"
          button1="About Us"
          button2="Contact Us"
        />
        <Cards id="image" src={kecImg} />
        <Cards
          id="one"
          title="New Notice"
          content="The KEC IT club is in the way to configuring your life's choices eradicating all of your desires and pain from your physical body ..."
        />
        <Cards
          id="two"
          title="Our Projects"
          content="We have created so many projects that talking about said projects is a pure waste of time. Instead watch us fight this capybara..."
        />
      </div>
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
