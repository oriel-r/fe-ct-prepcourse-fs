function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
 if (typeof objetoUsuario.email === "undefined" || typeof objetoUsuario.email === "null") return false;
 else return true;
}

module.exports = tieneEmail;
