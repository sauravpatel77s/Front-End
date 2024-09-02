const student = {
    name:"Saurav",
    marks:95,
    prop: this, //global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.marks;  /// parent scope
   },
   getInfo1: function(){
    setTimeout( () => {
        console.log(this); // student
    },2000);
   },

   getInfo2:  function(){
    setTimeout( function() {
        console.log(this) //window
    },2000);
   }
}; 

