// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.querySelector(".nav-links");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


// =========================================
// PROJECT VIDEO MODAL
// =========================================

const viewProjectBtn =
    document.getElementById("view-project-btn");


const footerViewProjectBtn =
    document.getElementById("footer-view-project-btn");


const projectVideoModal =
    document.getElementById("project-video-modal");


const videoCloseBtn =
    document.getElementById("video-close-btn");


const projectDemoVideo =
    document.getElementById("project-demo-video");


// =========================================
// FUNCTION TO OPEN VIDEO
// =========================================

function openProjectVideo() {

    if (
        projectVideoModal &&
        projectDemoVideo
    ) {

        projectVideoModal.classList.add("active");

        projectDemoVideo.play();

    }

}


// =========================================
// MAIN VIEW PROJECT BUTTON
// =========================================

if (viewProjectBtn) {

    viewProjectBtn.addEventListener("click", () => {

        openProjectVideo();

    });

}


// =========================================
// FOOTER VIEW PROJECT BUTTON
// =========================================

if (footerViewProjectBtn) {

    footerViewProjectBtn.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            openProjectVideo();

        }
    );

}


// =========================================
// CLOSE VIDEO BUTTON
// =========================================

if (videoCloseBtn) {

    videoCloseBtn.addEventListener("click", () => {

        if (projectVideoModal) {

            projectVideoModal.classList.remove("active");

        }

        if (projectDemoVideo) {

            projectDemoVideo.pause();

            projectDemoVideo.currentTime = 0;

        }

    });

}


// =========================================
// CLOSE WHEN CLICKING OUTSIDE
// =========================================

if (projectVideoModal) {

    projectVideoModal.addEventListener(
        "click",
        (event) => {

            if (event.target === projectVideoModal) {

                projectVideoModal.classList.remove("active");

                if (projectDemoVideo) {

                    projectDemoVideo.pause();

                    projectDemoVideo.currentTime = 0;

                }

            }

        }
    );

}


// =========================================
// CLOSE WITH ESC KEY
// =========================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        projectVideoModal &&
        projectVideoModal.classList.contains("active")
    ) {

        projectVideoModal.classList.remove("active");

        if (projectDemoVideo) {

            projectDemoVideo.pause();

            projectDemoVideo.currentTime = 0;

        }

    }

});


// =========================================
// PREMIUM SCROLL REVEAL ANIMATION
// =========================================


// ABOUT SECTION

const aboutContent =
    document.querySelector(".about-content");

const aboutVisual =
    document.querySelector(".about-visual");


if (aboutContent) {

    aboutContent.classList.add(
        "reveal-left"
    );

}


if (aboutVisual) {

    aboutVisual.classList.add(
        "reveal-right"
    );

}


// SKILLS

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach((card) => {

    card.classList.add(
        "reveal-bottom"
    );

});


// PROJECTS

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card, index) => {

    if (index % 2 === 0) {

        card.classList.add(
            "reveal-left"
        );

    } else {

        card.classList.add(
            "reveal-right"
        );

    }

});


// EDUCATION

const educationCards =
    document.querySelectorAll(".education-card");


educationCards.forEach((card) => {

    card.classList.add(
        "reveal-bottom"
    );

});


// LEARNING

const learningCards =
    document.querySelectorAll(".learning-card");


learningCards.forEach((card) => {

    card.classList.add(
        "reveal-bottom"
    );

});


// ALL REVEAL ELEMENTS

const premiumRevealElements =
    document.querySelectorAll(
        ".reveal-left, .reveal-right, .reveal-bottom"
    );


// SCROLL FUNCTION

function premiumRevealOnScroll() {

    premiumRevealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        if (
            elementTop <
            windowHeight - 100
        ) {

            element.classList.add(
                "active"
            );

        }

    });

}


// SCROLL EVENT

window.addEventListener(
    "scroll",
    premiumRevealOnScroll
);


// INITIAL CHECK

premiumRevealOnScroll();

// =========================================
// DARK MODE
// =========================================

const themeToggle =
    document.getElementById("theme-toggle");


// LOAD SAVED THEME

if (
    themeToggle &&
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


// TOGGLE THEME

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        if (
            document.body.classList.contains("dark-mode")
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.textContent = "☀️";

        }

        else {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.textContent = "🌙";

        }

    });

}


// =========================================
// TYPING ANIMATION
// =========================================

const typingRole =
    document.getElementById("typing-role");


const roles = [

    "Aspiring Data Analyst",

    "Python Learner",

    "Data Analytics Student"

];


let roleIndex = 0;

let charIndex = 0;

let isDeleting = false;


function typeRole() {

    // Safety check

    if (!typingRole) {

        return;

    }


    const currentRole =
        roles[roleIndex];


    // TYPING

    if (!isDeleting) {

        typingRole.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );


        charIndex++;


        // WORD COMPLETE

        if (
            charIndex === currentRole.length
        ) {

            isDeleting = true;

            setTimeout(
                typeRole,
                1500
            );

            return;

        }

    }


    // DELETING

    else {

        typingRole.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        // WORD EMPTY

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

        }

    }


    const speed =
        isDeleting ? 50 : 100;


    setTimeout(
        typeRole,
        speed
    );

}


// START TYPING

if (typingRole) {

    typeRole();

}