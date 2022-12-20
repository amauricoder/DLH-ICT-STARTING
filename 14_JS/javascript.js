//exercice 11
function checkGrade(){
  var grade = document.getElementById("number").value;

  var message;
  var color;

  if(grade >= 1 && grade <= 9){
    message = "very bad";
    color = "red";
  }
  else if(grade >= 10 && grade <= 19){
    message = "bad";
    color = "red";
  }
  else if(grade >= 20 && grade <= 29){
    message ="Insufficient.";
    color ="red";
  }
  else if(grade >= 30 && grade <= 37){
    message = "Sufficient.";
    color ="Green";
  }
  else if(grade >= 38 && grade <= 41){
    message ="Satisfying.";
    color ="Green";
  }
  else if(grade >= 42 && grade <= 47){
    message ="Good.";
    color ="Green";
  }
  else if(grade >= 48 && 52 <= 9){
    message ="Very Good.";
    color ="green";
  }
  else if(grade >= 53 && grade <= 60){
    message ="Excellent.";
    color ="green";
  }
  else {
      message ="Invalid Grade";
      color ="gray";
    }

    document.getElementById("divOutput").innerHTML = message;
    document.getElementById("divOutput").style.color = color;
}
