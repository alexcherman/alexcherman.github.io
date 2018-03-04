// Sidebar mobile
(function() {
  document
    .querySelector(".aside-menu-btn")
    .addEventListener("click", function() {
      document.querySelector(".aside").classList.toggle("active");
      document
        .querySelector(".aside-menu-btn")
        .classList.toggle("aside-close-btn");
    });
})();

// Onscroll
function OnScrollMenu() {
  const content = document.querySelector(".page-content");
  const asideNav = document.querySelector(".aside__nav");
  var contentTop = content.offsetTop;
  var asideNavHeight = asideNav.offsetHeight;
  var subscribeTop = document.querySelector(".subscribe").offsetTop;
  
  console.log(contentTop);
  

  function stickyNavigation() {
    // Fixed menu
    if (window.scrollY >= (contentTop - 30) && (window.scrollY + asideNavHeight) <= subscribeTop) {
      asideNav.classList.add("fixed-nav");
    } else {
      asideNav.classList.remove("fixed-nav");
    }

  }
  window.addEventListener('scroll', stickyNavigation);

}
OnScrollMenu(); 