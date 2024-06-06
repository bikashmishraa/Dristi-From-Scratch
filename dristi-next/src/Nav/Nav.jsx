import "./Nav.css";
const Math = require('mathjs');

function Nav() {
  let link_events = "https://img.icons8.com/?size=100&id=hO8FWC0uqKZ1&format=png&color=FFFFFF";
  let link_aboutUs = "https://img.icons8.com/?size=100&id=hSqH00VDLIBm&format=png&color=FFFFFF";
  let link_contactUs = "https://img.icons8.com/?size=100&id=vUrsmTHgHKwZ&format=png&color=FFFFFF";
  let link_members = "https://img.icons8.com/?size=100&id=TOXaloxW5Kv3&format=png&color=FFFFFF";
  let link_notices = "https://img.icons8.com/?size=100&id=5P2vUcSRZgZt&format=png&color=FFFFFF";
  let circ_angle_diff = 360/5;
  let circ_pos_1 = [Math.sin(0), Math.cos(0)];
  let circ_pos_2 = [Math.sin(circ_angle_diff), Math.cos(circ_angle_diff)];
  let circ_pos_3 = [Math.sin(circ_angle_diff*3), Math.cos(circ_angle_diff*3)];
  let circ_pos_4 = [Math.sin(circ_angle_diff*4), Math.cos(circ_angle_diff*4)];
  let circ_pos_5 = [Math.sin(circ_angle_diff*5), Math.cos(circ_angle_diff*5)];
  let circ_pos_6 = [Math.sin(circ_angle_diff*6), Math.cos(circ_angle_diff*6)];
  return (
    <nav className="topNav">
      <li><img src={link_events} alt="Events" style="left:{circ_pos_1[0]}"/></li>
      <li><img src={link_aboutUs} alt="About Us"/></li>
      <li><img src={link_contactUs} alt="Contact Us"/></li>
      <li><img src={link_members} alt="Members"/></li>
      <li><img src={link_notices} alt="Notices"/></li>
    </nav>
  )
}

export default Nav
