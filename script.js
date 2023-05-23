const grid = document.querySelector("#grid");

function createBox(){
    const box = document.createElement("div");
    box.classList.add('box');
    box.addEventListener("mouseenter",() =>{
        box.classList.add('boxHover');
    })
    grid.appendChild(box);
}
function createGrid(){
    for(let i=0;i<20;i++){
        for(let j=0;j<20;j++){
            createBox();
        }
    }
}
function boxParamaters(num){
    const boxClass = document.getElementsByClassName("box");
    let side = Math.sqrt((360000/(num*num))) - 4;
    boxClass.style.width = side;
    boxClass.style.height = side;
}
createGrid();
const value = document.querySelector("#value")
const input = document.querySelector("#myRange")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
})