//sintáxis

var numero = 1;

switch(numero){
    case 1:
        console.log("soy un uno!");
        break;
    case 100:
        console.log("soy un cien!");
        break;
    case 400:
        console.log("soy un cuatrocientos!");
        break;
    default:
        console.log("no soy ninguno");
}

//ejercicio

var piedra=1;
var papel=2;
var tijera=3;

function puntos(jugador,pc){
    switch(true){
        case(jugador===pc):
            console.log("Es un empate");
            break;
        case(jugador===piedra && pc===tijera):
            console.log("Gana el jugador"); 
            break;
        case(jugador===papel && pc===piedra):
            console.log("Gana el jugador");  
            break;
        case(jugador===tijera && pc===papel):
            console.log("Gana el jugador");  
            break;
        default:
            console.log("Ganó el pc");
    }
}

puntos(jugador,pc)
