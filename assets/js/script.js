const game = document.getElementById("game");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");


// event listeners for click and keypress so player can use either controls
btn1.addEventListener("click", (event)=> {
    console.log("btn1 pressed")
})

btn2.addEventListener("click", (event)=> {
    console.log("btn2 pressed")
})

btn3.addEventListener("click", (event)=> {
    console.log("btn3 pressed")
})

btn4.addEventListener("click", (event)=> {
    console.log("btn4 pressed")
})

document.addEventListener("keydown", (event => {
    let keyPressed = event.key;

    if(keyPressed == 1){
        console.log("btn1 pressed")
    }
    else if(keyPressed == 2){
        console.log("btn2 pressed")
    }
    else if(keyPressed == 3){
        console.log("btn3 pressed")
    }
    else if(keyPressed == 4){
        console.log("btn4 pressed")
    }
    else {
        return;
    }
}))

function greenNote(){
    const note = document.createElement("div");

    note.setAttribute("id", "greenNote");

    game.appendChild(note);
}

function redNote(){
    const note = document.createElement("div");

    note.setAttribute("id", "redNote");

    game.appendChild(note);


}
function yellowNote(){
    const note = document.createElement("div");

    note.setAttribute("id", "yellowNote");

    game.appendChild(note);


}
function blueNote(){
    const note = document.createElement("div");

    note.setAttribute("id", "blueNote");

    game.appendChild(note);


}


greenNote();
redNote();
yellowNote();
blueNote();

