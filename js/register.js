const listaKrajow = [
  "Afganistan",
  "Albania",
  "Algieria",
  "Andora",
  "Angola",
  "Antigua i Barbuda",
  "Arabia Saudyjska",
  "Argentyna",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbejdżan",
  "Bahamy",
  "Bahrajn",
  "Bangladesz",
  "Barbados",
  "Belgia",
  "Belize",
  "Benin",
  "Bhutan",
  "Białoruś",
  "Boliwia",
  "Bośnia i Hercegowina",
  "Botswana",
  "Brazylia",
  "Brunei",
  "Bułgaria",
  "Burkina Faso",
  "Burundi",
  "Chile",
  "Chiny",
  "Chorwacja",
  "Cypr",
  "Czad",
  "Czarnogóra",
  "Czechy",
  "Dania",
  "Demokratyczna Republika Konga",
  "Dominika",
  "Dominikana",
  "Dżibuti",
  "Egipt",
  "Ekwador",
  "Erytrea",
  "Estonia",
  "Eswatini",
  "Etiopia",
  "Fidżi",
  "Filipiny",
  "Finlandia",
  "Francja",
  "Gabon",
  "Gambia",
  "Ghana",
  "Grecja",
  "Grenada",
  "Gruzja",
  "Gujana",
  "Gwatemala",
  "Gwinea",
  "Gwinea Bissau",
  "Gwinea Równikowa",
  "Haiti",
  "Hiszpania",
  "Holandia",
  "Honduras",
  "Indie",
  "Indonezja",
  "Irak",
  "Iran",
  "Irlandia",
  "Islandia",
  "Izrael",
  "Jamajka",
  "Japonia",
  "Jemen",
  "Jordania",
  "Kambodża",
  "Kamerun",
  "Kanada",
  "Katar",
  "Kazachstan",
  "Kenia",
  "Kirgistan",
  "Kiribati",
  "Kolumbia",
  "Komory",
  "Kongo",
  "Korea Południowa",
  "Korea Północna",
  "Kostaryka",
  "Kuba",
  "Kuwejt",
  "Laos",
  "Lesotho",
  "Liban",
  "Liberia",
  "Libia",
  "Liechtenstein",
  "Litwa",
  "Luksemburg",
  "Łotwa",
  "Macedonia Północna",
  "Madagaskar",
  "Malawi",
  "Malediwy",
  "Malezja",
  "Mali",
  "Malta",
  "Maroko",
  "Mauretania",
  "Mauritius",
  "Meksyk",
  "Mikronezja",
  "Mjanma",
  "Mołdawia",
  "Monako",
  "Mongolia",
  "Mozambik",
  "Namibia",
  "Nauru",
  "Nepal",
  "Niemcy",
  "Niger",
  "Nigeria",
  "Nikaragua",
  "Norwegia",
  "Nowa Zelandia",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua-Nowa Gwinea",
  "Paragwaj",
  "Peru",
  "Polska",
  "Południowa Afryka",
  "Portugalia",
  "Republika Środkowoafrykańska",
  "Republika Zielonego Przylądka",
  "Rosja",
  "Rumunia",
  "Rwanda",
  "Saint Kitts i Nevis",
  "Saint Lucia",
  "Saint Vincent i Grenadyny",
  "Salwador",
  "Samoa",
  "San Marino",
  "Senegal",
  "Serbia",
  "Seszele",
  "Sierra Leone",
  "Singapur",
  "Słowacja",
  "Słowenia",
  "Somalia",
  "Sri Lanka",
  "Stany Zjednoczone",
  "Sudan",
  "Sudan Południowy",
  "Surinam",
  "Syria",
  "Szwajcaria",
  "Szwecja",
  "Tadżykistan",
  "Tajlandia",
  "Tanzania",
  "Togo",
  "Tonga",
  "Trynidad i Tobago",
  "Tunezja",
  "Turcja",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraina",
  "Urugwaj",
  "Uzbekistan",
  "Vanuatu",
  "Watykan",
  "Wenezuela",
  "Węgry",
  "Wielka Brytania",
  "Wietnam",
  "Włochy",
  "Wybrzeże Kości Słoniowej",
  "Wyspy Marshalla",
  "Wyspy Salomona",
  "Wyspy Świętego Tomasza i Książęca",
  "Zambia",
  "Zimbabwe",
  "Zjednoczone Emiraty Arabskie",
];

const selectKraj = document.getElementById("kraj");
listaKrajow.forEach((kraj) => {
  const option = document.createElement("option");
  option.value = kraj;
  option.textContent = kraj;
  selectKraj.appendChild(option);
});

// 2. WALIDACJA I WYSYŁKA FORMULARZA
const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const imie = document.getElementById("imie").value.trim();
  const nazwisko = document.getElementById("nazwisko").value.trim();
  const mail = document.getElementById("mail").value.trim();
  const haslo = document.getElementById("haslo").value;
  const dataUrodzenia = document.getElementById("dataUrodzenia").value;
  const kraj = document.getElementById("kraj").value;
  const plec = document.querySelector('input[name="plec"]:checked').value;

  const errorHaslo = document.getElementById("errorHaslo");
  const errorMail = document.getElementById("errorMail");
  const komunikatGlowny = document.getElementById("komunikatGlowny");

  let isValid = true;

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!passwordRegex.test(haslo)) {
    errorHaslo.hidden = false;
    isValid = false;
  } else {
    errorHaslo.hidden = true;
  }

  if (!emailRegex.test(mail)) {
    errorMail.hidden = false;
    isValid = false;
  } else {
    errorMail.hidden = true;
  }

  if (isValid) {
    komunikatGlowny.style.color = "black";
    komunikatGlowny.textContent = "Wysyłanie danych na serwer...";

    const nowyUzytkownik = {
      Imie: imie,
      Nazwisko: nazwisko,
      haslo: haslo,
      data_urodzenia: dataUrodzenia,
      mail: mail,
      Plec: plec,
      Kraj: kraj,
    };

    const urlMojejFunkcji = "https://moje-api-zaliczenie-hjhmhfd8hjgfardz.polandcentral-01.azurewebsites.net/api/HttpTrigger1";

    try {
      const odpowiedz = await fetch(urlMojejFunkcji, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nowyUzytkownik),
      });

      if (odpowiedz.ok) {
        console.log("Dodano pomyślnie!");
        komunikatGlowny.style.color = "green";
        komunikatGlowny.textContent = "Konto zostało pomyślnie utworzone!";
        form.reset();
      } else {
        console.error("Błąd podczas dodawania. Status:", odpowiedz.status);
        komunikatGlowny.style.color = "red";
        komunikatGlowny.textContent = "Wystąpił błąd serwera podczas rejestracji.";
      }
    } catch (error) {
      console.error("Błąd połączenia: ", error);
      komunikatGlowny.style.color = "red";
      komunikatGlowny.textContent = "Błąd połączenia z bazą danych.";
    }
  } else {
    komunikatGlowny.style.color = "red";
    komunikatGlowny.textContent = "Popraw błędy w formularzu przed wysłaniem.";
  }
});
