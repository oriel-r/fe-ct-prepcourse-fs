function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var aumentados = [];
  var suma = num;
  for (i = 1; i <= 10; i++) {
    suma +=2;
    aumentados.push(suma);
    if (suma === i) {
      return "Se interrumpió la ejecución";
    }
} return aumentados;
}
module.exports = breakStatement;
