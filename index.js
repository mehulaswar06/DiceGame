document.querySelector("button").onclick = function () { rollDice() };
function rollDice() {
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var dice1 = document.querySelector(".img1")
    var dice2 = document.querySelector(".img2")
    var heading = document.querySelector("h1")
    heading.style.fontSize = "5rem"
    dice1.src = "images/dice" + randomNum1 + ".png"
    dice2.src = "images/dice" + randomNum2 + ".png"

    if (randomNum1 > randomNum2) {
        heading.innerText = "First Player Wins🏆"
    }
    else if (randomNum2 > randomNum1) {
        heading.innerText = "Second Player Wins🏆"
    }
    else {
        heading.innerText = "Draw🎌"
    }
}