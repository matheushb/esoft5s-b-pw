const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get('evolution');

document.title += ` ${pokemonName.toUpperCase()}`;

(async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  ).then(response => response.json());

  document.querySelector(
    '#informacoes'
  ).textContent = `Informacoes sobre o ${pokemonName}`;

  document.querySelector('#pokemon-img').src = response.sprites.front_default;
})();
