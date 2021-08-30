function getViewportSize() {
    var e = window;
    var a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
}

let { width, height } = getViewportSize()
let mainLogoHyperLink = document.getElementById("mainLogoHyperLink");
let headLine = document.getElementsByClassName("headLine");
const player1 = new Plyr('#player1', { title: '100k Coding Challenge' });
let i = 0;

console.log(width);
console.log(height);
// console.log(document.getElementById("player1").childNodes,"//////////////////////////");





function navBgColor() {
    document.getElementById("navbar").classList.add("navBgColor");
}

function sliderMainHeadingLenght(className) {
    for (i = 0; i < headLine.length; i++) {
        headLine.item(i).classList.add(className);
    }
}

function open100kPlayer() {
    document.getElementById("100kCodeingChallengeMock").remove();
    document.getElementById("100kplayerandplaylist").style.display = "block";
    player1.play();

    // document.getElementsByClassName("ytp-chrome-top").style.display="none";
    // document.getElementsByClassName("ytp-pause-overlay").style.display="none";
}

async function playnow(property) {

    player1.source = {
        type: 'video',
            sources: [
                {
                    src: property,
                    provider: 'youtube',
                },
            ],
    };
}

new SimpleBar(document.getElementById('list'));




//Mobile Smallscreen(320px)
if (width <= 320) {
    navBgColor();
    document.getElementById("navContainerFluid").classList.add("pl0", "pr0");

}
//Mobile Mediumscreen(375px)
else if (width <= 375) {
    navBgColor();
    document.getElementById("navContainerFluid").classList.add("pl0", "pr0");
}
//Mobile Largescreen(425px)
else if (width <= 425) {
    navBgColor();
    document.getElementById("navContainerFluid").classList.add("pl0", "pr0");
}
else if (width < 768) {
    navBgColor();
}
//Tablet Screen
else if (width <= 768) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    navBgColor();
}
//Desktop Old(1024px)
else if (width <= 1024) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    document.getElementById("playerContainer").classList.add("pl0");
}
//Desktop Standard(1366)
else if (width <= 1366) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");

}
//Desktop FullHD(1920)
else if (width <= 1920) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");

}




