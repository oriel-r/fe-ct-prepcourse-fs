function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
 var edadmin = 18
 var ingre = "Allowed"
 var noingresa = "Not allowed"
 if (edad >= edadmin) {
  return ingre;
 } else {
  return noingresa;
 }
}

module.exports = mayoriaDeEdad;
