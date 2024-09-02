const max  = 6;
const random= Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("enter your value");

while(true){
    if(guess == random){
        console.log("You have fing a correct value");
        break;
    }   else if(guess == "quit"){
        console.log("user quit the Dice game.")
        break;
    } else if(guess > 6){
        console.log("you guess a out of scope value");
        guess = prompt("guess the value in b/w 1 to 6. please try again!");
    }
}
