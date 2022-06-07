
//game button
Game.startBtn.addEventListener("click", startGame);
Game.continueBtn1.addEventListener("click", startGame);
Game.continueBtn2.addEventListener("click", startGame);
Game.restartBtn1.addEventListener("click", reset);
Game.restartBtn2.addEventListener("click", reset);




Profile()
//start game
function startGame(){
    console.log("start game")
    setHoverEffect();
    bgMusic.play()


    //iterate cell, add click event
    Game.blockElements.forEach(cell=>{
        cell.classList.remove(Game.X_CLASS);
        cell.classList.remove(Game.Y_CLASS);
        cell.classList.remove("win");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, {once: true})
    })

    Game.startWindow.classList.add("hide");
    Game.winEl.classList.remove("show");
    Game.drawEl.classList.remove("show");
    Game.winnerImg.children.length ? Game.winnerImg.removeChild(Game.winner): null;
}



function reset(){
    console.log("start game")
    setHoverEffect();
    //iterate cell, add click event
    Game.blockElements.forEach(cell=>{
        cell.classList.remove(Game.X_CLASS);
        cell.classList.remove(Game.Y_CLASS);
        cell.classList.remove("win");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, {once: true})
    })
    Game.startWindow.classList.remove("hide");
    Game.startWindow.classList.add("show");
    Game.winEl.classList.remove("show");
    Game.drawEl.classList.remove("show");
    Game.winnerImg.children.length ? Game.winnerImg.removeChild(Game.winner): null;
}


// handler onclick function of the cell
function handleClick(e){
    const cell = e.target;
    const currentClass= Game.turn ? Game.Y_CLASS : Game.X_CLASS
    markCell(cell, currentClass);
    console.log(checkWin(currentClass, Game.blockElements))
     /** check winner */
   let flag = checkWin(currentClass, Game.blockElements).filter((win, index) => {
    
    console.log("did score run here?")
    if (win){
    
        // add green background to the winner 
        WIN_COMBINATIONS[index].map(i => {
            Game.blockElements[i].classList.add('win');    
        })
        console.log("Winner: " + currentClass)

        // set the winner
        Game.winner = Game.blockElements[WIN_COMBINATIONS[index][0]].cloneNode(true);
        console.log("menang")
        console.log(Game.winner)
        score(currentClass)
        return win !== false;
       }
    });
    //  check for win or draw
    if (flag.length){
        
        endGame(false, Game.winEl, Game.drawEl);
        Game.winnerImg.append(Game.winner);
    }else if(isDraw(flag)){
       endGame(true, Game.winEl, Game.drawEl);
    }
    console.log("did you run here to?")
    Game.turn = swapTurns(Game.turn);
    setHoverEffect();
}
    
