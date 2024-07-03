import { characters } from './data/dataset.js';

export function filterCharactersByFamily(family) {
  return characters.filter(character => character.facts.familia.toLowerCase() === family.toLowerCase());
}

export function sortCharactersByName(order) {
  return characters.sort((a, b) => {
    if (order === 'asc') {
      return a.name.localeCompare(b.name);
    } else if (order === 'des') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
}

export function getCharacters() {
  return characters;
}
