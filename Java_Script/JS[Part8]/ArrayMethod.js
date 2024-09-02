let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function(el){
    console.log(el);
});

// let print = function (el){
//     console.log(el);
// };

// arr.forEach(print);

///////////////  foreach function use for object

let student = [ {
    name:"saurav",
    marks:95
},
{
    name:"gaurav",
    marks:95
},{
    name:"ankush",
    marks:95
}
];

student.forEach((student) => {
    console.log(student.marks);
});


///////