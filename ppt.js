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
                    alert("empate");
                break;

                case 'papel':
                    alert("has perdido");
                break;
        
                case 'tijeras':
                    alert("has ganado");
                break;
        
                case 'lagarto':
                    alert("has ganado");
                break;
        
                case 'spock':
                    alert("has perdido");
                break;
            }
        break;

        case 'papel':
            switch (cp){
                case 'piedra':
                    alert("has ganado");
                break;

                case 'papel':
                    alert("empate");
                break;
        
                case 'tijeras':
                    alert("has perdido");
                break;
        
                case 'lagarto':
                    alert("has perdido");
                break;
        
                case 'spock':
                    alert("has perdido");
                break;
            }
        break;

        case 'tijeras':
            switch (cp){
                case 'piedra':
                    alert("has perdido");
                break;

                case 'papel':
                    alert("has ganado");
                break;
        
                case 'tijeras':
                    alert("empate");
                break;
        
                case 'lagarto':
                    alert("has ganado");
                break;
        
                case 'spock':
                    alert("has perdido");
                break;
            }
        break;

        case 'lagarto':
            switch (cp){
                case 'piedra':
                    alert("has perdido");
                break;

                case 'papel':
                    alert("has ganado");
                break;
        
                case 'tijeras':
                    alert("has perdido");
                break;
        
                case 'lagarto':
                    alert("empate");
                break;
        
                case 'spock':
                    alert("has ganado");
                break;
            }
        break;

        case 'spock':
            switch (cp){
                case 'piedra':
                    alert("has ganado");
                break;

                case 'papel':
                    alert("has perdido");
                break;
        
                case 'tijeras':
                    alert("has ganado");
                break;
        
                case 'lagarto':
                    alert("has perdido");
                break;
        
                case 'spock':
                    alert("empate");
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

    eleccionP1 = document.getElementById("eleccion-player1");
    eleccionComputer = document.getElementById("eleccion-player2");

    piedra.addEventListener("click",seleccionPiedra);
    papel.addEventListener("click",seleccionPapel);
    tijeras.addEventListener("click",seleccionTijeras);
    lagarto.addEventListener("click",seleccionLagarto);
    spock.addEventListener("click",seleccionSpock);

}