// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);

// }

//..............Query Selector..................//

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("p"));



// ................ manupilating style.........//

let links = document.querySelector(".box a");

// for (let i=0;i<links.length;i++){
//     links[i].style.color="yellow";
// }

for(link of links){
    link.style.color = "green"; //inline style
}