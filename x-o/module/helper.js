//helper function for the game

//use to set selected on start game screen

function Profile(){
    Game.selectedProfile.forEach(img =>{
        console.log("hi")
        img.addEventListener("click", e =>{
            console.log("Hello")
            let target = e.target.dataset.id
            removeImgSelection(Game.selectedProfile)
            document.querySelector(`[data-id='${target}']`).classList.add("selected")
          
            
            //user chooose other profile
          if(target =='x2' || target=='y2'){
            Game.X_CLASS = "x2",
            Game.Y_CLASS = "y2";
          }
            
            //set turn
            Game.turn=target =='y'|| target=='y2' ? true:false

        });
    });
}


//REMOVE SELECTED IMAGES
function removeImgSelection(img){
    [].forEach.call(img, function(el) {
        el.classList.remove("selected")
    })
}

//to setHoverEffect to the cell
 function setHoverEffect(){
    Game.boardElement.classList.remove(Game.X_CLASS);
    Game.boardElement.classList.remove(Game.Y_CLASS);
    if(Game.turn){
        Game.boardElement.classList.add(Game.X_CLASS);
    } else{
        Game.boardElement.classList.add(Game.Y_CLASS);   
    }
}

//add current user in the cell
function markCell(cell, currentClass){
    cell.classList.add(currentClass)
}

//swap user turn
 function swapTurns(turn){
    return turn =! turn;
}

//end game function
function endGame(draw, winEl, drawEl){
    if(!draw){
        winEl.classList.add("show")
    }else{
        drawEl.classList.add("show")
    }
}

    //check draw result
function isDraw (flag){
    if(flag.length) return;
    return [...Game.blockElements].every(cell => {
        return cell.classList.contains(Game.X_CLASS) || cell.classList.contains(Game.Y_CLASS)
    })
}


//background music

var bgMusic = new Audio ("../audio/One Piece Song.mp3")
bgMusic.volume = 0.2
bgMusic.play()
bgMusic.loop =true