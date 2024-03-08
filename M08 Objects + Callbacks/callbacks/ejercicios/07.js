function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var todasLasA = arrayOfStrings.filter(n => n.charAt(0).toLowerCase() === "a");
  return todasLasA;
}


module.exports = filter;
