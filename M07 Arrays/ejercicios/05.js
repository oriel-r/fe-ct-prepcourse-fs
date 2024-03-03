function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (var i = 0; i <= array.length; i++) {
  var j = array[i].length;
  if (j >= 5) return array[i];
}
}

module.exports = obtenerPrimerStringLargo;
