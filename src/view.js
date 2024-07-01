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
       <article> 
       <img src="${item.imageUrl}" alt="${item.name}" class="character-image">
       <ul itemscope itemtype="http://schema.org/Person"> 
         <li itemscope itemtype="http://schema.org/Person">
         <spam itemprop="name">Nombre: ${item.name}</span>
         </li>
         <li itemscope itemtype="http://schema.org/Person">
         <spam itemprop="family">Nombre: ${item.facts.familia}</span>
         </li>
         <li itemscope itemtype="http://schema.org/Person">
         <spam itemprop="age">Edad: ${item.facts.edad}</span>
         </li> 

         <li itemscope itemtype="http://schema.org/Person">
         <spam itemprop="maritalStatus">Situación Sentimental: ${item.facts.sitSentimental}</span>
         </li>

         <li itemscope itemtype="http://schema.org/Person">
         <spam itemprop="spouse">Pareja: ${item.facts.pareja}</span>
         </li>

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
//revisar error de <ul> y <li> 

