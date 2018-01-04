const board = document.querySelector('.board');
board.addEventListener('click',function(e){
  if(e.target.className === 'cell' && e.target.innerHTML === ""){
    if(p1.myTurn){
        e.target.innerHTML = 'X';
        p1.myTurn = false;
        p2.myTurn = true;
    }else if(p2.myTurn){
        e.target.innerHTML = 'O';
        p1.myTurn = true;
        p2.myTurn = false;
    }

  }
})

const p1 = {
  myTurn : true,
  myCells: []
}
const p2 = {
  myTurn : false,
  myCells: []
}

const boardContents = [];
