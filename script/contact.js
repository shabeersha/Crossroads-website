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

textarea = document.querySelector("#floatingTextarea");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}




//Mobile Smallscreen(320px)
if (width <= 320) {


}
//Mobile Mediumscreen(375px)
else if (width <= 375) {


}
//Mobile Largescreen(425px)
else if (width <= 425) {

}
else if (width < 768) {

}
//Tablet Screen
else if (width <= 768) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");

}
//Desktop Old(1024px)
else if (width <= 1024) {
    mainLogoHyperLink.classList.add("logo");
    mainLogoHyperLink.classList.remove("col-6");

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