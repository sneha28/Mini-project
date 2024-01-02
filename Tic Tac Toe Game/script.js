let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player O & player X, when turnO is true O will print else X will print

//winning patterns in the form of arrays stored as an index
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 7],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// reset the game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//print X/Y when clicked & checing the winner
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            //player O
            box.innerText = "O";
            turnO = false;
        }else{
            //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


//disable the buttons from changing the value after completing the game
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

//enables the button when starting the new game
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

//displays the winner
const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//checks the winning conditions
    const checkWinner = () => {
        for(let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val =  boxes[pattern[1]].innerText;
            let pos3Val =  boxes[pattern[2]].innerText;
    
            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){ //check if position is empty, position can not be empty
                if(pos1Val === pos2Val && pos2Val === pos3Val) { // if value is equal to all position then there's a winner
                console.log("Winner", pos1Val); //prints winner
                showWinner(pos1Val);
                }
            }
    
        }
    }

    newGameBtn.addEventListener("click", resetGame);
    resetbtn.addEventListener("click", resetGame);