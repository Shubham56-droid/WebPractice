const blink = document.getElementById('blink');
const blink2 = document.getElementById('blink2');
const about = document.getElementById('about');
const start_container = document.getElementById("start_container");
const buttonNext = document.getElementById("buttonNext");
const mouseBox = document.getElementById("mouseBox");

// window.addEventListener("mousemove",(event)=>{
//     let x = event.x;
//     let y = event.y;
//     console.log(x,y);
//     mouseBox.style.transform = `translate(${x-100}px,${y-100}px)`;
// })


const senseScrollmovement = () => {
    let pos = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolltrack = Math.floor(pos * 1000 / height);
    console.log(scrolltrack);

    if(scrolltrack >= 10 && scrolltrack <= 300){
        let newval = (scrolltrack - 10);

        start_container.style.transform = `scale(0.2) rotateX(${newval}deg)`;

        if(newval >= 100){
            blink.style.display = 'none';
            blink2.style.display = 'none';
        }else{
            blink.style.display = 'flex';
            blink2.style.display = 'flex';
            about.classList.add("inactive")
            buttonNext.classList.add("inactive")
            
        }
        if(newval >= 180){
            start_container.style.transform = `scale(1) rotateX(180deg)`;
            start_container.style.background = 'linear-gradient(-90deg,#fc386c,#222)';
            console.log(scrolltrack);
            about.classList.remove("inactive");
            buttonNext.classList.remove("inactive")

        }else{
            start_container.style.background = '#222';
        }

        if(scrolltrack <= 50 || scrolltrack == 0){
            start_container.style.transform = `rotateX(0deg) scale(1)`;
        }


    }  
}
window.onscroll = senseScrollmovement;




