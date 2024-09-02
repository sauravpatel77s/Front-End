let greet = function(){  //higher order function
    console.log("hello");
}

function multipleGreet(func,n) {
    for(let i=1;i<=n;i++){
        func();
    }
}

// multipleGreet(greet,4);


function OddorEvenFactory(request) {
    if(request == "odd"){
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even; 

    } else {
        console.log("wrong request");
    }
}

let request = "odd";//even