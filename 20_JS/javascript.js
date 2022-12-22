function runLoop(){
  var howMany = parseInt(document.getElementById("howManyTimes").value);
  if(isNaN(howMany)){
    alert("Only numbers!")
  }

  for (var i = 0; i < howMany; i = i+1){
    document.getElementById("divOutput").innerHTML += i+1 + "</br>";
  }
}
