//Simulador interactivo | Comprar entradas para recital

let saludoInicial = alert("Bienvenido a BoleteríaROCK, la tienda virtual para comprar entradas a los últimos recitales en Argentina!");

let seleccion = parseInt(prompt("Entradas disponibles para las siguientes bandas:\n 0) Fito Paez \n 1) Luis Spinetta \n 2) Charly García \n 3) Soda Estereo"));

let entrada = parseInt(prompt("Cuantas entradas quiere comprar?"));


let fitoPaez = {
    nombre: "Fito Paez",
    fecha: "04-07-1999",
    lugar: "Recinto",
    precio: 3800
};

let luisSpinetta = {
    nombre: "Luis Spinetta",
    fecha: "10-09-2001",
    lugar: "Recinto",
    precio: 4500,
};

let charlyGarcia = {
    nombre: "Charly García",
    fecha: "18-11-1999",
    lugar: "Recinto",
    precio: 2900,
};

let sodaEstereo = {
    nombre: "Soda Estereo",
    fecha: "22-08-2002",
    lugar: "Recinto",
    precio: 5200,
};



const artistas = [fitoPaez, luisSpinetta, charlyGarcia, sodaEstereo];

if(seleccion === 0){
    let valor = fitoPaez["precio"];
    cuenta();
} else if(seleccion === 1){
    let valor = luisSpinetta["precio"];
    cuenta();
} else if(seleccion === 2){
    let valor = charlyGarcia["precio"];
    cuenta();
} else if(seleccion === 3){
    let valor = sodaEstereo["precio"];
    cuenta();
}

function cuenta(precio){
    let resultado = entrada * precio;
    console.log(resultado);
}

console.log("DATOS DEL CONCIERTO");

for (let i = 0; i < artistas.length; i++) {
  artistas[i].nombre = artistas[i].nombre.toUpperCase();
  artistas[i].lugar = artistas[i].lugar.toUpperCase();
}

console.log(artistas[seleccion]);
console.log("TOTAL A PAGAR:");

let valor = 0;

if(seleccion === 0){
    let valor = fitoPaez["precio"];
    cuenta(valor);
} else if(seleccion === 1){
    let valor = luisSpinetta["precio"];
    cuenta(valor);
} else if(seleccion === 2){
    let valor = charlyGarcia["precio"];
    cuenta(valor);
} else if(seleccion === 3){
    let valor = sodaEstereo["precio"];
    cuenta(valor);
}