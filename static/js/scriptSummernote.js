$(document).ready(function () {
  $(".option-edit-wrapper").click(function () {
    const optionParent = this.closest(".option-wrapper");
    const textarea = optionParent.querySelectorAll(".textarea");
    textarea.forEach((area) => {
      area.classList.add("active");
    });
    $(".textarea.active").summernote({
      tabsize: 2,
      height: 200,
      toolbar: [
        ["style", ["style"]],
        ["font", ["bold", "underline", "clear"]],
        ["color", ["color"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["table", ["table"]],
        ["insert", ["link", "picture", "video"]],
        ["view", ["fullscreen", "codeview"]],
      ],
    });
  });
});
