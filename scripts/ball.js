class Ball {
  constructor(game) {
    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.size = 16;

    this.speed = {
      x: 7,
      y: 5,
    };

    this.position = {
      x: 300,
      y: 300,
    };
    this.image = document.querySelector(".ballImage");
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;

    this.position.y += this.speed.y;

    // wall on the sides
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0)
      this.speed.x = -this.speed.x;

    // wall on the top
    if (this.position.y < 0)
      this.speed.y = -this.speed.y;
    
    if(this.position.y + this.size > this.gameHeight){
      this.game.lives -= 1;
    }
    

    // paddle collision

    let paddle = this.game.paddle;

    if (detectCollision(this, paddle)) {
      this.speed.y = -this.speed.y;
    }

  }
}
