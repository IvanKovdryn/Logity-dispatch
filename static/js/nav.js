const menu = document.querySelector(".menu-bg");
const nav = document.querySelector(".nav");
const footerDesc = document.querySelector(".footer-top");

if (menu) {
  menu.addEventListener("click", function (e) {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("lock");
  });
}
