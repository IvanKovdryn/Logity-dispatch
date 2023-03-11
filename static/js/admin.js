const navContent = document.querySelector(".nav-content");
const sectionUsers = document.querySelector(".users");
const navText = document.querySelectorAll(".nav-text");
const menu = document.querySelector(".menu-bg");
const nav = document.querySelector(".nav");

sectionUsers.classList.add("active");
navText.forEach((item) => {
  if (item.innerText === "Users") {
    item.classList.add("active");
  }
});

navContent.addEventListener("click", (e) => {
  if (e.target.className === "nav-text") {
    navText.forEach((item) => {
      item.classList.remove("active");
    });
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
  }

  if (e.target.innerText === "Articles") {
    menu.classList.remove("active");
    nav.classList.remove("active");
    e.target.classList.add("active");
    const sectionArticles = document.querySelector(".articles");
    sectionArticles.classList.add("active");
  }
  if (e.target.innerText === "Users") {
    menu.classList.remove("active");
    nav.classList.remove("active");
    e.target.classList.add("active");
    sectionUsers.classList.add("active");
  }
  if (e.target.innerText === "Trucks") {
    menu.classList.remove("active");
    nav.classList.remove("active");
    e.target.classList.add("active");
    const sectionTrucks = document.querySelector(".trucks");
    sectionTrucks.classList.add("active");
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
