//globalvariables parts

let Game={
    X_CLASS : 'x', //female = o
    Y_CLASS: 'y', //male = x
    turn: undefined,
    winner: null,
    selectedProfile: document.querySelectorAll(".img .id"),
    blockElements: document.querySelectorAll('[data-cell]'),
    boardElement: document.getElementById("board"),
    startBtn: document.getElementById("startBtn"),
    startWindow: document.querySelector(".start-game"),
    winEl: document.querySelector(".winner-msg"),
    drawEl: document.querySelector(".draw-msg"),
    winnerImg: document.querySelector(".winner-msg .winner"),
    restartBtn1: document.getElementById("restartBtn1"),
    continueBtn1: document.getElementById("continueBtn1"),
    restartBtn2: document.getElementById("restartBtn2"),
    continueBtn2: document.getElementById("continueBtn2"),
    player1: document.getElementById('chopper'),
    player2: document.getElementById('sanji'),
    player3: document.getElementById('luffy'),
    player4: document.getElementById('zoro')
}