document.addEventListener("DOMContentLoaded", function () {
  const formTrucks = document.querySelectorAll(".form-wrapper");
  formTrucks.forEach((form) => {
    let formReq = form.querySelectorAll(".req");
    formReq.forEach((item) => {
      item.addEventListener("click", () => {
        item.parentElement.classList.remove("error");
        item.classList.remove("error");
        item.classList.add("satisfactory");
        console.log(item);
      });
    });
    form.addEventListener("submit", formSend);

    async function formSend(e) {
      e.preventDefault();

      let textareaDescription = form.querySelector("#textarea-description");
      let textareaText = form.querySelector("#textarea-text");
      let textareaContent = form.querySelector("#textarea-content");

      if (
        !textareaDescription.value &&
        !textareaText.value &&
        !textareaContent.value
      ) {
        let areaDescription = tinymce.get("textarea-description").getContent();
        textareaDescription.value = areaDescription;
        let areaText = tinymce.get("textarea-text").getContent();
        textareaText.value = areaText;
        let areaContent = tinymce.get("textarea-content").getContent();
        textareaContent.value = areaContent;
      }

      let formReq = form.querySelectorAll(".req");
      formReq.forEach((item) => {
        item.classList.remove("satisfactory");
      });
      let error = formValidate(form);
      const formValue = form.querySelector(".form");
      let formData = new FormData(formValue);
      let object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      let jsonBody = JSON.stringify(object);

      const truckId = form.querySelector(".input-id").value;

      console.log(error);

      if (form.classList.contains("add") && error === 0) {
        console.log(jsonBody);
        let response = await fetch("/truck/save", {
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
          formValue.reset();
        } else {
          console.log("Помилка");
        }
      } else if (form.classList.contains("put") && error === 0) {
        console.log(jsonBody);
        let response = await fetch(`/edit-truck/${truckId}`, {
          method: "PUT",
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

    function formValidate(form) {
      let error = 0;
      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);
        if (
          (input.classList.contains("textarea") && input.innerText === "") ||
          input.value === ""
        ) {
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
});
