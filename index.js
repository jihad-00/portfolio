
const navLinks = document.querySelectorAll('.nav-link');


function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}


navLinks.forEach(link => {
    link.addEventListener('click', function () {

        removeActiveClass();

  
        this.classList.add('active');
    });
});

//floating laptop
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.title-img');
    image.classList.add('animate-float');
});



// Show or hide the button depending on scroll position
window.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
document.getElementById("back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function revealText(box) {
    const boxes = document.querySelectorAll('.feature-box');
    const isActive = box.classList.contains('active');
    boxes.forEach(b => {
        b.classList.remove('active');
    });
    if (!isActive) {
        box.classList.add('active');
    }
}



