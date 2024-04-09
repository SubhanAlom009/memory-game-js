// DOM elements
const images = document.querySelectorAll('img');
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
const highScore = document.getElementById('high-score');
const gameOverMsg = document.getElementById('show-game-over-msg')
const nextLevel = document.getElementById('next-level')
const levelCount = document.getElementById('level-count')

let currentLevel = 0;
let levelCounter = 1;

// Image list
const imgList = ['images-2/captain.png', 'images-2/superhero.png', 'images-2/marvel.png', 'images-2/zemo.png', 'images-2/venom.png', 'images-2/man.png', 'images-2/mask.png', 'images-2/avengers.png', 'images-2/shield.png', 'images-2/people.png'];


const levels = [
    {cards:20, time:{minutes:1,seconds:30},scoreMultiplier:1},
    {cards:20, time:{minutes:1,seconds:0},scoreMultiplier:2},
    {cards:20, time:{minutes:0,seconds:50},scoreMultiplier:3}
]   


const levelTemplates = [
    [
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
        <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
        <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`
    ],
    [
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
        <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
        <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`
    ],
    [
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
        <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
        <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`,
        `<div class="flex items-center w-48 h-48 my-2 border-2 rounded-3xl border-white cursor-pointer transition duration-500 ease-in-out lg:h-36 lg:w-36 md:h-[120px] md:w-[120px] sm:h-28 sm:w-28 bg-[#FAD918] p-2 cards">
            <img class="w-full h-full transition-opacity bg-center bg-contain rounded-3xl" src="images/background-yellow-color.jpg" alt="" srcset="">
        </div>`
    ],
]

console.log(levels[currentLevel].scoreMultiplier);

// Get the highest Score from local storage
highScore.innerHTML = localStorage.getItem('HighScore');

// Game variables
let flippedImage = [];
let matchedPairs = [];
let score = 0;
let minutes = levels[currentLevel].time.minutes;
let seconds = levels[currentLevel].time.seconds;
let timer;

// Update time function
function updateTime() {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if(minutes === 0 && seconds === 0)
    {
        gameOverMsg.classList.remove('hidden')
        clearInterval(timer)
        scoreCalc.innerHTML = 0
        
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
    highScore.innerHTML = localStorage.getItem('HighScore');

    // Set time based on current level
    minutes = levels[currentLevel].time.minutes;
    seconds = levels[currentLevel].time.seconds;

    clearInterval(timer);
    timer = setInterval(updateTime, 1000);

    // Clear existing cards
    showCards.innerHTML = '';

    levelTemplates[currentLevel].forEach((divEle) => {
        // Parse the template string into an HTML element
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = divEle;

        // Access the img tag inside the div element
        const imgElement = tempDiv.querySelector('img');

        let imgIndex;
        // Randomly assign images to cards
        do {
            imgIndex = Math.floor(Math.random() * ((levels[currentLevel].cards)/2));
        } while (imgCount[imgIndex] >= 2);

        imgCount[imgIndex] = (imgCount[imgIndex] || 0) + 1;
        let imgSrc = imgList[imgIndex];
        imgElement.src = imgSrc;
        setTimeout(()=>{
            // Change the src attribute back to default or any other image after 4 seconds
            imgElement.src = "images/background-yellow-color.jpg";
            imgElement.addEventListener('click', () => {
                if (!flippedImage.includes(imgElement) && !matchedPairs.includes(imgElement)) {
                    imgElement.src = imgList[imgIndex];
                    flippedImage.push(imgElement);
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
                                    img.src = "images/background-yellow-color.jpg";
                                });
                                flippedImage = [];
                            }, 1000);
                        } else {
                            matchedPairs.push(...flippedImage);
                            flippedImage = [];
                            score += (100*(levels[currentLevel].scoreMultiplier));
                            scoreCalc.innerHTML = score;
                            setTimeout(() => {
                                if (matchedPairs.length === levels[currentLevel].cards) {
                                    winMsg.classList.remove('hidden');
                                    clearInterval(timer);
                                    if (highScore.innerHTML > scoreCalc.innerHTML) {
                                        highScore.innerHTML = highScore.innerHTML;
                                        localStorage.setItem('HighScore', highScore.innerHTML);
                                    } else {
                                        highScore.innerHTML = scoreCalc.innerHTML;
                                        localStorage.setItem('HighScore', highScore.innerHTML);
                                    }
                                    
                                }
                            }, 100);
                        }
                    }
                }
            });
        },4000)
        // Append the card element to the showCards container
        showCards.appendChild(tempDiv.firstChild);
    });
}

// Restart game function
function restartGame() {
    startBtn.disabled = false;
    highScore.innerHTML = localStorage.getItem('HighScore');
    startBtnParent.classList.remove('hidden');
    gameOverMsg.classList.add('hidden');
    // showScoreTime.classList.add('invisible');
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
        image.src = "images/background-yellow-color.jpg";
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


function updateGameBoard()
{
    showCards.innerHTML = "";
    levelCount.innerHTML = levelCounter

    let currentLevelTemplate = levelTemplates[currentLevel];

    currentLevelTemplate.forEach((template) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = template
        showCards.appendChild(wrapper.firstChild);
    });
}

updateGameBoard()


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

nextLevel.addEventListener('click',()=>{
    if(levelCounter<3)
    {   
        currentLevel++;
        levelCounter++;
        levelCount.innerHTML = levelCounter;
        updateGameBoard();
        restartGame();
        // Set time based on current level
        minutes = levels[currentLevel].time.minutes;
        seconds = levels[currentLevel].time.seconds;
        highScore.innerHTML = localStorage.getItem('HighScore');
    }else{
        currentLevel = 0;
        levelCounter = 1; 
        levelCount.innerHTML = levelCounter;
        updateGameBoard();
        restartGame()
        // Set time based on current level
        minutes = levels[currentLevel].time.minutes;
        seconds = levels[currentLevel].time.seconds;
        highScore.innerHTML = localStorage.getItem('HighScore');
    }

})

restartBtn.addEventListener('click', restartGame);
playGame.addEventListener('click', showBoard);


