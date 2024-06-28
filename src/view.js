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
      <article> 
        <h2>${item.name}</h2>
        <p>${item.shortDescription}</p>
        <p>${item.description}</p>
        <img src="${item.imageUrl}" alt="${item.name}" class="character-image">
        <ul>
          <li>Edad: ${item.facts.edad}</li>
          <li>Situación Sentimental: ${item.facts.sitSentimental}</li>
          <li>Pareja: ${item.facts.pareja}</li>
        </ul>
        <section class="extra-info">
          <p><strong>Libro:</strong> ${item.extraInfo.libro}</p>
          <p><strong>Serie:</strong> ${item.extraInfo.serie}</p>
        </section>
      </article>
    `;
    //crear los elementos de la lista y agregarlos al HTML
    ulElement.appendChild(liElement);
  });

  // Retornar el elemento <ul>
  return ulElement;
}


