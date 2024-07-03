import { filterCharactersByFamily, sortCharactersByName, getCharacters } from './dataFunctions.js';
import { renderCharacters } from './view.js';

document.addEventListener('DOMContentLoaded', () => {
  const familyFilter = document.getElementById('family-filter');
  const sortFilter = document.getElementById('alfabetico');
  const clearButton = document.querySelector('[data-testid="button-clear"]');

  // Renderizar todos los personajes inicialmente
  renderCharacters(getCharacters());

  familyFilter.addEventListener('change', () => {
    const filteredCharacters = filterCharactersByFamily(familyFilter.value);
    renderCharacters(filteredCharacters);
  });

  sortFilter.addEventListener('change', () => {
    const sortedCharacters = sortCharactersByName(sortFilter.value);
    renderCharacters(sortedCharacters);
  });

  clearButton.addEventListener('click', () => {
    familyFilter.value = 'bridgerton';
    sortFilter.value = 'asc';
    renderCharacters(getCharacters());
  });
});
