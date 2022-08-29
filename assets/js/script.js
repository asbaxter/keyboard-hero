const game = document.getElementById("game");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const scoreEl = document.getElementById("score");
const missNote = document.getElementById("missNote");
const penguinTrack = document.getElementById("penguinTrack");
const note = '';

let btnXY = btn1.getBoundingClientRect();
let btnHit = 0;
let score = 0;

// event listeners for click and keypress so player can use either controls
btn1.addEventListener("mousedown", (event)=> {
    btnHit = 1;
    buttonPressed(btnHit);
})

btn2.addEventListener("mousedown", (event)=> {
    btnHit = 2;
    buttonPressed(btnHit);
})

btn3.addEventListener("mousedown", (event)=> {
    btnHit = 3;
    buttonPressed(btnHit);
})

btn4.addEventListener("mousedown", (event)=> {
    btnHit = 4;
    buttonPressed(btnHit);
})

document.addEventListener("keydown", (event => {
    let keyPressed = event.key;

    if(keyPressed == 1){
        btnHit = 1;
        buttonPressed(btnHit);
    }
    else if(keyPressed == 2){
        btnHit = 2;
        buttonPressed(btnHit);
    }
    else if(keyPressed == 3){
        btnHit = 3;
        buttonPressed(btnHit);
    }
    else if(keyPressed == 4){
        btnHit = 4;
        buttonPressed(btnHit);
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

document.addEventListener("mouseup", (event => {
    btn1.removeAttribute("class", "pressed")
    btn2.removeAttribute("class", "pressed")
    btn3.removeAttribute("class", "pressed")
    btn4.removeAttribute("class", "pressed")
}))

function buttonPressed(btnHit){
     
    if(btnHit == 1){
        btn1.setAttribute("class", "pressed")
    }
    else if(btnHit == 2){
        btn2.setAttribute("class", "pressed")
    }
    else if(btnHit == 3){
        btn3.setAttribute("class", "pressed")
    }
    else{
        btn4.setAttribute("class", "pressed")
    }
    return;
}

// create different color notes and remove after timeout
function greenNote(){
    const note = document.createElement("div");
    note.setAttribute("id", "greenNote");
    game.appendChild(note);


    // checks position of note
    let checkNotePosition = setInterval(function(){
        var noteXY = note.getBoundingClientRect();
        noteTop = noteXY.top;
        checkHit(noteTop);
    },10);

    setTimeout(function(){
        game.removeChild(note);
        clearInterval(checkNotePosition);
    },1300);
}

function redNote(){
    const note = document.createElement("div");
    note.setAttribute("id", "redNote");
    game.appendChild(note);


    let checkNotePosition = setInterval(function(){
        var noteXY = note.getBoundingClientRect();
        noteTop = noteXY.top;
        checkHit(noteTop);
    },10);

    setTimeout(function(){
        game.removeChild(note);
        clearInterval(checkNotePosition);
    },1300);


}
function yellowNote(){
    const note = document.createElement("div");
    note.setAttribute("id", "yellowNote");
    game.appendChild(note);


    let checkNotePosition = setInterval(function(){
        var noteXY = note.getBoundingClientRect();
        noteTop = noteXY.top;
        checkHit(noteTop);
    },10);
  
    setTimeout(function(){
        game.removeChild(note);
        clearInterval(checkNotePosition);
    },1300);

}

function blueNote(){
    const note = document.createElement("div");
    note.setAttribute("id", "blueNote");
    game.appendChild(note);


    let checkNotePosition = setInterval(function(){
        var noteXY = note.getBoundingClientRect();
        noteTop = noteXY.top;
        checkHit(noteTop);
    },10);

    setTimeout(function(){
        game.removeChild(note);
        clearInterval(checkNotePosition);
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
1
    }, 475);
}());
}

function checkHit(noteTop){

    if (btnHit == 1 && noteTop >= 300){
        score = score + 10;
        btnHit = 0;
        displayScore();
    }
    else if (btnHit == 2 && noteTop >= 300){
        score = score + 10;
        btnHit = 0;
        displayScore();
    }
    else if (btnHit == 3 && noteTop >= 300){
        score = score + 10;
        btnHit = 0;
        displayScore();
    }
    else if (btnHit == 4 && noteTop >= 300){
        score = score + 10;
        btnHit = 0;
        displayScore();
    }
    else if (btnHit != 0){1
        score = score - 5;
        btnHit = 0;
        missNote.play();
        console.log(noteTop);
        displayScore();
    }
    else{
        return btnHit = 0;
    }
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



