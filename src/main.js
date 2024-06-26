import { renderItems } from './view.js';
import data from './data/dataset.js';

// Obtener el contenedor donde se mostrarán los elementos
const itemsContainer = document.getElementById('items-container');

// Llamar a renderItems y agregar el resultado al contenedor
const renderedItems = renderItems(data);
itemsContainer.appendChild(renderedItems);
