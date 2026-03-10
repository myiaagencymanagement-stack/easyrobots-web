document.addEventListener('DOMContentLoaded', () => {
    // Nav & Mobile Menu
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    
    // Configuración barra de navegación al scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Menú Hamburguesa
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Cerrar menú mobile al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Intersection Observer para Animaciones On-Scroll
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Dejamos de observar una vez que ya animó
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Seleccionamos todos los elementos con clases de animación
    const animElements = document.querySelectorAll('.reveal, .slide-in-left, .slide-in-right');
    animElements.forEach(el => revealObserver.observe(el));

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los demás
            faqItems.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.faq-content');
                otherItem.classList.remove('active');
                if(otherContent) {
                    otherContent.style.display = 'none';
                }
            });
            
            // Si no estaba activo, lo abrimos
            if (!isActive) {
                item.classList.add('active');
                content.style.display = 'block';
                // Pequeña animación extra para suavizar la entrada (slideDown simulado)
                content.style.opacity = '0';
                setTimeout(() => {
                    content.style.transition = 'opacity 0.3s ease';
                    content.style.opacity = '1';
                }, 10);
            }
        });
    });
});
