document.addEventListener("DOMContentLoaded", function (event) {
  let button = document.querySelector("[data-click]");
  let alert = document.querySelector("[data-alert]");
  let close = document.querySelector("[data-alert-close]");
  button.onclick = () => {
    alert.style.display = "flex";
  };
  close.onclick = () => {
    alert.style.display = "none";
  };
});
