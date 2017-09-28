var controller = {
    handler: {},
    model: {},
    view: {},
    getHandler: function(handler) {
        this.handler = handler;
    },
    getModel: function(model) {
        this.model = model;
    },
    getView: function(view) {
        this.view = view;
    },
    startGame: function(input1, input2) {
        this.startMoving();
    },
    startMoving: function() {
        var posY = this.model.startPosY;
        var posX = this.model.startPosX;
        
        var stepsArray = this.model.stepsTotal;
        var stepDistance = 30;
        
        stepsArray.forEach(function(step, i) {
            var stepTime = 1000;
            setTimeout(function(){
                switch(step) {
                    case "down":
                    moveDown();
                    controller.view.waiting();
                    break;
                    case "wait":
                    break;
                    case "sideways":
                    controller.view.waitingEnded();
                    moveSideways();
                    break;
                    case "finalDown":
                    stepTime = 50;
                        moveFinalDown();
                        controller.getPositionOfGoal();
                        break;
                    default:
                        break;  
                }
            }, stepTime*i);
                }, this);
                
                function moveDown() {
                    posY -= stepDistance;
                    this.view.moveDown(posY);
                } 
                function moveFinalDown() {
                    posY -= stepDistance*2;
                    this.view.moveDown(posY);
                } 
                function moveSideways() {
                    var random = Math.round(Math.random());
                    if (random === 0) {    
                        posX -= stepDistance;
                        posY -= stepDistance;
                        this.view.moveDown(posY);
                        this.view.moveLeft(posX);
                    } else {
                        posX += stepDistance;
                        posY -= stepDistance;
                        this.view.moveDown(posY);
                        this.view.moveRight(posX);
                    }
                }
            },
            guessNumber: function(number) {
                this.view.yourGuess(number);
                this.model.yourGuess = Number(number);
            },
            getPositionOfGoal: function() {
                var goal1 = document.getElementById("goal-1"); 
                var goal1pos = goal1.offsetLeft;
                
                var goal2 = document.getElementById("goal-2"); 
                var goal2pos = goal2.offsetLeft;
                
                var goal3 = document.getElementById("goal-3"); 
                var goal3pos = goal3.offsetLeft;
                
                var goal4 = document.getElementById("goal-4"); 
                var goal4pos = goal4.offsetLeft;
                
                var circle = document.getElementById("circle"); 
                var circlePos = circle.offsetLeft;

                setTimeout(function(){
                    if (circlePos > goal1pos-25 && circlePos < goal1pos+25) {
                        this.model.won = 1;
                    } else if (circlePos > goal2pos-25 && circlePos < goal2pos+25) {
                        this.model.won = 2;
                    }  else if (circlePos > goal3pos-25 && circlePos < goal3pos+25) {
                        this.model.won = 3;
                    } else if (circlePos > goal4pos-25 && circlePos < goal4pos+25) {
                        this.model.won = 4;
                    }

                    if (this.model.yourGuess === this.model.won) {
                        this.view.resultDisplayWon("you won! :-D");
                        this.controller.gameEnded();                        
                    } else {
                        this.view.resultDisplayLost("you lost! :-(");
                        this.controller.gameEnded();                        
                    }
                }, 1000);
            },
            gameEnded: function() {
                setTimeout(function() {
                    this.view.resetGame();
                    model.startPosX =  125;
                    model.startPosY = 250;
                    this.view.disableStartGameButton();
                    
                }, 5000);
            }
        }