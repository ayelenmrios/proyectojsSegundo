//Simulador interactivo | Comprar entradas para recital

let saludoInicial = alert("Bienvenido a BoleteríaROCK, la tienda virtual para comprar entradas a los últimos recitales en Argentina!");

let seleccion = parseInt(prompt("Entradas disponibles para las siguientes bandas:\n 0) Fito Paez \n 1) Luis Spinetta \n 2) Charly García \n 3) Soda Estereo"));

let entrada = parseInt(prompt("Cuántas entradas quiere comprar?"));


let fitoPaez = {
    nombre: "Fito Paez",
    fecha: "04-07-1999",
    lugar: "Movistar Arena",
    precio: 3800
};

let luisSpinetta = {
    nombre: "Luis Spinetta",
    fecha: "10-09-2001",
    lugar: "Teatro Colón",
    precio: 4500,
};

let charlyGarcia = {
    nombre: "Charly García",
    fecha: "18-11-1999",
    lugar: "Luna Park",
    precio: 2900,
};

let sodaEstereo = {
    nombre: "Soda Estereo",
    fecha: "22-08-2002",
    lugar: "Teatro Gran Rex",
    precio: 5200,
};

const artistas = [fitoPaez, luisSpinetta, charlyGarcia, sodaEstereo];

console.log("DATOS DEL CONCIERTO:");

for (let i = 0; i < artistas.length; i++) {
  artistas[i].nombre = artistas[i].nombre.toUpperCase();
  artistas[i].lugar = artistas[i].lugar.toUpperCase();
}

console.log(
"ARTISTA: " + artistas[seleccion].nombre 
+ "\n" + "CUANDO: " + artistas[seleccion].fecha 
+ "\n" + "DONDE: " + artistas[seleccion].lugar
+ "\n" + "PRECIO: $ " + artistas[seleccion].precio);

console.log("Cantidad de entradas: " + entrada);

let precio = artistas[seleccion].precio;
function calcular(precio, entrada)
{
    resultado2 = entrada * precio;
    return resultado2;
}

console.log("TOTAL A PAGAR: $ " + calcular(precio, entrada));

restantesArtistas = [artistas[0].nombre, artistas[1].nombre, artistas[2].nombre, artistas[3].nombre];
artistaEliminado = restantesArtistas.splice(seleccion, 1);
console.log("ENTRADAS DISPONIBLES PARA: " + restantesArtistas);
