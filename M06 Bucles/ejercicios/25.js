function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var strSinEspacios = ""
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) !== " " ) {
      strSinEspacios += string.charAt(i).toLowerCase();
    }
  }
  var strInvertido = strSinEspacios.split("").reverse().join("").toLowerCase();
  if (strInvertido == strSinEspacios) {
    return true;
  } else return false;
}

module.exports = esPalindromo;
