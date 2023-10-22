let introducirNombre, contador = 0, botonAceptar, nombre,n="", botonPiedra, botonPapel, botonTijera, botonLagarto, botonSpock, gameStarted = true, seleccionJugador, imagenOrdenador;
let computer=null, random=0, resultadoo = 0, contadorVictorias = 0, contadorDerrotas = 0, victorias, derrotas;

function inicializarVariables(){
    introducirNombre = document.getElementById("introducirNombre");
    botonAceptar = document.getElementById("botonAceptar");
    nombre = document.getElementById("nombre");
    botonPiedra = document.getElementById("botonPiedra");
    botonPapel = document.getElementById("botonPapel");
    botonTijera = document.getElementById("botonTijera");
    botonLagarto = document.getElementById("botonLagarto");
    botonSpock = document.getElementById("botonSpock");
    seleccionJugador = document.getElementById("seleccionJugador");
    imagenOrdenador = document.getElementById("imagenOrdenador");
    mostrarResultado = document.getElementById("resultado");
    victorias = document.getElementById("victorias");
    derrotas = document.getElementById("derrotas");
    botonPiedraOrdenador = document.getElementById("botonPiedraOrdenador");
    botonPapelOrdenador = document.getElementById("botonPapelOrdenador");
    botonTijeraOrdenador = document.getElementById("botonTijeraOrdenador");
    botonLagartoOrdenador = document.getElementById("botonLagartoOrdenador");
    botonSpockOrdenador = document.getElementById("botonSpockOrdenador");
}

function setNombre(){
    if(introducirNombre.value.length != 0){
        document.getElementById("errorNombre").textContent = "";
        gameStarted = false;
        n = introducirNombre.value;
        nombre.textContent = n;
        introducirNombre.value= "";
        contadorVictorias = 0;
        contadorDerrotas = 0;
        derrotas.textContent = contadorDerrotas;
        victorias.textContent = contadorVictorias;
        resetGame();
    } else{
        document.getElementById("errorNombre").textContent = "Introduce un nombre";

    }
} 

function selectPiedra(){
    if(n==""){
        document.getElementById("errorNombre").textContent = "Introduce un nombre";
    }   else if (!gameStarted){
            resetGame();
            gameStarted = true;
            seleccionJugador.src="imgs/rock.png";
            botonPiedra.style.border = "solid red 2px";
            startGame("piedra");
        }
    }



function selectPapel(){
    if(n=="")
        document.getElementById("errorNombre").textContent = "Introduce un nombre";
    if (!gameStarted) {
            resetGame();
            gameStarted = true;
            seleccionJugador.src="imgs/paper.png";
            botonPapel.style.border = "solid red 2px";
            startGame("papel");
        }
    }


function selectTijera(){
    if(n=="")
        document.getElementById("errorNombre").textContent = "Introduce un nombre";
    if (!gameStarted) {
            resetGame();
            gameStarted = true;
            seleccionJugador.src="imgs/scissors.png";
            botonTijera.style.border = "solid red 2px";
            startGame("tijera");
        }
    }


function selectLagarto(){
    if(n=="")
        document.getElementById("errorNombre").textContent = "Introduce un nombre";
    if (!gameStarted) {
            resetGame();
            gameStarted = true;
            seleccionJugador.src="imgs/lizard.png";
            botonLagarto.style.border = "solid red 2px";
            startGame("lagarto");
        }
    }
    
function selectSpock(){
    if(n=="")
        document.getElementById("errorNombre").textContent = "Introduce un nombre";
    if (!gameStarted) {
            resetGame();
            gameStarted = true;
            seleccionJugador.src="imgs/spock.png";
            botonSpock.style.border = "solid red 2px";
            startGame("spock");
        }
    }
    



