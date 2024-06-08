import Countdown from './countdown/Countdown.jsx'
import { useEffect } from 'react'
import Nav from './Nav/Nav.jsx';
import Cards from './Cards/Cards.jsx';
import './App.css';
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  return (
    <>
    <Nav />
    <Countdown />
    <div className="pageContent" >
    <Cards id="circleButtons" title= "KEC IT Club" button1="About Us" button2="Contact Us" />
    <Cards id="image" src="src/assets/kec_peeps.png" />
    <Cards id="one" title= "Our Identity" content="the members on our team are this this and thiss..." />
    <Cards id="two" title= "Our Projects" content="the members on our team are this this and thiss..." />
    </div>
    </>
  );
}

export default App
