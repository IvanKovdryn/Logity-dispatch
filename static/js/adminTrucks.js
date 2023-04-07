document.addEventListener("DOMContentLoaded", function () {
  const formTrucks = document.querySelectorAll(".form-wrapper-truck");
  const deleteBtn = document.querySelectorAll(".option-delete-wrapper");

  formTrucks.forEach((form) => {
    // when you click, change the input background

    form.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("req") ||
        e.target.classList.contains("note-editable")
      ) {
        e.target.closest(".form-input-wrapper").classList.remove("error");
        e.target.closest(".form-input-wrapper").classList.add("satisfactory");
      }
    });

    //

    // submit form

    form.addEventListener("submit", formSend);

    async function formSend(e) {
      e.preventDefault();

      let formReq = form.querySelectorAll(".req");
      formReq.forEach((item) => {
        item.classList.remove("satisfactory");
      });
      let error = formValidate(form);
      const formValue = form.querySelector(".form");
      let formData = new FormData(formValue);

      console.log("error: ", error);

      // send the added form

      if (form.classList.contains("add") && error === 0) {
        let response = await fetch("/truck/save", {
          method: "POST",
          body: formData,
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

          // reset form after submit

          formValue.reset();
          const editor = form.querySelectorAll(".note-editable");
          editor.forEach((item) => {
            item.innerHTML = "";
          });
          const textareaText = form.querySelectorAll(".textarea");
          textareaText.forEach((item) => {
            item.innerHTML = "";
          });
          const satisfactory = form.querySelectorAll(".satisfactory");
          satisfactory.forEach((item) => {
            item.classList.remove("satisfactory");
          });

          //
        } else {
          console.log("Помилка");
        }

        // send the edited form
      } else if (form.classList.contains("put") && error === 0) {
        let columnId = form.closest(".column").id;
        let response = await fetch(`/edit-truck/${columnId}`, {
          method: "PUT",
          body: formData,
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

          // reset form after edited

          const satisfactory = form.querySelectorAll(".satisfactory");
          satisfactory.forEach((item) => {
            item.classList.remove("satisfactory");
          });

          //
        } else {
          console.log("Помилка");
        }
      } else {
        console.log("Заповніть всі поля");
      }
    }

    //

    // validate form

    function formValidate(form) {
      let error = 0;

      const input = form.querySelectorAll(".input");
      input.forEach((item) => {
        const inputWrapper = item.closest(".form-input-wrapper");
        if (!item.value) {
          inputWrapper.classList.add("error");
          error++;
        }
      });

      const textareaNote = form.querySelectorAll(".note-editable");
      textareaNote.forEach((area) => {
        const inputWrapper = area.closest(".form-input-wrapper");
        if (!area.innerText) {
          inputWrapper.classList.add("error");
          error++;
        }
      });

      return error;
    }

    //
  });

  // delete truck

  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (item) => {
      const column = btn.closest(".column");
      column.classList.add("active");
      const popup = column.querySelector(".popup-wrapper");
      popup.addEventListener("click", (e) => {
        if (
          e.target.classList.contains("popup-wrapper") ||
          e.target.classList.contains("popup-cancel")
        ) {
          column.classList.remove("active");
        }
        if (e.target.classList.contains("popup-delete")) {
          column.classList.remove("active");
          let columnId = column.id;
          const response = fetch(`/delete-truck/${columnId}`, {
            method: "DELETE",
          })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
          column.remove();
        }
      });
    });
  });

  //
});
