const container = document.getElementById("container");

const senseScrollmovement = () => {
    let pos = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolltrack = Math.floor(pos * 1000 / height);
    // console.log(scrolltrack);

    if(scrolltrack >= 120){
        console.log(100 - ((scrolltrack/120) * 12));
        container.style.height = `${100 - ((scrolltrack/120) * 11)}vh`;
        container.style.width = `${100 - ((scrolltrack/120) * 11)}vw`;
    }
}
window.onscroll = senseScrollmovement;