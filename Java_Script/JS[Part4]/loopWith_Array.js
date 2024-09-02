// let fruits = ["mango","banana","apple","litchi","orange"];

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

//nested loop with nested array

// let heroes = [["iron man","spiderman","Thor"],["superman","wonder women","flash"]];
// for(let i=0;i<heroes.length;i++){
//     console.log(`list #${i}`);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

// FOR OF LOOP

// let fruits = ["mango","apple","banana","orange","Litchi"]

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "APNACOLLEGE"){
//     console.log(char);
// }



//NESTED FOR LOOP

let heroes = [["iron man","spiderman","Thor"],["superman","wonder women","flash"]];

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}
