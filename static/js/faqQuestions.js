import * as script from "/js/script.js";

const faqLis = document.querySelectorAll(".faq-li");

if (faqLis) {
  faqLis.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.toggle("active");
    });
  });
}
