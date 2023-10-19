

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonLista = document.getElementById('pokemonLista')
const botaoVerMais = document.getElementById('vermais')
const limit = 5;
let offset = 0;




function carregarPokemons(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const novoHtml = pokemons.map((pokemon) => {
            return `
              <li class="pokemon ${pokemon.type}" >
                <span class="numero">${pokemon.numero}</span>
                <span class="nome">${pokemon.nome}</span>
                <div class="detalhes">
                  <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  </ol>
                  <img src="${pokemon.foto}" alt="${pokemon.name}">
                </div>
              </li>
            `;
          }).join('');
          
            pokemonLista.innerHTML += novoHtml
})}


carregarPokemons(offset,limit)

botaoVerMais.addEventListener('click', () => {
    offset += limit
    carregarPokemons(offset,limit)
})

        



        //const listaItens = []

    //for (let i = 0; i < pokemons.length; i++) {
      //  const pokemon = pokemons[i];
        //listaItens.push(converterPokemonEmLiHtml(pokemon))
       //}
    //pokemonLista.innerHTML += converterPokemonEmLiHtml(pokemon); // innerHTML é o html que ta dentro do elemento da lista.

//    console.log(listaItens);


