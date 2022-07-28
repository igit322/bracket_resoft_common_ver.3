// 토글버튼

const toggle = document.querySelector(".toggle_wrap");
const menu = document.querySelector(".inner_wrap");

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});
