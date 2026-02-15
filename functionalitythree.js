// Level Three
let currentLevel = 1;

const levelUpBtn = document.getElementById('levelUpBtn');
const levelDesc = document.getElementById('levelDesc');

levelUpBtn.addEventListener('click', function() {
    if (currentLevel < 6) {
        currentLevel++;
    }

    levelDesc.innerText = `You leveled up! Current Level: ${currentLevel}`;
});