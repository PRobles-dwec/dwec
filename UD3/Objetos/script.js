let coche = {
    marca:"Nissan",
    modelo:"Micra",
    color:"Blanco",
    puertas:4,
    kms:270000,
    automatico:false,
    propietario:{
        nombre:"Pau",
        apellido:"Robles"
    }
}

let coche2 = new Object();
coche2.marca = "Nissan";
coche2.modelo = "Qashqai";
coche2.color = "Gris";
coche2.kms = 175000;
coche2.automatico = false;

for (campo in coche){
    console.log(campo + ": " + coche[campo]);
}

console.log(coche.propietario.nombre);
console.log(coche["propietario"]["apellido"]);


