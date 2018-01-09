const board = document.querySelector('.board');
board.addEventListener('click',function(e){
  if(e.target.className === 'cell' && e.target.innerHTML === ""){
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



const winningCombo = function check(array){
  let arr = array.join("");
  console.log(arr);
  switch(true){
    case(/^(?=.*1)(?=.*2)(?=.*3)/.test(arr)):
      alert("Winner, Top Row!");
      break;
    case(/^(?=.*4)(?=.*5)(?=.*6)/.test(arr)):
      alert("Winner, Middle Row!");
      break;
    case(/^(?=.*7)(?=.*8)(?=.*9)/.test(arr)):
      alert("Winner, Bottom Row!");
      break;
    case(/^(?=.*1)(?=.*4)(?=.*7)/.test(arr)):
      alert("Winner, Left Column!");
      break;
    case(/^(?=.*2)(?=.*5)(?=.*8)/.test(arr)):
      alert("Winner, Middle Column");
      break;
    case(/^(?=.*3)(?=.*6)(?=.*9)/.test(arr)):
      alert("Winner, Right Column")
      break;
    case(/^(?=.*1)(?=.*5)(?=.*9)/.test(arr)):
      alert("Winner, Left Diagonal!");
      break;
    case(/^(?=.*3)(?=.*5)(?=.*7)/.test(arr)):
      alert("Winner, Right Diagonal!")
      break;
  }
};

const p1 = {
  myTurn : true,
  myCells: []
}
const p2 = {
  myTurn : false,
  myCells: []
}

const boardContents = [];
