let nums = [1, 2, 3, 4];
let finalVal = nums.reduce((res,el) =>{
     console.log(res);
    return res+el;
    });
// console.log(finalVal); 


// Finding maximum in an array
let arr = [1,4, 2, 5, 6, 7, 2, 9, 2];

// let max = -1;

// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max)

let max = arr.reduce((max,el) => {
    if(el>max){
        return el;
    } else {
        return max;
    }
});
console.log(max);