

function clicked1(){
  document.getElementById("image1").style.background="blue";
  document.getElementById("image2").style.background="";
  document.getElementById("image3").style.background="";
}

function clicked2(){
document.getElementById("image2").style.background="blue";
document.getElementById("image1").style.background="";
document.getElementById("image3").style.background="";
}

function clicked3(){
document.getElementById("image3").style.background="blue";
document.getElementById("image1").style.background="";
document.getElementById("image2").style.background="";
}

//Below is exercice 10 of worksheet 2

function buttonOnClick() {
  //using the value to get the info of the HTML input
var name = document.getElementById("name").value;
var price = document.getElementById("price").value;
var email = document.getElementById("email").value;
console.log(buttonOnClick);

document.getElementById("output").innerHTML = "Hi, "+name+"! An invoice of "+price+" EUROS will be send to "+email+". Thank you for your order!";
document.getElementById("output").style.color ="green";
}
