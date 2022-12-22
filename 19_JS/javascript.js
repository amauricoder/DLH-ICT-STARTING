
//first function to sets the alert without adding a empty value to the select as a option.
function alert3Char(){
  var seriesAdded = document.getElementById("seriesInput").value;

  if(seriesAdded.length < 3){
    alert("The series name must have 3 char at least.");
  }
  else {


    seriesAdd();
  }
}

//second function to add the itens to the select as a option
function seriesAdd(){
  //Get the value of the seies written in the HTML input,
  var seriesAdded = document.getElementById("seriesInput").value;
  //this was the professor solution to add itens to the list.
  document.getElementById("select").innerHTML += "<option>" + seriesAdded + "</option>";

/*
  //this was my solution to add itens to the list, with my own research.
  //Get the value of the seies written in the HTML input,
  var seriesAdded = document.getElementById("seriesInput").value;

  //Get the list element
  var select = document.getElementById("select");
  //Create the new option item
  var seriesNewItem = document.createElement("option");
  // Set the content of the option item
  seriesNewItem.innerHTML = seriesAdded;
  // Append the list item to the list
  select.appendChild(seriesNewItem);
*/
 //get the lenght of the select in HTML to count the number of series,
  var numberOfItens = document.getElementById("select").length;
  document.getElementById("number-of-elements").innerHTML = "Number of series: "+numberOfItens;

}

function seriesDel() {
  //create variable to take value of select and another to know the index of select;
  var selectItem = document.getElementById("select");
  var selectedIndex = selectItem.selectedIndex;

  if (selectedIndex >= 0){
    selectItem.options[selectedIndex].outerHTML = "";
    var numberOfItens = document.getElementById("select").length;
    document.getElementById("number-of-elements").innerHTML = "Number of series: "+numberOfItens;
  }

  console.log(selectItem);
  console.log(selectedIndex);
}
