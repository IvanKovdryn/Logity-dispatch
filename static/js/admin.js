const menu = document.querySelector(".menu-bg");
const nav = document.querySelector(".nav");

menu.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("lock");
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    menu.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("lock");
  }
});
