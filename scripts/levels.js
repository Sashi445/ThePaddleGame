
const levels = [
    [
        [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
]

const buildLevel = (game, levelIndex) => {
    
    const bricks = [];

    let level = levels[levelIndex];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick === 1){

                let width = game.gameWidth / 10;
                let height = width / 3;

                let position = {
                    x : width * brickIndex,
                    y : height * rowIndex
                }
                bricks.push(new Brick(game, position));
            }
        })
    });

    return bricks;

}