let mobile_nav_btn = document.querySelector(".mobile_nav_btn");
let mobile_menu = document.querySelector(".mobile_menu");
let nav_icon1 = '<img src="./images/icon-hamburger.svg" alt="hamburger icon">';
let nav_icon2 = '<img src="./images/icon-close.svg" alt="hamburger icon">';

mobile_nav_btn.addEventListener("click", togglenav);
mobile_nav_btn.innerHTML = nav_icon1;
function togglenav() {
    mobile_menu.classList.toggle("open")

    if (mobile_menu.classList.contains("open")) {
        mobile_nav_btn.innerHTML = nav_icon2;
        mobile_menu.style.width = "100%";
    } else {
        mobile_nav_btn.innerHTML = nav_icon1;
        mobile_menu.style.width = "0";
    }
}