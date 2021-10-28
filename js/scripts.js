/*================Menu Show Y Hidden======================*/
const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close");

//Show Menu

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_menu");
    });
}

//Close Menu
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_menu");
    });
}

//Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.querySelector("#nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show_menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//Skills accordian

const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener("click", toggleSkills);
});