const gameBoard=document.querySelector('#gameBoard');
const gameInfo=document.querySelector('#gameInfo');
const boardArray=[" "," "," "," "," "," "," "," "," "];
let go="circle";
gameInfo.textContent="circle goes First!";

function createBoard(){
boardArray.forEach((_cell,index)=>{
    const cell=document.createElement('div');
    cell.classList.add('square');
    cell.setAttribute('id',index)
    gameBoard.append(cell);
    cell.addEventListener('click',addGo);
}
)
};

createBoard();

function addGo(e){
    // console.log(e.target);
    const goDisplay=document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);

    if(go==="circle")
    {go="cross"}
    else
    {go="circle"}

    gameInfo.textContent= go+" Goes Now!";

    e.target.removeEventListener('click',addGo);
    checkScore();


}


function checkScore() {
    const allSqrs = document.querySelectorAll('.square');
    winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    const circleWins = winningCombo.some(array => {
      return array.every(cell => allSqrs[cell].firstChild?.classList.contains('circle'))
    })
  
    if (circleWins) {
      gameInfo.textContent = "Circle Wins!!"
      allSqrs.forEach(square => square.replaceWith(square.cloneNode(true)))
      return;
    }
  
    const crossWins = winningCombo.some(array => {
      return array.every(cell => allSqrs[cell].firstChild?.classList.contains('cross'))
    })
  
    if (crossWins) {
      gameInfo.textContent = "Cross Wins!!"
      allSqrs.forEach(square => square.replaceWith(square.cloneNode(true)))
      return;
    }
  }
  



