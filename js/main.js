const menu = document.querySelector(".header-nav");
const btnOpenMenu = document.querySelector(".btn-open");
const btnClosenMenu = document.querySelector(".btn-close-menu");

btnOpenMenu.addEventListener("click", function () {
  menu.classList.add("active");
});

btnClosenMenu.addEventListener("click", function () {
  menu.classList.remove("active");
});
