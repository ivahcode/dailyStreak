let timeLeft = 100;
const meter = document.getElementById("meter");
const timeDisplay = document.getElementById("time-display");

function updateMeter() {
    timeDisplay.textContent = timeLeft;
    meter.style.width = (timeLeft / 100 * 100) + "%";

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timeLeft = 0;
        alert("Time is up!");
    }
}

function decreaseTime() {
    if (timeLeft > 0) {
        timeLeft -= 1;
        updateMeter();
    }
}

function increaseTime(amount) {
    timeLeft += amount;
    updateMeter();
}

function addNewButton() {
    const newTimeValue = document.getElementById("newTimeValue").value;
    if (newTimeValue && newTimeValue > 0) {
        const newButton = document.createElement("button");
        newButton.textContent = `+${newTimeValue}s`;
        newButton.onclick = () => increaseTime(parseInt(newTimeValue));
        document.getElementById("buttons-container").appendChild(newButton);
    }
}

// Start the timer
const timerInterval = setInterval(decreaseTime, 1000);
updateMeter();
