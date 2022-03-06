import React from "react";
import { useState } from "react";
import "./styles.css";

import api from "../../services/api";

const PokemonCard = () => {
  const [PokemonId, setPokemonId] = useState(0);
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");

  return (
    /*Pokemon Card Copy is only for testing purposes*/
    <div className="pokemon-card-container">
      <div className="pokemon-card-id">
        <span>{PokemonId}</span>
      </div>
      <div className="pokemon-card-img ">
        <img src={pokemonImage}></img>
      </div>
      <div className="pokemon-card-text">
        <span className="pokemon-card-text">{pokemonName}</span>
      </div>
    </div>
  );
};

export default PokemonCard;
