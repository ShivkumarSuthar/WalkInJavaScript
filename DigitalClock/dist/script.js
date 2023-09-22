


let hFirst=document.querySelector(".hFirst");
let hSecond=document.querySelector(".hSecond");
let mFirst=document.querySelector(".mFirst");
let mSecond=document.querySelector(".mSecond");
let sFirst=document.querySelector(".sFirst");
let sSecond=document.querySelector(".sSecond");



setInterval(function clock(){
    let date=new Date();
// console.log(date);
let hour=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds()

//Hour
let hff=Math.floor(hour/10);
let hfs=hour%10

//Minutes
let mff=Math.floor(min/10);
let mfs=min%10

//seconds
let sff=Math.floor(sec/10)
let sfs=sec%10
// console.log(mff);
    //hour
    hFirst.innerHTML=hff;
    hSecond.innerHTML=hfs;

    //minutes
    mFirst.innerHTML=mff;
    mSecond.innerHTML=mfs;

    //seconds
    sFirst.innerHTML=sff;
    sSecond.innerHTML=sfs;

},100)