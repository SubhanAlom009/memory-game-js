// DOM elements
const images = document.querySelectorAll('.cards img');
const startBtn = document.getElementById('start');
const startBtnParent = document.getElementById('start-btn-parent');
const gameContainer = document.getElementById('container');
const showScoreTime = document.getElementById('score-time');
const restartBtn = document.getElementById('restart');
const winMsg = document.getElementById('show-msg');
const scoreCalc = document.getElementById('score');
const timeCalc = document.getElementById('time');
const gameBoard = document.getElementById('game-board');

const playGame = document.getElementById('play-game');
const landingPage = document.getElementById('landing-page');
const showCountDown = document.getElementById('show-count-down');
const startCountDown = document.getElementById('count-down');
const homePage = document.getElementById('home');
const showCards = document.getElementById('show-cards');

// Image list
const imgList = ['images-2/captain.png', 'images-2/superhero.png', 'images-2/marvel.png', 'images-2/zemo.png', 'images-2/venom.png', 'images-2/man.png', 'images-2/mask.png', 'images-2/avengers.png', 'images-2/shield.png', 'images-2/people.png'];

// Game variables
let flippedImage = [];
let matchedPairs = [];
let score = 0;
let minutes = 0;
let seconds = 0;
let timer;

// Update time function
function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    let formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formatSeconds = seconds < 10 ? '0' + seconds : seconds;

    timeCalc.innerHTML = `${formatMinutes}:${formatSeconds}`;
}

// Start game function
function startGame() {
    startBtn.disabled = true;
    startBtnParent.classList.add('hidden');
    restartBtn.style.display = 'flex';
    scoreCalc.innerHTML = score;
    showScoreTime.classList.remove('invisible');
    const imgCount = {};

    clearInterval(timer);
    timer = setInterval(updateTime, 1000);

    images.forEach((image) => {
        let imgIndex;
        // Randomly assign images to cards
        do {
            imgIndex = Math.floor(Math.random() * 10);
        } while (imgCount[imgIndex] >= 2);

        imgCount[imgIndex] = (imgCount[imgIndex] || 0) + 1;
        image.src = imgList[imgIndex];

        // Handle card clicks
        setTimeout(() => {
            image.src = "images/background-yellow-color.avif";
            image.addEventListener('click', () => {
                const clickedIndex = imgIndex;
                if (!flippedImage.includes(image) && !matchedPairs.includes(image)) {
                    image.src = imgList[clickedIndex];
                    flippedImage.push(image);
                    if (flippedImage.length === 2) {
                        const src1 = flippedImage[0].src;
                        const src2 = flippedImage[1].src;
                        if (src1 !== src2) {
                            if (score > 0) {
                                score -= 30;
                                scoreCalc.innerHTML = score;
                            } else if (score < 0) {
                                score = 0;
                                scoreCalc.innerHTML = score;
                            }
                            setTimeout(() => {
                                flippedImage.forEach((img) => {
                                    img.src = "images/background-yellow-color.avif";
                                });
                                flippedImage = [];
                            }, 1000);
                        } else {
                            matchedPairs.push(...flippedImage);
                            flippedImage = [];
                            score += 100;
                            scoreCalc.innerHTML = score;
                            setTimeout(() => {
                                if (matchedPairs.length === images.length) {
                                    winMsg.classList.remove('hidden');
                                    clearInterval(timer);
                                }
                            }, 100);
                        }
                    }
                }
            });
        }, 4000);
    });
}

// Restart game function
function restartGame() {
    startBtn.disabled = false;
    startBtnParent.classList.remove('hidden');
    showScoreTime.classList.add('invisible');
    flippedImage = [];
    matchedPairs = [];
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    timeCalc.innerHTML = "00:00";
    winMsg.classList.add('hidden');
    homePage.classList.remove('hidden');
    showCards.classList.add('hidden');
    showCountDown.classList.remove('hidden');
    restartBtn.style.display = 'none';
    score = 0;
    scoreCalc.innerHTML = score;

    // Clear and reshuffle images
    const imgCount = {};
    images.forEach((image) => {
        image.src = "images/background-yellow-color.avif";
    });
}

// Show game board
function showBoard() {
    landingPage.classList.add('hidden');
    gameBoard.classList.remove('hidden');
    restartBtn.style.display = 'none';
}

// Countdown function
let count = 3;
function countdown() {
    count = 3;
    startCountDown.innerHTML = count;
    const interval = setInterval(() => {
        count = count - 1;
        startCountDown.innerHTML = count;
        if (count <= 0) {
            clearInterval(interval);
        }
    }, 1000);
}

// Event listeners
startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    showCountDown.classList.remove('hidden');
    homePage.classList.add('hidden');
    showCards.classList.remove('hidden');
    countdown();
    setTimeout(() => {
        startGame();
        if (showCountDown) {
            showCountDown.classList.add('hidden');
        }
    }, 3000);
});

restartBtn.addEventListener('click', restartGame);
playGame.addEventListener('click', showBoard);
