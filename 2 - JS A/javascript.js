

function welcome(){
  var firstName = prompt("Give me your first name");
  document.getElementById("divOutput").innerHTML = "Hello "+firstName+" !";
}

function change() {
  document.getElementById("test").textContent = "It changed!";

}
