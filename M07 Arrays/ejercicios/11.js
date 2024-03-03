function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var arrayPorI = [];
  for(var i = 0; i < array.length ; i++){
    arrayPorI.push(array[i]*i);
  } return arrayPorI;
}

module.exports = multiplicarElementosPorIndice;
