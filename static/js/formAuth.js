document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  let formReq = document.querySelectorAll("._req");
  formReq.forEach((item) => {
    item.addEventListener("change", () => {
      if (item.value.length < 3) {
        item.parentElement.classList.add("error");
        item.classList.add("error");
      } else {
        item.parentElement.classList.remove("error");
        item.classList.remove("error");
        item.classList.add("satisfactory");
      }
    });
    item.addEventListener("click", () => {
      item.classList.add("satisfactory");
    });
  });
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    let error = formValidate(form);

    let formData = new FormData(form);
    let object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    let jsonBodyStr = JSON.stringify(object);
    let jsonBody = JSON.parse(jsonBodyStr);
    document.cookie = `login=${jsonBody.login}`;
    document.cookie = `password=${jsonBody.password}`;

    if (error === 0) {
      form.reset();
    } else {
      e.preventDefault();
    }
  }

  function formValidate(form) {
    let error = 0;
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.value.length < 3) {
        formAddError(input);
        error++;
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
});
