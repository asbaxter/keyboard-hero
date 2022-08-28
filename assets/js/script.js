const game = document.getElementById("game");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const note = '';

let btnXY = btn1.getBoundingClientRect();
let btnHit = 0;


// event listeners for click and keypress so player can use either controls
btn1.addEventListener("click", (event)=> {
    btnHit = 1;
})

btn2.addEventListener("click", (event)=> {
    btnHit = 2;
})

btn3.addEventListener("click", (event)=> {
    btnHit = 3;
})

btn4.addEventListener("click", (event)=> {
    btnHit = 4;
})

document.addEventListener("keydown", (event => {
    let keyPressed = event.key;

    if(keyPressed == 1){
        btnHit = 1;
    }
    else if(keyPressed == 2){
        btnHit = 2;
    }
    else if(keyPressed == 3){
        btnHit = 3;
    }
    else if(keyPressed == 4){
        btnHit = 4;
    }
    else {
        return;
    }
}))

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
    var rand = Math.round(Math.random() * (1000 - 100)) + 1000;
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

    }, rand);
}());
}

function checkHit(noteTop){

    if (btnHit == 1 && noteTop >= 550){
        console.log("hit")
        console.log(noteTop)
        btnHit = 0;
    }
    else if (btnHit == 2 && noteTop >= 550){
        console.log("hit")
        console.log(noteTop)
        btnHit = 0;
    }
    else if (btnHit == 3 && noteTop >= 550){
        console.log("hit")
        console.log(noteTop)
        btnHit = 0;
    }
    else if (btnHit == 4 && noteTop >= 550){
        console.log("hit")
        console.log(noteTop)
        btnHit = 0;
    }
    else if (btnHit != 0){1
        console.log("missed")
        btnHit = 0;
    }
    else{
        return;
    }

}


pickNote();

console.log(btnXY.top);

