import './Cards.css'

function Cards(props){
  if(props.id=="circleButtons"){
    return(
      <div className="glassCards glass" id={props.id}>
        <div className="cardTitle">{props.title}</div>
          <div className="cardContent">
            <button className="activated">{props.button1}</button>
            <button className="deactivated">{props.button2}</button>
          </div>
        </div>
    )

  }else if(props.id=="image"){
    return(
      <div className="glassCards" id={props.id}>
        <img src={props.src}/>
       </div>
    )
  }
  return(
    <div className="glassCards glass" id={props.id}>
      <div className="cardTitle">{props.title}</div>
      <div className="cardContent">{props.content}</div>
    </div>
  )
}

export default Cards
