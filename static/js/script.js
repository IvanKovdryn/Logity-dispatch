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
const navPages = document.querySelectorAll(".nav-text");
const main = document.querySelector(".main");
const navSubcontentItem = document.querySelectorAll(".nav-subcontent-item");
const footerBottom = document.querySelector(".footer-bottom");
const massage = document.querySelector(".massage");
const phone = document.querySelector(".phone");

if (aboutPage || aboutNavigationPage) {
  navPages.forEach(function (item) {
    if (item.innerHTML === "About") {
      item.classList.add("active");
    }
  });
}
if (servicesPage || servicesNavigationPage) {
  navPages.forEach(function (item) {
    if (item.innerHTML === "Services") {
      item.classList.add("active");
    }
  });
}
if (trucksPage || trucksNavigationPage) {
  navPages.forEach(function (item) {
    if (item.innerHTML === "Truck types") {
      item.classList.add("active");
    }
  });
}
if (howToStartPage) {
  navPages.forEach(function (item) {
    if (item.innerHTML === "How to start") {
      item.classList.add("active");
    }
  });
}
if (shippersPage) {
  navPages.forEach(function (item) {
    if (item.innerHTML === "Shippers") {
      item.classList.add("active");
    }
  });
}
if (faqPage) {
  navPages.forEach(function (item) {
    if (item.innerHTML === "FAQ") {
      item.classList.add("active");
    }
  });
}

navSubcontentItem.forEach(function (item) {
  // ABOUT

  if (main.classList.contains("main-careers") && item.innerHTML === "Careers") {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-stories") &&
    item.innerHTML === "Success Stories"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-testimonials") &&
    item.innerHTML === "Testimonials"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-prog") &&
    item.innerHTML === "Referral Program"
  ) {
    item.classList.add("active");
  }
  if (main.classList.contains("main-blog") && item.innerHTML === "Blog") {
    item.classList.add("active");
  }
  if (main.classList.contains("main-video") && item.innerHTML === "Videos") {
    item.classList.add("active");
  }

  // SERVICES

  if (
    main.classList.contains("main-dispatching") &&
    item.innerHTML === "Truck Dispatching"
  ) {
    item.classList.add("active");
  }
  if (main.classList.contains("main-billing") && item.innerHTML === "Billing") {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-docManagement") &&
    item.innerHTML === "Document Management"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-facService") &&
    item.innerHTML === "Factoring Service"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-rateNegotiation") &&
    item.innerHTML === "Rate Negotiation"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-safety") &&
    item.innerHTML === "SAFETY / DOT compliance"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-ifta") &&
    item.innerHTML === "IFTA Reporting"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-formation") &&
    item.innerHTML === "Company Formation"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-accounting") &&
    item.innerHTML === "Truckers Accounting"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-invoice") &&
    item.innerHTML === "Trucking Invoice Service"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-truckDocManagement") &&
    item.innerHTML === "Truck Document Management"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-truckDocDispatchService") &&
    item.innerHTML === "Trucking Document Dispatch Service"
  ) {
    item.classList.add("active");
  }

  // TRUCKS

  if (main.classList.contains("main-dry-van") && item.innerHTML === "Dry Van") {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-step-deck") &&
    item.innerHTML === "Step Deck"
  ) {
    item.classList.add("active");
  }
  if (main.classList.contains("main-reefer") && item.innerHTML === "Reefer") {
    item.classList.add("active");
  }
  if (main.classList.contains("main-flatbed") && item.innerHTML === "Flatbed") {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-power-only") &&
    item.innerHTML === "Power Only"
  ) {
    item.classList.add("active");
  }
  if (main.classList.contains("main-hotshot") && item.innerHTML === "Hotshot") {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-box-truck") &&
    item.innerHTML === "Box Truck"
  ) {
    item.classList.add("active");
  }
  if (
    main.classList.contains("main-straight-truck") &&
    item.innerHTML === "Straight Truck"
  ) {
    item.classList.add("active");
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

footerBottom.addEventListener("mouseover", (event) => {
  massage.classList.add("up");
  phone.classList.add("up");
});
