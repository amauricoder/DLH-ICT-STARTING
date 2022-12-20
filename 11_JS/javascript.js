//exercice 11
function equal() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);

  if (number1 == number2){
    //output message of divOutput
    document.getElementById("divOutput").innerHTML = "The numbers are equal";
    //putting color to the text of divOutput
    document.getElementById("divOutput").style.color = "green";
  }
  else {
    //output message of divOutput
    document.getElementById("divOutput").innerHTML = "The numbers aren't equal";
    //putting color to the text of divOutput
    document.getElementById("divOutput").style.color = "red";
  }

  console.log(equal);
}
