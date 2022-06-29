const cards = document.getElementById("cards");

const getPokemones = async (numeroPokemon) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`
    );
    const dato = response.data;

    cards.innerHTML += `<div class="card text-center mt-5 mb-4" style="width: 30rem;">
  <img src="${dato.sprites.other.dream_world.front_default}" class="card-img-top" alt="${dato.name}">
  <div class="card-body">
    <h3 class="card-text">${dato.name}</h3>
  </div>
</div>`;
  } catch (error) {
    console.log(error);
  }
};

const showPokemons = (async () => {
  for (let i = 1; i <= 10; i++) {
    getPokemones(i);
  }
})();

/*
const cards = document.getElementById("cards");


// Llamamos a la API de pokemon con Fetch
fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  .then((res) => res.json())
  .then((res) => {
    // Obtenemos y recorremos a los primeros 20 pokemones obtenidos
    for (let i of res.results) {
      // Realizamos otra solicitud Fetch con la URL especifica del pokemon actual recorrido, para obtener datos mas especficos como la imagen
      fetch(i.url)
        .then((x) => x.json())
        .then((x) => {
          // Vamos pintando o ingresando la imagen y nombre del pokemon actual que se esta evaluando
          cards.innerHTML += `<div class="card">
    <img src="${x.sprites.other.dream_world.front_default}" alt="">
     <p>${x.name}</p>
   </div>`;
        });
    }

  });
*/
