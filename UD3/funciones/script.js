/* function suma(a,b){
    return a + b;
} */

let suma = new Function("a", "b", "return a + b");

let c = suma(4,6);
// console.log(c);

function factorial(numero){
    if(numero == 0) {
        return 1;
    }
    else {
        return (numero * factorial(numero - 1));
    }
}

console.log(factorial(10));


let estudiante = {
    id: 2,
    nombre: 'Pep',
    diHola: () => 'Hola!'
};

//FUNCIONES AUXILIARES
function muestraCampoValores(miObjeto) {
    for(campo in miObjeto){
        if(typeof(miObjeto[campo]) == 'object') {
            muestraCampoValores(miObjeto[campo]);
        }else{
            console.log(campo + ": " + miObjeto[campo]);
        }
        
    }
}

let unCliente = {
    nombre: 'Pau Robles',
    'dirección del cliente': 'c/ Desconocida nPI',
    '+-+-+-+-+-' : 'wtf',
    pagos: {
        tipo: 'Visa',
        'número de la tarjeta': 1234567890,
        'fecha de caducidad de la tarjeta': 'nunca'
    }
}

console.log(unCliente['dirección del cliente']);
// muestraCampoValores(unCliente);

console.log(estudiante.diHola());
console.log(estudiante.nombre);

estudiante.edad = 87;

console.log(estudiante.edad);

estudiante.diAdios = () => "Adiós!";

console.log(estudiante.diAdios());

let factura = {
    descripcion: "Factura de ejemplo",
    precio: 100.00,
    iva: 21.00,
    subTotal: () => this.precio,
    total: function(){
       return this.precio + ((this.precio * this.iva) /100);
    } 
};

console.log(factura.total());