export function renderCharacters(characters) {
  const characterList = document.getElementById('character-list');
  characterList.innerHTML = ''; // Limpiar lista antes de renderizar

  characters.forEach(character => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.imageUrl}" alt="${character.name}" />
      <p>${character.shortDescription}</p>
    `;
    characterList.appendChild(listItem);
  });
}
