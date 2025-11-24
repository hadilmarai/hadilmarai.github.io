// 1. Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Typing Effect (Restored)
const textElement = document.querySelector(".typing-text");
// These are the phrases that will cycle
const words = ["Generative AI Solutions.", "Data Solutions.", "AI Agents."];
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
        // Pause at the end of the word
        isDeleting = true;
        setTimeout(type, 2000); 
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        // Typing speed
        setTimeout(type, isDeleting ? 50 : 100);
    }
}
// Start typing when page loads
document.addEventListener('DOMContentLoaded', type);

// 3. Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 4. Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
