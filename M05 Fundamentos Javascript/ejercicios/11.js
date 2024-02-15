function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código
  var fechaNacimientoDate = new Date(fechaNacimiento);
  var fechaActual = new Date();
  var diferenciaMs = fechaActual.getTime() - fechaNacimientoDate.getTime();
  var diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
  var edad = Math.floor(diferenciaDias / 365.25);
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

module.exports = esMayorDeEdad