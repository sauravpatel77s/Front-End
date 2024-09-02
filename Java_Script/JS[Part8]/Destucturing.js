let names = ["tony","bruce","peeter","steve"];
let [winner, runnerup, ...others] = names;


/// Destructuring (objects)
const student = {
    name: "saurav",
    age:14,
    class:"2nd Years",
    subjects: ["hindi","english","maths","science"],
    username:"karan@123",
    password:"abcd"
    
};
let {username:user,password} = student;