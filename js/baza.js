// 1. Pobieramy elementy z HTML
const usersContainer = document.getElementById("usersContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Zmienna globalna dla pobranych userów
let usersData = [];

// 2. Funkcja pobierająca dane z Azure (Fetch API)
async function fetchUsers() {
  try {
    // Podmieniony URL na Twój publiczny zasób z Azure Blob Storage
    const response = await fetch("https://paijsonmagazyn.blob.core.windows.net/dane-api/users.json");

    if (!response.ok) {
      throw new Error("Nie udało się pobrać pliku JSON z serwera Azure.");
    }

    usersData = await response.json();

    // Po udanym pobraniu, rysujemy wszystkie okienka
    renderUsers(usersData);
  } catch (error) {
    usersContainer.innerHTML = `<p style="color: red; text-align: center;">Błąd: ${error.message}</p>`;
  }
}

// 3. Funkcja rysująca okienka w HTML
function renderUsers(uzytkownicyDoWyswietlenia) {
  // Czyścimy kontener ze starych wyników
  usersContainer.innerHTML = "";

  // Jeśli wyszukiwarka nic nie znalazła
  if (uzytkownicyDoWyswietlenia.length === 0) {
    usersContainer.innerHTML = "<p style='text-align: center; color: var(--tlo); margin-top:'>Brak użytkowników spełniających kryteria.</p>";
    return;
  }

  // Tworzymy karty dla każdego użytkownika
  uzytkownicyDoWyswietlenia.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card unpressed";

    // ZABEZPIECZENIE: Sprawdzamy pisownię wielką i małą literą (Imie vs imie),
    // żeby kod nie wybuchł, jeśli JSON na Azure będzie miał różne wielkości liter
    const imie = user.Imie || user.imie || "Brak danych";
    const nazwisko = user.Nazwisko || user.nazwisko || "";
    const mail = user.mail || "Brak danych";
    const kraj = user.Kraj || user.kraj || "Brak danych";
    const dataUr = user.DataUrodzenia || user.dataUrodzenia || "Brak danych";
    const plec = user.Plec || user.plec || "Brak danych";

    // Wstawiamy dane (oczywiście bez hasła!)
    card.innerHTML = `
      <h3>${imie} ${nazwisko}</h3>
      <p><strong>E-mail:</strong> ${mail}</p>
      <p><strong>Kraj:</strong> ${kraj}</p>
      <p><strong>Data ur.:</strong> ${dataUr}</p>
      <p><strong>Płeć:</strong> ${plec}</p>
    `;

    usersContainer.appendChild(card);
  });
}

// 4. Funkcja obsługująca filtrowanie
function filterUsers() {
  const wpisanyTekst = searchInput.value.toLowerCase();

  const przefiltrowani = usersData.filter((user) => {
    // Bezpieczne pobieranie wartości z JSON-a z ujednoliceniem do małych liter.
    // Używamy (zmienna || "").toLowerCase(), żeby uniknąć błędu, gdy pole nie istnieje (jest undefined)
    const imie = (user.Imie || user.imie || "").toLowerCase();
    const nazwisko = (user.Nazwisko || user.nazwisko || "").toLowerCase();
    const mail = (user.mail || "").toLowerCase();

    // Szukamy dopasowania w imieniu, nazwisku LUB mailu
    return imie.includes(wpisanyTekst) || nazwisko.includes(wpisanyTekst) || mail.includes(wpisanyTekst);
  });

  // Rysujemy na nowo przefiltrowaną listę
  renderUsers(przefiltrowani);
}

// 5. Nasłuchiwacze zdarzeń
searchBtn.addEventListener("click", filterUsers);
searchInput.addEventListener("keyup", filterUsers); // Wyszukiwanie na żywo

// 6. Uruchomienie pobierania przy starcie strony
fetchUsers();
