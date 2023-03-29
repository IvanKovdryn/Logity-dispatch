const menu = document.querySelector(".menu-bg");
const nav = document.querySelector(".nav");
const footerDesc = document.querySelector(".footer-desc");
const aboutNavigationPage = document.getElementById("about-more");
const servicesNavigationPage = document.getElementById("services-more");
const trucksNavigationPage = document.getElementById("trucks-more");
const navigationItemActive = document.getElementById("navigation-item-active");
const aboutPage = document.getElementById("about");
const servicesPage = document.getElementById("services");
const trucksPage = document.getElementById("trucks");
const howToStartPage = document.getElementById("how-to-start");
const shippersPage = document.getElementById("shippers");
const faqPage = document.getElementById("faq");
const contactPage = document.getElementById("contact-us");
const navPages = document.querySelectorAll(".nav-text");
const main = document.querySelector(".main");
const navSubcontentItem = document.querySelectorAll(".nav-subcontent-item");
const footerBottom = document.querySelector(".footer-bottom");
const massage = document.querySelector(".massage");
const phone = document.querySelector(".phone");

if (menu) {
  menu.addEventListener("click", function (e) {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("lock");
  });
}
window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    menu.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("lock");
  }
});
