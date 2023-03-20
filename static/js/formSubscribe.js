document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-subscribe");
  let formReq = form.querySelector(".req-sub");
  formReq.addEventListener("click", () => {
    formReq.classList.remove("error");
    formReq.classList.add("satisfactory");
  });
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    formReq.classList.remove("satisfactory");
    let error = formValidate(form);
    const object = {
      email: formReq.value,
    };
    let jsonBody = JSON.stringify(object);

    console.log(error);

    if (error === 0) {
      console.log(jsonBody);
      let response = await fetch("/subscribe/save", {
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
      status.innerHTML =
        "Check out your inbox and confirm your email to complete the subscription process.";
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
    formRemoveError(formReq);
    if (formReq.classList.contains("email")) {
      if (emailTest(formReq)) {
        formAddError(formReq);
        error++;
      } else if (formReq.value === "") {
        formAddError(formReq);
        error++;
      }
    }
    return error;
  }
  function formAddError(formReq) {
    formReq.parentElement.classList.add("error");
    formReq.classList.add("error");
  }
  function formRemoveError(formReq) {
    formReq.parentElement.classList.remove("error");
    formReq.classList.remove("error");
  }
  function emailTest(formReq) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formReq.value);
  }
});
