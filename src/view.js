export const renderItems = (data) => {

  //1.recibir parametros- 2.crear la lista - 3 recorrer la data -4  crear un li dentro del HTML
  //1.llamar a dataset.js a travez de un getElementById
  //2.Con el forEach creamos la lista (innterHTML)
  //3.crear el li dentro del HTML 
  //4.celebramos con café

  
// src/view.js

// Función para renderizar los datos proporcionados
function renderItems(data) {
  // Crear un elemento <ul> con una clase específica
  const ulElement = document.createElement('ul');
  ulElement.className = 'character-list';

  // Recorrer la data y crear un elemento <li> por cada entrada
  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.className = 'character-item';

    liElement.innerHTML = `
      <article>
        <h2>${item.name}</h2>
        <p>${item.shortDescription}</p>
        <p>${item.description}</p>
        <img src="${item.imageUrl}" alt="${item.name}" class="character-image">
        <ul>
          <li>Edad: ${item.facts.edad}</li>
          <li>Situación Sentimental: ${item.facts.sitSentimental}</li>
          <li>Pareja: ${item.facts.Pareja}</li>
        </ul>
        <section class="extra-info">
          <p><strong>Libro:</strong> ${item.extraInfo.libro}</p>
          <p><strong>Serie:</strong> ${item.extraInfo.serie}</p>
        </section>
      </article>
    `;
    ulElement.appendChild(liElement);
  });

  // Retornar el elemento <ul>
  return ulElement;
}

// Exportar la función para que pueda ser utilizada en otros archivos
export { renderItems };
}