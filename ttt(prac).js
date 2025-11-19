let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let msg = document.querySelector("#msg")
let newGame = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let count = 0
let turnO = true
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame = () =>{
    turnO = true
    enableBoxes()
    count = 0
    msgContainer.classList.add("hide")
}
const disableBoxes = () =>{
    for(box of boxes){
    box.disabled = true
    }
}
const enableBoxes = () => {
    for(box of boxes){
        box.innerText = ""
        box.disabled = false
    }
}
const showDraw = () =>{
    msg.innerText = "The game is drawn!! PLAY AGAIN"
    msgContainer.classList.remove("hide")
}
    boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false
            box.style.color = "white"
        }
        else{
            box.innerText = "X"
            turnO = true
            box.style.color = "#6FFFE9"
        }
        box.disabled = true
        count++
        checkWinner()
    })
})
const showWinner = (winner) => {
msg.innerText = `Congratulations the winner is ${winner}`;
msgContainer.classList.remove("hide")
}
const checkWinner = () =>{
  for(pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText
    let pos2Val = boxes[pattern[1]].innerText
    let pos3Val = boxes[pattern[2]].innerText
    if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner is ", pos1Val)
            showWinner(pos1Val)
            disableBoxes()
            return
        }
        
    }
}
if(count === 9){
    showDraw()
  } 
}
resetBtn.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)