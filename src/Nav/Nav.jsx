import "./Nav.css";
import navImg from "/nav_bg.svg";
import codeImg from "/code_bg.svg";
import close from "/close.png";
import logo from "/logo.png";
import member_img from "/member.png";
import info_img from "/info.png";
import contact_img from "/contact.png";
import events_img from "/events.png";
import notice_img from "/notice.png";
import { useState, useEffect } from "react";

import { pi } from "mathjs";

function Nav() {
  // Links
  // Hard defined vars
  let c_radDif = (2 * pi) / 5;
  let c_angDif = 360 / 5;
  let [currOpt, setOpt] = useState("");
  let [navDisplay, setDisplay] = useState("hidden");
  let [navStyle, setnavStyle] = useState({});

  const li_properties = [
    { id: 1, link: member_img, name: "Members" },
    { id: 2, link: info_img, name: "About" },
    { id: 3, link: contact_img, name: "Contacts" },
    { id: 4, link: notice_img, name: "Notice" },
    { id: 5, link: events_img, name: "Events" },
  ];
  // About, Members, Contact Us, Events, Notices
  const lis = li_properties.map((pr) => (
    <li
      className="navMenu"
      key={pr.id}
      onMouseOver={(e) => {
        if (pr.id == 1) {
          e.target.parentElement.lastChild.style.zIndex = "1";
          e.target.parentElement.firstChild.style.zIndex = "2";
        } else if (pr.id == 5) {
          e.target.parentElement.lastChild.style.zIndex = "2";
          e.target.parentElement.firstChild.style.zIndex = "3";
        } else {
          e.target.parentElement.lastChild.style.zIndex = "2";
          e.target.parentElement.firstChild.style.zIndex = "2";
        }
        setOpt(pr.name);
      }}
      onMouseOut={(e) => {
        e.target.className = "";
        setOpt("");
      }}
      style={{
        transform: `rotate(${c_angDif * pr.id}deg) translate(-50%,-50%) skew(${c_angDif * 2}deg)`,
      }}
    >
      <img
        src={pr.link}
        style={{
          transform: `skew(-${c_angDif * 2}deg) rotate(${-c_angDif * pr.id}deg)`,
        }}
      />
    </li>
  ));

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 90) {
      setnavStyle({
        top: "10px",
        position: "fixed",
        height: "2rem",
      });
    } else {
      setnavStyle({});
    }
  };

  return (
    <>
      <a href="/Dristi-From-Scratch/">
        <img src={logo} className="logo" />
      </a>
      <div
        className="NavOpener"
        onClick={(e) => {
          setDisplay("PopIn");
        }}
        style={navStyle}
      >
        <svg viewBox="0 0 75 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5359 37C18.0755 34.3333 21.9245 34.3333 23.4641 37L33.8564 55C35.396 57.6667 33.4715 61 30.3923 61H9.6077C6.5285 61 4.60399 57.6667 6.14359 55L16.5359 37Z"
            fill="#80BBE4"
          />
          <path
            d="M50.8564 37C52.396 34.3333 56.245 34.3333 57.7846 37L68.1769 55C69.7165 57.6667 67.792 61 64.7128 61H43.9282C40.849 61 38.9245 57.6667 40.4641 55L50.8564 37Z"
            fill="#80BBE4"
          />
          <path
            d="M33.5359 6C35.0755 3.33334 38.9245 3.33333 40.4641 6L50.8564 24C52.396 26.6667 50.4715 30 47.3923 30H26.6077C23.5285 30 21.604 26.6667 23.1436 24L33.5359 6Z"
            fill="#80BBE4"
          />
        </svg>
      </div>
      <header className={"topNavContainer " + navDisplay}>
        <div className="navText">{currOpt}</div>

        <nav className="topNav">{lis}</nav>

        <span
          className="disc"
          onClick={(e) => {
            setDisplay("hidden");
          }}
        >
          <img src={close} alt="" />
        </span>
      </header>
    </>
  );
}

export default Nav;
