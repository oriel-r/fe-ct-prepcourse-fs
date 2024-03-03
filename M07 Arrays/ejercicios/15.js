function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var j = 0;
  for (i = 0; i < array.length ; i++) {
    if (array[i] !== array[j]) {
      return false;
    }
  } return true;
}

module.exports = todosIguales;
