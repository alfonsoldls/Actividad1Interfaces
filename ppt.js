let piedra, papel, tijeras, lagarto, spock,
    eleccionP1, eleccionComputer, result,
    piedraComputer, papelComputer, tijerasComputer,
    lagartoComputer, spockComputer,
    imagenPiedra, imagenPapel, imagenTijeras,
    imagenLagarto, imagenSpock,
    resultado, marcadorJugador, marcadorComputer,
    botonJugar, nombreJugador, nombreJugadorPantalla,
    marcadorJugadorPantalla, marcadorDividor,
    marcadorJugadorComputer, nombreJugadorComputer,
    puedeJugar = 0, marcador;


function actualizarResultado(){
    marcadorJugadorPantalla.innerHTML="<h1> "+ marcadorJugador +" </h1>";
    marcadorJugadorComputer.innerHTML="<h1> "+ marcadorComputer +" </h1>";
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
        marcadorJugadorPantalla.innerHTML="<h1> "+ marcadorJugador +" </h1>";
        marcadorDividor.innerHTML="<h1> - </h1>";
        marcadorJugadorComputer.innerHTML="<h1> "+ marcadorComputer +" </h1>";
        nombreJugadorComputer.innerHTML="<h2> Computer</h2>";
        todosBlanco()
        puedeJugar++;
        resultado.style.border="2px solid black";
        nombreJugadorPantalla.style.border="2px solid black";
        nombreJugadorComputer.style.border="2px solid black";
        marcador.style.border="2px solid black";
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
    if (puedeJugar>0){
        todosBlanco();
        let p1 = "piedra";
        eleccionP1.src = "images/piedra.png";
        eleccionP1.style.height ="400px";
        eleccionP1.style.width ="400px";
        let cp = resultadoComputer();
        juego(p1,cp);
    }else{
        alert("Debe introducir un nombre y pulsar en el botón ¡Jugar ya!");
    }
}

function seleccionPapel(){
    if (puedeJugar>0){
        todosBlanco();
        let p1 = "papel";
        eleccionP1.src = "images/papel.png";
        eleccionP1.style.height ="400px";
        eleccionP1.style.width ="400px";
        let cp = resultadoComputer();
        juego(p1,cp);
    }else{
        alert("Debe introducir un nombre y pulsar en el botón ¡Jugar ya!");
    }
}

function seleccionTijeras(){
    if (puedeJugar>0){
        todosBlanco();
        let p1 = "tijeras";
        eleccionP1.src = "images/tijeras.png";
        eleccionP1.style.height ="400px";
        eleccionP1.style.width ="400px";
        let cp = resultadoComputer();
        juego(p1,cp);
    }else{
        alert("Debe introducir un nombre y pulsar en el botón ¡Jugar ya!");
    }
}

function seleccionLagarto(){
    if (puedeJugar>0){
        todosBlanco();
        let p1 = "lagarto";
        eleccionP1.src = "images/lagarto.png";
        eleccionP1.style.height ="400px";
        eleccionP1.style.width ="400px";
        let cp = resultadoComputer();
        juego(p1,cp);
    }else{
        alert("Debe introducir un nombre y pulsar en el botón ¡Jugar ya!");
    }
}

function seleccionSpock(){
    if (puedeJugar>0){
        todosBlanco();
        let p1 = "spock";
        eleccionP1.src = "images/spock.png";
        eleccionP1.style.height ="400px";
        eleccionP1.style.width ="400px";
        let cp = resultadoComputer();
        juego(p1,cp);
    }else{
        alert("Debe introducir un nombre y pulsar en el botón ¡Jugar ya!");
    }
}

function computerPiedra(){
    eleccionComputer.src = "images/piedra.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    piedraComputer.style.background = "red";
}

function computerPapel(){
    eleccionComputer.src = "images/papel.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    papelComputer.style.background = "red";
}

function computerTijeras(){
    eleccionComputer.src = "images/tijeras.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    tijerasComputer.style.background = "red";
}

function computerLagarto(){
    eleccionComputer.src = "images/lagarto.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    lagartoComputer.style.background = "red";
}

function computerSpock(){
    eleccionComputer.src = "images/spock.png";
    eleccionComputer.style.height ="400px";
    eleccionComputer.style.width ="400px";
    spockComputer.style.background = "red";
}

function todosBlanco(){
    piedraComputer.style.background = "transparent";
    papelComputer.style.background = "transparent";
    tijerasComputer.style.background = "transparent";
    lagartoComputer.style.background = "transparent";
    spockComputer.style.background = "transparent";
}

function sobreElemento(elemento){
    elemento.style.width = "130px";
    elemento.style.height = "130px";
    elemento.style.background = "blue";
}

function fueraElemento(elemento){
    elemento.style.width = "120px";
    elemento.style.height = "120px";
    elemento.style.background = "transparent";
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
    botonJugar = document.getElementById("boton-jugar");
    marcador = document.getElementById("contador");

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

    piedra.addEventListener("mouseover", () => sobreElemento(piedra));
    papel.addEventListener("mouseover", () => sobreElemento(papel));
    tijeras.addEventListener("mouseover", () => sobreElemento(tijeras));
    lagarto.addEventListener("mouseover", () => sobreElemento(lagarto));
    spock.addEventListener("mouseover", () => sobreElemento(spock));

    piedra.addEventListener("mouseout", () => fueraElemento(piedra));
    papel.addEventListener("mouseout", () => fueraElemento(papel));
    tijeras.addEventListener("mouseout", () => fueraElemento(tijeras));
    lagarto.addEventListener("mouseout", () => fueraElemento(lagarto));
    spock.addEventListener("mouseout", () => fueraElemento(spock));
    
    botonJugar.addEventListener("click",play);
}