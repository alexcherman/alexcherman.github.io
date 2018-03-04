// Burger mobile menu
(function() {
  document.querySelectorAll(".mobile-menu-toggle").forEach(function(btn) {
    return btn.addEventListener("click", function() {
      document.querySelector(".nav").classList.toggle("active");
      document.querySelector(".open-btn").classList.toggle("is-visible");
    });
  });
})();


