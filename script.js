
let [millisec, seconds, minutes, hours] = [0, 0, 0, 0];
var displayTime = document.getElementById("displaytime");
var Laps = document.getElementsByClassName("unorderedlist");
var LapsCount =document.getElementById("lapscount");
var Road =document.getElementById("road");
var Running=document.getElementById("running");
var timer = null;
var lapnow =null;

function runningTime() {
    millisec++;
    if (millisec/100 === 1) {
        millisec = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }

    }

    var mill = millisec < 10 ? "0" + millisec : millisec;
    var sec = seconds < 10 ? "0" + seconds : seconds;
    var min = minutes < 10 ? "0" + minutes : minutes;
    var hr = hours < 10 ? "0" + hours : hours;
    displayTime.innerHTML = hr + ":" + min + ":" + sec + ":" + mill;
}

function startTime() {

    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(runningTime,10);
    Running.style.visibility="visible";
    Road.style.visibility="visible";

}

function stoptime() {
    clearInterval(timer);
    Running.style.visibility="hidden";
    Road.style.visibility="hidden";

    
}

function restartTime() {
    clearInterval(timer);
    let [millisec, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00:00";
    Running.style.visibility="hidden";
    Road.style.visibility="hidden";
   
}

function removelaps(){
    LapsCount.innerHTML=  "";
}

function LapFunction() {

   

    function startTime() {

        if (lapnow !== null) {
            clearInterval(lapnow);
        }
    }
    lapnow = `<div class="unorderedlist">${hours}  : ${minutes} : ${seconds} : ${millisec}</div>`
    LapsCount.innerHTML += lapnow; 
    
  



}




