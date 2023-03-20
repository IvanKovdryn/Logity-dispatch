document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".form");
  forms.forEach(async function (form) {
    let formReq = form.querySelectorAll(".req");
    console.log(formReq);
    formReq.forEach((item) => {
      item.addEventListener("click", () => {
        item.parentElement.classList.remove("error");
        item.classList.remove("error");
        item.classList.add("satisfactory");
      });
    });
    form.addEventListener("submit", formSend);

    async function formSend(e) {
      e.preventDefault();
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
        let response = await fetch("/invites/save", {
          method: "POST",
          body: jsonBody,
          headers: {
            "Content-Type": "application/json",
          },
        }).catch((error) => {
          console.log(error);
          alert("error");
        });
        const status = form.querySelector(".status-text");
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
      input.parentElement.classList.add("error");
      input.classList.add("error");
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove("error");
      input.classList.remove("error");
    }
    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  });
});
