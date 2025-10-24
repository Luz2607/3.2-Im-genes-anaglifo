// Variables globales
let currentMode = 'side-by-side';
let currentFilter = 'all';
let modeIndicator;

// Mapeo de imágenes disponibles
const sideBySideImages = {
    positive: [
        {left: 'imagenes/side by side/positiva 1.1.jpg', right: 'imagenes/side by side/positiva 1.2.jpg'},
        {left: 'imagenes/side by side/positiva 2.1.jpg', right: 'imagenes/side by side/positiva 2.2.jpg'},
        {left: 'imagenes/side by side/positiva 3.1.jpg', right: 'imagenes/side by side/positiva 3.2.jpg'},
        {left: 'imagenes/side by side/positiva 4.1.jpg', right: 'imagenes/side by side/positiva 4.2.jpg'},
        {left: 'imagenes/side by side/positiva 5.1.jpg', right: 'imagenes/side by side/positiva 5.2.jpg'},
        {left: 'imagenes/side by side/positiva 6.1.jpg', right: 'imagenes/side by side/positiva 6.2.jpg'},
        {left: 'imagenes/side by side/positiva 7.1.jpg', right: 'imagenes/side by side/positiva 7.2.jpg'},
        {left: 'imagenes/side by side/positiva 8.1.jpg', right: 'imagenes/side by side/positiva 8.2 .jpg'},
        {left: 'imagenes/side by side/positiva 10.1.jpg', right: 'imagenes/side by side/positiva 10.2.jpg'},
        {left: 'imagenes/side by side/positiva 11.1.jpg', right: 'imagenes/side by side/positiva 11.2.jpg'},
        {left: 'imagenes/side by side/positiva 12.1.jpg', right: 'imagenes/side by side/positiva 12.2.jpg'},
        {left: 'imagenes/side by side/positiva 13.1.jpg', right: 'imagenes/side by side/positiva 13.2.jpg'}
    ],
    neutral: [
        {left: 'imagenes/side by side/nula 1.1.jpg', right: 'imagenes/side by side/nula 1.2.jpg'},
        {left: 'imagenes/side by side/nula 2.1.jpg', right: 'imagenes/side by side/nula 2.2.jpg'},
        {left: 'imagenes/side by side/nula 4.1.jpg', right: 'imagenes/side by side/nula 4.2.jpg'},
        {left: 'imagenes/side by side/nula 5.1.jpg', right: 'imagenes/side by side/nula 5.2.jpg'},
        {left: 'imagenes/side by side/nula 6.1.jpg', right: 'imagenes/side by side/nula 6.2.jpg'},
        {left: 'imagenes/side by side/nula 8.1.jpg', right: 'imagenes/side by side/nula 8.2.jpg'},
        {left: 'imagenes/side by side/nula 9.1.jpg', right: 'imagenes/side by side/nula 9.2.jpg'}
    ],
    negative: [
        {left: 'imagenes/side by side/negativa 1.1.jpg', right: 'imagenes/side by side/negativa 1.2.jpg'},
        {left: 'imagenes/side by side/negativa 2.1.jpg', right: 'imagenes/side by side/negativa 2.2.jpg'},
        {left: 'imagenes/side by side/negativa 4.1.jpg', right: 'imagenes/side by side/negativa 4.2.jpg'},
        {left: 'imagenes/side by side/negativa 5.1.jpg', right: 'imagenes/side by side/negativa 5.2.jpg'},
        {left: 'imagenes/side by side/negativa 6.1.jpg', right: 'imagenes/side by side/negativa 6.2.jpg'},
        {left: 'imagenes/side by side/negativa 7.1.jpg', right: 'imagenes/side by side/negativa 7.2.jpg'},
        {left: 'imagenes/side by side/negativa 8.1.jpg', right: 'imagenes/side by side/negativa 8.2.jpg'},
        {left: 'imagenes/side by side/negativa 10.1.jpg', right: 'imagenes/side by side/negativa 10.2.jpg'}
    ]
};

