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

}
//Tablet Screen
else if (width <= 768) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    hideCarouselBtn();
    navBgColor();
    


}
//Desktop Old(1024px)
else if (width <= 1024) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    hideCarouselBtn();

}
//Desktop Standard(1366)
else if (width <= 1366) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    hideCarouselBtn();

    for (i = 0; i < headLine.length; i++) {
        headLine.item(i).classList.add("headbig");
        console.log(i);
    }




}
//Desktop FullHD(1920)
else if (width <= 1920) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");
    hideCarouselBtn();

}















