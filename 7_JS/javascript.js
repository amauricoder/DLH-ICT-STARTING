function calculateClick(){
  var number1 = parseFloat(document.getElementById("input_one").value);
  var number2 = parseFloat(document.getElementById("input_two").value);
  var number3 = parseFloat(document.getElementById("input_three").value);

var average = (number1 + number2 + number3)/3;

  document.getElementById("output").innerHTML ="The average of "+number1+", "+number2+" and "+number3+" is"+average+".";

  console.log(number3, number2, number1, average);
}
