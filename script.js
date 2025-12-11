const menuHamburger = document.querySelector(".menu_hamburger");
menuHamburger?.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav?.classList.toggle("open");
    menuHamburger.classList.toggle("open");
})