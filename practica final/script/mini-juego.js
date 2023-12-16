document.addEventListener('DOMContentLoaded', function () {
    createGameBoard();
    startTimer();
});

const rows = 10;
const cols = 10;
const gameTime = 30;

//const gameBoard = document.getElementById('game-board');
//const timerElement = document.getElementById('timer-countdown');
let playerPosition = { row: 7, col: 7 };
let enemyPosition = { row: getRandomPosition(), col: getRandomPosition() };
let points = 0;
let timer;

function createGameBoard() {
    const gameBoard = document.getElementById('game-board');
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            gameBoard.appendChild(cell);
        }
    }

    movePlayer();
    moveEnemy();
    generatePoints();
}

function movePlayer() {
    const gameBoard = document.getElementById('game-board');
    const player = document.getElementById('player');
    if (!player) {
        const newPlayer = document.createElement('div');
        newPlayer.id = 'player';
        gameBoard.appendChild(newPlayer);
    } else {
        player.style.gridRow = playerPosition.row + 1;
        player.style.gridColumn = playerPosition.col + 1;
    }
}

function moveEnemy() {
    const gameBoard = document.getElementById('game-board');
    const enemy = document.getElementById('enemy');
    if (!enemy) {
        const newEnemy = document.createElement('div');
        newEnemy.id = 'enemy';
        newEnemy.style.gridRow = enemyPosition.row + 1;
        newEnemy.style.gridColumn = enemyPosition.col + 1;
        gameBoard.appendChild(newEnemy);
    } 
}

function generatePoints() {
    const gameBoard = document.getElementById('game-board');
    for (let i = 0; i < 10; i++) {
        const point = document.createElement('div');
        point.className = 'point';
        point.id = 'point' + i;
        const randomRow = getRandomPosition();
        const randomCol = getRandomPosition();
        point.style.gridRow = randomRow + 1;
        point.style.gridColumn = randomCol + 1;
        gameBoard.appendChild(point);
    }
}

function getRandomPosition() {
    return Math.floor(Math.random() * 10);
}

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            movePlayerUp();
            break;
        case 'ArrowDown':
            movePlayerDown();
            break;
        case 'ArrowLeft':
            movePlayerLeft();
            break;
        case 'ArrowRight':
            movePlayerRight();
            break;
    }
}

function movePlayerUp() {
    if (playerPosition.row > 0) {
        playerPosition.row--;
        checkCollisions();
        movePlayer();
    }
}

function movePlayerDown() {
    if (playerPosition.row < rows - 1) {
        playerPosition.row++;
        checkCollisions();
        movePlayer();
    }
}

function movePlayerLeft() {
    if (playerPosition.col > 0) {
        playerPosition.col--;
        checkCollisions();
        movePlayer();
    }
}

function movePlayerRight() {
    if (playerPosition.col < cols - 1) {
        playerPosition.col++;
        checkCollisions();
        movePlayer();
    }
}

function updateTimer(seconds) {
    const timerElement = document.getElementById('timer-countdown');
    timerElement.textContent = seconds;
}

function startTimer() {
    let seconds = gameTime;
    updateTimer(seconds);
    timer = setInterval(function() {
        if (seconds <= 0) {
            alert('¡Tiempo agotado! ¡Has perdido!');
            resetGame();
        } else {
            if (points === 10) {
                alert('¡Has ganado!');
                resetGame();
            }
            seconds--;
            updateTimer(seconds);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function checkCollisions() {
    checkEnemyCollision();
    checkPointCollision();
}

function checkEnemyCollision() {
    if (playerPosition.row === enemyPosition.row && playerPosition.col === enemyPosition.col) {
        alert('¡Has perdido!');
        resetGame();
    }
}

function checkPointCollision() {
    const pointsArray = document.querySelectorAll('.point');
    pointsArray.forEach(point => {
        const pointRow = parseInt(point.style.gridRow) - 1;
        const pointCol = parseInt(point.style.gridColumn) - 1;
        if (playerPosition.row === pointRow && playerPosition.col === pointCol) {
            points++;
            point.remove();
        }
    });
}

function resetGame() {
    playerPosition = { row: 7, col: 7 };
    enemyPosition = { row: getRandomPosition(), col: getRandomPosition() };
    points = 0;
    gameTime = 30;
    gameBoard.innerHTML = '';
    createGameBoard();
}

document.addEventListener('keydown', handleKeyPress);

//Si gana consigue un cupon 
function generarCupon(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let couponCode = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        couponCode += characters.charAt(randomIndex);
    }
    return couponCode;
}

