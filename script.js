document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        const iconName = this.getAttribute('data-icon');
        const iconUrl = iconName; // Ruta del icono directamente en la misma ruta que HTML
        const progressBar = this.nextElementSibling;
        const progress = progressBar.querySelector('.progress');

        // Mostrar la barra de progreso
        progressBar.style.display = 'block';

        // Reiniciar el progreso
        progress.style.width = '0%';

        let progressValue = 0;

        // Animar la barra de progreso
        const interval = setInterval(() => {
            progressValue += 10;
            progress.style.width = progressValue + '%';

            if (progressValue >= 100) {
                clearInterval(interval);
                // Realiza la descarga una vez que la barra de progreso llegue al 100%
                downloadIcon(iconUrl, iconName);
                // Esconde la barra de progreso después de la descarga
                setTimeout(() => {
                    progressBar.style.display = 'none';
                }, 500);
            }
        }, 100); // Actualiza cada 100 ms
    });
});

function downloadIcon(url, name) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
