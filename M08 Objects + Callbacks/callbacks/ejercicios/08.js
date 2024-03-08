const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (var elemento in array) {
    var encontrado = callback(elemento);
    if (encontrado) {
      return elemento;
    }
  }
  return "No se encontró el elemento";
}

module.exports = buscarElemento;
