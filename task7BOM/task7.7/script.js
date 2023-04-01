// На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн,
//  у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого
//  випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни.
//  Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної
//   країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>

// <select name="cities" id="cities"></select>
// <p></p>

const citiesByCountry = {
  ger: ["Berlin", "Hamburg", "Schwerin", "Lindau"],
  usa: ["New York", "Washington", "Boston", "Chicago"],
  ukr: ["Kyiv", "Lviv", "Odessa", "Kharkiv"],
};

const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const resultParagraph = document.getElementById("result");

function updateCities() {
  const selectedCountry = countrySelect.value;
  const cities = citiesByCountry[selectedCountry] || [];

  citiesSelect.innerHTML = "";

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    citiesSelect.appendChild(option);
  }
  resultParagraph.innerHTML = ` ${
    countrySelect.options[countrySelect.selectedIndex].text
  }, ${citiesSelect.options[citiesSelect.selectedIndex].text}`;
}

countrySelect.addEventListener("change", updateCities);
citiesSelect.addEventListener("change", function () {
  resultParagraph.innerHTML = ` ${
    countrySelect.options[countrySelect.selectedIndex].text
  },
${citiesSelect.options[citiesSelect.selectedIndex].text}`;
});
updateCities();

