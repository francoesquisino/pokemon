let imagePokemon = document.getElementById("imagePokemon");
let namePokemon = document.getElementById("namePokemon");
let abilityPokemon = document.getElementById("abilityPokemon");

export function showPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    .then((res) => res.json())
    .then((json) => viewListPokemon(json));
}

function viewListPokemon(pokemon) {
  let boards = document.getElementById("list-tab");
  boards.innerHTML = "";
  pokemon.results.forEach((poke) => {
    const $link = document.createElement("a");
    $link.classList =
      "list-group-item list-group-item-action m-1 border border-primary";
    $link.dataset.toggle = "list";
    $link.setAttribute("href", poke.url);
    $link.textContent = poke.name;
    $link.onclick = fetchPokemon;
    boards.appendChild($link);
  });
}

function fetchPokemon(e) {
  fetch(e.target.href)
    .then((res) => res.json())
    .then((json) => pokemonCards(json));
  return false;
}

function pokemonCards(pokemon) {
  abilityPokemon.innerHTML = "";
  if (pokemon.sprites.other.dream_world.front_default === null) {
    imagePokemon.src = pokemon.sprites.front_default;
  } else {
    imagePokemon.src = pokemon.sprites.other.dream_world.front_default;
  }
  namePokemon.innerHTML = `${pokemon.name}`;

  pokemon.abilities.forEach((element) => {
    let p = document.createElement("p");
    p.innerHTML = `${element.ability.name}`;
    abilityPokemon.appendChild(p);
  });
}
