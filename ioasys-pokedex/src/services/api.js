import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export async function getAllPokemons() {
  const response = await api
    .get("/https://pokeapi.co/api/v2/pokemon?limit=151%27")
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ops! Ocorreu um erro" + err);
    });
}

export async function getPokemonId(id) {
  const response = await api
    .get("/id", { id })
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ops! Ocorreu um erro" + err);
    });
}

export async function getPokemonName(name) {
  const response = await api
    .get("/name", name)
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ops! Ocorreu um erro" + err);
    });
}

export async function getPokemonImage() {
  const response = await api
    .get("/sprites")
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ops! Ocorreu um erro" + err);
    });
}

export async function getPokemonType() {
  const response = await api
    .get("/type")
    .then((response) => response.data)
    .catch((err) => {
      console.error("Ops! Ocorreu um erro" + err);
    });
}
export default api;
