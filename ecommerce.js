let shopBox1=document.querySelector(".shop-box-1");
let body=document.querySelector("body");
shopBox1.addEventListener("click",function(e){
  let div=document.createElement("div");
  div.style.height="100%";
  div.style.width="100%";
  div.style.backgroundColor="green";
  body.appendChild(div);
})