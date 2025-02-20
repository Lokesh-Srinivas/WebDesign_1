let startTime;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

// Function to format time as HH:MM:SS
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Function to update the time display
function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    timeDisplay.value = formatTime(elapsedTime);
}

// Start the stopwatch
startBtn.addEventListener("click", async () => {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
    }
});

// Stop the stopwatch
stopBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// Reset the stopwatch
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timeDisplay.value = "00:00:00";
});

// Disable manual editing of the time display
timeDisplay.addEventListener("keydown", (e) => {
    e.preventDefault();
});

// Disable manual editing of the date picker
const datePicker = document.getElementById("date-picker");
datePicker.addEventListener("keydown", (e) => {
    e.preventDefault();
});