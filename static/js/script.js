const menu = document.querySelector(".menu-bg");
const nav = document.querySelector(".nav");
const navContent = document.querySelector(".nav-content");
const navLink = document.querySelectorAll(".nav-link");
const navSubcontent = document.querySelectorAll(".nav-subcontent-item");
navLink.forEach((link) => {
  if (
    navContent.id ===
    link.getAttribute("href").replace(/[^\w]/g, " ").trim().split(" ").join("-")
  ) {
    console.log(link);
    link.classList.add("active");
  }
});
navSubcontent.forEach((item) => {
  if (
    navContent.id ===
    item.getAttribute("href").replace(/[^\w]/g, " ").trim().split(" ").join("-")
  ) {
    console.log(item);
    item.classList.add("active");
    const closestLink = item.closest(".nav-item");
    console.log(closestLink);
    closestLink.classList.add("sub-active");
    console.log(closestLink);
  }
});

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
