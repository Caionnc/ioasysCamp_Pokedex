import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getAllPokemons() {
  const response = await api
    .get("/https://pokeapi.co/api/v2/pokemon?limit=151%27")
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ops! Ocorreu um erro" + err);
    });
}

export async function getAllPokemonsAndPopulate(pokemonList) {
  const res = await api.get("/?limit=20");
  const data = res;

  const response = await api
    .get("/")
    .then((response) => {
      //response.data;
      function createPokemonObject(results) {
        results.forEach(async (pokemon) => {
          const res = await api.get("/${pokemon.name}");
          await console.log(pokemon);
        });
      }
      pokemonList((currentList) => [...currentList, data]);
      createPokemonObject(data.results);
    })
    .catch((err) => {
      console.error("Ops! Ocorreu um erro" + err);
    });
}

export default api;
