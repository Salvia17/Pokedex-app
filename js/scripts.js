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
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      return 0;
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokeList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    pokeList.appendChild(listItem);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

//test to try and add a Pokemon to the list, if it's an object. Function works
pokemonRepository.add({name: 'Pikachu', height: 0.4, types: ['Electric']});

//test to try and add a Pokemon to the list, if it's not an object.Function fails
pokemonRepository.add('name: Raichu, height: 0.8, types: [Electric]');

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});



  //if (pokemon.height > 1.3) {
  //  document.write (
  //    `Name: ${pokemon.name} (type: ${pokemon.types}), (height: ${pokemon.height}) - WOW! That's big! <br><br>`
  //  );
//  } else {
    //  document.write (
      //  `Name: ${pokemon.name} (type: ${pokemon.types}), (height: ${pokemon.height}).<br><br>`
    //  );
//    }
//  });