function startGame(Player){
   
    resultadoo = selectComputer();
    if(Player == "piedra"){
        switch (resultadoo){
            case "piedra":
                resultado("EMPATE");
                break;
            case "papel":
            case "spock":
                resultado("DERROTA");
                break;
            case "tijera":
            case "lagarto":
                resultado("VICTORIA");
                break;
        }
    } else if(Player == "papel") {
        switch (resultadoo){
            case "papel":
                resultado("EMPATE");
                break;
            case "lagarto":
            case "tijera":
                resultado("DERROTA");
                break;
            case "spock":
            case "piedra":
                resultado("VICTORIA");
                break;
        }

    } else if(Player == "tijera") {
        switch (resultadoo){
            case "tijera":
                resultado("EMPATE");
                break;
            case "piedra":
            case "spock":
                resultado("DERROTA");
                break;
            case "lagarto":
            case "papel":
                resultado("VICTORIA");
                break;
        }

    } else if(Player == "lagarto") {
        switch (resultadoo){
            case "lagarto":
                resultado("EMPATE");
                break;
            case "piedra":
            case "tijera":
                resultado("DERROTA");
                break;
            case "papel":
            case "spock":
                resultado("VICTORIA");
                break;
        }

    } else if(Player == "spock") {
        switch (resultadoo){
            case "spock":
                resultado("EMPATE");
                break;
            case "papel":
            case "lagarto":
                resultado("DERROTA");
                break;
            case "tijera":
            case "piedra":
                resultado("VICTORIA");
                break;
        }
        
    }

    gameStarted = false;
    

}


function selectComputer() {
    
    random = Math.floor(Math.random() * 5) + 1;
    return animacionComputer(random);
}

function animacionComputer(numero){
    switch(numero){
        case 1: 
            imagenOrdenador.src="imgs/rock.png";
            botonPiedraOrdenador.style.border = "solid red 2px";
            return "piedra";
        case 2:
            imagenOrdenador.src="imgs/paper.png";
            botonPapelOrdenador.style.border = "solid red 2px";
            return "papel";
        case 3:
            imagenOrdenador.src="imgs/scissors.png";
            botonTijeraOrdenador.style.border = "solid red 2px";
            return "tijera";  
        case 4:
            imagenOrdenador.src="imgs/lizard.png";
            botonLagartoOrdenador.style.border = "solid red 2px";
            return "lagarto";
        case 5:
            imagenOrdenador.src="imgs/spock.png";
            botonSpockOrdenador.style.border = "solid red 2px";
            return "spock"; 
    }

}

function resultado(resultado){
    if(resultado == "EMPATE")
        mostrarResultado.textContent = "Empate";
    else if (resultado == "VICTORIA"){
        mostrarResultado.textContent = "Victoria";
        contadorVictorias++;
        victorias.textContent = contadorVictorias;
    }else{
        mostrarResultado.textContent = "Derrota";
        contadorDerrotas++;
        derrotas.textContent = contadorDerrotas;
    }
    
}

function resetGame(){
    gameStarted = false;
    botonPiedra.style.border = "";
    botonPapel.style.border = "";
    botonTijera.style.border = "";
    botonLagarto.style.border = "";
    botonSpock.style.border = "";
    seleccionJugador.src="";
    imagenOrdenador.src="";
    mostrarResultado.textContent = "";
    botonPiedraOrdenador.style.border = "";
    botonPapelOrdenador.style.border = "";
    botonTijeraOrdenador.style.border = "";
    botonLagartoOrdenador.style.border = "";
    botonSpockOrdenador.style.border = "";
}

function setListeners(){
    botonAceptar.addEventListener("click", setNombre);
    botonPiedra.addEventListener("click", selectPiedra);
    botonPapel.addEventListener("click", selectPapel);
    botonTijera.addEventListener("click", selectTijera);
    botonLagarto.addEventListener("click", selectLagarto);
    botonSpock.addEventListener("click", selectSpock);
}

window.addEventListener("load", ()=>{
    inicializarVariables();
    setListeners();
})


