
let content = document.getElementById('content');
let cursor = document.getElementById('cursor');

window.addEventListener("mousemove",(event)=>{
    let x = event.x;
    let y = event.y;
    console.log(x,y);
    cursor.style.transform = `translate(${x-50}px,${y-50}px)`;
})

cursor.addEventListener("click",()=>{
    content.classList.toggle("modechange")
    cursor.classList.toggle("modechange")
})








