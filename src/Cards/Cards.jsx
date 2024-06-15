import "./Cards.css";
import dummyImage from "/president.png";

function Cards(props) {
  if (props.id == "circleButtons") {
    return (
      <div className="glassCards glass parallaxEl" id={props.id}>
        <div className="cardTitle">{props.title}</div>
        <div className="cardContent">
          <button className="activated">{props.button1}</button>
          <button className="deactivated">{props.button2}</button>
        </div>
      </div>
    );
  } else if (props.id == "image") {
    return (
      <div className="glassCards" id={props.id}>
        <img src={props.src} />
      </div>
    );
  } else if (props.id == "MembersCard") {
    return (
      <div className="glassCards glass parallaxEl" id={props.id}>
        <div className="cardTitle">{props.title}</div>
        <div className="tablet" id="president_tablet">
          <img src={dummyImage} alt="" />
          {props.president}
          <div className="post">President</div>
        </div>
        <div className="tablet" id="vicePresident_tablet">
          <img src={dummyImage} alt="" />
          {props.vicePresident}
          <div className="post">Vice President</div>
        </div>
        <div className="tablet" id="secretary_tablet">
          <img src={dummyImage} alt="" />
          {props.secretary}
          <div className="post">Secretary</div>
        </div>
        <div className="tablet" id="member1_tablet">
          <img src={dummyImage} alt="" />
          {props.member1}
          <div className="post">Member1</div>
        </div>
        <div className="tablet" id="member2_tablet">
          <img src={dummyImage} alt="" />
          {props.member2}
          <div className="post">Member2</div>
        </div>
      </div>
    );
  }
  return (
    <div className="glassCards glass parallaxEl" id={props.id}>
      <div className="cardTitle">{props.title}</div>
      <div className="cardContent">{props.content}</div>
    </div>
  );
}

export default Cards;
