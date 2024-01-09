
// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children
console.log(boxes);
let a = 0;
let b = 255;

function getRandomColor(){
    let val1 = parseInt(a+Math.random()*(b-a));
    let val2 = parseInt(a+Math.random()*(b-a));
    let val3 = parseInt(a+Math.random()*(b-a));
    return `rgb(${val1}, ${val2}, ${val3})`;
}
console.log(boxes);
Array.from(boxes).forEach(e=> {
    e.style.backgroundColor = getRandomColor()
});


function refreshPage() {
    location.reload();
} 

