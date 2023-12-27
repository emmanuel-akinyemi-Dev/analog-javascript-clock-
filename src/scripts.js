" use strict";

setInterval(setClock,1000);

const hourHand = document.querySelector('[data-hour]');
const secondsHand = document.querySelector('[data-seconds]');
const minuteHand = document.querySelector('[data-minute]');
const datedisplay = document.querySelector('[data-date]');
const spinner = document.querySelector('[data-spinner]');


function setClock(){
    const currentTime= new Date();
    console.log(currentTime);
    const secondsRatio = currentTime.getSeconds()/60;
    const minuteRatio =(secondsRatio+currentTime.getMinutes() )/60;
    const hourRatio = (minuteRatio + currentTime.getHours())/12;
    setRotation(secondsHand, secondsRatio);
    setRotation(spinner, secondsRatio );
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand , hourRatio );
    datedisplay.innerHTML=currentTime.getDate().toString() + '/'+ currentTime.getMonth( ).toString() +'/'+ currentTime.getFullYear().toString();
 
}
 
function setRotation(element, rotationRatio){
    
    element.style.setProperty('--rotation', rotationRatio *360) ;
   
}


setClock();