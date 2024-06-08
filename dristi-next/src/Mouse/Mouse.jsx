import { useState } from 'react'
function Mouse(){
  const [mouse_x, setMouse_x] = useState(0);
  const [mouse_y, setMouse_y] = useState(0);
  window.addEventListener("mousemove", (e)=>{
    setMouse_x(e.clientX)
    setMouse_y(e.clientY)
  })

  let  styleMouse = {
      position: "fixed",
      zIndex: "100",
      top: mouse_y + "px",
      left: mouse_x + "px",
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      mixBlendMode: "difference",
      backgroundColor: "#81BCE4",
      borderRadius: "50%",
      width: "40px",
      aspectRatio:"1",
    }
  return(<span className="mousePlaceHolder" style={styleMouse}></span>)
}

export default Mouse
