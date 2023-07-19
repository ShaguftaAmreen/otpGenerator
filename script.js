
var g=document.getElementById("btn");
g.addEventListener("click",otp);
function otp(){
    let digit="0123456789";
        let b="";
    for(let i=0;i<6;i++){
       
     b +=digit[Math.floor(Math.random()*9+1)];
    }
    let r=document.getElementById("field");
    r.value=b;
}