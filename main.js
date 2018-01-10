const board = document.querySelector('.board');
//holds all the possible square values
let boardContents = [1,2,3,4,5,6,7,8,9];
//Set up click listener to change cells to X or O depending on player
board.addEventListener('click',function(e){
  if(e.target.className === 'cell' && e.target.innerHTML === ""){
    //On p1 turn push cell id into myCells so winningCombo function can check for winning combination
    //then change player turn
    //cell is clicked and thats id is set to square
    let square = parseInt(e.target.id);
  //change the cell that was clicked's innerHTML to X
    e.target.innerHTML = 'X';
    //take that id and push it into p1myCells
    p1.myCells.push(e.target.id);
    //take board contents and remove the index of the id that was selected
    boardContents.splice(boardContents.indexOf(square), 1);
    //check if p1 cells contain a winning ocmbo
    winningCombo(p1.myCells);
    //after 1 second
    let computerMove = setTimeout(function(){
      //pick a random number between 0 and the length of boardcontents
      let box =  Math.floor(Math.random() * boardContents.length);
      // change the html of the cell with the id that match the random number picked
        document.getElementById(boardContents[box]).innerHTML = "O";
        computer.myCells.push(boardContents[box]);
        winningCombo(computer.myCells);
        //then take away that number from board contents
        boardContents.splice(boardContents.indexOf(boardContents[box]), 1);
    }, 1000);
  }
})


//clears all cells innerHTML and refills boardContents
const clearBoard = function(){
  let nodes = board.childNodes;
  for(let i=0; i<nodes.length; i ++){
    nodes[i].innerHTML = "";
  }
  p1.myCells = [];
  computer.myCells =[];
  boardContents = [1,2,3,4,5,6,7,8,9];
}
let reset = document.querySelector('.restart');
reset.addEventListener('click', function(){
  clearBoard();

})



//uses a regex to check if the players myCell array has the proper combination to win the game
const winningCombo = function check(array){
  let arr = array.join("");
  switch(true){
    case(/^(?=.*1)(?=.*2)(?=.*3)/.test(arr)):
      alert("Winner, Top Row!");
      clearBoard();
      break;
    case(/^(?=.*4)(?=.*5)(?=.*6)/.test(arr)):
      alert("Winner, Middle Row!");
      clearBoard();
      break;
    case(/^(?=.*7)(?=.*8)(?=.*9)/.test(arr)):
      alert("Winner, Bottom Row!");
      clearBoard();
      break;
    case(/^(?=.*1)(?=.*4)(?=.*7)/.test(arr)):
      alert("Winner, Left Column!");
      clearBoard();
      break;
    case(/^(?=.*2)(?=.*5)(?=.*8)/.test(arr)):
      alert("Winner, Middle Column");
      clearBoard();
      break;
    case(/^(?=.*3)(?=.*6)(?=.*9)/.test(arr)):
      alert("Winner, Right Column");
      clearBoard();
      break;
    case(/^(?=.*1)(?=.*5)(?=.*9)/.test(arr)):
      alert("Winner, Left Diagonal!");
      clearBoard();
      break;
    case(/^(?=.*3)(?=.*5)(?=.*7)/.test(arr)):
      alert("Winner, Right Diagonal!");
      clearBoard();
      break;
  }
};

//holds player moves in myCells that is then later checked by the winningCombo function
const p1 = {
  myTurn : true,
  myCells: []
}
const computer = {
  myTurn : false,
  myCells: []
}
