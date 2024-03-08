function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  /*if (!objeto.hasOwnProperty(propiedad)) {
    return objeto;
  }
  else {*/
    objeto[propiedad] = valor;
    return objeto;
}

module.exports = actualizarValorPropiedad;
