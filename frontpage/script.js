const scrollvalcount = () => {
    let pos = document.documentElement.scrollTop;
    let calcheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollval = Math.round((pos * 1000) / calcheight);

    console.log(scrollval);

}
window.onscroll = scrollvalcount;