
var player = "X"

function firstCellMovement(){
  if(document.getElementById("firstCellData").innerHTML == ""){
    document.getElementById("firstCellData").innerHTML = player;
     if(player =="X"){
        player ="O";
      }
      else {
          player ="X";
      }

      checkWinner();
  }
}

function secondCellMovement(){
  if(document.getElementById("secondCellData").innerHTML == ""){
     document.getElementById("secondCellData").innerHTML = player;
     if(player =="X") {
        player ="O";
      }
      else {
          player ="X";
      }

      checkWinner();
  }
}

function thirdCellMovement(){
  if(document.getElementById("thirdCellData").innerHTML == ""){
     document.getElementById("thirdCellData").innerHTML = player;
     if(player =="X") {
        player ="O";
      }
      else {
          player ="X";
      }

      checkWinner();
  }
}
function forthCellMovement(){
  if(document.getElementById("fourthCellData").innerHTML == ""){
     document.getElementById("fourthCellData").innerHTML = player;
     if(player =="X") {
        player ="O";
      }
      else {
          player ="X";
      }
      checkWinner();
  }
}

function fivethCellMovement(){
  if(document.getElementById("fivethCellData").innerHTML == ""){
     document.getElementById("fivethCellData").innerHTML = player;
     if(player =="X") {
        player ="O";
      }
      else {
          player ="X";
      }
      checkWinner();
  }
}

function sixthCellMovement(){
  if(document.getElementById("sixthCellData").innerHTML == ""){
     document.getElementById("sixthCellData").innerHTML = player;
     if(player =="X") {
        player ="O";
      }
      else {
          player ="X";
      }
      checkWinner();
  }
}
function seventhCellMovement(){
  if(document.getElementById("seventhCellData").innerHTML == ""){
     document.getElementById("seventhCellData").innerHTML = player;
     if(player =="X") {
        player ="O";
      }
      else {
          player ="X";
      }
  }
}

function eightCellMovement(){
  if(document.getElementById("eightCellData").innerHTML == ""){
     document.getElementById("eightCellData").innerHTML = player;
     if(player =="X") {
        player ="O";

      }
      else {
          player ="X";
      }
  }
}

function ninethCellMovement(){
  if(document.getElementById("ninethCellData").innerHTML == ""){
     document.getElementById("ninethCellData").innerHTML = player;
     if(player =="X") {
        player ="O";
      }
      else {
          player ="X";
      }
  }
}

  function getCellData(cell) {
  return document.getElementById(cell).innerHTML;
}

function checkWinner(){
  if (getCellData("firstCellData") == getCellData("secondCellData") && getCellData("secondCellData") == getCellData("thirdCellData")) {
    document.getElementById("cell1").style.backgroundColor ="green";
    document.getElementById("cell2").style.backgroundColor ="green";
    document.getElementById("cell3").style.backgroundColor ="green";
  }
  
}
