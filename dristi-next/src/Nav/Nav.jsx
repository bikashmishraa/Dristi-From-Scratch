import "./Nav.css";
import { useState } from 'react'
import {sin, cos, pi, min} from 'mathjs'

function Nav() {
  // Links
  // Hard defined vars
  let c_radDif = 2*pi/5;
  let c_angDif = 360/5;
  let [currOpt, setOpt] = useState("Navigation");
  let [navDisplay, setDisplay] = useState("hidden");

  const li_properties = [
    {id:1, link: "src/assets/member.png", name: "Members"},
    {id:2, link: "src/assets/info.png", name: "About"},
    {id:3, link: "src/assets/contact.png", name: "Contacts"},
    {id:4, link: "src/assets/notice.png", name: "Notice"},
    {id:5, link: "src/assets/events.png", name: "Events"},
  ]
  const lis = li_properties.map(pr => <li className="navMenu" key={pr.id} 
    // About, Members, Contact Us, Events, Notices

    onMouseOver={(e)=>{

      e.target.className="onHover"

      if(pr.id == 1){
        e.target.parentElement.lastChild.style.zIndex="1"
        e.target.parentElement.firstChild.style.zIndex="2"
      } else if(pr.id == 5){
        e.target.parentElement.lastChild.style.zIndex="2"
        e.target.parentElement.firstChild.style.zIndex="3"
      }else{
        e.target.parentElement.lastChild.style.zIndex="2"
        e.target.parentElement.firstChild.style.zIndex="2"
      }
      setOpt(pr.name);
    }}
    onMouseOut={(e)=>{
      e.target.className=""
      setOpt("Navigation")
    }} 
    style={{
      transform: `rotate(${(c_angDif)*(pr.id)}deg) translate(-50%,-50%) skew(${c_angDif*2}deg)`,
    }}>
    <img src={pr.link} style = {{transform: `skew(-${c_angDif*2}deg) rotate(${-(c_angDif)*(pr.id)}deg)`}}/>
    </li>)


  return (
    <>
    <img src="src/assets/logo.png" className='logo'/>
    <div className="NavOpener" onClick={(e)=>{
      setDisplay("PopIn")
    }}>
    <img src="/src/assets/code.png" alt="Nav" />
    </div>
    <header className={"topNavContainer "+ navDisplay}>
    <div className="navText">{currOpt}</div>

    <nav className="topNav">
    {lis}
    </nav>

    <span className="disc" onClick={(e)=>{
      setDisplay("hidden")
    }}>
    <img src="src/assets/close.png" alt="" />
    </span>
    </header>
    </>
  )
}

export default Nav
