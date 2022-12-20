//first part of exercice - check the information

function checkFilled(){
  var studentName = document.getElementById("studentName").value;
  var grade = document.getElementById("grade").value;
  var genrer = document.getElementById("genrerCheckBox").checked;

  if (studentName == 0 || grade == 0){
    alert("you must put all the information");
    }
  else if(grade < 1){
    alert("The grade must be a real number");
  }
  else if(grade < 1 || grade > 60){
    alert("The grade must be between 01 and 60");
  }
  else if(studentName.length <= 3){
    alert("The name must have at least 3 characteres");
  }
  else if(isNaN(grade)){
    alert("The grade must have just numbers");
  }

/*
  console.log(studentName);
  console.log(grade);
  console.log(genrer);
  */
}


//create a new function to add the information at the list
function addDataToList() {
  var studentNameData = document.getElementById("studentName").value;
  var gradeData = document.getElementById("grade").value;
  var genrerData = document.getElementById("genrerCheckBox").checked;

  //add itens to the list
  //create a new variable -listElement- and make it search for the list with id #list in html.
  var listElement = document.getElementById("list");
  //creates a variable -listItem- and makes it create a new element with .createElement("li").
  var listItem = document.createElement("li");
  //modify the html with InnerHTML and gave it the information of studentNameData;
  listItem.innerHTML = studentNameData;
  //add the listItem to children of listElement;
  listElement.appendChild(listItem);


}
