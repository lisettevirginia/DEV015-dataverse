export const renderItems = (data) => {
  
  // Crear un elemento <ul> con una clase específica
  const ulElement = document.createElement('ul');
  ulElement.idName = 'character-list';

  // Recorrer la data y crear un elemento <li> por cada entrada
  data.forEach(item => {
    const liElement = document.createElement('li');
    
    liElement.setAttribute('itemtype', 'http://schema.org/Person');
    liElement.setAttribute('itemscope', '');
    liElement.idName = 'character-item';
    //establece el contenido HTML de un elemento
    liElement.innerHTML = `
       <article itemscope itemtype="http://schema.org/Person"> 
       <img src="${item.imageUrl}" alt="${item.name}" class="character-image">
       <ul> 
         <li itemprop="name">Nombre: ${item.name}</li>
         <li itemprop="age">Edad: ${item.facts.edad}</li> 
         <li itemprop="maritalStatus">Situación Sentimental: ${item.facts.sitSentimental}</li>
         <li itemprop="spouse">Pareja: ${item.facts.pareja}</li>
       </ul> 
       <dl> 
         <dt>Descripción Corta:</dt> <dd itemprop="description">${item.shortDescription}</dd>
         <dt>Descripción:</dt> <dd itemprop="description">${item.description}</dd>
         <p>Diferencias libros - serie</p> 
         <dt>Libro:</dt> <dd itemprop="book">${item.extraInfo.libro}</dd>
         <dt>Serie:</dt> <dd itemprop="series">${item.extraInfo.serie}</dd>
       </dl> 
      
      </article>
   
    `;
    //crear los elementos de la lista y agregarlos al HTML
    ulElement.appendChild(liElement);
  });

  // Retornar el elemento <ul>
  return ulElement;
}


