function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  var str = "Hola "
  var frase = str + nombre + "!"
  return frase;
}

module.exports = obtenerSaludo;