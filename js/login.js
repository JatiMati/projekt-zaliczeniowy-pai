// Łapiemy formularz po jego ID
const form = document.getElementById("loginForm");
const komunikat = document.getElementById("komunikat");

// Nasłuchujemy na moment wysłania formularza
form.addEventListener("submit", function (event) {
  // Zatrzymujemy domyślne przeładowanie strony
  event.preventDefault();

  // Pobieramy to, co wpisał użytkownik
  const wpisanyLogin = document.getElementById("login").value;
  const wpisaneHaslo = document.getElementById("haslo").value;

  // Pobieramy plik JSON z Azure Blob
  // Upewnij się, że podany URL wskazuje dokładnie na publicznie dostępny plik .json
  fetch("https://paijsonmagazyn.blob.core.windows.net/dane-api/users.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Nie udało się wczytać pliku JSON z serwera Azure.");
      }
      return response.json();
    })
    .then((uzytkownicy) => {
      // Szukamy po mailu (ponieważ wpisanyLogin przechowuje teraz mail) i haśle
      const znalezionyUser = uzytkownicy.find((user) => user.mail === wpisanyLogin && user.haslo === wpisaneHaslo);

      if (znalezionyUser) {
        // 1. Przygotowujemy obiekt z danymi, które chcemy zapamiętać (bez hasła dla bezpieczeństwa)
        const daneSesji = {
          imie: znalezionyUser.Imie,
          nazwisko: znalezionyUser.Nazwisko,
          mail: znalezionyUser.mail,
          plec: znalezionyUser.Plec,
        };

        localStorage.setItem("zalogowanyUzytkownik", JSON.stringify(daneSesji));

        // Przekierowanie na strony wyszukiwarki w bazie.
        window.location.href = "base.html";
      } else {
        komunikat.style.visibility = "visible";
        komunikat.textContent = "Błędny login lub hasło!";
      }
    })
    .catch((error) => {
      console.error("Błąd:", error);
      komunikat.textContent = "Wystąpił błąd podczas łączenia z bazą.";
    });
});
