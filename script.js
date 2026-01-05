// Script para interactividad básica

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Aquí podrías agregar lógica para el menú hamburguesa en móviles
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if(burger){
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            // Estilos simples para mostrar el menú si se activa
            if (nav.style.display === "flex") {
                nav.style.display = "none";
            } else {
                nav.style.display = "flex";
                nav.style.flexDirection = "column";
                nav.style.position = "absolute";
                nav.style.top = "70px";
                nav.style.right = "0";
                nav.style.width = "50%";
                nav.style.background = "#111";
                nav.style.padding = "20px";
            }
        });
    }
    
    console.log("Power Gym Web cargada correctamente.");
});
