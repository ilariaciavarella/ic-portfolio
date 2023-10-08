//MOBILE NAV
const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");

let openMenu;
let closeMenu;

window.addEventListener('resize', function () {
    console.log("hey");
    let windowWidth = window.innerWidth;
    if (windowWidth < 664) {
        /* Open */
        openMenu = function () {
            mobileMenu.style.height = "calc(100% - 80px)";
            document.getElementById("menu-content").style.height = "100%";
            menuBtn.style.display = "none";
            closeBtn.style.display = "flex";
            nav.style.background = "#1c1719"
            nav.style.color = "white";
            nav.style.transition = "300ms ease-in-out";
        }

        /* Close */
        closeMenu = function () {
            mobileMenu.style.height = "0";
            document.getElementById("menu-content").style.height = "0";
            menuBtn.style.display = "flex";
            closeBtn.style.display = "none";
            nav.style.background = "#f0f5f5"
            nav.style.color = "black";
            nav.style.transition = "300ms ease-in-out";
        }
    } else {
        menuBtn.style.removeProperty("display");
    }
})
