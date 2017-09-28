var handler = {
    setupEvents: function() {
        var startButton = document.getElementById("startGameButton");
        startButton.onclick = function() {
            controller.startGame();
        }
        var goalButtons = function() {
            var goalButton1 = document.getElementById("goal-1").innerHTML;
            goalButton1.onclick = this.controller.guessNumber(goalButton1);
            
            var goalButton2 = document.getElementById("goal-2").innerHTML;
            goalButton2.onclick = this.controller.guessNumber(goalButton2);
            
            var goalButton3 = document.getElementById("goal-3").innerHTML;
            goalButton3.onclick = this.controller.guessNumber(goalButton3);
            
            var goalButton4 = document.getElementById("goal-4").innerHTML;
            goalButton4.onclick = this.controller.guessNumber(this.innerHTML);
        }
    }
}