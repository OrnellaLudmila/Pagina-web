document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        let carouselItems = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        setInterval(() => {
            carouselItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active');
        }, 6000); 
    });
});
document.getElementById("form-reserva").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validación de fechas
    const fechaLlegada = new Date(document.getElementById("fecha-llegada").value);
    const fechaSalida = new Date(document.getElementById("fecha-salida").value);
    const today = new Date();

    if (fechaLlegada < today) {
        alert("La fecha de llegada no puede ser anterior a la fecha actual.");
        return;
    }

    if (fechaSalida <= fechaLlegada) {
        alert("La fecha de salida debe ser posterior a la fecha de llegada.");
        return;
    }

  
    alert("¡Reserva enviada con éxito!");
});



