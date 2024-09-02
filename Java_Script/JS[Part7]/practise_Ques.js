// const square = (n)=>(n*n);
// console.log(square(2));

let id = setInterval( () =>{
    console.log("hello world");
},2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear Interval ran");
},10000);