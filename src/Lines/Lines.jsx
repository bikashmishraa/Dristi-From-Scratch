import "./Lines.css";
function Lines(){
    return(
        <div className="lines">
            
            <div className="lineHorizontal"></div>
            
            <div className="boxLeft">
                <div className="lineLeft"></div>
            </div>
            <div className="boxCenter">
                <div className="lineCenter"></div>
            </div>
            <div className="boxRight">
                <div className="lineRight"></div>
            </div>
        </div>
    );
}

export default Lines;