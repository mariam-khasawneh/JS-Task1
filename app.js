//Q1
let x = 1;
console.log(-5*3);
console.log("Javascript" + 50);
console.log(17 % 5);
console.log(5 % 7);
console.log(5 / 10);
console.log(4 === "4");
console.log(4 != 5);
console.log(7 <= 8);
console.log("Hello" + 5);
console.log(Math.ceil(x) - Math.floor(x) );
console.log(Math.pow(x,2));


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


//Q4
// Read two numbers and display the largest
num1 = parseInt(prompt(`Please enter first number to display the largest`));
num2 = parseInt(prompt(`Please enter secound number to display the largest`));

//condition statment => largest num
if (num1 > num2) {
    largest = num1;
    alert(`The Largest number is ${largest} `);
} else if (num2 > num1) {
    largest = num2;
    alert(`The Largest number is ${largest} `);
} else if (num1 == num2) { 
    alert(`The two numbers are equal`)
}
    
//__________________________________________________________________________________________________

//Q5
// Read two numbers and display the sum 
num1 = parseInt(prompt(`Please enter first number to display the sum`));
num2 = parseInt(prompt(`Please enter secound number to display the sum`));
let sum = num1 + num2;;
alert(`The sum is ${sum}`);
//__________________________________________________________________________________________________


//Q6 
num1 = parseInt(prompt(`Please enter a number `));
switch (num1){
    case 1:
        alert(`ONE`);
        break;
    case 2:
        alert(`TWO`);
        break;
    case 3:
        alert(`THREE`);
        break;
    case 4:
        alert(`FOUR`);
        break;
    case 5:
        alert(`FIVE`);
        break;
    case 6:
        alert(`SIX`);
        break;
    case 7:
        alert(`SEVEN`);
        break;
    case 8:
        alert(`EIGHT`);
        break;
    case 9:
        alert(`NINE`);
        break;
    default:
        alert(`PLEASE TRY AGAIN`);
}

