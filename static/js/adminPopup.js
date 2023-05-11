const deleteBtn = document.querySelectorAll(".option-delete-wrapper");
const editBtn = document.querySelectorAll(".option-edit-wrapper");
const option = document.querySelectorAll(".option-wrapper");
const addBtn = document.querySelectorAll(".add-bttn");
const cancelBtnForm = document.querySelector(".form-cancel");

// open form to add column

addBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.body.classList.add("lock");
    const section = e.target.closest(".section");
    section.classList.add("add");
    const form = section.querySelector(".form-add");
    form.classList.add("add");
    form.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("form-wrapper") ||
        e.target.classList.contains("form-cancel")
      ) {
        section.classList.remove("add");
        form.classList.remove("add");
        document.body.classList.remove("lock");
      }
    });
  });
});

//

// open/close option in column

option.forEach((item) => {
  item.addEventListener("click", (e) => {
    const col = e.target.closest(".column");
    if (e.target.classList.contains("option-icon-open-close")) {
      item.classList.toggle("active");
      col.classList.toggle("bg");
    }
    if (
      !e.target.classList.contains("option-content") &&
      !e.target.classList.contains("option-icon-open-close")
    ) {
      item.classList.remove("active");
      col.classList.remove("bg");
    }
  });
});

//

// edit column

editBtn.forEach((btn) => {
  btn.addEventListener("click", (item) => {
    document.body.classList.add("lock");
    const col = item.target.closest(".column");
    const form = col.querySelector(".form-put");
    form.classList.add("put");
    form.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("form-wrapper") ||
        e.target.classList.contains("form-cancel")
      ) {
        form.classList.remove("put");
        document.body.classList.remove("lock");
      }
    });
  });
});

//

// delete column

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
        if (e.target.classList.contains("popup-delete-sended")) {
          const id = column.id;
          const deleteUser = fetch(`/delete-user/${id}`, {
            method: "DELETE",
          })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        } else if (e.target.classList.contains("popup-delete-invited")) {
          const id = column.id;
          const deleteInvited = fetch(`/delete-invited/${id}`, {
            method: "DELETE",
          })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        } else if (e.target.classList.contains("popup-delete-subscribed")) {
          const id = column.id;
          const deleteSubscribed = fetch(`/delete-subscribed/${id}`, {
            method: "DELETE",
          })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
        column.remove();
      }
    });
  });
});

//
