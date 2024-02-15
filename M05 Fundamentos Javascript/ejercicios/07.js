function esTipoDato(valor) {
  if (typeof valor === "number") {
    return "number";
  } else if (typeof valor === "string") { 
    return "string";
  } else if (typeof valor === "boolean") {
    return "boolean";
  } else if (typeof valor === "null") {
    return "null";
  } else if (typeof valor === "undefined") {
    return "undefined";
  } else if (typeof valor === "object") {
    return "object";
  } else if (typeof valor === "bigint") {
    return "bigint";
  } else if (typeof valor === "symbol") {
    return "symbol"; 
  } else if (typeof valor === "function") {
    return "function"; 
  } else {
    return "no se que pusiste wey";
  }
}

  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:

module.exports = esTipoDato;