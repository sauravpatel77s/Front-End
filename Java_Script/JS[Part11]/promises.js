

// function savetoDb(data, success, failure)  {
//     let internetSpeed= Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4) {
//         success();
//         // console.log("your data was saved", data);
//     } else{
//         console.log("weak connection. data not saved");
//     }
   
// }

// savetoDb(
//     "apna college", 
//     ()=>{
//      console.log("success : your data was saved");
//      savetoDb("hello world", ()=>{
//         console.log("success2 : data2 saved");
//         savetoDb("saurav", ()=>{
//             console.log("success3 : data 3 saved")
//         }, ()=> {
//             console.log("failure3 : data 3 not saved")
//         })
//      }, ()=> {
//         console.log("failure2 : data 2 not saved")
//      })
// }, 
// ()=> {
//     console.log("failure : weak connection. data not saved");
// });


function savetoDb(data) {
   
    return new Promise((resolve, reject) => {
        let internetSpeed= Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4) {
        resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

savetoDb("apna college")
.then(()=>{
    console.log("promise was resolved");
    // console.log(request);
})
.catch(()=>{
    console.log("promise was rejected");
    // console.log(request);
})
