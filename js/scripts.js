let pokemonRepository = (function() {
  let modalContainer = document.querySelector('#modal-container'); //targets modal-container div in HMTL
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon
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
    button.addEventListener('click', (e) => {
      showDetails(pokemon);
    })
  }

  function showDetails (pokemon) {
    loadDetails(pokemon).then(function () {
      modalContainer.innerHTML = ''; // Clears all existing modal content
      let modal = document.createElement('div'); //Creating a div under new modal-container div
      modal.classList.add('modal'); //creating a class for modal div

      let closeButtonElement = document.createElement('button'); //Creating a close button for modal
      closeButtonElement.classList.add('modal-close'); //creating a class to the button
      closeButtonElement.innerText = 'Close'; //Deciding what will be displayed in the button
      closeButtonElement.addEventListener('click', hideModal); //Closes modal on clicking close button

      let titleElement = document.createElement('h1'); //Creating title element
      titleElement.innerText = pokemon.name;

      let contentElement = document.createElement('p'); //Adding height information
      contentElement.innerText = 'Height ' + pokemon.height;

      let imageElement = document.createElement('img'); //Adding image
      imageElement.src = pokemon.imageUrl;

    //Appending child elements to their parent container
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);
      modalContainer.classList.add('is-visible'); //Creating class for when modal container is visible
    });
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible'); //Function to close the modal by clicking on close button
  }

//This event listener hides modal when pressing esc key
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  })

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});












  //document.querySelector('#show-modal').addEventListener('click', () => {
    //showModal('title' 'text');
  //});
//});
