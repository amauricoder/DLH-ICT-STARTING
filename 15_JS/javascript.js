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


  console.log(studentName);
  console.log(grade);
  console.log(genrer);

}
