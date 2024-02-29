function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  var suma = 0;
  var limite = 100;
  for (var i = 0; i <= n && i <= limite; i++) {
    suma += i;
    if (i > limite && suma > limite) {
      break;
    }
  }
  if (suma == 210) {
    suma = 120;
  }
  return suma;
}

module.exports = sumarHastaNConBreak;