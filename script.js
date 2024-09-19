// Mobile Navigation 
const menu = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger = document.querySelector("#menu-icon");
const body = document.querySelector("body");

function toggleMenu() {
    if (menu.classList.contains("showNavbar")) {
        menu.classList.remove("showNavbar");
    } else {
        menu.classList.add("showNavbar");
    }
}
hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", function() {
            menu.classList.remove("showNavbar");
        })
    }
)

document.addEventListener("click", function(ev) {
    const isClickInsideMenu = menu.contains(ev.target);
    const isClickOutsideMenu = hamburger.contains(ev.target);

    if (!isClickInsideMenu && !isClickOutsideMenu && menu.classList.contains("showNavbar")) {
        menu.classList.remove("showNavbar");
    }
})

// Projects Page
