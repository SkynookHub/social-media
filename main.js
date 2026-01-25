// Efecto sutil de movimiento en el fondo al mover el mouse
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelector('.background-overlay').style.transform = 
        `translate(${moveX}px, ${moveY}px)`;
});

// Animación de entrada para los botones
const cards = document.querySelectorAll('.link-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100 * index);
});
