const gameCanvas = document.getElementById("gameCanvas")

const context  = gameCanvas.getContext("2d")


const GAME_HEIGHT = window.innerHeight*0.8

const GAME_WIDTH = window.innerWidth*0.7

gameCanvas.height = GAME_HEIGHT;
gameCanvas.width = GAME_WIDTH;

context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

game.start();

context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

game.draw(context);


function gameLoop(timestamp){

    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(context);

    window.requestAnimationFrame(gameLoop);
}

gameLoop();






