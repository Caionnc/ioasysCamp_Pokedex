import React from "react";
import "./styles.css";

import { bulbasaur } from "../../assets";

const PokemonChartCopy = () => {
  return (
    /*Pokemon Chart Copy is only for testing purposes*/

    <div className="pokemon-chart-container">
      <div className="pokemon-chart-id">
        <span>#001</span>
      </div>
      <div className="pokemon-chart-img ">
        {" "}
        <img src={bulbasaur}></img>
      </div>
      <div className="pokemon-chart-text">
        {" "}
        <span className="pokemon-chart-text">Bulbasaur</span>
      </div>
    </div>
  );
};

export default PokemonChartCopy;
