const board = document.querySelector('.board');
//Set up click listener to change cells to X or O depending on player
board.addEventListener('click',function(e){
  if(e.target.className === 'cell' && e.target.innerHTML === ""){
    //On p1 turn push cell id into myCells so winningCombo function can check for winning combination
    //then change player turn
    if(p1.myTurn){
        e.target.innerHTML = 'X';
        p1.myCells.push(e.target.id);
        p1.myTurn = false;
        p2.myTurn = true;
        winningCombo(p1.myCells);
    }else if(p2.myTurn){
        p2.myCells.push(e.target.id);
        e.target.innerHTML = 'O';
        p1.myTurn = true;
        p2.myTurn = false;
        winningCombo(p2.myCells);
    }
  }
})

const clearBoard = function(){
  let nodes = board.childNodes;
  for(let i=0; i<nodes.length; i ++){
    nodes[i].innerHTML = "";
  }
}
let reset = document.querySelector('.restart');
reset.addEventListener('click', function(){
  clearBoard();
})



//uses a regex to check if the players myCell array has the proper combination to win the game
const winningCombo = function check(array){
  let arr = array.join("");
  console.log(arr);
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
const p2 = {
  myTurn : false,
  myCells: []
}
