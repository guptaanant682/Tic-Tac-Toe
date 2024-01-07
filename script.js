let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn01 =  true;
// turn01 - X
// turn02 - Y

// winning patterns
// 0,1,2
// 3,4,5
// 6,7,8
// 0,3,6
// 1,4,7
// 2,5,8
// 0,4,8
// 2,4,6

const winPatterns = [[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5], 
[6,7,8]];

const resetGame = () =>{
    turn01=false;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn01){
            box.innerHTML = "0"
            turn01 = false;
        }
        else{
            box.innerHTML = "X";
            turn01 = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWineer = (winner) =>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("winner", pos1val);
                showWineer(pos1val);
            }
        }
    }

};


newGameBtn.addEventListener("click", resetGame)
reset_btn.addEventListener("click", resetGame)