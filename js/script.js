// Burger menu

const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
    const bodyMenu = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle("_active");
        bodyMenu.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}
