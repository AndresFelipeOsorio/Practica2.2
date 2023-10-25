if (this.checkWin()) {
    clearInterval(this.timer);
    this.mostrarMensaje("¡Has Ganado! Felicidades");
}

this.botones.forEach(btn => {
    btn.classList.add("movable");
});
blankButton.classList.remove("movable");

checkWin() 
const sortedButtons = [...this.botones].map(button => button.textContent).slice(0, -1).map(Number);
for (let i = 0; i < sortedButtons.length; i++) {
    if (sortedButtons[i] !== i + 1) {
        return false;
    }
}
return true;


actualizarMovimientos() 
document.getElementById("move").textContent = `Tiros: ${this.estado.movimientos}`;


actualizarTiempo() 
document.getElementById("time").textContent = `Tiempo: ${this.estado.tiempo}`;


mostrarMensaje(mensaje) 
this.message.textContent = mensaje;
this.message.style.display = "block";


ocultarMensaje() 
this.message.style.display = "none";



class Juego {
constructor() {
this.tablero = new Tablero();
}

iniciarJuego() {
this.tablero.inicializar();
}
}

const juego = new Juego();
juego.iniciarJuego();