const anaglyphImages = {
    positive: [
        'imagenes/positiva/disparidad positiva 1.jpg',
        'imagenes/positiva/disparidad positiva 2.jpg',
        'imagenes/positiva/disparidad positiva 3.jpg',
        'imagenes/positiva/disparidad positiva 4.jpg',
        'imagenes/positiva/disparidad positiva  5.jpg',
        'imagenes/positiva/disparidad positiva 6.jpg',
        'imagenes/positiva/disparidad positiva 7.jpg',
        'imagenes/positiva/disparidad positiva 8.jpg',
        'imagenes/positiva/disparidad positiva 9.jpg',
        'imagenes/positiva/disparidad positiva 10.jpg',
        'imagenes/positiva/disparidad positiva 11.jpg',
        'imagenes/positiva/disparidad positiva 12.jpg',
        'imagenes/positiva/disparidad positiva 13.jpg'
    ],
    neutral: [
        'imagenes/nula/nula 1.jpg',
        'imagenes/nula/nula 2.jpg',
        'imagenes/nula/nula 3.jpg',
        'imagenes/nula/nula 4.jpg',
        'imagenes/nula/nula 5.jpg',
        'imagenes/nula/nula 6.jpg',
        'imagenes/nula/nula 7.jpg',
        'imagenes/nula/nula 8.jpg',
        'imagenes/nula/nula 9.jpg'
    ],
    negative: [
        'imagenes/negativa/negativa 1.jpg',
        'imagenes/negativa/negativa 2.jpg',
        'imagenes/negativa/negativa 3.jpg',
        'imagenes/negativa/negativa 4.jpg',
        'imagenes/negativa/negativa 5.jpg',
        'imagenes/negativa/negativa 6.jpg',
        'imagenes/negativa/negativa 7.jpg',
        'imagenes/negativa/negativa 8.jpg',
        'imagenes/negativa/negativa 9.JPG',
        'imagenes/negativa/negativa 10.JPG'
    ]
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Crear indicador de modo
    createModeIndicator();
    
    // Configurar modo inicial
    setMode('side-by-side');
    
    // Event listeners para los botones de modo
    const sideBySideBtn = document.getElementById('sideBySideBtn');
    const anaglyphBtn = document.getElementById('anaglyphBtn');
    const anaglyphSideBySideBtn = document.getElementById('anaglyphSideBySideBtn');
    
    if (sideBySideBtn) {
        sideBySideBtn.addEventListener('click', () => setMode('side-by-side'));
    }
    
    if (anaglyphBtn) {
        anaglyphBtn.addEventListener('click', () => setMode('anaglyph'));
    }
    
    if (anaglyphSideBySideBtn) {
        anaglyphSideBySideBtn.addEventListener('click', () => setMode('anaglyph-sidebyside'));
    }
    
    // Inicializar carruseles si existen
    initializeCarousels();
    
    // Animaciones de entrada
    initializeAnimations();
    
    // Event listeners para navegación
    initializeNavigation();
    
    console.log('DepthVerse inicializado correctamente');
}

function createModeIndicator() {
    // Verificar si ya existe
    if (document.getElementById('modeIndicator')) return;
    
    modeIndicator = document.createElement('div');
    modeIndicator.className = 'mode-indicator';
    modeIndicator.id = 'modeIndicator';
    document.body.appendChild(modeIndicator);
}

function setMode(mode) {
    currentMode = mode;
    
    if (mode === 'anaglyph' || mode === 'anaglyph-sidebyside') {
        rebuildCarousels();
    } else {
        const imageContainers = document.querySelectorAll('.image-container');
        imageContainers.forEach(container => {
            container.classList.remove('side-by-side', 'anaglyph', 'anaglyph-sidebyside');
            container.classList.add('side-by-side');
        });
    }
    
    updateActiveButton(mode);
    showModeIndicator(mode);
    localStorage.setItem('stereoMode', mode);
}

function updateActiveButton(mode) {
    // Remover clase active solo de los botones de modo
    const modeButtons = ['sideBySideBtn', 'anaglyphBtn', 'anaglyphSideBySideBtn'];
    modeButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.classList.remove('active');
        }
    });
    
    // Agregar clase active al botón correspondiente
    let activeButton;
    if (mode === 'side-by-side') {
        activeButton = document.getElementById('sideBySideBtn');
    } else if (mode === 'anaglyph') {
        activeButton = document.getElementById('anaglyphBtn');
    } else if (mode === 'anaglyph-sidebyside') {
        activeButton = document.getElementById('anaglyphSideBySideBtn');
    }
    
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function showModeIndicator(mode) {
    if (!modeIndicator) return;
    
    let modeText;
    if (mode === 'side-by-side') {
        modeText = '👁️ Modo: Side by Side';
    } else if (mode === 'anaglyph') {
        modeText = '🥽 Modo: Anaglifo';
    } else if (mode === 'anaglyph-sidebyside') {
        modeText = '🕶️ Modo: Anaglifo S×S';
    }
    
    modeIndicator.textContent = modeText;
    modeIndicator.classList.add('show');
    
    setTimeout(() => {
        modeIndicator.classList.remove('show');
    }, 3000);
}

