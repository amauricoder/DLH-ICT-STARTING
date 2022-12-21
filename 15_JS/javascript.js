//first part of exercice - check the information

function checkFilled(){
  var studentName = document.getElementById("studentName").value;
  var grade = document.getElementById("grade").value;


  if (studentName == "" || grade.length == 0){
    document.getElementById("errorOutput").innerHTML += "You must put all information.<br>";
  }

  else if(parseInt(grade) < 1 || parseInt(grade) > 60){
    document.getElementById("errorOutput").innerHTML += "The grade must be between 01 and 60.<br>";
  }

  else if(studentName.length < 3){
    document.getElementById("errorOutput").innerHTML += "The name must have at least 3 characteres.<br>";
  }

  else if(isNaN(grade)){
    document.getElementById("errorOutput").innerHTML += "The grade must have just numbers.<br>";
  }

  else {
    //add infos to the list using another function.
    addDataToList();
    //clear error messages.
      document.getElementById("errorOutput").innerHTML="";
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
  var gradeGenrerData = document.getElementById("genrerCheckBox").checked;

  /*this above IF check if the variable gradeGenrerData is masculine or feminine
  if is clicked in masculine on the input radio form in html, it will return a TRUE value
  if is clicked in feminine, it will return a FALSE value.
  By this principle, we can save this information in a new variable that i called GENRER, and then do the if
  to give the values of masculine and feminine.
  */
  var genrer;
  if(gradeGenrerData == true){
    genrer = "masculine";
  }
  else {
    genrer = "feminine";
  }


  console.log(gradeGenrerData);
  console.log(genrer);
  //add itens to the list
  //create a new variable -listElement- and make it search for the list with id #list in html.
  var listElement = document.getElementById("list");
  //creates a variable -listItem- and makes it create a new element with .createElement("li").
  var listItem = document.createElement("li");

  //modify the html with InnerHTML and gave it the information of studentNameData;
  listItem.innerHTML = studentNameData+" ("+gradeData+")";
  //add the listItem to children of listElement;
  listElement.appendChild(listItem);



  /*
  //this one also add itens to the list - this was the solution of the professor
  document.getElementById("list").innerHTML +="<li>" + studentNameData + "(" + gradeData + ")</li>";
 */
}
