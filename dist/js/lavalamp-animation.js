document.addEventListener("DOMContentLoaded", function() {
  function lavalampBar() {
    var activeItem = document.querySelector(".tab__list-item.resp-tab-active");
    var lavalampElm = document.querySelector(".lavalamp");

    var positionLavalamp = function(activeElm) {
      lavalampElm.style.width = activeElm.offsetWidth + "px";
      lavalampElm.style.left = activeElm.offsetLeft + "px";
    };
    positionLavalamp(activeItem);

    window.addEventListener("resize", function() {
      positionLavalamp(activeItem);
    });
  }
  lavalampBar();

  document.querySelectorAll(".tab__list-item").forEach(function(tab) {
    return tab.addEventListener("click", lavalampBar);
  });
});
