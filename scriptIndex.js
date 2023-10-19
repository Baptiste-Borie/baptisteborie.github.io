
/* Ajout du style dans la banniere. */
document.addEventListener('scroll', function() {
    var contactSection = document.querySelector('.contact');
    var workSection = document.querySelector('.work'); 
    var navBar = document.getElementById('nav');

    var contactSectionRect = contactSection.getBoundingClientRect();
    var workSectionRect = workSection.getBoundingClientRect();

    if (contactSectionRect.top <= window.innerHeight && contactSectionRect.bottom >= 0 ) {
        navBar.classList.add("navBlur");
        if (workSectionRect.bottom <= 0){
            navBar.classList.add('navColor');
        }
    } else {
    navBar.classList.remove('navBlur');
    navBar.classList.remove('navColor');
    }
});

