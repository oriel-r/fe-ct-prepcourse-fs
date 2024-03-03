function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var mayoresADiez = array.filter(n => n > 10);
  var cantMayores = mayoresADiez.length;
  return cantMayores;
}

module.exports = contarElementosMayoresA10;
