// Navbar
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// FAQ
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});