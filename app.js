let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    intentos++;

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos > 1) ? "intentos" : "intento"}`);
        document.getElementById("reiniciar").toggleAttribute("disabled");
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", `El número secreto es menor. Intentos: ${intentos}`);
        }
        else {
            asignarTextoElemento("p", `El número secreto es mayor. Intentos: ${intentos}`);
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(`Lista de numeros sorteados: ${listaNumerosSorteados}`);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
}

function mensajesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Elija un número del 1 al ${numeroMaximo}`);
}

function reiniciarJuego() {
    limpiarCaja();
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
    document.getElementById("reiniciar").toggleAttribute("disabled");
    intentos = 0;
    console.log(`El número secreto es: ${numeroSecreto}`);
}

mensajesIniciales();
numeroSecreto = generarNumeroSecreto();
console.log(`El número secreto es: ${numeroSecreto}`);