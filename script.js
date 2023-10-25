// Aporte de cristian 
inicializar() {
    this.shuffleButton.addEventListener("click", () => this.revolverTablero());
    this.botones.forEach((button, index) => {
        button.addEventListener("click", () => this.moverNumero(index));
    });
}

revolverTablero() {
    this.isPlaying = true;
    this.estado.movimientos = 0;
    this.estado.tiempo = 0;
    this.actualizarMovimientos();
    this.actualizarTiempo();
    this.ocultarMensaje();
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
        this.estado.incrementarTiempo();
        this.actualizarTiempo();
    }, 1000);
    this.shuffleBotones();
}

shuffleBotones() {
    for (let i = this.botones.length - 2; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.botones[i].textContent, this.botones[j].textContent] = [this.botones[j].textContent, this.botones[i].textContent];
    }

    this.botones.forEach(button => {
        button.classList.add("movable");
    });

    document.querySelector(".grid button:empty").classList.remove("movable");
}