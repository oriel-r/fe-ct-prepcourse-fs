function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  objetoProducto.calcularPrecioDescuento = function() {
    var valorDescuento = (this.precio * this.porcentajeDeDescuento);
    var precioFinal = this.precio - valorDescuento;
    return precioFinal;
  };
  return objetoProducto.calcularPrecioDescuento(); // Retorna el precio final
}

var itemramdon = {
  precio: 120,
  porcentajeDeDescuento: 0.40,
};
console.log(agregarMetodoCalculoDescuento(itemramdon));
module.exports = agregarMetodoCalculoDescuento;
