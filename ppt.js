let piedra;
let papel;
let tijeras;
let lagarto;
let spock;
let eleccionP1;
let eleccionComputer;
let result;
let piedraComputer;
let papelComputer;
let tijerasComputer;
let lagartoComputer;
let spockComputer;
let imagenPiedra;
let imagenPapel;
let imagenTijeras;
let imagenLagarto;
let imagenSpock;
let resultado;
let marcadorJugador;
let marcadorComputer;
let botonJugar;
let nombreJugador;
let nombreJugadorPantalla;
let marcadorJugadorPantalla;
let marcadorDividor;
let marcadorJugadorComputer;
let nombreJugadorComputer;

function actualizarResultado(){
    marcadorJugadorPantalla.innerHTML="<h2> "+ marcadorJugador +" </h2>";
    marcadorJugadorComputer.innerHTML="<h2> "+ marcadorComputer +" </h2>";
}

function play(){
    nombreJugador = document.getElementById("nombre-jugador").value;
    if (nombreJugador == ""){
        alert("Debe introducir un nombre para poder jugar")
    }else{
        resultado.innerHTML="<h1>¡BUENA SUERTE!</h1>";
        eleccionP1.src = "images/blank.png";
        eleccionComputer.src = "images/blank.png";
        marcadorJugador = 0;
        marcadorComputer = 0;
        nombreJugadorPantalla.innerHTML="<h2> "+ nombreJugador +" </h2>";
        marcadorJugadorPantalla.innerHTML="<h2> "+ marcadorJugador +" </h2>";
        marcadorDividor.innerHTML="<h2> - </h2>";
        marcadorJugadorComputer.innerHTML="<h2> "+ marcadorComputer +" </h2>";
        nombreJugadorComputer.innerHTML="<h2> Computer</h2>";
    }
}

function resultadoComputer(){
    let opciones = ['piedra', 'papel', 'tijeras', 'lagarto', 'spock'];
    let indice = Math.floor(Math.random() * opciones.length);
    let result = opciones[indice];
    switch (result){
        case 'piedra':
            computerPiedra();
            break;
        case 'papel':
            computerPapel();
            break;
        case 'tijeras':
            computerTijeras();
            break;
        case 'lagarto':
            computerLagarto();
            break;
        case 'spock':
            computerSpock();
            break;
    }
    return result;
}

function juego(p1, cp){
    switch (p1){
        case 'piedra':
            switch (cp){
                case 'piedra':
                    resultado.innerHTML="<h1>EMPATE</h1>"
                break;

                case 'papel':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;
        
                case 'tijeras':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;
        
                case 'lagarto':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;
        
                case 'spock':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;
            }
        break;

        case 'papel':
            switch (cp){
                case 'piedra':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;

                case 'papel':
                    resultado.innerHTML="<h1>EMPATE</h1>"
                break;
        
                case 'tijeras':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;
        
                case 'lagarto':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;
        
                case 'spock':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;
            }
        break;

        case 'tijeras':
            switch (cp){
                case 'piedra':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;

                case 'papel':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;
        
                case 'tijeras':
                    resultado.innerHTML="<h1>EMPATE</h1>"
                break;
        
                case 'lagarto':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;
        
                case 'spock':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;
            }
        break;

        case 'lagarto':
            switch (cp){
                case 'piedra':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;

                case 'papel':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;
        
                case 'tijeras':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;
        
                case 'lagarto':
                    resultado.innerHTML="<h1>EMPATE</h1>"
                break;
        
                case 'spock':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;
            }
        break;

        case 'spock':
            switch (cp){
                case 'piedra':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;

                case 'papel':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;
        
                case 'tijeras':
                    resultado.innerHTML="<h1>HAS GANADO</h1>"
                    marcadorJugador++;
                    actualizarResultado();
                break;
        
                case 'lagarto':
                    resultado.innerHTML="<h1>HAS PERDIDO</h1>"
                    marcadorComputer++;
                    actualizarResultado();
                break;
        
                case 'spock':
                    resultado.innerHTML="<h1>EMPATE</h1>"
                break;
            }
        break;
    }
}

function seleccionPiedra(){
    todosBlanco();
    let p1 = "piedra";
    eleccionP1.src = "images/piedra.png";
    eleccionP1.style.height ="400px";
    eleccionP1.style.width ="400px";
    let cp = resultadoComputer();
    juego(p1,cp);

}

function seleccionPapel(){
    todosBlanco();
    let p1 = "papel";
    eleccionP1.src = "images/papel.png";
    eleccionP1.style.height ="400px";
    eleccionP1.style.width ="400px";
    let cp = resultadoComputer();
    juego(p1,cp);
}

function seleccionTijeras(){
    todosBlanco();
    let p1 = "tijeras";
    eleccionP1.src = "images/tijeras.png";
    eleccionP1.style.height ="400px";
    eleccionP1.style.width ="400px";
    let cp = resultadoComputer();
    juego(p1,cp);
}

