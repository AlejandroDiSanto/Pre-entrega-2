const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");
const header = document.querySelector(".header-mobile");


openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
    header.classList.add("ocultar-header");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
    header.classList.remove("ocultar-header");
})
