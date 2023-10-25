// aporte de Andres.
class Estado {
    constructor() {
        this.movimientos = 0;
        this.tiempo = 0;
    }

    incrementarMovimientos() {
        this.movimientos++;
    }

    incrementarTiempo() {
        this.tiempo++;
    }
}

class Tablero {
    constructor() {
        this.estado = new Estado();
        this.botones = [...document.querySelectorAll(".grid button")];
        this.shuffleButton = document.querySelector(".footer button");
        this.message = document.querySelector(".message");
        this.timer = null;
        this.isPlaying = false;
        this.gridWidth = 4; // Ancho del tablero (número de columnas)
    }

    
}