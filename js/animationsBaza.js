// 1. Animacja dla pól tekstowych
// Szukamy inputów po ich typie (text, można tu też dopisać password czy email w razie rozbudowy)
const wszystkieInputy = document.querySelectorAll('input[type="text"], input[type="search"]');

wszystkieInputy.forEach((input) => {
  // Stan początkowy
  input.classList.add("unpressed");

  // Reakcja na kliknięcie w pole (focus)
  input.addEventListener("focus", () => {
    input.classList.add("pressed");
    input.classList.remove("unpressed");
  });

  // Reakcja na wyjście z pola (blur)
  input.addEventListener("blur", () => {
    input.classList.add("unpressed");
    input.classList.remove("pressed");
  });
});

// 2. Animacja dla wszystkich przycisków na stronie
// Łapiemy absolutnie każdy tag <button> z pliku HTML, niezależnie od tego, jakie ma klasy
const wszystkiePrzyciski = document.querySelectorAll("button");

wszystkiePrzyciski.forEach((przycisk) => {
  // Stan początkowy
  przycisk.classList.add("unpressed");

  // Reakcja na wjechanie kursorem (hover)
  przycisk.addEventListener("mouseenter", () => {
    przycisk.classList.add("pressed");
    przycisk.classList.remove("unpressed");
  });

  // Reakcja na zjechanie kursorem
  przycisk.addEventListener("mouseleave", () => {
    przycisk.classList.remove("pressed");
    przycisk.classList.add("unpressed");
  });
});
