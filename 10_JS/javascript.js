function equal() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);

  if (number1 == number2){
    document.getElementById("divOutput").innerHTML = "The numbers are equal";
  }
  else {
    document.getElementById("divOutput").innerHTML = "The numbers aren't equal";
  }

  console.log(equal);
}
