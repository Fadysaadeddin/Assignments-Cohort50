/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function fetchAndPopulatePokemons(selectElement) {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  try {
    const data = await fetchData(url);

    selectElement.innerHTML = '';

    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error populating Pokémon select:', error);
  }
}

async function fetchImage(pokemonUrl, imgElement) {
  try {
    const pokemonData = await fetchData(pokemonUrl);

    imgElement.src =
      pokemonData.sprites.other['official-artwork'].front_default;
    imgElement.alt = pokemonData.name;
  } catch (error) {
    console.error('Error fetching Pokémon image:', error);
  }
}

async function main() {
  const select = document.createElement('select');
  select.id = 'pokemon-select';
  document.body.appendChild(select);

  const img = document.createElement('img');
  img.id = 'pokemon-image';
  document.body.appendChild(img);

  await fetchAndPopulatePokemons(select);

  select.addEventListener('change', async () => {
    const selectedUrl = select.value;
    if (selectedUrl) {
      await fetchImage(selectedUrl, img);
    }
  });
}

window.addEventListener('load', main);
