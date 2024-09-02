function printName(name){
    console.log(name);
}



function printInfo(name, age){
    console.log(` ${name} & age is ${age}.`);
}

printInfo("Saurav patel",28);

//practice ques3
// function printAvg(a, b, c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// printAvg(2,4,6);

//practice Ques4
function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}

printTable(2);