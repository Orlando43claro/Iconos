document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.getAttribute('data-icon');
        const progressBar = this.nextElementSibling;

        // Mostrar la barra de progreso
        progressBar.style.display = 'block';

        // Animar la barra de progreso
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.firstChild.style.width = progress + '%';

            if (progress >= 100) {
                clearInterval(interval);
                // Realiza la descarga una vez que la barra de progreso llegue al 100%
                downloadIcon(icon);
            }
        }, 100); // Actualiza cada 100 ms
    });
});

function downloadIcon(icon) {
    const link = document.createElement('a');
    link.href = `https://i.ibb.co/Kx45TZR/IMG-20240927-185755.png`; // Cambia esta URL por el enlace del icono real
    link.download = icon;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}