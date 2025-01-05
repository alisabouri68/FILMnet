const slider = document.querySelectorAll("#slider>div");
const  prev= document.querySelector("#next");
const next = document.querySelector("#prev");
const indicator = document.querySelector(".indicator");
const skeltonOne = document.querySelectorAll(".skelton");

window.addEventListener('load' , ()=>{
  skeltonOne.forEach(items =>{
   items.classList.remove('skelton')
  })
})
let flag = 0;
let x = 0;
let sliderLenght = slider.length;

next.addEventListener("click", () => {
  if (flag == 0 || flag < sliderLenght - 1) {
    flag++;
    x = x - 100;
    slider[0].style.marginLeft = `${x}vw`;
    cccc()
    } else {
    flag = 0;
    x = 0;
    slider[0].style.marginLeft = `${x}vw`;
    cccc()
  }
});
prev.addEventListener("click", () => {
  if (flag > 0 && flag < sliderLenght) {
    flag--;
    x = x + 100;
    slider[0].style.marginLeft = `${x}vw`;
    cccc()
  } else {
    flag = sliderLenght - 1;
    x = (sliderLenght - 1) * -100;
    slider[0].style.marginLeft = `${x}vw`;
    cccc()
  }
});
// setInterval(() => {
//   next.click();
// }, 5000);

function zxzx(){
  slider.forEach((items , i) => {
    let span = document.createElement("span");
    span.innerHTML = i + 1;
    span.dataset.id = i + 1
    indicator.appendChild(span);
   span.setAttribute('onclick' , 'zzzz(this)')
  });
};
zxzx()
function cccc(){
const indicatorC = document.querySelectorAll(".indicator>span");
  indicatorC.forEach((itemss , i) => {
if(i == flag){
  itemss.style.background = 'red'
}else{
  itemss.style.background = 'gray'

}
  });
};
function zzzz(el){
flag = el.dataset.id -1
x = flag * 100
slider[0].style.marginLeft = `-${x}vw`;
cccc()
console.log(flag)
}
zzzz()