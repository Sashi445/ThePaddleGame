class Game {
  
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    this.gameObjects = [];

    this.inputHandler = new InputHandler(this);

    this.currentLevel = 0;

    this.gameState = GAME_STATES.MENU;

    this.lives = 1;
  }

  start() {
    let bricks = buildLevel(this, this.currentLevel);
    this.gameObjects = [this.paddle, this.ball, ...bricks];
  }

  draw(context) {
    if (this.gameState === GAME_STATES.MENU) {
      context.fillStyle = "rgba(0, 0, 0, 1)";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      context.font = "50px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText(
        "Press 'Space Bar' to start!",
        this.gameWidth / 2,
        this.gameHeight / 2
      );

      return;
    }

    if (this.gameState === GAME_STATES.PAUSE) {
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      context.font = "30px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (this.gameState === GAME_STATES.GAMEOVER) {
      context.fillStyle = "rgba(0, 0, 0, 1)";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      context.font = "30px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("GAMEOVER", this.gameWidth / 2, this.gameHeight / 2);
    }

    this.gameObjects.forEach((gameObject) => gameObject.draw(context));
  }

  update(deltaTime) {

    if(this.lives === 0){
        this.gameState = GAME_STATES.GAMEOVER;
    }

    if (
      this.gameState === GAME_STATES.MENU ||
      this.gameState === GAME_STATES.PAUSE ||
      this.gameState === GAME_STATES.GAMEOVER
    )
      return;

    this.gameObjects.forEach((gameObject) => gameObject.update(deltaTime));

    this.gameObjects = this.gameObjects.filter(
      (gameObject) => !gameObject.markedForDeletion
    );
  }

  togglePause() {
    if (this.gameState === GAME_STATES.PAUSE) {
      this.gameState = GAME_STATES.PLAY;
    } else {
      this.gameState = GAME_STATES.PAUSE;
    }
  }

  reset() {
    this.draw();
  }
}
