let trainingStreak = 0;
let codingStreak = 0;

function incrementStreak(currentActivity) {
    switch (currentActivity) {
        case 'Training':
            return ++trainingStreak;
        case 'Coding':
            return ++codingStreak;
    }
}

function resetStreak(currentActivity) {
    switch (currentActivity) {
        case 'Training':
            return trainingStreak = 0;
        case 'Coding':
            return codingStreak = 0;
    }
}

function runSimulation() {
    let currentActivity = document.getElementById('activity').value;
    let isDoneToday = document.getElementById('done').value;

    if (isDoneToday === 'yes') {
        incrementStreak(currentActivity);
    } else {
        resetStreak(currentActivity);
    }

    // Update the streak display
    document.getElementById('training').textContent = 'Training streak: ' + trainingStreak;
    document.getElementById('coding').textContent = 'Coding streak: ' + codingStreak;
}
