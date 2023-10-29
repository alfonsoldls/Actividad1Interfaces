let contenedorpuntosJugador = document.querySelector("#puntos-jugador");
let contenedorpuntosOponente = document.querySelector("#puntos-oponente");
let mensaje = document.querySelector ("#mensaje");
let contenedorganaPunto = document.querySelector("#ganaPunto");
let eligeOpcion = document.querySelector("#eligeOpcion");
let contenedoreleccionJugador = document.querySelector("#eleccionJugador");
let contenedoreleccionOponente = document.querySelector("#eleccionOponente");

let botonesOpciones = document.querySelectorAll(".opcion");
botonesOpciones.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});


function iniciarTurno(e){
    let eleccionOponente = Math.random() * 5;
    let eleccionJugador = e.currentTarget.id;
  
    if (eleccionOponente === 1){
        eleccionOponente = "piedra"
    }else if (eleccionOponente === 2){
        eleccionOponente = "papel"
    }else if (eleccionOponente === 3){
        eleccionOponente = "tijeras"
    }else if (eleccionOponente === 4){
        eleccionOponente = "lagarto"
    }else if (eleccionOponente === 5){
        eleccionOponente = "spock"
    }else {
        alert("El numero introducido no es válido")
    }
          
    //DECIDIENDO EL GANADOR
    if (
     (eleccionJugador === "piedra🪨" && eleccionOponente === "tijeras✂️") ||
     (eleccionJugador === "papel📋" && eleccionOponente === "piedra🪨") ||
     (eleccionJugador === "tijeras✂️" && eleccionOponente === "papel📋") ||
     (eleccionJugador === "lagarto🦎" && eleccionOponente === "spock🖖") ||
     (eleccionJugador === "spock🖖" && eleccionOponente === "lagarto🦎") 
    ) {
        ganaJugador();

    }else if (
     (eleccionOponente === "piedra🪨" && eleccionJugador === "tijeras✂️") ||
     (eleccionOponente === "papel📋" && eleccionJugador === "piedra🪨") ||
     (eleccionOponente === "tijeras✂️" && eleccionJugador === "papel📋") ||
     (eleccionOponente === "lagarto🦎" && eleccionJugador === "spock🖖") ||
     (eleccionOponente === "spock🖖" && eleccionJugador === "lagarto🦎") 
    ) {
        ganaOponente();

    }else {
        empate();
    }

        mensaje.classList.remove("disabled");
        contenedoreleccionJugador.innerText = eleccionJugador;
        contenedoreleccionOponente.innerText = eleccionOponente;

        if (puntosJugador === 3 || puntosOponente === 3) {
            if (puntosJugador === 3){
                instrucciones.innerText = "!Has ganado"
            }
    
            if (puntosOponente === 3){
                instrucciones.innerText = "!Tu oponente ha ganado"
            }

            eligeOpcion.classList.add("disabled");
            botonReiniciar.classList.remove("disabled");
            botonReiniciar.addEventListener("click", reiniciarJuego)
        }
}

function ganaJugador(){
    puntosJugador++;
    contenedorpuntosJugador.innerText = puntosJugador;
    contenedorganaPunto.innerText = "!El jugador gana un punto!🥳";
}

function ganaOrdenador(){
    puntosOponenete++;
    contenedorpuntosJugador.innerText = puntosJugador;
    contenedorganaPunto.innerText = "!El oponente gana un punto!😒";
}

function empate(){
    contenedorganaPunto.innerText = "!Habéis empatado!😊";
}
   
   
function reiniciarJuego(){
    eligeOpcion.classList.add("disabled");
    botonReiniciar.classList.remove("disabled");
    mensaje.classList.add("disabled");
	puntosJugador = 0;
    puntosOponente = 0;
    contenedorpuntosJugador.innerText = puntosJugador;
}   contenedorpuntosOponente.innerText = puntosOponente;


