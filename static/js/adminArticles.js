document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-articles");
  let formReq = form.querySelectorAll(".req");
  formReq.forEach((item) => {
    if ((item.value = "")) {
    }
    item.addEventListener("click", () => {
      item.parentElement.classList.remove("error");
      item.classList.remove("error");
      item.classList.add("satisfactory");
    });
  });
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let formReq = form.querySelectorAll(".req");
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
    console.log(error);

    if (form && error === 0) {
      let response = await fetch("/article/save", {
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
      status.innerHTML = "Added";
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
      if (input.value === "") {
        formAddError(input);
        error++;
      } else if (input.value != text) {
        formAddError(input);
        error++;
      }
    }
    return error;
  }
  function formAddError(input) {
    input.classList.add("error");
  }
  function formRemoveError(input) {
    input.classList.remove("error");
  }
});
