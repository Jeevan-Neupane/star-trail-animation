const body=document.body;

body.addEventListener("mousemove",(e)=>{

   let x=e.x;
   let y=e.y;
   const newEl=document.createElement("span");
   newEl.style.left=x+"px"
   newEl.style.top=y+"px"
   let z=Math.random()*10*5;
   
    newEl.style.height=z+"px";
    newEl.style.width=z+"px";

   body.appendChild(newEl)
   setInterval(()=>{
    newEl.remove();
},4000);




})
