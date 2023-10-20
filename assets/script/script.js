//MOBILE NAV
const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");


let windowWidth = window.innerWidth;

let openMenu = function () {
    mobileMenu.style.height = "calc(100vh - 80px)";
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex";
    nav.style.background = "#1c1719";
    nav.style.color = "white";
    nav.style.transition = "300ms ease-in-out";
}

/* Close */
let closeMenu = function () {
    mobileMenu.style.height = "0";
    menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
    nav.style.background = "#f0f5f5";
    nav.style.color = "black";
    nav.style.transition = "300ms ease-in-out";
}

window.addEventListener('resize', function () {
    if (windowWidth > 663) {
        menuBtn.style.removeProperty("display");
        mobileMenu.style.removeProperty("height");
        closeBtn.style.removeProperty("display");
        nav.style.removeProperty("background");
        nav.style.removeProperty("color");
        nav.style.removeProperty("transition");
    }
});