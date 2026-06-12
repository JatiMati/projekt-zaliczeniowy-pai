// 1. Sprawdzenie, czy użytkownik jest zalogowany (opcjonalne, ale zalecane)
const zalogowany = localStorage.getItem("zalogowanyUzytkownik");
if (!zalogowany) {
  alert("Brak dostępu! Musisz się zalogować.");
  window.location.href = "index.html"; // Odsyła do strony logowania
}

// 2. Obsługa przycisku wylogowywania
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("zalogowanyUzytkownik");
  window.location.href = "index.html";
});

// 3. Pobieranie bazy danych i generowanie widoku
const container = document.getElementById("usersContainer");
const statusMessage = document.getElementById("statusMessage");
const urlBlob = "https://paijsonmagazyn.blob.core.windows.net/dane-api/users.json";

fetch(urlBlob)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Błąd podczas pobierania danych.");
    }
    return response.json();
  })
  .then((uzytkownicy) => {
    // Usuwamy komunikat "Pobieranie..."
    statusMessage.style.display = "none";

    // Przechodzimy przez każdego użytkownika w tablicy
    uzytkownicy.forEach((user) => {
      // Tworzymy główny div kafelka
      const card = document.createElement("div");
      card.className = "user-card";

      card.innerHTML = `
                        <p><strong>Imię:</strong> ${user.Imie}</p>
                        <p><strong>Nazwisko:</strong> ${user.Nazwisko}</p>
                        <p><strong>E-mail:</strong> ${user.mail}</p>
                        <p><strong>Data ur.:</strong> ${user.data_urodzenia}</p>
                        <p><strong>Płeć:</strong> ${user.Plec}</p>
                        <p><strong>Kraj:</strong> ${user.Kraj || "Brak danych"}</p>
                    `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Błąd połączenia:", error);
    statusMessage.textContent = "Nie udało się pobrać listy użytkowników.";
    statusMessage.style.color = "#df6e44";
  });
