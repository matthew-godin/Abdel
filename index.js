var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const levels = [
    "111111111130000001101111001101111011101111011101111011101040011131222011101000011101030111101011111101011111101001111100001111100111111111111111",
    "111111111140000001101111001100100001110101011100101011101101011100001011110011001100011101100000501111111101100000001101111111100002031111111111",
    "111111111104111111102011111100001111110000111111000011111100001111110001110011101100002001100001101100001131100001101100001101100005031111111111",
    "111111111111111111111111111111111111111111111110030011110112011110203411113123111110203111110120111110000111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111111111111113003311110222311110242011110222311113003311111111111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111100111111000111110132111100332001100245001111100011111111111111111111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111111110001110000101112112131110013041113202031100213011101000111100011111111111111111111111111111111",
    "111111111104000001120202021102020201100000001100000001100000001100000001100000001101101101101101101101000101101000101101000101133333331111111111",
    "111111111111111111111111111100000111105550111105005111100010011105510011100052011110050311115511111110411111111111111111111111111111111111111111",
    "111111111111111111111111111111111111130030031100000001102222001102000031132420031102220031100000001100000001130030031111111111111111111111111111",
    "111111111111111111111100011110020311112130501114110001105102111100000301100112001111130501111000511111000011111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111111100011111002001111024201111002001111133331111111111111111111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111110001142023201103232321102323201103232301102303031111111111111111111111111111111111111111111111111111111",
    "111111111111111111111111111100000001102555501105040501105555201100000001103101001100000001100111301100000001111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111100000001102121201103333301103232301102323201101242101100000001111111111111111111111111111111111111",
    "111111111111111111111111111111111111110001111110030111111050011111031011111422011111050111111100111111111111111111111111111111111111111111111111",
    "111111111111111111111104111111100011111002001110000201130002001130000201110000001111000001111000001111100001111100001111113311111111111111111111",
    "111111111111111111111111111100000001102122201102000101101333101103033301101333101102000101102122201100000041111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111110005001110050501110524031110050501110005001111111111111111111111111111111111111111111111111111111",
    "111111111111110001110000001110505011111313011111000111111122111111140111111111111111111111111111111111111111111111111111111111111111111111111111",
    "111111111100000001101110101100333101101333001101131111100333101101333001101212101102020201100202001102020201100222001110040011111111111111111111",
    "111111111111111111111111111130001111132220111132030011132111011104000011132111011132030011132220111130001111111111111111111111111111111111111111",
    "111111111111111111133330241132002021130020201130202001102020101120201001102000231101102031101101031101101231100033331111111111111111111111111111",
    "111111111111001111103050111101050111102234111110050111110000111110001111111111111111111111111111111111111111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111133331111130030111133330011101210001102000201100221201102100201100202101111000001111111141111111111",
    "111111111111111111111111111111111111111111111100003331102222231102403231102222211101013331100003331111111111111111111111111111111111111111111111",
    "111111111111111111111111111100111111100111111104111111132111111132001111132101111132001111132101111132000011132101011100100011111111111111111111",
    "111111111111111111111111111133410011100200011110202011111101111110000011100002011133010011111111111111111111111111111111111111111111111111111111",
    "111111111111111111111111111100011111100500111110333001110200201112111211114502001112333001100500111100011111111111111111111111111111111111111111",
    "111111111111001111110020001110555001110303001100505011100555111111020111111040111111111111111111111111111111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111111110011100005411105052501153505001105000011100010011111111111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111131111111131111111151111110353001110050001110151111110252011110032011110220011110000011111040111111111111",
    "111111111111100011111103311111100011111103311111000011111003311111100011111101111111122411111100011111122011111100011111122011111100011111111111",
    "111111111111111111111111111111111111111000011111000011111105011111105511111123411111105511111105011111100011111110011111111111111111111111111111",
    "111111111111111111111111111111111001110020001110451301110053501111120201110053501110051301110020001111111001111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111111000111111000111111050111100535001100535001100535001111222111111040111111111111111111111111111111",
    "111111111111111111111111111111111111110010011110503011102505011142305011112505011110503011110010011110011111111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111110040011115252511110323011113010311100525001100050001100111001111111111111111111111111111111111111",
    "111111111111111111111111111111111111111111111111111111110010011110222011110053011111053111111053011111053011110053011110422001111110001111111111",
    "111111111111111111111111111111030111111202111100202001103030301111050111111050111111232111111030111111232111111034111111111111111111111111111111"
]

const BLOCK_SIZE= 60;
const NUM_BLOCKS_WIDTH = 16;
const NUM_BLOCKS_HEIGHT = 9;
const NUM_LEVELS = 40;
const DIRECTIONS = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
};
const STATES = {
    EMPTY: 0,
    WALL: 1,
    CRATE: 2,
    GOAL: 3,
    ABDEL: 4,
    CRATE_OK: 5
};

