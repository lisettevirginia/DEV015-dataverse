import { renderItems } from './view.js';
import dataset from './data/dataset.js';
import { filterData } from './dataFunctions.js';

const itemsContainer = document.getElementById('root');
const characterList = document.getElementById('character-list');

// Renderizar todos los personajes al cargar la página
const renderedItems = renderItems(dataset);
itemsContainer.appendChild(renderedItems);

// Función para actualizar la lista de personajes filtrados
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

// Función para manejar el cambio en el filtro de familia
function handleFilterChange() {
  const selectedFamily = familyFilter.value;
  const filteredCharacters = filterData(dataset, 'facts.familia', selectedFamily);
  updateCharacterList(filteredCharacters);
}

// Obtener elementos del DOM
const familyFilter = document.getElementById('family-filter');

// Agregar evento de cambio al filtro de familia
familyFilter.addEventListener('change', handleFilterChange);

// Inicializar la lista de personajes al cargar la página
handleFilterChange();
