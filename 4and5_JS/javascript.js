/*
//This is the first step
function showPokerCard() {
  var card = prompt("Enter a number between 2 and 14");
  document.getElementById("card").innerHTML = "<img src='/home/student/www/3_JS/img/cards/" + card + "d.png'/>";
}
*/

//this is the second step
function showPokerCard() {
  var card = prompt("Enter a number between 2 and 14");
  var color = prompt("Now use “s” for Spade, “d” for Diamond, “c” for Clubs and “h” for Heart and choose a color");
  document.getElementById("card").innerHTML = "<img src='/home/student/www/3_JS/img/cards/" + card + color +".png'/>";
 }
