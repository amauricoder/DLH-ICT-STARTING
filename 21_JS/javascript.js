function addClicked(){
  var list = document.getElementById("articlesList");
  var newArticle = document.getElementById("article").value;

  if(newArticle == ""){
    document.getElementById("errorOutput").innerHTML ="Please write something";
  }
else {
  list.innerHTML += "<option value='" + newArticle +"'>"+ newArticle +"</option>";
  }
}


function showAllClicked(){
  var list = document.getElementById("articlesList");
  var orderedListOutput = document.getElementById("listOutput");

  orderedListOutput.innerHTML ="";

  for(var i = 0; i < list.length ; i++){
      orderedListOutput.innerHTML += "<li>"+ list.options[i].value +"</li>";
  }
}
