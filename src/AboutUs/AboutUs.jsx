import "./AboutUs.css";
import aboutUsImg from "/about_us.png";
import Cards from "../Cards/Cards.jsx";

export default function AboutUs() {
  return (
    <div className="aboutUs" id="aboutUs">
      <img className="parallaxEl" src={aboutUsImg} alt="" data-lerp="-15" />
      <div className="aboutUsContent">
        <div className="aboutUsText">
          <div className="aboutUsTitle">About Us</div>
          <p>
            KEC IT Club is a small, independent, and non-profit organization
            that provides a safe and welcoming space for people to learn about
            technology and computer science. We believe that everyone should
            have access to the knowledge and skills they need to succeed in the
            digital age. Our mission is to empower individuals to become
            confident and competent in their use of technology and computer
            science.
          </p>
          <p>
            We are committed to providing a supportive and inclusive environment
            for all members of our community. We believe that everyone should
            feel valued and respected, regardless of their background or
            experience. We strive to create a welcoming and inclusive space
            where everyone can feel comfortable sharing their ideas and
            opinions.
          </p>
          <p>
            We are dedicated to providing high-quality education and resources
            to our community. We believe that education is the key to unlocking
            the potential of individuals and communities. We work hard to ensure
            that our community has access to the best resources and
            opportunities for learning and growth.
          </p>
          <p>
            We are committed to promoting diversity and inclusion in our
            community. We believe that everyone should have the opportunity to
            learn and grow, regardless of their background or identity. We work
            hard to create a welcoming and inclusive environment where everyone
            feels valued and respected.
          </p>
          <p>
            We are dedicated to providing a safe and welcoming space for all
            members of our community. We believe that everyone should feel
            comfortable sharing their ideas and opinions. We work hard to ensure
            that our community has access to the best resources and
            opportunities for learning and growth.
          </p>
        </div>
        <Cards
          id="MembersCard"
          title="Our Members"
          president="Sujan/Aryan"
          vicePresident="That guy"
          secretary="Him and Her"
          member1="Him and Her"
          member2="Him and Her"
        />
      </div>
    </div>
  );
}
