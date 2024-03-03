function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var min = 1;
  var max = array.length;
  var dif = max - min;
  var numRandom = Math.floor(Math.random()*dif);
  if (array.length === 0 || array.length === 1 ) return array[0];
  else return array[numRandom];
}

module.exports = obtenerElementoAleatorio;

