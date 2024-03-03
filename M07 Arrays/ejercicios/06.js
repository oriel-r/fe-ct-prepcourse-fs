function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  duplicados = array.map(n => n*2);
  return duplicados;
}

module.exports = duplicarElementos;
