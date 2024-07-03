export function filterData(data, filterBy, value) {
  if (!data || !Array.isArray(data)) {
    return []; // Retorna un array vacío si los datos no son válidos o no son un array
  }

  return data.filter(item => {
    // Asegurarse de que 'item' tenga la propiedad 'facts' y 'facts' tenga la propiedad 'familia'
    return item && item.facts && item.facts.familia && item.facts.familia === value;
  });
}


export function sortData(data, sortBy, sortOrder = 'asc') {

  return data.slice().sort((a,b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;

  });
}

export function computeStats(data) {

  return data.reduce((stats, item) => {
    // Ejemplo: calcular la cantidad de personajes por familia
      
    const family = item.family;
       
    if (!stats[family]) 
    {stats[family] = 0;

    }

    stats[family]++;
  
    return stats;


  }, {});
}