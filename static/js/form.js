document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  let formReq = document.querySelectorAll("._req");
  formReq.forEach((item) => {
    item.addEventListener("click", () => {
      input.parentElement.classList.remove("_error");
      item.classList.remove("_error");
      item.classList.add("satisfactory");
    });
  });
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let formReq = document.querySelectorAll("._req");
    formReq.forEach((item) => {
      item.classList.remove("satisfactory");
    });
    let error = formValidate(form);
    let formData = new FormData(form);
    let object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    let jsonBody = JSON.stringify(object);

    console.log(jsonBody);

    if (error === 0) {
      let response = await fetch("/contact-us/save", {
        method: "POST",
        body: jsonBody,
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        console.log(error);
        alert("error");
      });
      const status = document.querySelector(".status-text");
      status.classList.remove("remove");
      status.innerHTML = "Thank you for your message. It has been sent";
      window.setTimeout(() => {
        status.classList.add("remove");
      }, 5000);
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        form.reset();
      } else {
        console.log("Помилка");
      }
    } else {
      console.log("Заповніть всі поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      let values = {
        name: input.value,
      };
      if (input.classList.contains("email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
