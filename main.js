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

// slide show hero-section

window.addEventListener("resize", () => {
    let slideIndex = 0;
    let widthDevice = window.innerWidth;
    const nextIconElement = document.querySelector(".next-icon")
    const backIconElement = document.querySelector(".back-icon")
    let slidesItem = document.querySelectorAll(".hero-contact-content")

    if (widthDevice < 798 && widthDevice > 758) {
        for (let i = 0; i < slidesItem.length; i++) {
            slidesItem[i].style.display = "none"
        }
    }
    if (widthDevice < 768) {
        nextIconElement.onclick = () => {
            slidesItem[slideIndex].style.display = "none"
            slideIndex++;
            slides();
        }
        backIconElement.onclick = () => {
            slidesItem[slideIndex].style.display = "none"
            slideIndex--;
            slides();
        }
        function slides() {

            if (slideIndex >= slidesItem.length) {
                slideIndex = 0
            }
            if (slideIndex < 0) {
                slideIndex = slidesItem.length
            }
            slidesItem[slideIndex].style.display = "flex"
        }
        slides()
    }
    if (widthDevice > 779) {
        for (let i = 0; i < slidesItem.length; i++) {
            slidesItem[i].style.display = "flex"
        }
    }
})




//slide show vervices-section

window.addEventListener("resize", () => {
    let slideIndex = 0;
    let widthDevice = window.innerWidth;
    //slide with botton click
    const nextIconElement = document.querySelectorAll(".services-next-icon")
    const backIconElement = document.querySelectorAll(".services-back-icon")
    let slidesItem = document.querySelectorAll(".benefit-card")

    console.log("slidesItem: ",slidesItem);

    if (widthDevice < 798 && widthDevice > 748) {
        for (let i = 0; i < slidesItem.length; i++) {
            slidesItem[i].style.display = "none"
        }
    }
    if (widthDevice < 768) {
        
        for (let j = 0; j < nextIconElement.length; j++) {
            nextIconElement[j].onclick = () => {
                slidesItem[slideIndex].style.display = "none"
                slideIndex++;
                slides();
            }
        }
        backIconElement.onclick = () => {
            slidesItem[slideIndex].style.display = "none"
            slideIndex--;
            slides();
        }
        function slides() {

            if (slideIndex >= slidesItem.length) {
                slideIndex = 0
            }
            if (slideIndex < 0) {
                slideIndex = slidesItem.length
            }
            slidesItem[slideIndex].style.display = "block"
        }
        slides()
    }
    if (widthDevice > 769) {
        for (let i = 0; i < slidesItem.length; i++) {
            slidesItem[i].style.display = "block"
        }
    }
})

////slide show tech-section

window.addEventListener("resize", () => {
    let slideIndex = 0;
    let widthDevice = window.innerWidth;
    const nextIconElement = document.querySelector(".next-icon-tech-section")
    const backIconElement = document.querySelector(".back-icon-tech-section")
    let slidesItem = document.querySelectorAll(".tech-section-body ul li")

    if (widthDevice < 798 && widthDevice > 758) {
        for (let i = 0; i < slidesItem.length; i++) {
            slidesItem[i].style.display = "none"
        }
    }
    if (widthDevice < 768) {
        nextIconElement.onclick = () => {
            slidesItem[slideIndex].style.display = "none"
            slideIndex++;
            slides();
        }
        backIconElement.onclick = () => {
            slidesItem[slideIndex].style.display = "none"
            slideIndex--;
            slides();
        }
        function slides() {

            if (slideIndex >= slidesItem.length) {
                slideIndex = 0
            }
            if (slideIndex < 0) {
                slideIndex = slidesItem.length
            }
            slidesItem[slideIndex].style.display = "block"
        }
        slides()
    }
    if (widthDevice > 779) {
        for (let i = 0; i < slidesItem.length; i++) {
            slidesItem[i].style.display = "block"
        }
    }
})

//slide show process-section

window.addEventListener("resize", () => {
    let slideIndex = 0;
    let widthDevice = window.innerWidth;
    const nextIconElement = document.querySelectorAll(".next-icon-process-section")
    const backIconElement = document.querySelectorAll(".back-icon-process-section")
    let slidesItem = document.querySelectorAll(".process-section-stage")

    console.log("slidesItem: ",slidesItem);

    if (widthDevice < 798 && widthDevice > 748) {
        for (let i = 0; i < slidesItem.length; i++) {
            slidesItem[i].style.display = "none"
        }
    }
    if (widthDevice < 768) {
        
        for (let j = 0; j < nextIconElement.length; j++) {
            nextIconElement[j].onclick = () => {
                slidesItem[slideIndex].style.display = "none"
                slideIndex++;
                slides();
            }
        }
        backIconElement.onclick = () => {
            slidesItem[slideIndex].style.display = "none"
            slideIndex--;
            slides();
        }
        function slides() {

            if (slideIndex >= slidesItem.length) {
                slideIndex = 0
            }
            if (slideIndex < 0) {
                slideIndex = slidesItem.length
            }
            slidesItem[slideIndex].style.display = "block"
        }
        slides()
    }
    if (widthDevice > 769) {
        for (let i = 0; i < slidesItem.length; i++) {
            slidesItem[i].style.display = "block"
        }
    }
})