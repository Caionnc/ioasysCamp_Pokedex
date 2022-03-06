import { Strings } from "./strings";
import React, { useState, useEffect } from "react";
import { redIoasysLogo, redHeart, redBloom } from "../../assets";

import { ToggleSwitch, PokemonChart, PokemonCard } from "../../components";

import axios from "axios";
import AllPokemons from "../../services/api";

import "./styles.css";

function Home() {
  // function fetchPokemons() {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27")
  //     .then((response) => response.json())
  //     .then((allpokemon) => console.log(allpokemon));
  // }

  const [pokemonsArrayList, setPokemonArrayList] = useState([]);
  const pokemonsList = AllPokemons();

  useEffect(() => {
    setPokemonArrayList(AllPokemons());
    console.log(pokemonsArrayList);
    console.log(pokemonsList);
  }, [setPokemonArrayList]);

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
          onClick={console.log("Hello" + "${pokemonsArrayList[0]}")}
        >
          <img className="home-search-bar-favourite-icon" src={redHeart}></img>
          <span className="home-search-bar-favourite-text">
            {Strings.MY_FAVOURITES}
          </span>
        </button>
      </div>
      <div className="home-pokemons-container">
        <PokemonCard></PokemonCard>
      </div>
    </div>
  );
}

export default Home;
