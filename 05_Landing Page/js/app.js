// /**
//  *
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  *
//  * Dependencies: None
//  *
//  * JS Version: ES2015/ES6
//  *
//  * JS Standard: ESlint
//  *
//  */

// /**
//  * Comments should be present at the beginning of each procedure and class.
//  * Great to have comments before crucial code sections within the procedure.
//  */

/**
 * Define Global Variables
 */
const navMenu = document.getElementById("navbar__list");
const allSections = document.querySelectorAll("section");

//Variable for hidding top navbar
let isScrolling;
const header = document.querySelector('.page__header');
let prevScrollPos = window.pageYOffset;

//Variable for Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

/**
 * End Global Variables
 * Start Helper Functions
 */

/**
 * End Helper Functions
 * Begin Main Functions
 */

// build the nav
function buildNavMenu() {
    // Loop through all sections
    allSections.forEach((section) => {
        // Create a new list item
        const listItem = document.createElement("li");

        // Create a new link
        const link = document.createElement("a");

        // Set the link text to the section's data-nav attribute
        link.textContent = section.getAttribute("data-nav");

        // Add the menu__link class to the link
        link.className = "menu__link";

        // Set the link's href to the section's id
        link.href = `#${section.id}`;

        // Add the link to the list item
        listItem.appendChild(link);

        // Add the list item to the navigation menu
        navMenu.appendChild(listItem);
    });
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of allSections) {
        const box = section.getBoundingClientRect();
        // You can adjust this value as needed
        const ACTIVATION_THRESHOLD = 150;
        
        if (box.top <= ACTIVATION_THRESHOLD && box.bottom >= ACTIVATION_THRESHOLD) {
            // Apply active state on current section and corresponding Nav link
            section.classList.add("your-active-class");
            setActiveNavItem(section);
        } else {
            // Remove active state from other sections and corresponding Nav links
            section.classList.remove("your-active-class");
        }
    }
}

// Function to set the active navigation item
function setActiveNavItem(activeSection) {
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${activeSection.id}`) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Check if the clicked element is a navigation link
    if (event.target.classList.contains("menu__link")) {
        // Get the target section's id from the link's href
        const targetId = event.target.getAttribute("href");

        // Find the target section in the document
        const targetSection = document.querySelector(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}

//Functions to hide and show the navbar
function hideNavBar() {
    header.classList.add('nav-hidden');
}

function showNavBar() {
    header.classList.remove('nav-hidden');
}

//Function that sets the scroll to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 */

// Build menu
document.addEventListener("DOMContentLoaded", buildNavMenu);

// Scroll to section on link click
navMenu.addEventListener("click", scrollToSection);

// Scroll event
// window.addEventListener('scroll', function() {
//     // window.pageYOffset gives the number of pixels the document has been scrolled vertically
//     // We're checking if the user has scrolled more than 300 pixels
//     if (window.pageYOffset > 300) {
//         // If scrolled more than 300px, make the button visible
//         scrollToTopBtn.style.display = "block";
//     } else {
//         // If scrolled less than 300px, hide the button
//         scrollToTopBtn.style.display = "none";
//     }
//     // Show the header
//     showNavBar();

//     // Clear our timeout throughout the scroll
//     clearTimeout(isScrolling);
    
//     // Set a timeout to run after scrolling ends
//     isScrolling = setTimeout(function() {
//         hideNavBar();
//     }, 1500);
    
//     makeActive();
// });

window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    
    // Show/hide based on scroll direction
    if (prevScrollPos > currentScrollPos) {
        // Scrolling UP
        header.classList.remove('nav-hidden');
    } else {
        // Scrolling DOWN
        header.classList.add('nav-hidden');
    }
    
    prevScrollPos = currentScrollPos;
    
    // Clear the timeout throughout the scroll
    clearTimeout(isScrolling);
    
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {
        // Show the header when scrolling stops
        header.classList.remove('nav-hidden');
    }, 2000);  // Adjust this value to change how long it takes for the navbar to reappear after scrolling stops
    
    makeActive();
});

//Event listener for scroll to top button
scrollToTopBtn.addEventListener("click", scrollToTop);