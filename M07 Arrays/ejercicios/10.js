function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length > 1) {
  var j = 0;
  for (i = 0; i < array.length ; i++) {
    if (array[i] > array[j]) {
      j = i;
    }
  } return j;
} else return 0;
}
module.exports = encontrarIndiceMayor;
