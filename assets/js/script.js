const game = document.getElementById("game");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const scoreEl = document.getElementById("score");

const missNote = document.getElementById("missNote");
const penguinTrack = document.getElementById("penguinTrack");

let btnXY = btn1.getBoundingClientRect();
let btnHit = 0;
let score = 0;

// event listeners for click and keypress so player can use either controls

document.addEventListener("keydown", (event => {
    let keyPressed = event.key;

    if(keyPressed == 1){
        btnHit = 1;
        btn1.setAttribute("class", "pressed");
    }
    else if(keyPressed == 2){
        btnHit = 2;
        btn2.setAttribute("class", "pressed");
    }
    else if(keyPressed == 3){
        btnHit = 3;
        btn3.setAttribute("class", "pressed");
    }
    else if(keyPressed == 4){
        btnHit = 4;
        btn4.setAttribute("class", "pressed");
    }
    else {
        return;
    }
}))

document.addEventListener("keyup", (event => {
    btn1.removeAttribute("class", "pressed")
    btn2.removeAttribute("class", "pressed")
    btn3.removeAttribute("class", "pressed")
    btn4.removeAttribute("class", "pressed")
}))

// create different color notes and remove after timeout
function greenNote(){
    const note = document.createElement("div");
    note.setAttribute("id", "greenNote");
    game.appendChild(note);

    checkHit(note);

    setTimeout(function(){
        game.removeChild(note);
    },1300);
}

function redNote(){
    const note = document.createElement("div");
    note.setAttribute("id", "redNote");
    game.appendChild(note);

    checkHit(note);

    setTimeout(function(){
        game.removeChild(note);
    },1300);


}
function yellowNote(){
    const note = document.createElement("div");
    note.setAttribute("id", "yellowNote");
    game.appendChild(note);

    checkHit(note);
  
    setTimeout(function(){
        game.removeChild(note);
    },1300);

}

function blueNote(){
    const note = document.createElement("div");
    note.setAttribute("id", "blueNote");
    game.appendChild(note);

    checkHit(note);

    setTimeout(function(){
        game.removeChild(note);
    },1300);
}

function pickNote() {

(function loop() {

    setTimeout(function() {
        
        let randNote = Math.floor(Math.random() * 4) + 1;

        if (randNote == 1){
            greenNote();
            loop();
        }
        else if (randNote == 2){
            redNote();
            loop();
        }
        else if (randNote == 3){
            yellowNote();
            loop();
        }
        else{
            blueNote();
            loop();
        }
    }, 475);
}());
}

function checkHit(note){
 
    let checkNotePosition = setInterval(function(){
        var noteXY = note.getBoundingClientRect();
        noteTop = noteXY.top;

        if (btnHit == 1 && noteTop >= 540){
            score = score + 10;
            displayScore();
        }
        else if (btnHit == 2 && noteTop >= 540){
            score = score + 10;
            displayScore();
        }
        else if (btnHit == 3 && noteTop >= 540){
            score = score + 10;
            displayScore();
        }
        else if (btnHit == 4 && noteTop >= 540){
            score = score + 10;
            displayScore();
        }
        else if (btnHit != 0 && noteTop < 540){
            score = score - 5;
            missNote.play();
            displayScore();
        }
        else{
            return;
        }
        btnHit = 0;
    },10);

    setTimeout(function(){
        clearInterval(checkNotePosition);
    },1400);
}

function displayScore(){
    return scoreEl.textContent = "Score: " + score;
}

function init(){
    document.addEventListener("click", (event)=> {
        penguinTrack.play();
        displayScore();
        pickNote();
    })
}

init();



