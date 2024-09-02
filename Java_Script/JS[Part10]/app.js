let btns = document.querySelector("button");

btns.addEventListener("click",function (event) {
    console.log(event);
    console.log("button clicked");
});

btns.addEventListener("dblclick",function (event){
    console.log(event);
    console.log("button clicked");
});

// console.dir(btn);

// for (btn of btns){
//     // btn.onclick = sayhello;
//     // btn.onmouseenter = function (){
//     //     console.log("you entered a button");
//     // }
//     // console.dir(btn);
    
// }

// btn.onclick = function (){
//     alert("button was clicked")
// };


// .............addEventListener...........//

// for(btn of btns) {

//     // btn.addEventListener("click", sayhello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick",function () {
//         console.log("you double click me");
//     } );

// }
// function sayName(){
//     alert("saurav patel");
// }

// function sayhello() {
//     alert("Hello!");
// }
