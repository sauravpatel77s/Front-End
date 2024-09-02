function sum(a, b) {
    return a+b;
}

let  s = sum(3,4);
console.log(s);


//practise question 5

function sumN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum+i;
        
    }
  return sum;
}


//practice ques 6
let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result = "";

    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;
}


//lexical scope

function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}