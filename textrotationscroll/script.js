
let textmove = document.getElementById("textmove");

let scrollPercentage = () => {

    setTimeout(() => {
        textmove.classList.remove('rotate')
    },300);

    let pos = document.documentElement.scrollTop;

    let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue = Math.round(pos * 360 * 2 / calHeight)

    // rotateVal = 1 * scrollValue;

    // console.log(rotateVal);
    
    textmove.style.transform = `rotateY(${scrollValue}deg)`;


}

window.onscroll = scrollPercentage;

setInterval(() => {
    textmove.classList.add('rotate')
}, 1000);