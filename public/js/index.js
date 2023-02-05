import App from './components/App/App.js';
import { getPokemonList, pokemonsList } from './data/data.js';
getPokemonList(0);
setTimeout(() => {
    console.log(pokemonsList);
}, 500);
const generateApp = new App(document.body);
generateApp.render();
