import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export async function getPokemon(){
    const response = await api.get('10')
    .then((response) => doSomething(response.data))
    .catch((err) => {console.error("Ops! Ocorreu um erro" + err)})
}

export default api;
