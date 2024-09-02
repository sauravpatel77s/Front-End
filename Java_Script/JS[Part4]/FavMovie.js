// const FavMovie = "avatar";
// let guess = prompt("guess my favorite movie");

// while( (guess != FavMovie) && (guess != "quit")){
//     console.log("Wrong");
//     guess = prompt("please try again")
// }

// if(guess == FavMovie){
//     console.log("congrats!!");
// } else{
//     console.log("you quit");
// }


let i=1;
while(i<=5){
    if(i==3){
        break;
    }

    console.log(i);
    i++;
}

console.log("we used break at 3");