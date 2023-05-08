// show menu navbar mobile
const iconMenuElement = document.querySelector(".narbar-menu-icon")
const closeElement = document.querySelector(".menu-close-icon")
const nabarMobileElement = document.querySelector(".narbar-menu-mobile")

iconMenuElement.onclick = () => {
    document.querySelector(".narbar-menu-mobile").style.display = "block";
    document.querySelector(".menu-overlay").style.display = "block"
}

closeElement.onclick = () => {
    document.querySelector(".narbar-menu-mobile").style.display = "none";
    document.querySelector(".menu-overlay").style.display = "none"
}

