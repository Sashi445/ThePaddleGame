class Brick {
  constructor(game, position) {
    this.game = game;
    this.image = document.getElementById("brick");

    this.position = position;

    this.width = game.gameWidth/10;
    this.height = this.width / 3;

    this.markedForDeletion = false;

  }


  update(){
    if(detectCollision(this.game.ball, this)){

      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDeletion = true;

    }
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
