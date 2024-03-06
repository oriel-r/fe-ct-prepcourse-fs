function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var numerospares = numeros.filter(n => n % 2 == 0);
  return numerospares.length;
}

module.exports = contarParesConContinue;
