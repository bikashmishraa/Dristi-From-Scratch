import {useState} from 'react';
import './Countdown.css'
import mouseIng from '/m1.png'

 function Countdown(){
    
// const deadline = new Date('May 15 24 00:00:00');
const deadline = new Date('November 15 24 00:00:00');
const today = new Date();
const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [mins, setMins] = useState(0);
const [secs, setSec] = useState(0);

let tsec = (deadline.getTime() - today.getTime()) / 1000

setInterval(() =>{
    if(tsec > 0){
        tsec = tsec - 1;
        setDays((Math.floor(tsec/86400)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))
        setHours((Math.floor((tsec%86400)/3600)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))
        setMins((Math.floor((tsec%3600)/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))
        setSec((Math.floor(tsec%60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))

        //console.log(countVar)
    } else{
        countVar =`Today!`
        
    }
},1000 )

    return(
      <>
        <div className='countdown'>
            <div className='countdownObj'>
                <div className='dayshour'>
                    {days}:{hours}
                </div>
                <div className='minsec'>
                    {mins}:{secs}
                </div>
            </div>
            <div className="notcountdown">
                left for <br />next event
            </div>
            <img className = "mouseimg" src={ mouseIng } alt="mouse img" />
        </div>
      </>
        );
        
    

}

export default Countdown
