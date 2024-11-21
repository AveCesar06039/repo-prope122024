



 var cadena;

function solicitarCadena(){
    var Comida=prompt("Ingresa el nombre de tu comida favorita:");
    cadena = Comida
}
 var cadenaSeparada
function separaCadena(){
    solicitarCadena();
    cadenaSeparada=cadena.split("");
    console.log("La posicion 0 es " + cadenaSeparada[0]);
}

function ultimaletra(){
    separaCadena();
    var ultimaPosicion = cadenaSeparada.length - 1;
    console.log("La ultima posicion  es  " + ultimaPosicion);
    console.log("La ultima letra es " + cadenaSeparada[ultimaPosicion]);
}

function contarPalabras(){
    solicitarCadena();
    cadenaSinEspacios=cadena.trim();
    console.log("La cadena sin espacios es: " + cadenaSinEspacios);
    arregloPalabras=cadenaSinEspacios.split(/\s+/)
    console.log("el arreglo de palabras quedo: " + arregloPalabras);
    console.log("el numero de palabras es " + arregloPalabras.length);
}
//mostrarNombreCompleto();
//separaNombreCompleto();
//invertirCadena();
//unirCadena();
//separaCadena();
//ultimaletra();
contarPalabras();