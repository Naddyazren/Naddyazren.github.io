//scoreboard
let playerScore1= 0;
let playerScore2= 0;

function score (currentClass){
    console.log("tolonglah jadi" + currentClass)
    if(currentClass==="x" ||currentClass==="x2"){
        playerScore1+=1;
        document.getElementById('s1').textContent = playerScore1;
    }
    else if(currentClass==="y"|| currentClass==="y2"){
        playerScore2+=1;
        document.getElementById('s2').textContent = playerScore2;
    }
    
    console.log("tolonglah jadi")
}


/** winning combinations of the game */
const WIN_COMBINATIONS = [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // verticle
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal check
    [2, 4, 6]
];




//check for winner
function checkWin(currentClass, blockElements){
let winMatch = [];
    WIN_COMBINATIONS.some(combination => {
    winMatch.push(combination.every(index => {
        return blockElements[index].classList.contains(currentClass);
    }));

    })
    
    console.log("how about here?")
    return winMatch || null;
}


