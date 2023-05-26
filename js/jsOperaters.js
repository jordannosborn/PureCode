// write code to prompt the user for a number and determine if it is odd or even
/*
let number = Number(prompt("Please enter a number")); 
if(number % 2 == 0){
    alert("Even"); 
}
else {
    alert("Odd"); 
}
alert(2**2)

var x = 10; 
alert((x += 45)); 

alert("A" === "a"); 

if((condition && condition) || condition || condition)

switch(condition){
    case 1: dosomething; 
    break; 
    case 2: dosomething; 
    break; 
    default:
        dosomething;
        break; 
}

// while -------------------------------------------------

let i = 0; 
while(i <= 0){
    document.write(`<br> ${i}`); 
    i++; 
}

var movies = ['M1', 'M2', 'M3', 'M4', 'M5']; 

for(i = 0; i < movies.length; i++){
    document.write(`<li> ${movies[i]}`); 
}
document.write("<hr>"); 

// do while ----------------------------------------------

let j = 11; 
do {
    document.write(`${j}`); 
    i++; 
}while (j <= 10); 

movies.pop("M6"); 
for(i = 0; i < movies.length; i++){
    document.write(`<li> ${movies[i]}`); 
}
document.write("<hr>"); 

let counter = 0; 
var pin = 2233;
do{
    pin = prompt("Enter PIN no: "); 
    if (pin == 2233) {
        break; 
    }
    else{
        counter++; 
    }
}while(counter < 3 && pin == 2233); 

// for each ----------------------------------------------

let fruits = ['Banana', 'Apple', 'Pear', 'Kiwi', 'Guava', 'Watermelon']; 
fruits.forEach(fruit => console.log(fruit)); 

fruits.forEach((f) => document.write(f + "<br>")); 
*/

// Write a loop which prompts for a number greater than 100. 
// if the user enters another number, ask them to input again
// continue asking until a valid number is entered or cancel by entering nothing (empty value)

let inputValue; 
do{
    inputValue = prompt("Enter a value larger than 100", 0); 
}while(inputValue <= 100 && inputValue); 

