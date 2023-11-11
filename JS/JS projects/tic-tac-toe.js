const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info');
const newGameBtn = document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//function to initialize the game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player -${currentPlayer}`;
    boxes.forEach((box,index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        //initialising css prop of boxes
        box.classList = `box box${index+1}`;
    });
    
}

initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}`
};

function CheckGameOver(){
    let answer ="";

    winningPositions.forEach((position)=>{
        if((gameGrid[position[0]] != "" || gameGrid[position[1]] != "" || gameGrid[position[2]] != "" ) && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[0]] === gameGrid[position[2]])){
            if(gameGrid[position[0]] === "X"){
                answer = "X";
            }
            else{
                answer = "O";
            }
            boxes.forEach((box)=>{
                box.style.pointerEvents = "none"; //kisi bhi box ke uper click krne prclick nhi hoga event listener kam nhi krega pointerEvents disabled
            });
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });
    if(answer !== ""){
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;//return krdiya taaki age ka tied wala code na chle
    }

    let fillCount =0;
    gameGrid.forEach((box)=>{
        if(box!=""){
            fillCount++;
        }
    });
    if(fillCount === 9){
        gameInfo.innerText = "Game Tied!";
        newGameBtn.classList.add("active");
    }
}

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        //swap turn
        swapTurn();
        CheckGameOver();
    }
};

boxes.forEach((box ,index)=>{
    box.addEventListener("click" , ()=>{
        handleClick(index);
    });
});

newGameBtn.addEventListener("click" , initGame);