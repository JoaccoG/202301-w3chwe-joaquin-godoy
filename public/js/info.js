import Header from './components/Header/Header.js';
import Title from './components/Title/Title.js';
import Info from './components/Info/Info.js';
import { getPokemonById, pokemonData } from './data/data.js';
let clickedPokemon = Number(localStorage.getItem('selectedPokemon'));
getPokemonById(clickedPokemon).then(() => {
    loadInfo();
});
let main = document.createElement('main');
main.className = 'container';
const loadInfo = () => {
    new Header(document.body, ['./index.html', './favorites.html'], ['Home', 'Favorites']).render();
    new Title(main, './assets/pokemon-logo.svg', 'logo').render();
    new Info(main, pokemonData).render();
    document.body.appendChild(main);
};
