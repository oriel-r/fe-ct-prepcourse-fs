function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  switch (letra.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "Es vocal";
    default:
      return "Dato incorrecto";
  }
}

module.exports = esVocal;
