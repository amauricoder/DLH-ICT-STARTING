
var player = "X"
function playerChoise(){
let choices = ['x', 'X', 'o', 'O'];

let choice = prompt('Please select an option:', choices.join('\n'));

if (choices.includes(choice)) {
  alert('You selected: ' + choice);
} else {
  alert('please chose between X or O');
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
    }
  }

/*

function checkWinner(){
  if (getCellData("Cell1Data") == getCellData("Cell2Data") && getCellData("Cell2Data") == getCellData("Cell3Data")) {
    document.getElementById("cell1").style.backgroundColor ="green";
    document.getElementById("cell2").style.backgroundColor ="green";
    document.getElementById("cell3").style.backgroundColor ="green";
  }

}
*/
