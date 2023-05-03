//Simulador interactivo | Comprar entradas para recital

let saludoInicial = alert("Bienvenido a BoleteríaROCK, la tienda virtual para comprar entradas a los últimos recitales en Argentina!");

let seleccionar = parseInt(prompt("Entradas disponibles para las siguientes bandas:\n 1) Fito Paez \n 2) Luis Spinetta \n 3) Charly García \n 4) Soda Estereo"));

//Objetos
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

function recitalInfo(){
    console.log("Los datos del recital son:");
    
    if(seleccionar === 1){
        console.log(fitoPaez);
    } else if(seleccionar === 2){
        console.log(luiSpinetta);
    } else if(seleccionar === 3){
        console.log(charlyGarcia);
    } else if(seleccionar === 4){
        console.log(sodaEstereo);
    }
}
recitalInfo();

