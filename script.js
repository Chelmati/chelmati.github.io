
const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop")
const submitElement = document.getElementById("submit");
const resetElement = document.getElementById("reset");

const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

let timerId = null;
let mins = 0;
let resetTime = 0;

const displayTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    console.log("reached time");
    Minutes.innerHTML = min;
    if (sec < 10) {
        Seconds.innerHTML = "0"+sec
    }
    else {
    Seconds.innerHTML = sec;
    }



}

const startHandle = () => {
    console.log("Working")
    if (timerId !== null) {
        return;
    }

    Notification.requestPermission((result) => {
        console.log(result);
    });



    mins = parseInt(Minutes.textContent)
    resetTime = mins;
    console.log("Seconds are", mins)
    let compute = mins * 60;

    timerId = setInterval(() => {
        


        console.log("Timer running");
        compute--;
        displayTime(compute);
        
        if (compute <= 0) {
            clearInterval(timerId)
            timerId = null
            const img = "globe.png";
            const text = `Your timer has ended`;
            const notification = new Notification("To do list", { body: text, icon: img });
        }


    }, 1000)
}

const stopHandle = () => {
    clearInterval(timerId);
    timerId = null;
}

const submitButton = () => {
    const value = document.getElementById("mins").value;
    console.log(value);
    Minutes.innerHTML = value;
    Seconds.innerHTML = "00"
    //document.getElementById("minutes").innerHTML(value);
}

const resetButton = () => {
    clearInterval(timerId)
    timerId = null;
    Minutes.innerHTML = resetTime;
    Seconds.innerHTML = "00"
}

startElement.addEventListener("click", startHandle)
stopElement.addEventListener("click", stopHandle)
submitElement.addEventListener("click", submitButton)
resetElement.addEventListener("click", resetButton)


