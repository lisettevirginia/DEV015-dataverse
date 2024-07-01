import { renderItems } from './view.js';
import data from './data/dataset.js';

// Obtener el contenedor donde se mostrarán los elementos
const itemsContainer = document.getElementById('root');

// Llamar a renderItems y agregar el resultado al contenedor
const renderedItems = renderItems(data);
itemsContainer.appendChild(renderedItems);

import { filterData, sortData, computeStats } from './dataFunctions.js';

const characters = [
    
  { name: 'Daphne Bridgerton', family: 'bridgerton' },
  { name: 'Simon Basset', family: 'basset' },
  { name: 'Penelope Featherington', family: 'featherington' },
  { name: 'Violet Bridgerton', family: 'bridgerton' },
  { name: 'Lady Danbury', family: 'danbury' },
  { name: 'Queen Charlotte', family: 'real' },
  { name: 'Will Mondrich', family: 'mondrich' },
  { name: 'Marina Thompson', family: 'featherington' },
  { name: 'Colin Bridgerton', family: 'bridgerton' },
  { name: 'Lord Crane', family: 'crane' },
  { name: 'Cressida Cowper', family: 'cowper' },
  { name: 'Henry Granville', family: 'granville' },
  { name: 'Lady Whistledown', family: 'notiene' }
];

const familyFilter = document.getElementById('family-filter');
const characterList = document.getElementById('character-list');

function updateCharacterList(filteredCharacters) {
  characterList.innerHTML = '';

  filteredCharacters.forEach(character => {
    const li = document.createElement('li');
    li.textContent = character.name;

    characterList.appendChild(li);
    
  });

  if (filteredCharacters.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No characters found';
    characterList.appendChild(li);
  
  }
}

function handleFilterChange() {
  const selectedFamily = familyFilter.value;
  const filteredCharacters = filterData(characters, 'family', selectedFamily);
  updateCharacterList(filteredCharacters);
}

familyFilter.addEventListener('change', handleFilterChange);

// Inicializar la lista de personajes al cargar la página
handleFilterChange();

