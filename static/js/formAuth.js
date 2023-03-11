document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  let formReq = document.querySelectorAll("._req");
  formReq.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.classList.remove("_error");
      item.classList.remove("_error");
      item.classList.add("satisfactory");
    });
  });
  form.addEventListener("submit", formSend);

  async function formSend(e) {
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
    let jsonBodyStr = JSON.stringify(object);
    let jsonBody = JSON.parse(jsonBodyStr);
    document.cookie = `name=${jsonBody.name}`;
    document.cookie = `password=${jsonBody.password}`;

    if (error === 0) {
      form.reset();
    } else {
      console.log("Помилка");
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
});
