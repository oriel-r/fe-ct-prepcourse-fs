function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var sumaTotal = arrayOfNumbers.reduce(function(acumulador, numero) {
    return acumulador += numero;
  });
  cb(sumaTotal);
}

module.exports = sumarArray;
