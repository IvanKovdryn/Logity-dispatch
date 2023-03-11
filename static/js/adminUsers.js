const userDelete = document.querySelectorAll(".user-delete");
const userContent = document.querySelectorAll(".user-content");

userContent.forEach(function (item) {
  item.addEventListener("click", (e) => {
    if (e.target.className === "user-delete") {
      const email = item.querySelector(".user-email").innerText;
      const response = fetch(`/delete-user/${email}`, {
        method: "DELETE",
      })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      item.remove();
    }
  });
});
