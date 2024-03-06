function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var nMultiplo = 0;
  for(i = 0; i < secuencia.length && nMultiplo === 0; i++) {
    if( n % secuencia[i] === 0) {
      nMultiplo = secuencia[i];
    } return nMultiplo;
  } 
}

module.exports = encontrarPrimerMultiploDeN;