crate = new Image();
crate.src = 'img/crate.png';
abdelLeft = new Image();
abdelLeft.src = 'img/abdelLeft.png';
abdelUp = new Image();
abdelUp.src = 'img/abdelUp.png';
abdelRight = new Image();
abdelRight.src = 'img/abdelRight.png';
abdelDown = new Image();
abdelDown.src = 'img/abdelDown.png';
wall = new Image();
wall.src = 'img/wall.png';
crateOk = new Image();
crateOk.src = 'img/crateOk.png';
asphalt = new Image();
asphalt.src = 'img/asphalt.png';
goal = new Image();
goal.src = 'img/goal.png';

let map = new Array(NUM_BLOCKS_WIDTH);
for (let i = 0; i < NUM_BLOCKS_WIDTH; ++i) {
    map[i] = new Array(NUM_BLOCKS_HEIGHT);
}

let playerPosition = {
    x: 0,
    y: 0
};

let currentDirection = DIRECTIONS.DOWN;

function loadLevel(level) {
    map = new Array(NUM_BLOCKS_WIDTH);
    for (let i = 0; i < NUM_BLOCKS_WIDTH; ++i) {
        map[i] = new Array(NUM_BLOCKS_HEIGHT);
        for (let j = 0; j < NUM_BLOCKS_HEIGHT; ++j) {
            map[i][j] = parseInt(levels[level][i * NUM_BLOCKS_HEIGHT + j]);
            if (map[i][j] == STATES.ABDEL) {
                playerPosition.x = i;
                playerPosition.y = j;
            }
        }
    }
}

let currentLevel = 0;
loadLevel(currentLevel);

let keyPressed = false;
let firstKeyPressed = false;
let whichKeyPressed = DIRECTIONS.DOWN;
let timePressed = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.code  == 'ArrowRight') {
        keyPressed = true;
        firstKeyPressed = true;
        whichKeyPressed = DIRECTIONS.RIGHT;
        timePressed = Date.now();
    } else if (e.code == 'ArrowLeft') {
        keyPressed = true;
        firstKeyPressed = true;
        whichKeyPressed = DIRECTIONS.LEFT;
        timePressed = Date.now();
    } else if (e.code == 'ArrowUp') {
        keyPressed = true;
        firstKeyPressed = true;
        whichKeyPressed = DIRECTIONS.UP;
        timePressed = Date.now();
    } else if (e.code == 'ArrowDown') {
        keyPressed = true;
        firstKeyPressed = true;
        whichKeyPressed = DIRECTIONS.DOWN;
        timePressed = Date.now();
    }
}

function keyUpHandler(e) {
    if (e.code  == 'ArrowRight' || e.code == 'ArrowLeft' || e.code == 'ArrowUp' || e.code == 'ArrowDown') {
        keyPressed = false;
        firstKeyPressed = false;
    }
}

function moveCrate(firstPosition, secondPosition) {
    if (map[firstPosition.x][firstPosition.y] == STATES.CRATE || map[firstPosition.x][firstPosition.y] == STATES.CRATE_OK) {
        if (map[secondPosition.x][secondPosition.y] == STATES.GOAL) {
            map[secondPosition.x][secondPosition.y] = STATES.CRATE_OK;
        } else {
            map[secondPosition.x][secondPosition.y] = STATES.CRATE;
        }
        if (map[firstPosition.x][firstPosition.y] == STATES.CRATE_OK) {
            map[firstPosition.x][firstPosition.y] = STATES.GOAL;
        } else {
            map[firstPosition.x][firstPosition.y] = STATES.EMPTY;
        }
    }
}

