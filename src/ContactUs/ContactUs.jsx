import "./ContactUs.css";
import contactUsGraphics from "/contactUs_graphics.png";
export default function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactUsTitle">Contact Us</div>
      <div className="contactUsContent">
        <form action="submit">
          <div className="form_text parallaxEl">
            <input placeholder=" " type="text" id="name" name="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form_email parallaxEl">
            <input placeholder=" " type="email" id="email" name="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form_message parallaxEl">
            <textarea placeholder=" " id="message" name="message"></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button className="parallaxEl" type="submit">
            Send
          </button>
        </form>
        <img
          className="parallaxEl"
          src={contactUsGraphics}
          alt="Contact Us graphics"
          data-lerp={-8}
        />
      </div>
    </div>
  );
}
