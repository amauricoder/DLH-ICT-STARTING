
var player = "X";

function playerChoise(){
  let choices = ["X", "O"];
  let choice = prompt('Please chose between X or O:', choices.join('\n')).toUpperCase();

  if (choices.includes(choice)) {
    alert('You selected: ' + choice);
  } else {
      alert('please chose between X or O');
      playerChoise();
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
      checkIfYouWin();
    }
  }

function getCellData(cellDataId){
    return document.getElementById(cellDataId).innerHTML;
  }

function checkIfYouWin(){
  var line1 = getCellData("cell1Data");
  var line2 = getCellData("cell2Data");
  var line3 = getCellData("cell3Data");

  if(line1 == line2 && line1 == line3){
    alert("you win");
  }
}
