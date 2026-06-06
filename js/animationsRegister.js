// 1. Pobieramy wszystkie pola tekstowe/wyboru za jednym zamachem
const wszystkieInputy = document.querySelectorAll(".orange");
const komunikatGlowny = document.getElementById("komunikatGlowny");

// 2. Pętla przechodząca przez każdy input i dodająca mu animacje
wszystkieInputy.forEach((input) => {
  // Stan początkowy
  input.classList.add("unpressed");

  // Reakcja na wejście w pole (focus)
  input.addEventListener("focus", () => {
    input.classList.add("pressed");
    input.classList.remove("unpressed");

    // Ukrywa główny komunikat błędu, jeśli istnieje
    if (komunikatGlowny) {
      komunikatGlowny.style.visibility = "hidden";
    }
  });

  // Reakcja na wyjście z pola (blur)
  input.addEventListener("blur", () => {
    input.classList.add("unpressed");
    input.classList.remove("pressed");
  });
});

// 3. Pobieramy przyciski z pliku register.html
// Uwaga: "Zarejestruj" ma klasę .btn-login, a "Wróć do logowania" ma .btn-register
const przyciskSubmit = document.querySelector(".btn-login");
const przyciskWroc = document.querySelector(".btn-register");

// 4. Funkcja pomocnicza dla przycisków (żeby nie pisać tego samego kodu dwa razy)
function dodajAnimacjeHover(przycisk) {
  if (!przycisk) return; // Zabezpieczenie, gdyby przycisku nie było w HTML

  przycisk.classList.add("unpressed");

  przycisk.addEventListener("mouseenter", () => {
    przycisk.classList.add("pressed");
    przycisk.classList.remove("unpressed");
  });

  przycisk.addEventListener("mouseleave", () => {
    przycisk.classList.remove("pressed");
    przycisk.classList.add("unpressed");
  });
}

// Podpinamy animacje pod oba guziki
dodajAnimacjeHover(przyciskSubmit);
dodajAnimacjeHover(przyciskWroc);

// 1. Pobieramy wszystkie pola typu radio
const radioInputs = document.querySelectorAll('input[type="radio"]');

radioInputs.forEach((radio) => {
  // Nadajemy stan początkowy
  radio.classList.add("unpressed");

  // Reakcja na zaznaczenie kółeczka (zdarzenie 'change')
  radio.addEventListener("change", (e) => {
    // KROK A: Najpierw czyścimy CAŁĄ GRUPĘ (np. grupę o nazwie "plec")
    const nazwaGrupy = e.target.name;
    document.querySelectorAll(`input[type="radio"][name="${nazwaGrupy}"]`).forEach((innyRadio) => {
      innyRadio.classList.remove("pressed");
      innyRadio.classList.remove("green"); // <--- NOWE: Zabieramy kolor odznaczonym elementom
      innyRadio.classList.add("unpressed");
    });

    // KROK B: Skoro cała grupa jest wyczyszczona, nadajemy 'pressed' i kolor klikniętemu
    if (e.target.checked) {
      e.target.classList.add("pressed");
      e.target.classList.add("green"); // <--- NOWE: Dodajemy Twój kolor
      e.target.classList.remove("unpressed");

      // Ukrywamy główny komunikat o błędzie (jeśli jest)
      if (typeof komunikatGlowny !== "undefined" && komunikatGlowny) {
        komunikatGlowny.style.visibility = "hidden";
      }
    }
  });

  // Reakcja na najechanie tabulatorem z klawiatury (dostępność)
  radio.addEventListener("focus", () => {
    radio.classList.add("pressed");
    radio.classList.add("green"); // <--- NOWE: Kolor podczas nawigacji klawiaturą
    radio.classList.remove("unpressed");
  });

  // Reakcja na zjechanie z kółka bez jego zaznaczania
  radio.addEventListener("blur", () => {
    if (!radio.checked) {
      radio.classList.add("unpressed");
      radio.classList.remove("pressed");
      radio.classList.remove("green"); // <--- NOWE: Zabieramy kolor, jeśli uciekliśmy z niezaznaczonego kółka
    }
  });
});
