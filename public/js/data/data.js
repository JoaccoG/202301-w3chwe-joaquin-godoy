export const pokemonsList = [];
export const getPokemonList = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=27`)
        .then((response) => response.json())
        .then((data) => {
        let dataResults = data.results;
        let pokemonUrlList = [];
        console.log(dataResults);
        for (let i = 0; i < dataResults.length; i++) {
            pokemonUrlList.push(data.results[i].url);
        }
        for (let i = 0; i < pokemonUrlList.length; i++) {
            fetch(pokemonUrlList[i])
                .then((response) => response.json())
                .then((data) => {
                pokemonsList.push(data);
            })
                .catch((err) => console.error(err));
        }
        pokemonsList.sort((a, b) => {
            return a.id > b.id ? 1 : -1;
        });
    })
        .catch((err) => console.error(err));
};