function initializeCarousels() {
    // Configurar todos los carruseles
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        // Event listener para cambios de slide
        carousel.addEventListener('slide.bs.carousel', function(event) {
            // Aplicar el modo actual después de la transición
            setTimeout(() => {
                setMode(currentMode);
            }, 150);
        });
        
        // Event listener para cuando termina la transición
        carousel.addEventListener('slid.bs.carousel', function(event) {
            // Añadir animación de entrada
            const activeItem = event.target.querySelector('.carousel-item.active');
            if (activeItem) {
                activeItem.classList.add('fade-in-up');
                setTimeout(() => {
                    activeItem.classList.remove('fade-in-up');
                }, 600);
            }
        });
    });
}

function initializeAnimations() {
    // Animaciones de scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos animables
    const animatableElements = document.querySelectorAll(
        '.feature-card, .tech-card, .stat-item, .disparity-item, .method-card'
    );
    
    animatableElements.forEach(el => {
        observer.observe(el);
    });
}

function initializeNavigation() {
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Funciones de utilidad para manejo de imágenes
function preloadImages() {
    const images = document.querySelectorAll('.left-image, .right-image');
    let loadedCount = 0;
    
    images.forEach(img => {
        const newImg = new Image();
        newImg.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                console.log('Todas las imágenes precargadas');
            }
        };
        newImg.src = img.src;
    });
}

// Función para cambiar imágenes dinámicamente
function updateCarouselImages(carouselId, imageData) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const carouselInner = carousel.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';
    
    imageData.forEach((data, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        carouselItem.innerHTML = `
            <div class="image-container ${currentMode}">
                <img src="${data.leftImage}" class="left-image" alt="${data.leftAlt || `Imagen izquierda ${index + 1}`}">
                <img src="${data.rightImage}" class="right-image" alt="${data.rightAlt || `Imagen derecha ${index + 1}`}">
                ${data.overlay ? `
                    <div class="image-overlay">
                        <h5>${data.overlay.title}</h5>
                        <p>${data.overlay.description}</p>
                    </div>
                ` : ''}
            </div>
        `;
        
        carouselInner.appendChild(carouselItem);
    });
    
    // Actualizar indicadores
    updateCarouselIndicators(carousel, imageData.length);
}

function updateCarouselIndicators(carousel, count) {
    const indicators = carousel.querySelector('.carousel-indicators');
    if (!indicators) return;
    
    indicators.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('data-bs-target', `#${carousel.id}`);
        button.setAttribute('data-bs-slide-to', i.toString());
        if (i === 0) button.classList.add('active');
        
        indicators.appendChild(button);
    }
}



