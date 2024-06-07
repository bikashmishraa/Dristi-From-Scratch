import "./Nav.css";
import {sin, cos} from 'mathjs';

function Nav() {
  let link_events = "https://img.icons8.com/?size=100&id=hO8FWC0uqKZ1&format=png&color=FFFFFF";
  let link_aboutUs = "https://img.icons8.com/?size=100&id=hSqH00VDLIBm&format=png&color=FFFFFF";
  let link_contactUs = "https://img.icons8.com/?size=100&id=vUrsmTHgHKwZ&format=png&color=FFFFFF";
  let link_members = "https://img.icons8.com/?size=100&id=TOXaloxW5Kv3&format=png&color=FFFFFF";
  let link_notices = "https://img.icons8.com/?size=100&id=5P2vUcSRZgZt&format=png&color=FFFFFF";
  let circ_angle_diff = 360/5;
  let circ_pos_1 = [sin(0), cos(0)];
  let circ_pos_2 = [sin(circ_angle_diff), cos(circ_angle_diff)];
  let circ_pos_3 = [sin(circ_angle_diff*3), cos(circ_angle_diff*3)];
  let circ_pos_4 = [sin(circ_angle_diff*4), cos(circ_angle_diff*4)];
  let circ_pos_5 = [sin(circ_angle_diff*5), cos(circ_angle_diff*5)];
  let circ_pos_6 = [sin(circ_angle_diff*6), cos(circ_angle_diff*6)];
  return (
    <nav className="topNav">
      <li><img src={link_events} alt="Events"/></li>
      <li><img src={link_aboutUs} alt="About Us"/></li>
      <li><img src={link_contactUs} alt="Contact Us"/></li>
      <li><img src={link_members} alt="Members"/></li>
      <li><img src={link_notices} alt="Notices"/></li>
    </nav>
  )
}

export default Nav
