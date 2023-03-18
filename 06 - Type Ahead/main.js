const cities = [];

fetch("./assets/cities.json")
  .then((response) => response.json())
  .then((data) => {
    cities.push(...data);
    console.log(cities);
  })
  .catch((error) => {
    console.error(error);
  });

const search = document.querySelector("#search");
const suggestions = document.querySelector("#suggestions");

search.addEventListener("keyup", matchCities);

function matchCities() {
  const filteredCities = findCities(this.value);

  const filteredCitiesHTML = filteredCities
    .map((place) => {
      const matchCity = getHighlightedEle(place.city, this.value);
      const matchState = getHighlightedEle(place.state, this.value);
      return `<li>
    <span>${matchCity}, ${matchState}</span>
    <span>${place.population}</span>
    </li>`;
    })
    .join("");

  suggestions.innerHTML = filteredCitiesHTML || "No matching cities found";
}

function getHighlightedEle(placeStr, searchValue) {
  const findPattern = new RegExp(searchValue, "gi");
  return placeStr.replace(
    findPattern,
    `<span class="highlight">${searchValue}</span>`
  );
}

function findCities(find) {
  const findPattern = new RegExp(find, "gi");
  return cities.filter((place) => {
    return place.city.match(findPattern) || place.state.match(findPattern);
  });
}
