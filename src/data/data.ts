import { PokemonsList } from '../types/types.js';

export const pokemonsList: PokemonsList[] = [];

export const getPokemonList = (offset: number) => {
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then((response) => response.json())
    .then((data) => {
      let dataResults: [] = data.results;
      let pokemonUrlList: string[] = [];
      for (let i = 0; i < dataResults.length; i++) {
        pokemonUrlList.push(data.results[i].url);
      }
      for (let url of pokemonUrlList) {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            pokemonsList.push(data);
            pokemonsList.sort((a, b) => a.id - b.id);
          })
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.error(err));
};
