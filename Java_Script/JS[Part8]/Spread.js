// spread(Array Literals)

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];
// console.log(newArr);


////// spread(object literals)

const data = {
    email:"suravpatel220930@acropolis.in",
    password:"xyz"
};

let datacopy = {...data,id:123};

let array = [1,2, 3, 4, 5, 6]; //val
let obj1 = {...array}; //obj -> key:val
