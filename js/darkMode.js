const themeToggle = document.getElementById("themeToggle");
const logo = document.getElementById("logo");
const backGround = document.body;

const zapisanyMotyw = localStorage.getItem("motyw");

if (zapisanyMotyw === "jasny") {
  backGround.classList.add("tlo-kolorowe");
  backGround.classList.remove("tlo-ciemne");

  if (themeToggle) {
    themeToggle.classList.add("fa-regular");
    themeToggle.classList.remove("fa-solid");
  }

  if (logo) {
    logo.classList.add("jasne");
    logo.classList.remove("ciemne");
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    themeToggle.classList.toggle("fa-solid");
    themeToggle.classList.toggle("fa-regular");

    if (logo) {
      logo.classList.toggle("jasne");
      logo.classList.toggle("ciemne");
    }

    backGround.classList.toggle("tlo-kolorowe");
    backGround.classList.toggle("tlo-ciemne");

    if (backGround.classList.contains("tlo-kolorowe")) {
      localStorage.setItem("motyw", "jasny");
    } else {
      localStorage.setItem("motyw", "ciemny");
    }
  });
}
