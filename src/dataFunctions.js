// aqui vamos a desarrollar nuestras propias funciones.
export function filtrerData(data, filterBy, value) {

  return data.filtrer(item => item[filterBy]===value);

}

export function sortData(data, sortBy, sortOrder = 'asc') {

  return data.slice(),sort((a,b) => {
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