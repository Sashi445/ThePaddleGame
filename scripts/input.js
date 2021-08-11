class InputHandler {
  constructor(game) {
    
    document.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowLeft":
          game.paddle.moveLeft();
          break;
        case "ArrowRight":
          game.paddle.moveRight();
          break;
        case " ":
          console.log("Starting game");
          console.log(game.gameState);
          game.gameState = GAME_STATES.PLAY;
          break;
        case "Escape":
          if(game.gameState !== GAME_STATES.MENU || game.gameState !== GAME_STATES.GAMEOVER) game.togglePause();
          break;
        default : console.log(e.key);
      }
    });

    document.addEventListener("keyup", function (e) {
      switch (e.key) {
        case "ArrowLeft":
            if(game.paddle.speed < 0) game.paddle.stop();
          break;
        case "ArrowRight":
          if(game.paddle.speed > 0)  game.paddle.stop();
          break;
      }
    });
  }
}
