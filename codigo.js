let cajaNombre;
let errorNombre;
let botonJugar;
let instrucciones;
let puntosJugador;
let puntosOponente;
let opcionesPosibles;
let mensaje;
let ganaPunto;
let botonReiniciar;



// Función para reiniciar el juego
function reiniciarJuego() {
    puntosJugador = 0;
    puntosOponente = 0;
    puntosJugador.textContent = puntosJugador;
    puntosOponente.textContent = puntosOponente;
    mensaje.textContent = '';
    reiniciar.classList.add('disabled');
}
  

function Jugar(eleccionJugador){
    opcionesPosibles = ['piedra', 'papel', 'tijeras', 'lagarto', 'spock'];
    const eleccionOponente = opcionesPosibles[Math.floor(Math.random() * opcionesPosibles.length)];
  
    if (eleccionOrdenador === 1){
        eleccionOrdenador = "piedra"
    }else if (eleccionOrdenador === 2){
        eleccionOrdenador = "papel"
    }else if (eleccionOrdenador === 3){
        eleccionOrdenador = "tijeras"
    }else if (eleccionOrdenador === 4){
        eleccionOrdenador = "lagarto"
    }else if (eleccionOrdenador === 5){
        eleccionOrdenador = "spock"
    }else {
        alert("El numero introducido no es válido")
    }
          
    //DECIDIENDO EL GANADOR
    if (
     (eleccionJugador == 1 && eleccionOrdenador == 3) ||
     (eleccionJugador == 2 && eleccionOrdenador == 1) ||
     (eleccionJugador == 3 && eleccionOrdenador == 2) ||
     (eleccionJugador == 4 && eleccionOrdenador == 5) ||
     (eleccionJugador == 5 && eleccionOrdenador == 4) 
    ) {
        ganaJugador();

    }else if (
     (eleccionOrdenador == 1 && eleccionJugador == 3) ||
     (eleccionOrdenador == 2 && eleccionJugador == 1) ||
     (eleccionOrdenador == 3 && eleccionJugador == 2) ||
     (eleccionOrdenador == 4 && eleccionJugador == 5) ||
     (eleccionOrdenador == 5 && eleccionJugador == 4) 
    ) {
        ganaOrdenador();

    }else {
        empate();
    }


   
    if (puntosJugador === 3 || puntosOponente === 3) {
        if (puntosJugador === 3){
            instrucciones.innerText = "!Has ganado"
        }

        if (puntosOponente === 3){
            instrucciones.innerText = "!Tu oponente ha ganado"
        }
    }


    // Agregar eventos a las opciones
    opciones.forEach(opcion => {
        opcion.addEventListener('click', () => {
            jugar(opcion.id);
    });
});

}

function ganaJugador(){
    puntosJugador++;
    contenedorpuntosJugador.innerText = puntosJugador;
    contenedorganaPunto.innerText = "!El jugador gana un punto!🥳";
}

function ganaOrdenador(){
    puntosOponenete++;
    contenedorpuntosOponente.innerText = puntosOponente;
    contenedorganaPunto.innerText = "!El oponente gana un punto!😒";
}

function empate(){
    contenedorganaPunto.innerText = "!Habéis empatado!😊";
}

function resetear(){
	botonReiniciar.disabled = true;
    errorNombre.textContent = "";
}

function inicializarVariables(){
botonJugar = document.getElementById("botonJugar");
instrucciones = document.getElementById("instrucciones");
opciones = document.querySelectorAll('.Opcion');
puntosJugador = document.getElementById("puntosJugador");
puntosOponente = document.getElementById("puntosOponente");
mensaje = document.getElementById("mensaje");
ganaPunto = document.getElementById("ganaPunto");
botonReiniciar = document.getElementById("botonReiniciar");
}


// PONER A LA ESCUCHA DE EVENTOS A TODOS LOS POSIBLES ELEMENTOS DE LA PAGINA
function setListeners(){
	botonJugar.addEventListener("click", Jugar);
    botonReiniciar.addEventListener("click", reiniciarJuego);
    

}

window.addEventListener("load",()=>{
	inicializarVariables();
	setListeners();

    cajaNombre.focus();
    botonReiniciar.disabled = true;

});

