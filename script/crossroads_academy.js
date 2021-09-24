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

console.log(width);
console.log(height);





function navBgColor() {
    document.getElementById("navbar").classList.add("navBgColor");
}



//Mobile Smallscreen(320px)
if (width <= 320) {
    navBgColor();
    

}
//Mobile Mediumscreen(375px)
else if (width <= 375) {
    navBgColor();
    

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