function seleccionLagarto(){
    todosBlanco();
    let p1 = "lagarto";
    eleccionP1.src = "images/lagarto.png";
    eleccionP1.style.height ="400px";
    eleccionP1.style.width ="400px";
    let cp = resultadoComputer();
    juego(p1,cp);
}

function seleccionSpock(){
    todosBlanco();
    let p1 = "spock";
    eleccionP1.src = "images/spock.png";
    eleccionP1.style.height ="400px";
    eleccionP1.style.width ="400px";
    let cp = resultadoComputer();
    juego(p1,cp);
}

function computerPiedra(){
    eleccionComputer.src = "images/piedra.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    piedraComputer.style.background = "green";
}

function computerPapel(){
    eleccionComputer.src = "images/papel.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    papelComputer.style.background = "green";
}

function computerTijeras(){
    eleccionComputer.src = "images/tijeras.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    tijerasComputer.style.background = "green";
}

function computerLagarto(){
    eleccionComputer.src = "images/lagarto.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    lagartoComputer.style.background = "green";
}

function computerSpock(){
    eleccionComputer.src = "images/spock.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    spockComputer.style.background = "green";
}

function todosBlanco(){
    piedraComputer.style.background = "white";
    papelComputer.style.background = "white";
    tijerasComputer.style.background = "white";
    lagartoComputer.style.background = "white";
    spockComputer.style.background = "white";
}

function sobrePiedra(){
    piedra.style.width = "130px";
    piedra.style.height = "130px";
    piedra.style.background = "yellow";
}

function sobrePapel(){
    papel.style.width = "130px";
    papel.style.height = "130px";
    papel.style.background = "yellow";
}

function sobreTijeras(){
    tijeras.style.width = "130px";
    tijeras.style.height = "130px";
    tijeras.style.background = "yellow";
}

function sobreLagarto(){
    lagarto.style.width = "130px";
    lagarto.style.height = "130px";
    lagarto.style.background = "yellow";
}

function sobreSpock(){
    spock.style.width = "130px";
    spock.style.height = "130px";
    spock.style.background = "yellow";
}

function fueraPiedra(){
    piedra.style.width = "120px";
    piedra.style.height = "120px";
    piedra.style.background = "white";
}

function fueraPapel(){
    papel.style.width = "120px";
    papel.style.height = "120px";
    papel.style.background = "white";
}

function fueraTijeras(){
    tijeras.style.width = "120px";
    tijeras.style.height = "120px";
    tijeras.style.background = "white";
}

function fueraLagarto(){
    lagarto.style.width = "120px";
    lagarto.style.height = "120px";
    lagarto.style.background = "white";
}

function fueraSpock(){
    spock.style.width = "120px";
    spock.style.height = "120px";
    spock.style.background = "white";
}

window.onload = function(){

    piedra = document.getElementById("piedra-player1");
    papel = document.getElementById("papel-player1");
    tijeras = document.getElementById("tijeras-player1");
    lagarto = document.getElementById("lagarto-player1");
    spock = document.getElementById("spock-player1");

    piedraComputer = document.getElementById("piedra-computer");
    papelComputer = document.getElementById("papel-computer");
    tijerasComputer = document.getElementById("tijeras-computer");
    lagartoComputer = document.getElementById("lagarto-computer");
    spockComputer = document.getElementById("spock-computer");

    resultado = document.getElementById("anuncio");
    //nombreJugador = document.getElementById("nombre-jugador").value;
    botonJugar = document.getElementById("boton-jugar");

    eleccionP1 = document.getElementById("eleccion-player1");
    eleccionComputer = document.getElementById("eleccion-player2");

    nombreJugadorPantalla = document.getElementById("nombre-jugador-pantalla");
    marcadorJugadorPantalla = document.getElementById("marcador-jugador1");
    marcadorDividor = document.getElementById("marcador-divisor");
    marcadorJugadorComputer = document.getElementById("marcador-computer");
    nombreJugadorComputer = document.getElementById("nombre-rival-pantalla");

    piedra.addEventListener("click",seleccionPiedra);
    papel.addEventListener("click",seleccionPapel);
    tijeras.addEventListener("click",seleccionTijeras);
    lagarto.addEventListener("click",seleccionLagarto);
    spock.addEventListener("click",seleccionSpock);

    piedra.addEventListener("mouseover",sobrePiedra);
    papel.addEventListener("mouseover",sobrePapel);
    tijeras.addEventListener("mouseover",sobreTijeras);
    lagarto.addEventListener("mouseover",sobreLagarto);
    spock.addEventListener("mouseover",sobreSpock);

    piedra.addEventListener("mouseout",fueraPiedra);
    papel.addEventListener("mouseout",fueraPapel);
    tijeras.addEventListener("mouseout",fueraTijeras);
    lagarto.addEventListener("mouseout",fueraLagarto);
    spock.addEventListener("mouseout",fueraSpock);
    
    botonJugar.addEventListener("click",play);

    
}