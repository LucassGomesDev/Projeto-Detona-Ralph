const state = {
view:{
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeleft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
},
values:{
    gameVelocity: 1000,
    hitPosition: 0,
    resullt: 0,
    curretTime: 60,
},
actions:{
    timerId: setInterval(randomSquare, 1000),
    countDownTimerId: setInterval(countDown, 1000),

}
};

function countDown(){
    state.values.curretTime--;
    state.view.timeleft.textContent = state.values.curretTime;

    if(state.values.curretTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert(" A sua pontuação foi:" + state.values.resullt); 
    }
}

function playSound(){
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2;
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () =>{
           if(square.id === state.values.hitPosition){
            state.values.resullt++
           } state.view.score.textContent = state.values.resullt;
           state.values.hitPosition = null;
           playSound();
        });
    });
}

function initialize() {

    addListenerHitBox();
}

initialize();