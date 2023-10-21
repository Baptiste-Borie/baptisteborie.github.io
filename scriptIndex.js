
/* Ajout du style dans la banniere. */
document.addEventListener('scroll', function() {
    var welcomeSection = document.querySelector('.welcome');
    var workSection = document.querySelector('.work'); 
    var navBar = document.getElementById('nav');

    var welcomeSectionRect = welcomeSection.getBoundingClientRect();
    var workSectionRect = workSection.getBoundingClientRect();

    if (workSectionRect.top <= window.innerHeight && workSectionRect.bottom >= 0 ) {
        if (welcomeSectionRect.bottom <= 0){
            navBar.classList.add('navColor');
        } else {
            navBar.classList.remove('navColor');
        }
    } else {
        navBar.classList.remove('navColor');
    }
});


/* Smooth scrolling e */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const sectionWork = document.getElementById(targetId);
        console.log(sectionWork);
        console.log(targetId);
        if (sectionWork) {
            window.scrollTo({
                top: sectionWork.offsetTop,
                behavior: 'smooth' 
            });
        }
    });
});
/* Progress Dots */
const indicators = document.querySelectorAll(".progressDots");
const sections = ["welcome", "work", "contact"];

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight / 2; // Décalage de la position de défilement

    sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section);
        
        if (sectionElement) {
            const sectionTop = sectionElement.offsetTop;
            const sectionBottom = sectionTop + sectionElement.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveIndicator(index);
            }
        }
    });
});

function setActiveIndicator(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            setTimeout(() => {
                indicator.classList.add("active");
            }, 50); // Déclencher l'animation après 50 ms
        } else {
            indicator.classList.remove("active");
        }
    });
}


