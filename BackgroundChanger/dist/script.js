let clr=document.querySelector(".clr");
let btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
    let cv=clr.value;
document.body.style.background=`${cv}`;
console.warn(`color Changed to ${cv}`);
})