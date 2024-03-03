function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var arrayEnMayus = array.map(n => n.toUpperCase());
  return arrayEnMayus;
}
module.exports = convertirStringAMayusculas;
