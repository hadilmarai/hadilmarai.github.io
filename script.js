// 1. Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Typing Effect for the Hero Section
const textElement = document.getElementById("typewriter");
const words = ["AI Specialist", "Data Scientist", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

// Start typing on load
document.addEventListener('DOMContentLoaded', type);

// 3. Hamburger Menu (Mobile)
// Optional: Add if you want mobile menu to toggle