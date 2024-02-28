function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de   e todos
  // los números entre a y b (inclusive).
    // Tu código:
    if (typeof a !== "number" || typeof b !== "number") {
      return "Has ingresado parametros incorrectos";
    }
    if (a === 0 || b === 0) {
      return 0;
    }
  var menor = Math.min(a, b);
  var mayor = Math.max(a, b);
  var resultado = 1;
  for (var i = menor; i <= mayor; i++){
    resultado *= i;
    }
    if (resultado === -0) {
      return 0;
    }
    return resultado;
  }

module.exports = productoEntreNúmeros;