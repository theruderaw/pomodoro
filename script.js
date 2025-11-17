const displayElement = document.getElementById("display");
const [start, stop, reset] = document.getElementsByClassName("btn");

let timerdata = 25 * 60;
let intervalId = null;

function updateDisplay() {
    const minutes = Math.floor(timerdata / 60);
    const seconds = timerdata % 60;
    displayElement.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

start.addEventListener("click", () => {
    if (intervalId) return; // prevents multiple intervals

    console.log("Started");

    intervalId = setInterval(() => {
        timerdata--;

        updateDisplay();

        if (timerdata <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            console.log("Timer Finished");
        }
    }, 1000);
});

stop.addEventListener("click", () => {
    console.log("Stopped");
    clearInterval(intervalId);
    intervalId = null;
});

reset.addEventListener("click", () => {
    console.log("Reset");
    clearInterval(intervalId);
    intervalId = null;

    timerdata = 25 * 60;
    updateDisplay();
});
