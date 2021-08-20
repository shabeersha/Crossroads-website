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
let sliderTextElement = document.getElementsByClassName("sliderText");
let knowMoreBtnElement = document.getElementsByClassName("btnknowmore");
let i = 0;

console.log(width);
console.log(height);

function hideCarouselBtn() {
    document.getElementById("carousel-btn1").classList.add("visually-hidden");
    document.getElementById("carousel-btn2").classList.add("visually-hidden");
}

function sliderOrderandTextcenter() {
    document.getElementById("slide1Image").classList.add("order-1", "text-center");
    document.getElementById("slide2Image").classList.add("order-1", "text-center");
    document.getElementById("slide3Image").classList.add("order-1", "text-center");
}

function navBgColor(){
    document.getElementById("navbar").classList.add("navBgColor");
}

function sliderMainHeadingLenght(className){
    for (i = 0; i < headLine.length; i++) {
        headLine.item(i).classList.add(className);
    }
}

function sliderText(...props){
    for (i = 0; i < sliderTextElement.length; i++) {
        sliderTextElement.item(i).classList.add(props);
    }
}

function KnowMoreBtn(...props){
    for (i = 0; i < knowMoreBtnElement.length; i++) {
        knowMoreBtnElement.item(i).classList.add(props);
    }
}

//Mobile Smallscreen(320px)
if (width <= 320) {
    sliderOrderandTextcenter();
    navBgColor();
}
//Mobile Mediumscreen(375px)
else if (width <= 375) {
    sliderOrderandTextcenter();
    navBgColor();
}
//Mobile Largescreen(425px)
else if (width <= 425) {
    sliderOrderandTextcenter();
    navBgColor();
}
else if (width < 768) {
    sliderOrderandTextcenter();
    navBgColor();
    sliderText("mt-2");
    KnowMoreBtn("mt-5");
    sliderMainHeadingLenght("headbigs");
}
//Tablet Screen
else if (width <= 768) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    hideCarouselBtn();
    navBgColor();
    sliderText("mt-2");
    KnowMoreBtn("mt-5");
    sliderMainHeadingLenght("headbigs");
}
//Desktop Old(1024px)
else if (width <= 1024) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    hideCarouselBtn();
    sliderMainHeadingLenght("headbig");
    sliderText("mt-2");
    KnowMoreBtn("mt-5");
}
//Desktop Standard(1366)
else if (width <= 1366) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    hideCarouselBtn();
    sliderMainHeadingLenght("headbigSd");
    sliderText("mt-2");
    KnowMoreBtn("mt-5");
}
//Desktop FullHD(1920)
else if (width <= 1920) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    hideCarouselBtn();
    sliderMainHeadingLenght("headbigLg");
    sliderText("mt-3");
    KnowMoreBtn("mt-5");
}