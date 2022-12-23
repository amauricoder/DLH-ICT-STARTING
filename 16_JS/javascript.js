
var player = "X";
function playerChoise(){
  let choices = ["X", "O"];
  let choice = prompt('Please chose between X or O:', choices.join('\n')).toUpperCase();

  if (choices.includes(choice)) {
    alert('You selected: ' + choice);
  } else {
      alert('please chose between X or O');
    }
    if (choice !== player){
        player = "O";
    }
}


function cellClicked(cell){

  if(document.getElementById(cell).innerHTML == ""){
    document.getElementById(cell).innerHTML = player;
     if(player =="X"){
        player ="O";
      }
      else {
          player ="X";
      }
      checkWinner();
    }
  }

function checkResult(cellDataId){
  return document.getElementById(cellDataId).innerHTML;
}

function checkWinner(){
  var line1 = checkResult("cellData1");
  var line2 = checkResult("cellData2");
  var line3 = checkResult("cellData3");

  if(line1 == line2 && line1 == line3){
    alert("you win");
  }
}
