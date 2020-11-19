let pokemonRepository = (function() {
  let pokemonList = [
  {
    name: 'Slowpoke',
    height: 1.2,
    types: ['Psychic', ' Water']
  },
  {
    name: 'Jigglypuff',
    height: 0.5,
    types: ['Fairy', ' Normal']
  },
  {
    name: 'Charizard',
    height: 1.7,
    types: ['Fire', ' Flying']
  },
  {
    name: 'Psyduck',
    height: 0.8,
    types: ['Water']
  },
  {
    name: 'Starmie',
    height: 1.1,
    types: ['Psychic', ' Water']
  },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({name: 'Pikachu', height: 0.4, types: ['Electric']});

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 1.3) {
    document.write (
      `Name: ${pokemon.name} (type: ${pokemon.types}), (height: ${pokemon.height}) - WOW! That's big! <br><br>`
    );
  } else {
      document.write (
        `Name: ${pokemon.name} (type: ${pokemon.types}), (height: ${pokemon.height}).<br><br>`
      );
    }
  });
