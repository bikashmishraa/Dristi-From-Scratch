import "./Nav.css";
import navImg from "/code.png";
import close from "/close.png";
import logo from "/logo.png";
import member_img from "/member.png";
import info_img from "/info.png";
import contact_img from "/contact.png";
import events_img from "/events.png";
import notice_img from "/notice.png";

import { useState, useEffect } from 'react'
import {sin, cos, pi, min} from 'mathjs'

function Nav() {
  // Links
  // Hard defined vars
  let c_radDif = 2*pi/5;
  let c_angDif = 360/5;
  let [currOpt, setOpt] = useState("");
  let [navDisplay, setDisplay] = useState("hidden");
  let [navStyle, setnavStyle] = useState({});

  const li_properties = [
    {id:1, link:  member_img , name: "Members"},
    {id:2, link:  info_img , name: "About"},
    {id:3, link:  contact_img, name: "Contacts"},
    {id:4, link:  notice_img , name: "Notice"},
    {id:5, link:  events_img , name: "Events"},
  ]
    // About, Members, Contact Us, Events, Notices
  const lis = li_properties.map(pr => <li className="navMenu" key={pr.id} 

    onMouseOver={(e)=>{

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
      setOpt("")
    }} 
    style={{
      transform: `rotate(${(c_angDif)*(pr.id)}deg) translate(-50%,-50%) skew(${c_angDif*2}deg)`,
    }}>
    <img src={pr.link} style = {{transform: `skew(-${c_angDif*2}deg) rotate(${-(c_angDif)*(pr.id)}deg)`}}/>
    </li>)

  window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 90){
      setnavStyle({
        position: "fixed",
        top: "10px",
      })
    }else{
      setnavStyle({})
    }
  }

  return (
    <>
    <img src={logo} className='logo'/>
    <div className="NavOpener" onClick={(e)=>{
      setDisplay("PopIn")
    }} 
    style = {navStyle}
    >
    <img src={navImg} alt="Nav" />
    </div>
    <header className={"topNavContainer "+ navDisplay} >
    <div className="navText">{currOpt}</div>

    <nav className="topNav">
    {lis}
    </nav>

    <span className="disc" onClick={(e)=>{
      setDisplay("hidden")
    }}>
    <img src={close} alt="" />
    </span>
    </header>
    </>
  )
}

export default Nav
