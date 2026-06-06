const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("haslo");
const komunikatHide = document.getElementById("komunikat");

loginInput.classList.add("unpressed");
passwordInput.classList.add("unpressed");

loginInput.addEventListener("focus", function () {
  loginInput.classList.add("pressed");
  komunikatHide.style.visibility = "hidden";
  //   loginInput.classList.add("white");
  loginInput.classList.remove("unpressed");
});
loginInput.addEventListener("blur", function () {
  loginInput.classList.add("unpressed");
  loginInput.classList.remove("pressed");
  //   loginInput.classList.remove("white");
});
passwordInput.addEventListener("focus", function () {
  passwordInput.classList.add("pressed");
  komunikatHide.style.visibility = "hidden";
  //   passwordInput.classList.add("white");
  passwordInput.classList.remove("unpressed");
});
passwordInput.addEventListener("blur", function () {
  passwordInput.classList.add("unpressed");
  passwordInput.classList.remove("pressed");
  //   passwordInput.classList.remove("white");
});

const przyciskRegister = document.querySelector(".btn-register");
const labelLogin = document.querySelector(".label-login");
const labelPassword = document.querySelector(".label-password");

const przyciskLogin = document.querySelector(".btn-login");

przyciskLogin.classList.add("unpressed");
przyciskRegister.classList.add("unpressed");

// 1. Reakcja na wjechanie kursorem
przyciskRegister.addEventListener("mouseenter", () => {
  przyciskRegister.classList.add("pressed");
  przyciskRegister.classList.remove("unpressed");
});

// 2. Reakcja na zjechanie kursorem
przyciskRegister.addEventListener("mouseleave", () => {
  przyciskRegister.classList.remove("pressed");
  przyciskRegister.classList.add("unpressed");
});

przyciskLogin.addEventListener("mouseenter", () => {
  przyciskLogin.classList.add("pressed");
  przyciskLogin.classList.remove("unpressed");
});

// 2. Reakcja na zjechanie kursorem
przyciskLogin.addEventListener("mouseleave", () => {
  przyciskLogin.classList.remove("pressed");
  przyciskLogin.classList.add("unpressed");
});
