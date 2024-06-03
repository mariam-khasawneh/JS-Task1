
//Q2
// reading number using propmt
let number = parseInt(prompt(`Please enter number`));
if (typeof (number) == "number") {
    alert(`The number you entered was ${number}`);
} else{ 
    alert(`Please Enter a valid number`);
}
//__________________________________________________________________________________________________


//Q3
// Read two numbers and display in ascending order
let num1 = parseInt(prompt(`Please enter first number to display in ascending order`));
let num2 = parseInt(prompt(`Please enter secound number  to display in ascending order`));
let largest;
let smallest;

//condition statment => ascending order
if (num1 > num2) {
    largest = num1;
    smallest = num2;
    alert(`Your number in ascending order : 
    ${smallest}
    ${largest}`);
} else if (num1 < num2) {
    smallest = num1;
    largest = num2;
    alert(`Your number in ascending order : 
    ${smallest}
    ${largest}`);
} else if (num1 == num2){
    alert(`The two numbers are equal`);
 }
//_________________________________________________________________________________________________



