const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

function updateScrolledHeader() {
  document.body.classList.toggle("has-scrolled", window.scrollY > 24);
}

updateScrolledHeader();
window.addEventListener("scroll", updateScrolledHeader);

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const consultForm = document.querySelector(".consult-form");

if (consultForm) {
  consultForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form connection coming soon. Connect this to Tally, Netlify Forms, or another intake tool.");
  });
}
