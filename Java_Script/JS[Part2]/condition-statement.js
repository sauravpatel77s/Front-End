//condition statement
//if statement

// console.log("before ,yh if statement");
// let age =23;
// if(age>=18){
//     console.log("you can vote");
// }
// console.log("after my if statement");

// problem 1 if statement
// let color="red";

// if(color=='red'){
//     console.log("you can stop");
// }
// if(color=='yellow'){
//     console.log("you can aware");
// }
// if(color=='Green'){
//     console.log("you can cross the  road");
// }

let age=14;
if(age>=18){
    console.log("you can vote");
}
else if(age<18){
    console.log("u cannot vote");
}
if(0){
    console.log("it has true value");
} else{
    console.log("it has false value");
}
let num=0;
if(num){
    console.log("it has true value");
} else{
    console.log("it has false value");
}
let color="red";
switch(color) {
    case "red":
    console.log("stop");
    break;
    case "yellow":
    console.log("slow down");
    break;
    case "Green":
    console.log("go");
    break;
    default:
    console.log("light is broken");
    
}
alert("something is wrong");
console.log("this is a simple log");
console.error("this is a simple log");
console.warn("this is a simple log");

let firstName= prompt("enter your name:");
console.log(firstName);