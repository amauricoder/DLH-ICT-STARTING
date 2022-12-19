
function welcome(){
  var firstName = prompt("Give me your first name");
  document.getElementById("divOutput").innerHTML = "Hello "+firstName+"! Have a nice day!";
  document.getElementById("divOutput").style.color = "green";

}

function change() {
  document.getElementById("test").textContent = "It changed!";

}

//ask for your favourite food and save it in a variable
function favouriteFood(){
  var favourite1 = prompt("Enter your 1st favourite food");
  var favourite2 = prompt("Enter your 2th favourite food");
  var favourite3 = prompt("Enter your 3th favourite food");

  //create the OL elemente into a variable
  var list = document.createElement("ol");

  /*makes every favourite food into an item for the list and creates
  the list item. 
  */
  var item1 = document.createElement("li");
  item1.textContent = favourite1;
  var item2 = document.createElement("li");
  item2.textContent = favourite2;
  var item3 = document.createElement("li");
  item3.textContent = favourite3;


  list.appendChild(item1);
  list.appendChild(item2);
  list.appendChild(item3);

  document.getElementById("food-list").appendChild(list);



}
