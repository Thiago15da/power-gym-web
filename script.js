// Menú Hamburguesa para móviles (opcional si lo quieres activar más adelante)
function toggleMenu() {
    // Aquí podrías agregar la lógica para mostrar/ocultar menú móvil
    console.log("Menú clickeado");
}

// Efecto Scroll Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Manejo del formulario de inscripción (para que no recargue la página)
document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = this.querySelector('input[type="text"]').value;
    alert('¡Gracias ' + nombre + '! Te contactaremos pronto por WhatsApp para completar tu inscripción en Power Gym.');
    this.reset();
});

console.log("Power Gym MRA - Versión Red Cargada");