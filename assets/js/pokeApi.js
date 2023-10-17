
const pokeApi = {}

pokeApi.getPokemonDetalhes = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => { 
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetalhes)) 
    .then ((detalhesRequisicao) => Promise.all(detalhesRequisicao))
    .then ((pokemonDetalhes) => pokemonDetalhes)
}
Promise.all([
fetch('https://pokeapi.co/api/v2/pokemon/1'),

fetch('https://pokeapi.co/api/v2/pokemon/2'),

fetch('https://pokeapi.co/api/v2/pokemon/3'),

fetch('https://pokeapi.co/api/v2/pokemon/4'),

fetch('https://pokeapi.co/api/v2/pokemon/5')
])
.then((results) => {
    console.log(results)
})