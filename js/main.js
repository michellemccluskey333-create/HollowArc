function updateScrolledHeader() {
  document.body.classList.toggle("has-scrolled", window.scrollY > 24);
}

updateScrolledHeader();
window.addEventListener("scroll", updateScrolledHeader);
