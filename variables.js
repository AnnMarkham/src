let lastName='Markham';
let firstName = 'Ann';
let fullName = firstName + ' ' + lastName;


console.log(fullName);
console.log(firstName);

firstName = 'Chuckles'; // after changing firstName, if you want fullName to reflect the change, you'll need to reassign it 
fullName = firstName + ' ' + lastName;
console.log(fullName); // Now shows "Chuckles Markaham"

console.log(fullName); // You can repeat it if you want to see it againnode

/*
let firstNumber = prompt("Pick a Number");  // returns a string
let secondNumber = prompt("Pick Another Number");// returns a string
let sum = firstNumber + secondNumber;// this does not add the numbers, it concatenates the string
alert(sum);
*/

//fix for code above  parseInt converst a string into an integer (whole number) - however if you use decimal eg 2.5 it just keeps the 2//
let firstNumber = parseInt(prompt("Pick a Number"), 10);
let secondNumber = parseInt(prompt("Pick Another Number"), 10);
let sum = firstNumber + secondNumber;
alert(sum);


 