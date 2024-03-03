function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var soloPares = array.filter(n => n % 2 == 0);
  return soloPares;
}

module.exports = filtrarNumerosPares;
