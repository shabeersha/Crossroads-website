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

    document.getElementsByClassName("ytp-chrome-top").style.display="none";
    document.getElementsByClassName("ytp-pause-overlay").style.display="none";
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

    console.log(player1.ready);
}

new SimpleBar(document.getElementById('list'));


function openPlayer(){
    console.log("player working");
}



//Mobile Smallscreen(320px)
if (width <= 320) {
    navBgColor();
    document.getElementById("ExMemAboutSection").classList.add("mt-5");
    document.getElementById("ExMemPara1").style.marginLeft = "auto";
    document.getElementById("ExMemPara2").style.marginLeft = "auto";
    document.getElementById("ExMemPara1").style.fontSize = "1em";
    document.getElementById("ExMemPara2").style.fontSize = "1em";
    document.getElementById("ExMemHead2").style.fontSize = "2em";
    document.getElementById("ExMemPara3").style.fontSize = "1em";


}
//Mobile Mediumscreen(375px)
else if (width <= 375) {
    navBgColor();
    document.getElementById("ExMemAboutSection").classList.add("mt-5");
    document.getElementById("ExMemPara1").style.marginLeft = "auto";
    document.getElementById("ExMemPara2").style.marginLeft = "auto";
    document.getElementById("ExMemPara1").style.fontSize = "1em";
    document.getElementById("ExMemPara2").style.fontSize = "1em";
    document.getElementById("ExMemHead2").style.fontSize = "2em";
    document.getElementById("ExMemPara3").style.fontSize = "1em";


}
//Mobile Largescreen(425px)
else if (width <= 425) {
    navBgColor();
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
    document.getElementById("section01").style.height="80vh";
}
//Desktop Standard(1366)
else if (width <= 1366) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    document.getElementById("section01").style.height="80vh";

}
//Desktop FullHD(1920)
else if (width <= 1920) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    document.getElementById("section01").style.height="80vh";

}




