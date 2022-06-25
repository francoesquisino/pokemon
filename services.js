export function showPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    .then((res) => res.json())
    .then((json) => viewListPokemon(json));
}

function viewListPokemon(pokemon) {
  let boards = document.getElementById("div2");
  boards.innerHTML = "";
  pokemon.results.forEach((poke) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${poke.name}</h5>
      <button onclick="${fetchPokemon}">Click me</button> 
    </div>
  </div> `;
    boards.appendChild(div);
  });
}

function fetchPokemon(event) {
  alert("hola");
}

function listPokemon() {}
