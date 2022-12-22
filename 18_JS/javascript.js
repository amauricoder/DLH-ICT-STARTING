//exercice 2 worksheet 4

var amount;

function order(){
   selectedIndex = document.getElementById("article").selectedIndex;
   article = document.getElementById("article").options[selectedIndex].text;
   amount = document.getElementById("amount").value;

  document.getElementById("divOutput").innerHTML = "Thank you for ordering "+amount+" "+article;
  document.getElementById("divOutput").style.color="green";
 /*
  if(article.length < 3){
    alert("The article must have at least 3 char");
  }
  */
}


function preview() {
  selectedIndex = document.getElementById("article").selectedIndex;
  var article = document.getElementById("article").options[selectedIndex].text;

  var articleLength = document.getElementById("article").value;

  var previewImage = document.getElementById("article").value;



  if(articleLength.length < 3){
    document.getElementById("previewOutput").innerHTML ="<img src='/home/student/www/18_JS/img/no-image.jpg' height='60px' width='auto'>";
  }
  else {
    document.getElementById("previewOutput").innerHTML ="<img src='/home/student/www/18_JS/img/"+previewImage+".jpg' height='60px' width='auto'>";
  }
  /*
    if(article == "Apples"){
      document.getElementById("previewOutput").innerHTML ="<img src='/home/student/www/18_JS/img/apples.jpg' height='30px' width='auto'>";
    }
  */
}
