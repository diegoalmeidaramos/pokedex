
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function converterTiposDePokemonEmLi (pokemonTipo)  {
    return pokemonTipo.map((typeSlot) => ` <li class="tipo">${typeSlot.type.name}</li>`)
}

function converterPokemonEmLiHtml (pokemon){
    return `
    <li class="pokemon">
    <span class="numero">${pokemon.order}</span>
    <span class="nome">${pokemon.name}</span>
    <div class="detalhes">
        <ol class="tipos">
            ${converterTiposDePokemonEmLi(pokemon.types).join('')}
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}">
    </div>
</li>

    `
}

const pokemonLista = document.getElementById('pokemonLista')



pokeApi.getPokemons().then((pokemons = []) => {
        pokemonLista.innerHTML += pokemons.map(converterPokemonEmLiHtml).join('')



        //const listaItens = []

    //for (let i = 0; i < pokemons.length; i++) {
      //  const pokemon = pokemons[i];
        //listaItens.push(converterPokemonEmLiHtml(pokemon))
       //}
    //pokemonLista.innerHTML += converterPokemonEmLiHtml(pokemon); // innerHTML é o html que ta dentro do elemento da lista.

//    console.log(listaItens);

})
.catch((error) => console.error(error)) //(catch) caso der erro 
 

