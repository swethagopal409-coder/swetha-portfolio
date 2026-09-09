const words = [
    "Full Stack Developer",
    "Web Developer",
    "Creative Coder",
    "UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");


function typeEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();



/* RESUME */

function openResume() {

    const modal =
        document.getElementById("resumeModal");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeResume() {

    const modal =
        document.getElementById("resumeModal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


function downloadResume() {

    const link =
        document.createElement("a");

    link.href = "resume.html";

    link.download =
        "G_Swetha_Resume.html";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}



/* CLOSE MODAL OUTSIDE */

document
    .getElementById("resumeModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeResume();

        }

    });



/* ESC KEY */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeResume();

        }

    }
);



/* NAVIGATION */

const sections =
    document.querySelectorAll("section");

const links =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* PROFILE 3D EFFECT */

const profile =
    document.querySelector(".profile-card");


document.addEventListener(
    "mousemove",
    function(event) {

        if (window.innerWidth < 900) {
            return;
        }

        const x =
            (window.innerWidth / 2 -
                event.clientX) / 60;

        const y =
            (window.innerHeight / 2 -
                event.clientY) / 60;

        profile.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;

    }
);


document.addEventListener(
    "mouseleave",
    function() {

        profile.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    }
);