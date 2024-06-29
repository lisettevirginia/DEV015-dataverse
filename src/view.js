export const renderItems = (data) => {
  
  // Crear un elemento <ul> con una clase específica
  const ulElement = document.createElement('ul');
  ulElement.className = 'character-list';

  // Recorrer la data y crear un elemento <li> por cada entrada
  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.className = 'character-item';

    //establece el contenido HTML de un elemento
    liElement.innerHTML = `
      <dl itemscope itemtype="Brigerton">
        <img src="${item.imageUrl}" alt="${item.name}" class="character-image">
        <dt>Nombre:</dt><dd itemprop="name">${item.name}</dd>
        <dt>Edad:</dt><dd itemprop="edad">${item.facts.edad}</dd>
        <dt>Situación Sentimental:</dt><dd itemprop="sitSentimental">${item.facts.sitSentimental}</dd>
        <dt>Pareja:</dt><dd itemprop="pareja">${item.facts.pareja}</dd>
        <dt>Descripción Corta:</dt><dd itemprop="shortDescription">${item.shortDescription}</dd>
        <dt>Descripción:</dt><dd itemprop="description">${item.description}</dd>
        <p>Diferencias libros - serie</p>
        <dt>Libro:</dt><dd itemprop="libro">${item.extraInfo.libro}</dd>
        <dt>Serie:</dt><dd itemprop="serie">${item.extraInfo.serie}</dd>
      </dl>
   
    `;
    //crear los elementos de la lista y agregarlos al HTML
    ulElement.appendChild(liElement);
  });

  // Retornar el elemento <ul>
  return ulElement;
}


