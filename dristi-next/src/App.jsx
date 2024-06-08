import Countdown from './countdown/Countdown.jsx'
import Nav from './Nav/Nav.jsx';
import Cards from './Cards/Cards.jsx';
import './App.css';

function App() {

  return (
    <>
     <Nav/>
     <Countdown/>
     <div className="pageContent">
       <Cards id="circleButtons" title= "KEC IT Club" button1="About Us" button2="Contact Us"/>
       <Cards id="one" title= "Our Identity" content="the members on our team are this this and thiss..."/>
      </div>
    </>
  );
}

export default App
