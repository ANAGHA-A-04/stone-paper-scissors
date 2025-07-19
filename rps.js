const paper=document.getElementsByClassName("paper");
const scissor=document.getElementsByClassName("scissor");
const rock=document.getElementsByClassName("rock");
const computer=document.querySelector(".computer img");
const player=document.querySelector(".player img");
const options=document.querySelectorAll(".options button");
const playerpoint = document.getElementById("players");
const computerpoint=document.getElementById("computers");
const display=document.getElementById("display");
const reset=document.getElementById("restart");

const choiceimage={
    stone:'stoneComputer.png',
    paper:'paperComputer.png',
    scissor:'scissorsComputer.png'

};
let round =0;
let maxround=4;

options.forEach((option) => {
    
    option.addEventListener("click",()=>{
        if(round<=maxround){
        player.classList.add("shakeplayer");
        computer.classList.add("shakecomputer");
    
    setTimeout(() => {
        computer.classList.remove("shakecomputer");
        player.classList.remove("shakeplayer");
    },500 );
    const choice=option.classList[0];
    player.src= choiceimage[choice];
    const choices=["stonePlayer.png","scissorsPlayer.png","paperPlayer.png"];
    const random=Math.floor(Math.random() *3)+0;
    computer.src=choices[random];
    
    let playerscore=parseInt(playerpoint.innerHTML);
    let computerscore=parseInt(computerpoint.innerHTML);
    const computerchoice=computer.src.split("/").pop().toLowerCase();
    const playerchoice=player.src.split("/").pop().toLowerCase();
    if ((computerchoice === "stoneplayer.png"&&playerchoice==="stonecomputer.png")||
        (computerchoice==="scissorsplayer.png"&&playerchoice==="scissorscomputer.png")||
         (computerchoice==="paperplayer.png"&&playerchoice==="papercomputer.png")) {
    
} else if (
    (computerchoice === "stoneplayer.png" && playerchoice === "scissorscomputer.png") ||
    (computerchoice === "scissorsplayer.png" && playerchoice === "papercomputer.png") ||
    (computerchoice === "paperplayer.png" && playerchoice === "stonecomputer.png")
) {
    computerscore++;
} else {
    playerscore++;
}
playerpoint.innerHTML = playerscore;
computerpoint.innerHTML = computerscore;
round++;        

if(round>maxround){
    
        if(computerscore>playerscore){
            display.innerHTML="You Lost 😓";

        }else if (playerscore>computerscore){
            display.innerHTML="You Won 🥳";
        }
        else{
            display.innerHTML="its a tie🤞";
        }
       
    

}
        }

    });
    
    reset.addEventListener("click",()=>{
        display.innerHTML="";
        round=0;
        playerscore=0;
        computerscore=0;
        playerpoint.innerHTML="0";
        computerpoint.innerHTML="0";
    });

});