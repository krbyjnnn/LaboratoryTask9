// Level Four
const submitBtn = document.getElementById('submitBtn');
const heroInput = document.getElementById('heroName');
const messageArea = document.getElementById('validationMessage'); 

submitBtn.addEventListener('click', function() {
    const nameValue = heroInput.value.trim();

    if (nameValue === "") {
        messageArea.innerText = "Name is required!";
        messageArea.style.color = "red";
    } else {
        messageArea.innerHTML = `Welcome, ${nameValue}!`; 
        messageArea.style.color = "green";
    }
});
