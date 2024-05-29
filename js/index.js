countDownDiv = document.getElementById("countdown")
// const deadline = new Date('May 15 24 00:00:00');
const deadline = new Date('June 15 24 00:00:00');
const today = new Date();

let tsec = (deadline.getTime() - today.getTime()) / 1000
let days = 0
let hour = 0
let min = 0
let sec = 0

setInterval(() =>{
    if(tsec > 0){
        tsec = tsec - 1
        days = (Math.floor(tsec/86400)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        hour = (Math.floor((tsec%86400)/3600)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        min = (Math.floor((tsec%3600)/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        sec = (Math.floor(tsec%60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

        countDownDiv.innerHTML = `<span id="countDownDays">${days}</span>:<span id="countDownHours">${hour}</span><br><span id="countDownMins">${min}</span>:<span id="countDownSecs">${sec}</span>`
    } else{
        countDownDiv.innerHTML =`Today!`
        
    }
},1000 )



// onclick events
viewOnMap = document.getElementById("view-on-map")
mapContainer = document.getElementById("mapContainer")
viewOnMap.addEventListener("click", containerToggle)

function containerToggle(){
    if(mapContainer.style.height == "80vh"){
        mapContainer.style.height = "0vh";
    }
    else{
        mapContainer.style.height = "80vh";
    }
}
