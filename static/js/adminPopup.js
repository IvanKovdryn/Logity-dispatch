const deleteBtn = document.querySelectorAll(".option-delete-wrapper");
const editBtn = document.querySelectorAll(".option-edit-wrapper");
const option = document.querySelectorAll(".option-wrapper");
const addBtn = document.querySelector(".add-bttn");
const cancelBtnForm = document.querySelector(".form-cancel");

// open form to add column

addBtn.addEventListener("click", (e) => {
  document.body.classList.add("lock");
  const section = e.target.closest(".trucks");
  section.classList.add("add");
  const form = section.querySelector("#form-trucks");
  form.classList.add("add");
  form.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("form-wrapper") ||
      e.target.classList.contains("form-cancel")
    ) {
      form.classList.remove("add");
      document.body.classList.remove("lock");
    }
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
    const form = col.querySelector("#form-truck-put");
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
        const navItemActive = document.querySelector(".nav-text.active");
        if (navItemActive.innerText === "Users") {
          console.log(column);
          if (e.target.classList.contains("popup-delete-sended")) {
            const email = column.querySelector(".user-email").innerText;
            const deleteUser = fetch(`/delete-user/${email}`, {
              method: "DELETE",
            })
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          } else if (e.target.classList.contains("popup-delete-invited")) {
            const email = column.querySelector(".user-email").innerText;
            const deleteInvited = fetch(`/delete-invited/${email}`, {
              method: "DELETE",
            })
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          } else if (e.target.classList.contains("popup-delete-subscribed")) {
            const email = column.querySelector(".user-email").innerText;
            const deleteSubscribed = fetch(`/delete-subscribed/${email}`, {
              method: "DELETE",
            })
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }
        }
        if (navItemActive.innerText === "Trucks") {
          const nameTruck = column.querySelector(".name-truck").innerText;
          console.log(nameTruck);
          const response = fetch(`/delete-truck/${nameTruck}`, {
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
