//MOBILE NAV
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    mobileMenu.style.clipPath = "inset(0 0 0 0)"
    mobileMenu.style.transition = "300ms ease-in-out";
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex";
    nav.style.background = "#1c1719"
    nav.style.color = "white";
    nav.style.transition = "300ms ease-in-out";
})

closeBtn.addEventListener("click", () => {
    mobileMenu.style.clipPath = "inset(0 0 100% 0)"
    mobileMenu.style.transition = "300ms ease-in-out";
    menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
    nav.style.background = "#f0f5f5"
    nav.style.color = "black";
    nav.style.transition = "300ms ease-in-out";
})

//MOBILE PIC & NAME ANIMATIONS
const portrait = document.getElementById("portrait");
let isDesktop = window.matchMedia("hover: hover");

if (!isDesktop) {
    let glitch = setInterval(() => {
        portrait.setAttribute("src", "assets/img/portraits/portrait_glitch.gif");
    }, 5000);

    let art = setInterval(() => {
        portrait.setAttribute("src", "assets/img/portraits/portrait_art.jpeg");
    }, 10000);
}

