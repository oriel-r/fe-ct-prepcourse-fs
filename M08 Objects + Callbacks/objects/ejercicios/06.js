const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var keysTotales = 0;
  for( elemtno in objeto) {
    keysTotales += 1
  }
  return keysTotales;
};

module.exports = contarPropiedades;
