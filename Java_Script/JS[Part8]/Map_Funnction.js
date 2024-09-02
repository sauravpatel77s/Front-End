// map function
let num = [1, 2, 3,  4];

let double = num.map((el) => {
    // return el*2;
    return el*el;
});



/// Map object

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

let gpa = student.map((el) => {
    return el.marks/10;
});
