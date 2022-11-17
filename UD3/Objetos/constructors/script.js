function coche(marca,modelo, color, kms, combustible){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;
}

let miCoche = new coche("Nissan", "Micra", "Blanco", 270000, "gasolina");
let tuCoche = new coche("Ford", "Fiesta", "Azul", 150000, "diesel");

let otroCoche = miCoche;

miCoche.color = "Rosa";

tuCoche = miCoche;

console.log(miCoche);
console.log(tuCoche);