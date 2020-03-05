// import { orange } from "color-name";

// const heading = document.querySelector('h1');

// const makeBold = function() {
//     heading.fontWeight = 600;
// }

// heading.addEventListener('click', makeBold);

const first = document.querySelector(".mess-with-me");

document.querySelector("p.mess-with-me").style.backgroundColor = "green"

document.querySelector(".mess-with-me").style.fontSize = " 3em"
//first.style.backgroundColor = "green"
//first.style.fontSize = "3em"


const elem = document.getElementById("hide-me")
elem.parentNode.removeChild(elem)

document.querySelector("#triceratops").style.width = "324px"


const orange = function(){
    document.querySelector(".mess-with-me").style.color = "orange"

}

first.addEventListener('click', orange)

//when toggle is pressed, change color
function buttonColor(){
    const count = 1
    
    const property = document.getElementById("row")
    if (count == 0){
        property.style.backgroundColor = "red"
        count=1
    } else {
        property.style.backgroundColor = "blue"
        count =0
    }

}
document.querySelector("#toggle").style