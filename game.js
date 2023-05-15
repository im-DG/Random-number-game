let attempts = 5;
let randomNumber = Math.floor(Math.random() * 20) + 1;
function show() {
    let userInput = parseInt(document.getElementById("num1").value);
    let display = document.getElementById("display");
    console.log(randomNumber);
    if (attempts === 0) {
        display.innerHTML = `Game over! You have used all your attempts and number is ${randomNumber}.`;
        display.style.color = 'red';
        document.getElementById("ok-btn").disabled = true;
        return;
    }

    if (userInput === randomNumber) {
        display.innerHTML = "Congratulations! You guessed the correct number!";
        display.style.color = 'green';
        document.getElementById("ok-btn").disabled = true;
    }
    else {
        if (randomNumber < userInput) {

            display.innerHTML = `Oops! You guessed higher, You have ${attempts--} attempts.`;
        }
        else {

            display.innerHTML = `Oops! You guessed lower,You have ${attempts--} attempts.`;
        }
    }
}
