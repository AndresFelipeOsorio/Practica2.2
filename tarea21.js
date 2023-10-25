
moverNumero(index) {
    if (!this.isPlaying) {
        return;
    }

    const button = this.botones[index];
    const blankButton = document.querySelector(".grid button:empty");
    const blankIndex = this.botones.indexOf(blankButton);

    const indexDiff = index - blankIndex;

    if (indexDiff === 1 && index % this.gridWidth !== 0) {
        // Movimiento a la izquierda
        [button.textContent, blankButton.textContent] = [blankButton.textContent, button.textContent];
        this.estado.incrementarMovimientos();
        this.actualizarMovimientos();
    } else if (indexDiff === -1 && blankIndex % this.gridWidth !== 0) {
        // Movimiento a la derecha
        [button.textContent, blankButton.textContent] = [blankButton.textContent, button.textContent];
        this.estado.incrementarMovimientos();
        this.actualizarMovimientos();
    } else if (indexDiff === this.gridWidth || indexDiff === -this.gridWidth) {
        // Movimiento hacia arriba o abajo
        [button.textContent, blankButton.textContent] = [blankButton.textContent, button.textContent];
        this.estado.incrementarMovimientos();
        this.actualizarMovimientos();
    }