const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('cities');
const text = document.querySelector('p');

const countries = {
  ger: ['Berlin', 'Hamburg', 'Dortmund', 'Augsburg', 'Stuttgart'],
  usa: ['New York', 'Chicago', 'Los Angeles', 'San Diego', 'Las Vegas'],
  ukr: ['Lviv', 'Kyiv', 'Odessa', 'Ternopil', 'Dnipro']
};

for (const country in countries) {
  const cities = countries[country]
  cities.sort();
}

function updateCityOptions() { // Function to update the city options based on the selected country
  const selectedCountry = countrySelect.value;
  const selectedCities = countries[selectedCountry];
  citySelect.innerHTML = ''; // Clear the city select options before updating
  selectedCities.forEach(city => { // Add options for each city
    const option = document.createElement('option');
    option.textContent = city;
    citySelect.appendChild(option);
  });
  updateSelectionText();
}

function updateSelectionText() { // Function to update the selection text for country and city
  const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
  const selectedCity = citySelect.value;
  const selectionText = `Selected Country: ${selectedCountry}, Selected City: ${selectedCity}`;
  text.textContent = selectionText;
}

countrySelect.addEventListener('change', updateCityOptions);
citySelect.addEventListener('change', updateSelectionText);
updateCityOptions();

