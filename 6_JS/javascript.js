function start() {

  var name = document.getElementById("input_name").value;
  var age = parseInt(document.getElementById("input_age").value);
  document.getElementById("output").innerHTML = "Hello, "+name+"! You are " +age+" years old!";

  console.log(name);
}
