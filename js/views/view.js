var view = {
    moveDown: function(posBottom) {
        var bottom = document.getElementById("circle").style.bottom = posBottom + "px";
    },
    moveLeft: function(posLeft) {
        var left = document.getElementById("circle").style.left = posLeft + "px";
    },
    moveRight: function(posLeft) {
        var left = document.getElementById("circle").style.left = posLeft + "px";
    },
    waiting: function() {
        document.getElementById("circle").classList.add("waiting");
    },
    waitingEnded: function() {
        document.getElementById("circle").classList.remove("waiting");
    },
    yourGuess: function(guess) {
        document.getElementById("your-guess").innerHTML = guess;
        this.disableStartGameButton();
    },
    resultDisplayWon: function(message) {
        document.getElementById("result").innerHTML = message; 
        document.getElementById("result").className = "won"; 
        document.getElementById("startGameButton").value = "Try again?"; 
        controller.gameEnded();
    },
    resultDisplayLost: function(message) {
        document.getElementById("result").innerHTML = message; 
        document.getElementById("result").className = "lost"; 
        document.getElementById("startGameButton").value = "try again?";
        controller.gameEnded();
    },
    resetGame: function() {
        document.getElementById("result").removeAttribute("class"); 
        document.getElementById("circle").removeAttribute("style"); 
    },
    enableStartGameButton: function() {
        document.getElementById("startGameButton").disabled = true;
    },
    disableStartGameButton: function() {
        document.getElementById("startGameButton").disabled = false;

    }
}