const detectCollision = (ball, gameObject) => {
  let gameObjectTop = gameObject.position.y;
  let gameObjectBottom = gameObject.position.y + gameObject.height;
  let gameObjectLeft = gameObject.position.x;
  let gameObjectRight = gameObject.position.x + gameObject.width;

  let ballTop = ball.position.y;
  let ballBottom = ball.position.y + ball.size;
  let ballLeft = ball.position.x;
  let ballRight = ball.position.x + ball.size;

  if (
    ballBottom >= gameObjectTop &&
    ballTop <= gameObjectBottom &&
    ballLeft >= gameObjectLeft &&
    ballRight <= gameObjectRight
  ) {
    return true;
  }

  return false;
};
