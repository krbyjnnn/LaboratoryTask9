// Level Six
const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');
const resultArea = document.getElementById('doorResult');

function checkDoor(doorNumber) {
    resultArea.classList.remove('d-none', 'alert-success', 'alert-danger');

    if (doorNumber === 1) {
        resultArea.innerHTML = "Correct! Quest Complete!";
        resultArea.classList.add('alert-success');
    } else {
        resultArea.innerHTML = "❌ Wrong door. Try again!";
        resultArea.classList.add('alert-danger');
    }
}

door1.addEventListener('click', function() { checkDoor(1); });
door2.addEventListener('click', function() { checkDoor(2); });
door3.addEventListener('click', function() { checkDoor(3); });
