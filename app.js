document.getElementById('open-btn').addEventListener('click', function() {
    const envelope = document.querySelector('.envelope');
    const container = document.getElementById('envelope-container');
    const content = document.getElementById('main-content');

    // 1. Iniciar animación del sobre
    envelope.classList.add('open');
    this.style.display = 'none'; // Ocultar el botón

    // 2. Esperar a que termine la animación para mostrar el video
    setTimeout(() => {
        container.style.display = 'none'; // Desaparece el sobre totalmente
        content.classList.remove('hidden');
        
        // Pequeño delay para el fade-in del contenido
        setTimeout(() => {
            content.classList.add('visible');
        }, 100);
    }, 1200); // Tiempo igual a la transición de CSS
});