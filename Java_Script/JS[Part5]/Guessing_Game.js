const max = prompt("Enter a Max Number");

const random= Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit" ){
        console.log("user quit");
        break;
    } else if(guess == random){
        console.log("yoU are right! congrats!! ");
        break;
    } else if(guess < random){
       guess =  prompt("your guess was to small, please try again");
    }else if(guess > random){
        guess =  prompt("your guess was to larger, please try again");
     }
    
}