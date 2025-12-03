document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. HAMBURGER MENU LOGIC (Mobile Nav)
    // =========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle the menu on/off
            navLinks.classList.toggle('active');
            
            // Animate the hamburger icon (X shape)
            hamburger.classList.toggle('toggle');
        });
    }

    // Close the menu when a link (e.g., Home, About) is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });


    // =========================================
    // 2. FAQ AUTO-CLOSE LOGIC (Accordion)
    // =========================================
    const allDetails = document.querySelectorAll(".faq-item");

    allDetails.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            // Loop through all FAQ items
            allDetails.forEach((detail) => {
                // If this item is NOT the one currently clicked, close it.
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });

});
