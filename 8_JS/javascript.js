function selectedImageClicked(){
  //GAME 1
  document.getElementById("image1").style.border ="7px solid lightgreen";

  document.getElementById("image2").style.border="";
  document.getElementById("image3").style.border="";
 console.log(imageSelected);
}

//GAME 2
function selectedImageClicked2(){

  document.getElementById("image2").style.border ="7px solid lightgreen";
  document.getElementById("image1").style.border="";
  document.getElementById("image3").style.border="";
   console.log(imageSelected);
}

//GAME 3
function selectedImageClicked3(){

  document.getElementById("image3").style.border ="7px solid lightgreen";
  document.getElementById("image1").style.border="";
  document.getElementById("image2").style.border="";
   console.log(imageSelected);
}
