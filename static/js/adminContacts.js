const contactForm = document.querySelector(".contacts-app-form");
let error = 0;

document.addEventListener("DOMContentLoaded", function () {
  let formReq = contactForm.querySelectorAll(".req");
  formReq.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.remove("error");
      item.classList.add("satisfactory");
    });
  });
  contactForm.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    error = formValidate(contactForm);
    let formData = new FormData(contactForm);
    let object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    let jsonBody = JSON.stringify(object);

    console.log(jsonBody);
    console.log(error);

    if (contactForm && error === 0) {
      contactForm.classList.remove("active");
      let formReq = contactForm.querySelectorAll(".req");
      formReq.forEach((item) => {
        item.classList.remove("satisfactory");
      });
      let response = await fetch("/contacts/edit", {
        method: "PUT",
        body: jsonBody,
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        console.log(error);
        alert("error");
      });
      const status = contactForm.querySelector(".status-text");
      status.classList.remove("remove");
      status.innerHTML = "Saved";
      window.setTimeout(() => {
        status.classList.add("remove");
      }, 5000);
      if (response.ok) {
        let result = await response.json();
        console.log(result);
      } else {
        console.log("Помилка");
      }
    } else {
      console.log("Заповніть всі поля");
    }
  }

  function formValidate(contactForm) {
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.value === "") {
        formAddError(input);
        error++;
        console.log(input);
      }
    }
    return error;
  }
  function formAddError(input) {
    input.classList.add("error");
    input.classList.remove("satisfactory");
  }
  function formRemoveError(input) {
    input.classList.remove("error");
  }
});

contactForm.addEventListener("click", (e) => {
  if (e.target.classList.contains("bttn-contacts-app-change")) {
    error = 0;
    contactForm.classList.add("active");
  }
  if (e.target.classList.contains("bttn-contacts-app-cancel")) {
    contactForm.classList.remove("active");
    const formReq = contactForm.querySelectorAll(".req");
    formReq.forEach((input) => {
      input.classList.remove("satisfactory");
    });
  }
});
