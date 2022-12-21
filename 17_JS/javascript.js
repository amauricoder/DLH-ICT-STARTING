//exercice 1 worksheet 4
function order(){
  var article = document.getElementById("article").value;
  var amount = document.getElementById("amount").value;

  document.getElementById("divOutput").innerHTML = "Thank you for ordering "+amount+" "+article;
  document.getElementById("divOutput").style.color="green";
  if(article.length < 3){
    alert("The article must have at least 3 char");
  }
}
