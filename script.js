function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💗';
    
    let size = Math.random() * 2 + 1; // Tamaño aleatorio entre 1x y 3x
    let duration = Math.random() * 4 + 3; // Duración de la animación

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${size}rem`;
    heart.style.animationDuration = `${duration}s`;

    
    if (Math.random() > 0.6) {
        heart.classList.add('blur');
    }

    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

function generateHeartsAutomatically() {
    for (let i = 0; i < 5; i++) { // Genera más corazones por iteración
        let x = Math.random() * window.innerWidth;
        createHeart(x, window.innerHeight - 10);
    }
}

setInterval(generateHeartsAutomatically, 100); // Mayor frecuencia de generación

document.addEventListener('click', (event) => {
    for (let i = 0; i < 3; i++) { // Al hacer clic, genera más corazones
        createHeart(event.clientX + (Math.random() * 30 - 15), event.clientY + (Math.random() * 30 - 15));
    }
});
