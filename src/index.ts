import { getPokemonList, pokemonsList } from './data/data.js';

getPokemonList(0);
setTimeout(() => {
  console.log(pokemonsList);
}, 500);
