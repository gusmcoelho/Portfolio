// Intro Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('loaded');
        // Trigger animations immediately after loader starts fading
        setTimeout(animarScroll, 400);
    }, 1000); // Reduzido para 1s para melhor UX
});

// Mobile Menu
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    } else {
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    }
});

// Fecha menu ao clicar num link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animacoes de scroll simples
const elementos = document.querySelectorAll('.reveal');

function animarScroll() {
    for (let i = 0; i < elementos.length; i++) {
        let alturaDaJanela = window.innerHeight;
        let topo = elementos[i].getBoundingClientRect().top;
        
        if (topo < alturaDaJanela - 50) {
            elementos[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', animarScroll);

// Chama uma vez no inicio pra garantir
animarScroll();