function movePlayer(direction) {
    switch(direction) {
        case DIRECTIONS.UP:
            if (playerPosition.y > 0 && map[playerPosition.x][playerPosition.y - 1] != STATES.WALL
                && (map[playerPosition.x][playerPosition.y - 1] != STATES.CRATE && map[playerPosition.x][playerPosition.y - 1] != STATES.CRATE_OK
                    || playerPosition.y > 1 && map[playerPosition.x][playerPosition.y - 2] != STATES.WALL
                    && map[playerPosition.x][playerPosition.y - 2] != STATES.CRATE
                    && map[playerPosition.x][playerPosition.y - 2] != STATES.CRATE_OK)) {
                        moveCrate({ x: playerPosition.x, y: playerPosition.y - 1 }, { x: playerPosition.x, y: playerPosition.y - 2 });
                        --playerPosition.y;
            }
            break;
        case DIRECTIONS.DOWN:
            if (playerPosition.y < NUM_BLOCKS_HEIGHT - 1 && map[playerPosition.x][playerPosition.y + 1] != STATES.WALL
                && (map[playerPosition.x][playerPosition.y + 1] != STATES.CRATE && map[playerPosition.x][playerPosition.y + 1] != STATES.CRATE_OK
                    || playerPosition.y < NUM_BLOCKS_HEIGHT - 2 && map[playerPosition.x][playerPosition.y + 2] != STATES.WALL
                    && map[playerPosition.x][playerPosition.y + 2] != STATES.CRATE
                    && map[playerPosition.x][playerPosition.y + 2] != STATES.CRATE_OK)) {
                        moveCrate({ x: playerPosition.x, y: playerPosition.y + 1 }, { x: playerPosition.x, y: playerPosition.y + 2 });
                        ++playerPosition.y;
            }
            break;
        case DIRECTIONS.RIGHT:
            if (playerPosition.x < NUM_BLOCKS_WIDTH - 1 && map[playerPosition.x + 1][playerPosition.y] != STATES.WALL
                && (map[playerPosition.x + 1][playerPosition.y] != STATES.CRATE && map[playerPosition.x + 1][playerPosition.y] != STATES.CRATE_OK
                    || playerPosition.x < NUM_BLOCKS_WIDTH - 2 && map[playerPosition.x + 2][playerPosition.y] != STATES.WALL
                    && map[playerPosition.x + 2][playerPosition.y] != STATES.CRATE
                    && map[playerPosition.x + 2][playerPosition.y] != STATES.CRATE_OK)) {
                        moveCrate({ x: playerPosition.x + 1, y: playerPosition.y }, { x: playerPosition.x + 2, y: playerPosition.y });
                        ++playerPosition.x;
            }
            break;
        case DIRECTIONS.LEFT:
            if (playerPosition.x > 0 && map[playerPosition.x - 1][playerPosition.y] != STATES.WALL
                && (map[playerPosition.x - 1][playerPosition.y] != STATES.CRATE && map[playerPosition.x - 1][playerPosition.y] != STATES.CRATE_OK
                    || playerPosition.x > 1 && map[playerPosition.x - 2][playerPosition.y] != STATES.WALL
                    && map[playerPosition.x - 2][playerPosition.y] != STATES.CRATE
                    && map[playerPosition.x - 2][playerPosition.y] != STATES.CRATE_OK)) {
                        moveCrate({ x: playerPosition.x - 1, y: playerPosition.y }, { x: playerPosition.x - 2, y: playerPosition.y });
                        --playerPosition.x;
            }
            break;
    }
}

function draw() {
    if (keyPressed && (firstKeyPressed || Date.now() - timePressed > 100)) {
        firstKeyPressed = false;
        timePressed = Date.now();
        switch(whichKeyPressed) {
            case DIRECTIONS.UP:
                currentDirection = DIRECTIONS.UP;
                movePlayer(DIRECTIONS.UP);
                break;
            case DIRECTIONS.DOWN:
                currentDirection = DIRECTIONS.DOWN;
                movePlayer(DIRECTIONS.DOWN);
                break;
            case DIRECTIONS.RIGHT:
                currentDirection = DIRECTIONS.RIGHT;
                movePlayer(DIRECTIONS.RIGHT);
                break;
            case DIRECTIONS.LEFT:
                currentDirection = DIRECTIONS.LEFT;
                movePlayer(DIRECTIONS.LEFT);
                break;
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(asphalt, 0, 0);
    let goalsLeft = false;
    for (let i = 0; i < NUM_BLOCKS_WIDTH; ++i) {
        for (let j = 0; j < NUM_BLOCKS_HEIGHT; ++j) {
            switch(map[i][j]) {
                case STATES.WALL:
                    ctx.drawImage(wall, i * BLOCK_SIZE, j * BLOCK_SIZE);
                    break;
                case STATES.CRATE:
                    ctx.drawImage(crate, i * BLOCK_SIZE, j * BLOCK_SIZE);
                    break;
                case STATES.CRATE_OK:
                    ctx.drawImage(crateOk, i * BLOCK_SIZE, j * BLOCK_SIZE);
                    break;
                case STATES.GOAL:
                    ctx.drawImage(goal, i * BLOCK_SIZE, j * BLOCK_SIZE);
                    goalsLeft = true;
                    break;
            }
        }
    }
    switch (currentDirection) {
        case DIRECTIONS.UP:
            ctx.drawImage(abdelUp, playerPosition.x * BLOCK_SIZE, playerPosition.y * BLOCK_SIZE);
            break;
        case DIRECTIONS.DOWN:
            ctx.drawImage(abdelDown, playerPosition.x * BLOCK_SIZE, playerPosition.y * BLOCK_SIZE);
            break;
        case DIRECTIONS.RIGHT:
            ctx.drawImage(abdelRight, playerPosition.x * BLOCK_SIZE, playerPosition.y * BLOCK_SIZE);
            break;
        case DIRECTIONS.LEFT:
            ctx.drawImage(abdelLeft, playerPosition.x * BLOCK_SIZE, playerPosition.y * BLOCK_SIZE);
            break;
    }
    if (!goalsLeft) {
        loadLevel(++currentLevel)
    }
}

setInterval(draw, 100);