"use strict"; 
/*
function calculation(){
    x = 20; // can be seen from outside the function
    let y = 20; // is a local variable. Not seen. 
    var s = x + y; 

    if (s < 0){
        document.write("s is negative");
    }
    else{
        //document.write(s); 
    }

    // JS is Case sensitive. 
    //var num1 = prompt("Enter number 1 value: "); 
    //var num2 = prompt("Enter number 2 value: "); 

    if(isNaN(num1) && isNaN(num2)){
        alert("Invalid numeric value entered. "); 
    }
    else{
    var num3 = Number(num1) + Number(num2); 
    alert(num3);
    }
}

calculation(); 
document.write(x); 

let a = 12; 
let b = 12.333; 
let c = true; 
let d  = "string"; 

let message; 
message = "Hello class"; 
message = "Hello students"; 
document.write(message); 

let num = 5; 
const PI = 3.14;
const BG_COLOR = "#000"; 
*/
// Declare two variables; one admin and one name. 
// Assign two values to them
// copy the value of the name variable to the admin variable
// show the value of admin using an alert

let admin; 
let name = "Jordann";
admin = name;
//alert(admin); 

let actor = "James Bond"
let movieTitle = `For your eyes only: ${actor}`; 
//alert(movieTitle); 

let student_name = true; 
alert(typeof student_name); 

let result = confirm("Are you sure you want to delete"); 
if(result){
    alert("Deleting....."); 
}
else{
    alert("Cancelled"); 
}

// Prompt the user for a name and print the name out to the document 

let their_name = prompt("What is your name?"); 
document.write(their_name); 
