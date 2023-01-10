import personas from './exemple.json' assert {type: "json"};

const text = '[{"nom": "Pere", "ciutat": "Maó", "edat": "23", "nacionalitat": "Espanyola"}, {"nom": "Pau", "ciutat": "Sant Lluís", "edat": "26", "nacionalitat": "Espanyola"}]';
const obj = JSON.parse(text);
const exemple = document.getElementById("exemple");

//exemple.innerHTML = obj.nom + "<br>" + obj.ciutat + "<br>" + obj.edat + "<br>" + obj.nacionalitat;

console.log(personas.persona[1].nom);

for(let i = 0; i < obj.length; i++) {
    exemple.innerHTML += obj[i].nom + "<br>" + obj[i].ciutat + "<br>" + obj[i].edat + "<br>" + obj[i].nacionalitat + "<br>";
}