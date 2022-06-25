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
    $link.classList = "list-group-item list-group-item-action";
    $link.dataset.toggle = "list";
    $link.setAttribute("href", poke.url);
    $link.textContent = poke.name;
    $link.onclick = fetchPokemon;
    boards.appendChild($link);
  });
}

function fetchPokemon(e) {
  listPokemon(e.target.href);
  return false;
}

function listPokemon(e) {
  alert(e);
}