// Función para pantalla completa
function toggleFullscreen() {
    const activeCarousel = document.querySelector('.carousel-item.active .image-container');
    if (!activeCarousel) return;
    
    if (!document.fullscreenElement) {
        activeCarousel.requestFullscreen().catch(err => {
            console.log('Error al entrar en pantalla completa:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Función para abrir imagen en pantalla completa al hacer clic
function openFullscreen(imageContainer) {
    if (!document.fullscreenElement) {
        imageContainer.requestFullscreen().catch(err => {
            console.log('Error al entrar en pantalla completa:', err);
        });
    }
}

// Event listeners para teclas de acceso rápido
document.addEventListener('keydown', function(e) {
    // Evitar interferir con inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    switch(e.key) {
        case '1':
            setMode('side-by-side');
            e.preventDefault();
            break;
        case '2':
            setMode('anaglyph');
            e.preventDefault();
            break;
        case 'f':
        case 'F':
            if (e.ctrlKey || e.metaKey) return; // Evitar conflicto con Ctrl+F
            toggleFullscreen();
            e.preventDefault();
            break;
        case 'ArrowLeft':
            if (e.ctrlKey) {
                const prevBtn = document.querySelector('.carousel-control-prev');
                if (prevBtn) prevBtn.click();
                e.preventDefault();
            }
            break;
        case 'ArrowRight':
            if (e.ctrlKey) {
                const nextBtn = document.querySelector('.carousel-control-next');
                if (nextBtn) nextBtn.click();
                e.preventDefault();
            }
            break;
        case 'Escape':
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            break;
    }
});

// Funciones específicas para cada página
function initializeGalleryPage() {
    // Configuración específica para la página de galería
    const disparityTabs = document.getElementById('disparityTabs');
    if (disparityTabs) {
        disparityTabs.addEventListener('shown.bs.tab', function(event) {
            // Aplicar modo actual cuando se cambia de tab
            setTimeout(() => {
                setMode(currentMode);
            }, 100);
        });
    }
}

function initializeAboutPage() {
    // Configuración específica para la página about
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Cargar preferencias guardadas
function loadUserPreferences() {
    const savedMode = localStorage.getItem('stereoMode');
    if (savedMode && (savedMode === 'side-by-side' || savedMode === 'anaglyph')) {
        setMode(savedMode);
    }
}

// Inicialización específica por página
window.addEventListener('load', function() {
    // Cargar preferencias
    loadUserPreferences();
    
    // Precargar imágenes
    preloadImages();
    
    // Inicialización específica por página
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'gallery.html':
            initializeGalleryPage();
            break;
        case 'about.html':
            initializeAboutPage();
            break;
    }
    
    // Mostrar indicador de carga completada
    console.log('StereoVision Pro cargado completamente');
});

// Función para mostrar información de ayuda
function showHelp() {
    const helpModal = `
        <div class="modal fade" id="helpModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-light">
                    <div class="modal-header border-secondary">
                        <h5 class="modal-title">Ayuda - Atajos de Teclado</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-unstyled">
                            <li><kbd>1</kbd> - Cambiar a modo Side by Side</li>
                            <li><kbd>2</kbd> - Cambiar a modo Anaglifo</li>
                            <li><kbd>F</kbd> - Pantalla completa</li>
                            <li><kbd>Ctrl</kbd> + <kbd>←</kbd> - Imagen anterior</li>
                            <li><kbd>Ctrl</kbd> + <kbd>→</kbd> - Imagen siguiente</li>
                            <li><kbd>Esc</kbd> - Salir de pantalla completa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insertar modal si no existe
    if (!document.getElementById('helpModal')) {
        document.body.insertAdjacentHTML('beforeend', helpModal);
    }
    
    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById('helpModal'));
    modal.show();
}

// Función para establecer filtros
function setFilter(filter) {
    currentFilter = filter;
    rebuildCarousels();
    console.log(`Filtro cambiado a: ${filter}`);
}

// Funciones auxiliares para mapeo de imágenes
function getAnaglyphFromSideBySide(sideBySideSrc) {
    const fileName = sideBySideSrc.split('/').pop();
    const mapping = {
        'positiva 1.1.jpg': 'imagenes/positiva/disparidad positiva 1.jpg',
        'positiva 2.1.jpg': 'imagenes/positiva/disparidad positiva 2.jpg',
        'positiva 3.1.jpg': 'imagenes/positiva/disparidad positiva 3.jpg',
        'positiva 4.1.jpg': 'imagenes/positiva/disparidad positiva 4.jpg',
        'positiva 5.1.jpg': 'imagenes/positiva/disparidad positiva  5.jpg',
        'positiva 6.1.jpg': 'imagenes/positiva/disparidad positiva 6.jpg',
        'positiva 7.1.jpg': 'imagenes/positiva/disparidad positiva 7.jpg',
        'positiva 8.1.jpg': 'imagenes/positiva/disparidad positiva 8.jpg',
        'positiva 10.1.jpg': 'imagenes/positiva/disparidad positiva 10.jpg',
        'nula 1.1.jpg': 'imagenes/nula/nula 1.jpg',
        'nula 2.1.jpg': 'imagenes/nula/nula 2.jpg',
        'nula 4.1.jpg': 'imagenes/nula/nula 4.jpg',
        'nula 5.1.jpg': 'imagenes/nula/nula 5.jpg',
        'nula 6.1.jpg': 'imagenes/nula/nula 6.jpg',
        'nula 8.1.jpg': 'imagenes/nula/nula 8.jpg',
        'nula 9.1.jpg': 'imagenes/nula/nula 9.jpg',
        'negativa 1.1.jpg': 'imagenes/negativa/negativa 1.jpg',
        'negativa 2.1.jpg': 'imagenes/negativa/negativa 2.jpg',
        'negativa 4.1.jpg': 'imagenes/negativa/negativa 4.jpg',
        'negativa 5.1.jpg': 'imagenes/negativa/negativa 5.jpg',
        'negativa 6.1.jpg': 'imagenes/negativa/negativa 6.jpg',
        'negativa 7.1.jpg': 'imagenes/negativa/negativa 7.jpg',
        'negativa 8.1.jpg': 'imagenes/negativa/negativa 8.jpg',
        'negativa 10.1.jpg': 'imagenes/negativa/negativa 10.JPG'
    };
    return mapping[fileName] || null;
}

// Restaurar la función rebuildCarousels para modo anaglifo
function rebuildCarousels() {
    rebuildCarousel('positive', 'positiveCarousel');
    rebuildCarousel('neutral', 'neutralCarousel');
    rebuildCarousel('negative', 'negativeCarousel');
}

function rebuildCarousel(type, carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const carouselInner = carousel.querySelector('.carousel-inner');
    const indicators = carousel.querySelector('.carousel-indicators');
    
    let images;
    
    if (currentMode === 'anaglyph' || currentMode === 'anaglyph-sidebyside') {
        images = anaglyphImages[type];
    } else {
        images = sideBySideImages[type];
    }
    
    carouselInner.innerHTML = '';
    indicators.innerHTML = '';
    
    images.forEach((img, index) => {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', `#${carouselId}`);
        indicator.setAttribute('data-bs-slide-to', index.toString());
        if (index === 0) indicator.classList.add('active');
        indicators.appendChild(indicator);
        
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        const container = document.createElement('div');
        container.className = `image-container ${currentMode}`;
        container.onclick = () => openFullscreen(container);
        
        let leftSrc, rightSrc;
        
        if (currentMode === 'anaglyph' || currentMode === 'anaglyph-sidebyside') {
            leftSrc = rightSrc = img;
        } else {
            leftSrc = img.left;
            rightSrc = img.right;
        }
        
        container.innerHTML = `
            <img src="${leftSrc}" class="left-image" alt="${type} ${index + 1}">
            <img src="${rightSrc}" class="right-image" alt="${type} ${index + 1}">
            <div class="image-overlay">
                <h5>${getImageTitle(type, index)}</h5>
                <p>${getImageDescription(type, index)}</p>
            </div>
        `;
        
        slide.appendChild(container);
        carouselInner.appendChild(slide);
    });
}

function getSideBySideFromCurrent(currentSrc) {
    // Detectar si ya es side-by-side
    if (currentSrc.includes('/side by side/')) {
        const fileName = currentSrc.split('/').pop();
        if (fileName.includes('.1.')) {
            return {
                left: currentSrc,
                right: currentSrc.replace('.1.', '.2.')
            };
        }
    }
    
    // Mapear desde anaglifo
    const fileName = currentSrc.split('/').pop();
    const mapping = {
        'disparidad positiva 1.jpg': {left: 'imagenes/side by side/positiva 1.1.jpg', right: 'imagenes/side by side/positiva 1.2.jpg'},
        'disparidad positiva 2.jpg': {left: 'imagenes/side by side/positiva 2.1.jpg', right: 'imagenes/side by side/positiva 2.2.jpg'},
        'disparidad positiva 3.jpg': {left: 'imagenes/side by side/positiva 3.1.jpg', right: 'imagenes/side by side/positiva 3.2.jpg'},
        'disparidad positiva 4.jpg': {left: 'imagenes/side by side/positiva 4.1.jpg', right: 'imagenes/side by side/positiva 4.2.jpg'},
        'disparidad positiva  5.jpg': {left: 'imagenes/side by side/positiva 5.1.jpg', right: 'imagenes/side by side/positiva 5.2.jpg'},
        'disparidad positiva 6.jpg': {left: 'imagenes/side by side/positiva 6.1.jpg', right: 'imagenes/side by side/positiva 6.2.jpg'},
        'disparidad positiva 7.jpg': {left: 'imagenes/side by side/positiva 7.1.jpg', right: 'imagenes/side by side/positiva 7.2.jpg'},
        'disparidad positiva 8.jpg': {left: 'imagenes/side by side/positiva 8.1.jpg', right: 'imagenes/side by side/positiva 8.2 .jpg'},
        'disparidad positiva 10.jpg': {left: 'imagenes/side by side/positiva 10.1.jpg', right: 'imagenes/side by side/positiva 10.2.jpg'},
        'nula 1.jpg': {left: 'imagenes/side by side/nula 1.1.jpg', right: 'imagenes/side by side/nula 1.2.jpg'},
        'nula 2.jpg': {left: 'imagenes/side by side/nula 2.1.jpg', right: 'imagenes/side by side/nula 2.2.jpg'},
        'nula 4.jpg': {left: 'imagenes/side by side/nula 4.1.jpg', right: 'imagenes/side by side/nula 4.2.jpg'},
        'nula 5.jpg': {left: 'imagenes/side by side/nula 5.1.jpg', right: 'imagenes/side by side/nula 5.2.jpg'},
        'nula 6.jpg': {left: 'imagenes/side by side/nula 6.1.jpg', right: 'imagenes/side by side/nula 6.2.jpg'},
        'nula 8.jpg': {left: 'imagenes/side by side/nula 8.1.jpg', right: 'imagenes/side by side/nula 8.2.jpg'},
        'nula 9.jpg': {left: 'imagenes/side by side/nula 9.1.jpg', right: 'imagenes/side by side/nula 9.2.jpg'},
        'negativa 1.jpg': {left: 'imagenes/side by side/negativa 1.1.jpg', right: 'imagenes/side by side/negativa 1.2.jpg'},
        'negativa 2.jpg': {left: 'imagenes/side by side/negativa 2.1.jpg', right: 'imagenes/side by side/negativa 2.2.jpg'},
        'negativa 4.jpg': {left: 'imagenes/side by side/negativa 4.1.jpg', right: 'imagenes/side by side/negativa 4.2.jpg'},
        'negativa 5.jpg': {left: 'imagenes/side by side/negativa 5.1.jpg', right: 'imagenes/side by side/negativa 5.2.jpg'},
        'negativa 6.jpg': {left: 'imagenes/side by side/negativa 6.1.jpg', right: 'imagenes/side by side/negativa 6.2.jpg'},
        'negativa 7.jpg': {left: 'imagenes/side by side/negativa 7.1.jpg', right: 'imagenes/side by side/negativa 7.2.jpg'},
        'negativa 8.jpg': {left: 'imagenes/side by side/negativa 8.1.jpg', right: 'imagenes/side by side/negativa 8.2.jpg'},
        'negativa 10.JPG': {left: 'imagenes/side by side/negativa 10.1.jpg', right: 'imagenes/side by side/negativa 10.2.jpg'}
    };
    return mapping[fileName] || null;
}

function getOriginalSources(currentSrc) {
    // Extraer la ruta relativa de la URL completa
    const relativePath = currentSrc.substring(currentSrc.indexOf('imagenes/'));
    
    // Mapear de vuelta a side-by-side
    const reverseMapping = {
        'imagenes/positiva/disparidad positiva 1.jpg': {left: 'imagenes/side by side/positiva 1.1.jpg', right: 'imagenes/side by side/positiva 1.2.jpg'},
        'imagenes/positiva/disparidad positiva 2.jpg': {left: 'imagenes/side by side/positiva 2.1.jpg', right: 'imagenes/side by side/positiva 2.2.jpg'},
        'imagenes/positiva/disparidad positiva 3.jpg': {left: 'imagenes/side by side/positiva 3.1.jpg', right: 'imagenes/side by side/positiva 3.2.jpg'},
        'imagenes/positiva/disparidad positiva 4.jpg': {left: 'imagenes/side by side/positiva 4.1.jpg', right: 'imagenes/side by side/positiva 4.2.jpg'},
        'imagenes/positiva/disparidad positiva  5.jpg': {left: 'imagenes/side by side/positiva 5.1.jpg', right: 'imagenes/side by side/positiva 5.2.jpg'},
        'imagenes/positiva/disparidad positiva 6.jpg': {left: 'imagenes/side by side/positiva 6.1.jpg', right: 'imagenes/side by side/positiva 6.2.jpg'},
        'imagenes/positiva/disparidad positiva 7.jpg': {left: 'imagenes/side by side/positiva 7.1.jpg', right: 'imagenes/side by side/positiva 7.2.jpg'},
        'imagenes/positiva/disparidad positiva 8.jpg': {left: 'imagenes/side by side/positiva 8.1.jpg', right: 'imagenes/side by side/positiva 8.2 .jpg'},
        'imagenes/positiva/disparidad positiva 10.jpg': {left: 'imagenes/side by side/positiva 10.1.jpg', right: 'imagenes/side by side/positiva 10.2.jpg'},
        'imagenes/nula/nula 1.jpg': {left: 'imagenes/side by side/nula 1.1.jpg', right: 'imagenes/side by side/nula 1.2.jpg'},
        'imagenes/nula/nula 2.jpg': {left: 'imagenes/side by side/nula 2.1.jpg', right: 'imagenes/side by side/nula 2.2.jpg'},
        'imagenes/nula/nula 4.jpg': {left: 'imagenes/side by side/nula 4.1.jpg', right: 'imagenes/side by side/nula 4.2.jpg'},
        'imagenes/nula/nula 5.jpg': {left: 'imagenes/side by side/nula 5.1.jpg', right: 'imagenes/side by side/nula 5.2.jpg'},
        'imagenes/nula/nula 6.jpg': {left: 'imagenes/side by side/nula 6.1.jpg', right: 'imagenes/side by side/nula 6.2.jpg'},
        'imagenes/nula/nula 8.jpg': {left: 'imagenes/side by side/nula 8.1.jpg', right: 'imagenes/side by side/nula 8.2.jpg'},
        'imagenes/nula/nula 9.jpg': {left: 'imagenes/side by side/nula 9.1.jpg', right: 'imagenes/side by side/nula 9.2.jpg'},
        'imagenes/negativa/negativa 1.jpg': {left: 'imagenes/side by side/negativa 1.1.jpg', right: 'imagenes/side by side/negativa 1.2.jpg'},
        'imagenes/negativa/negativa 2.jpg': {left: 'imagenes/side by side/negativa 2.1.jpg', right: 'imagenes/side by side/negativa 2.2.jpg'},
        'imagenes/negativa/negativa 4.jpg': {left: 'imagenes/side by side/negativa 4.1.jpg', right: 'imagenes/side by side/negativa 4.2.jpg'},
        'imagenes/negativa/negativa 5.jpg': {left: 'imagenes/side by side/negativa 5.1.jpg', right: 'imagenes/side by side/negativa 5.2.jpg'},
        'imagenes/negativa/negativa 6.jpg': {left: 'imagenes/side by side/negativa 6.1.jpg', right: 'imagenes/side by side/negativa 6.2.jpg'},
        'imagenes/negativa/negativa 7.jpg': {left: 'imagenes/side by side/negativa 7.1.jpg', right: 'imagenes/side by side/negativa 7.2.jpg'},
        'imagenes/negativa/negativa 8.jpg': {left: 'imagenes/side by side/negativa 8.1.jpg', right: 'imagenes/side by side/negativa 8.2.jpg'},
        'imagenes/negativa/negativa 10.JPG': {left: 'imagenes/side by side/negativa 10.1.jpg', right: 'imagenes/side by side/negativa 10.2.jpg'}
    };
    return reverseMapping[relativePath] || null;
}

// Función para reconstruir un carrusel específico
function rebuildCarousel(type, carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const carouselInner = carousel.querySelector('.carousel-inner');
    const indicators = carousel.querySelector('.carousel-indicators');
    
    let images = [];
    
    // Obtener imágenes según el filtro
    if (currentFilter === 'all') {
        images = [...imageMap[type].sidebyside, ...imageMap[type].anaglyphonly];
    } else if (currentFilter === 'sidebyside-only') {
        images = imageMap[type].sidebyside;
    } else if (currentFilter === 'anaglyph-only') {
        images = [...imageMap[type].sidebyside, ...imageMap[type].anaglyphonly];
    }
    
    // Limpiar contenido
    carouselInner.innerHTML = '';
    indicators.innerHTML = '';
    
    // Crear slides
    images.forEach((img, index) => {
        // Crear indicador
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', `#${carouselId}`);
        indicator.setAttribute('data-bs-slide-to', index.toString());
        if (index === 0) indicator.classList.add('active');
        indicators.appendChild(indicator);
        
        // Crear slide
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        const container = document.createElement('div');
        container.className = `image-container ${currentMode}`;
        container.onclick = () => openFullscreen(container);
        
        let leftSrc, rightSrc;
        
        if (currentFilter === 'anaglyph-only') {
            // Mostrar imagen anaglifo real
            leftSrc = rightSrc = img.anaglyph;
            container.className = 'image-container anaglyph';
        } else if (currentFilter === 'sidebyside-only') {
            // Mostrar imágenes side by side
            leftSrc = img.left;
            rightSrc = img.right;
            container.className = 'image-container side-by-side';
        }
        
        container.innerHTML = `
            <img src="${leftSrc}" class="left-image" alt="${type} ${index + 1} - Ojo Izquierdo">
            <img src="${rightSrc}" class="right-image" alt="${type} ${index + 1} - Ojo Derecho">
            <div class="image-overlay">
                <h5>${getImageTitle(type, index)}</h5>
                <p>${getImageDescription(type, index)}</p>
            </div>
        `;
        
        slide.appendChild(container);
        carouselInner.appendChild(slide);
    });
}

// Funciones auxiliares para títulos y descripciones
function getImageTitle(type, index) {
    const titles = {
        positive: [
            'Efecto de Emergencia Básico', 'Profundidad Moderada', 'Efecto Tridimensional Intenso',
            'Proyección Avanzada', 'Emergencia Múltiple', 'Efecto de Alcance',
            'Profundidad Dinámica', 'Emergencia Extrema', 'Efecto Inmersivo Completo',
            'Proyección Máxima', 'Emergencia Compleja', 'Profundidad Avanzada', 'Efecto Total'
        ],
        neutral: [
            'Plano de Referencia', 'Equilibrio Visual', 'Punto de Convergencia',
            'Estabilidad Binocular', 'Referencia Central', 'Fusión Perfecta',
            'Comodidad Visual', 'Línea Base', 'Equilibrio Estereoscópico'
        ],
        negative: [
            'Profundidad Básica', 'Efecto de Ventana', 'Recesión Moderada',
            'Profundidad Intensa', 'Efecto de Túnel', 'Recesión Avanzada',
            'Profundidad Extrema', 'Inmersión Completa', 'Efecto Abismal', 'Profundidad Máxima'
        ]
    };
    return titles[type][index] || `${type} ${index + 1}`;
}

function getImageDescription(type, index) {
    const descriptions = {
        positive: [
            'Objetos simples que sobresalen del plano de la pantalla',
            'Elementos con mayor separación binocular hacia adelante',
            'Mayor disparidad que crea sensación de proximidad',
            'Objetos que parecen flotar frente al observador',
            'Varios elementos con diferentes niveles de profundidad',
            'Sensación de que los objetos se extienden hacia ti',
            'Elementos que crean capas de profundidad progresiva',
            'Máximo efecto de proyección hacia el espectador',
            'Combinación de elementos con disparidad positiva intensa'
        ],
        neutral: [
            'Imagen base sin desplazamiento binocular',
            'Elementos alineados perfectamente en el plano de pantalla',
            'Zona donde ambos ojos convergen naturalmente',
            'Imagen estable sin tensión visual',
            'Punto neutro para comparar otras disparidades',
            'Ambas imágenes se fusionan sin esfuerzo',
            'Visualización relajada y natural',
            'Referencia para medir efectos de profundidad',
            'Estado ideal de percepción tridimensional'
        ],
        negative: [
            'Elementos que se hunden ligeramente en la pantalla',
            'Sensación de mirar a través de una ventana',
            'Objetos que retroceden hacia el fondo',
            'Mayor separación que crea distancia visual',
            'Sensación de profundidad como un túnel',
            'Elementos que se alejan significativamente',
            'Máximo efecto de hundimiento visual',
            'Sensación de estar dentro de la imagen',
            'Profundidad que parece infinita hacia el interior'
        ]
    };
    return descriptions[type][index] || `Efecto de disparidad ${type}`;
}

// Exportar funciones para uso global
window.StereoVision = {
    setMode,
    toggleFullscreen,
    showHelp,
    updateCarouselImages
};

window.setFilter = setFilter;