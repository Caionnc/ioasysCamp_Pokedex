import { Strings } from "./strings";
import React, { useState, useEffect } from "react";
import { redIoasysLogo, redHeart, redBloom } from "../../assets";

import { ToggleSwitch, PokemonChart, PokemonCard } from "../../components";

import axios from "axios";
import {getAllPokemons, getAllPokemonsAndPopulate} from "../../services/api";

import "./styles.css";

function Home() {

  const [allPokemonsList, setAllPokemonsList] = useState([]);
  //const [loadMore, setLoadMore] = useState(""https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"");
  //const pokemons = getAllPokemons();

  useEffect(() => {
    // console.log(pokemons);
    // setPokemonArrayList(pokemons);
    // console.log(pokemonsArrayList);
    getAllPokemonsAndPopulate(setAllPokemonsList);
    console.log(allPokemonsList);
  }, []);

  return (
    <div className="container">
      <header className="home-header"></header>
      <div className="home-title-bar">
        <img className="home-title-bar-logo" src={redIoasysLogo}></img>
        <span className="home-title-bar-text">{Strings.HEADER_TITLE}</span>
        <ToggleSwitch label={"Theme Switcher"}></ToggleSwitch>
      </div>
      <div className="home-search-bar-container">
        <input className="home-search-bar" placeholder="Buscar"></input>
        <button
          className="home-search-bar-favourite-button"
          type="button"
          onClick={console.log("Teste")}
        >
          <img className="home-search-bar-favourite-icon" src={redHeart}></img>
          <span className="home-search-bar-favourite-text">
            {Strings.MY_FAVOURITES}
          </span>
        </button>
      </div>
      <div className="home-pokemons-container">
        <PokemonCard setPokemonId={""}></PokemonCard>
      </div>
    </div>
  );
}

export default Home;
