// Get all the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove 'active' class from all links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all links
        removeActiveClass();

        // Add 'active' class to the clicked link
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

// Scroll to the top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function revealText(box) {
    // Get all feature boxes
    const boxes = document.querySelectorAll('.feature-box');
    
    // Check if the clicked box is already active
    const isActive = box.classList.contains('active');

    // Remove 'active' class from all feature boxes
    boxes.forEach(b => {
        b.classList.remove('active'); // Collapse all boxes
    });

    // If the clicked box was not active, activate it
    if (!isActive) {
        box.classList.add('active'); // Expand the clicked box
    }
}



