
//Exercice 1;
/*
alert('This is a greeting alert windows');

console.log('This is a greeting in the developer console')
*/


//Exercice 2;
/*
var nameAge = prompt('Please, enter your name and age');

alert(nameAge);
*/


//Exercice 3;
/*
var firstNumberAsked = Number(prompt('Give me one number'));
var secondNumberAsked = Number(prompt('Give me another number'));
var sumOfTheNumbers = firstNumberAsked + secondNumberAsked;

alert("The sum of " +firstNumberAsked+ " and "+secondNumberAsked+" is "+sumOfTheNumbers);

var multiplicationOfTheNumbers = firstNumberAsked * secondNumberAsked;
var subtractionOfTheNumbers = firstNumberAsked - secondNumberAsked;
var divisionOfTheNumbers = firstNumberAsked / secondNumberAsked;
var exponentiationOfTheNumber = firstNumberAsked ** secondNumberAsked;

console.log("The multiplication of " +firstNumberAsked+ " and "+secondNumberAsked+" is "+multiplicationOfTheNumbers);
console.log("The subtration of " +firstNumberAsked+ " and "+secondNumberAsked+" is "+subtractionOfTheNumbers);
console.log("The division of " +firstNumberAsked+ " and "+secondNumberAsked+" is "+divisionOfTheNumbers);
console.log("The exponentiation of " +firstNumberAsked+ " for "+secondNumberAsked+" is "+exponentiationOfTheNumber);
*/

//exercice 4 - transform meters to kilometres
alert("Give me a distance in meters and i'll calculate the kilometers for you");

var meters = Number(prompt('Give me the distance in meters'));
var kilometers = meters/1000;

alert(meters+" meters is "+kilometers+(' kilometers'));
