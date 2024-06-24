let screen = document.querySelector('.screen');
let increaseBtn = document.querySelector(".increase");
let resetBtn = document.querySelector(".reset");
increaseBtn.addEventListener("click",()=>{
  screen.innerText = Number(screen.innerText) + 1;
})
resetBtn.addEventListener("click",()=>{
  screen.innerText = 0;
})