// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: 1,
    propiedad2: 2,
    propiedad3: {
        propiedad4: 4,
        propiedad5: 5,
        propiedad6: {
            propiedad7: 7,
            propiedad8: 8,
            propiedad9: function() {
                return "valor7";
            },
        }
    }
};
module.exports = objetoAnidado;
