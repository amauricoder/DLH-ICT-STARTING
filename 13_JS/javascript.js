//exercice 11
function checkPositive() {
  number = document.getElementById("number").value;

  if(number > 0){
    document.getElementById("divOutput").innerHTML ="Positive";
    document.getElementById("divOutput").style.color ="green";
  }
  else if(number < 0){
    document.getElementById("divOutput").innerHTML ="Negative";
    document.getElementById("divOutput").style.color ="red";
  }
  else {
    document.getElementById("divOutput").innerHTML ="Neutral";
    document.getElementById("divOutput").style.color ="gray";
  }
}
