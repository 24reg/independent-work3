/* **********Выпадающее меню********** */

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

/* Закрытие окна при нажатии вне поля меню */

window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-button")) {
    dropdownMenu.classList.remove("show");
  }
});