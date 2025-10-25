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
    try {
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
        
        // Event listeners para contenedores de imagen
        initializeImageContainers();
        
        console.log('DepthVerse inicializado correctamente');
    } catch (error) {
        console.error('Error inicializando aplicación:', error);
    }
}

function createModeIndicator() {
    // Verificar si ya existe
    if (document.getElementById('modeIndicator')) return;
    
    try {
        modeIndicator = document.createElement('div');
        modeIndicator.className = 'mode-indicator';
        modeIndicator.id = 'modeIndicator';
        document.body.appendChild(modeIndicator);
    } catch (error) {
        console.error('Error creando indicador de modo:', error);
    }
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
    
    const modeTexts = {
        'side-by-side': '👁️ Modo: Side by Side',
        'anaglyph': '🥽 Modo: Anaglifo',
        'anaglyph-sidebyside': '🕶️ Modo: Anaglifo S×S'
    };
    
    const modeText = modeTexts[mode] || 'Modo desconocido';
    modeIndicator.textContent = modeText;
    modeIndicator.classList.add('show');
    
    setTimeout(() => {
        if (modeIndicator) {
            modeIndicator.classList.remove('show');
        }
    }, 3000);
}

function initializeCarousels() {
    // Configurar todos los carruseles
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        
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
    try {
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
        const animatableSelectors = [
            '.feature-card', '.tech-card', '.stat-item', 
            '.disparity-item', '.method-card'
        ];
        const animatableElements = document.querySelectorAll(animatableSelectors.join(', '));
        
        animatableElements.forEach(el => {
            observer.observe(el);
        });
    } catch (error) {
        console.error('Error inicializando animaciones:', error);
    }
}

function initializeNavigation() {
    try {
        // Smooth scroll para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
        
        // Navbar scroll effect
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');
        
        if (navbar) {
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
    } catch (error) {
        console.error('Error inicializando navegación:', error);
    }
}

// Función para inicializar event listeners de contenedores de imagen
function initializeImageContainers() {
    try {
        // Usar delegación de eventos para manejar contenedores dinámicos
        document.addEventListener('click', function(e) {
            const imageContainer = e.target.closest('.image-container');
            if (imageContainer) {
                openFullscreen(imageContainer);
            }
        });
    } catch (error) {
        console.error('Error inicializando contenedores de imagen:', error);
    }
}

// Funciones de utilidad para manejo de imágenes
function preloadImages() {
    try {
        const images = document.querySelectorAll('.left-image, .right-image');
        let loadedCount = 0;
        
        if (images.length === 0) {
            console.log('No hay imágenes para precargar');
            return;
        }
        
        images.forEach(img => {
            if (img && img.src) {
                const newImg = new Image();
                newImg.onload = () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        console.log('Todas las imágenes precargadas');
                    }
                };
                newImg.onerror = () => {
                    console.warn(`Error cargando imagen: ${img.src}`);
                    loadedCount++;
                };
                newImg.src = img.src;
            }
        });
    } catch (error) {
        console.error('Error precargando imágenes:', error);
    }
}

// Función para cambiar imágenes dinámicamente
function updateCarouselImages(carouselId, imageData) {
    const carousel = document.getElementById(carouselId);
    if (!carousel || !Array.isArray(imageData)) return;
    
    try {
        const carouselInner = carousel.querySelector('.carousel-inner');
        if (!carouselInner) return;
        
        carouselInner.innerHTML = '';
        
        imageData.forEach((data, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            const container = document.createElement('div');
            container.className = `image-container ${currentMode}`;
            
            const leftImg = document.createElement('img');
            leftImg.src = data.leftImage || '';
            leftImg.className = 'left-image';
            leftImg.alt = data.leftAlt || `Imagen izquierda ${index + 1}`;
            
            const rightImg = document.createElement('img');
            rightImg.src = data.rightImage || '';
            rightImg.className = 'right-image';
            rightImg.alt = data.rightAlt || `Imagen derecha ${index + 1}`;
            
            container.appendChild(leftImg);
            container.appendChild(rightImg);
            
            if (data.overlay) {
                const overlay = document.createElement('div');
                overlay.className = 'image-overlay';
                
                const title = document.createElement('h5');
                title.textContent = data.overlay.title || '';
                
                const description = document.createElement('p');
                description.textContent = data.overlay.description || '';
                
                overlay.appendChild(title);
                overlay.appendChild(description);
                container.appendChild(overlay);
            }
            
            carouselItem.appendChild(container);
            carouselInner.appendChild(carouselItem);
        });
        
        // Actualizar indicadores
        updateCarouselIndicators(carousel, imageData.length);
    } catch (error) {
        console.error('Error actualizando carrusel:', error);
    }
}

function updateCarouselIndicators(carousel, count) {
    if (!carousel || typeof count !== 'number') return;
    
    try {
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
    } catch (error) {
        console.error('Error actualizando indicadores:', error);
    }
}



// Función para pantalla completa
function toggleFullscreen() {
    try {
        const activeCarousel = document.querySelector('.carousel-item.active .image-container');
        if (!activeCarousel) return;
        
        if (!document.fullscreenElement) {
            if (activeCarousel.requestFullscreen) {
                activeCarousel.requestFullscreen().catch(err => {
                    console.error('Error al entrar en pantalla completa:', err);
                });
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(err => {
                    console.error('Error al salir de pantalla completa:', err);
                });
            }
        }
    } catch (error) {
        console.error('Error en toggle fullscreen:', error);
    }
}

// Función para abrir imagen en pantalla completa al hacer clic
function openFullscreen(imageContainer) {
    if (!imageContainer) return;
    
    try {
        if (!document.fullscreenElement && imageContainer.requestFullscreen) {
            imageContainer.requestFullscreen().catch(err => {
                console.error('Error al entrar en pantalla completa:', err);
            });
        }
    } catch (error) {
        console.error('Error abriendo pantalla completa:', error);
    }
}

// Event listeners para teclas de acceso rápido
document.addEventListener('keydown', function(e) {
    // Evitar interferir con inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    try {
        const validKeys = ['1', '2', '3', 'f', 'F', 'ArrowLeft', 'ArrowRight', 'Escape'];
        if (!validKeys.includes(e.key)) return;
        
        switch(e.key) {
            case '1':
                setMode('side-by-side');
                e.preventDefault();
                break;
            case '2':
                setMode('anaglyph');
                e.preventDefault();
                break;
            case '3':
                setMode('anaglyph-sidebyside');
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
                if (document.fullscreenElement && document.exitFullscreen) {
                    document.exitFullscreen().catch(err => {
                        console.error('Error saliendo de pantalla completa:', err);
                    });
                }
                break;
        }
    } catch (error) {
        console.error('Error en manejo de teclas:', error);
    }
});

// Funciones específicas para cada página
function initializeGalleryPage() {
    try {
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
    } catch (error) {
        console.error('Error inicializando página de galería:', error);
    }
}

function initializeAboutPage() {
    try {
        // Configuración específica para la página about
        const techCards = document.querySelectorAll('.tech-card');
        techCards.forEach((card, index) => {
            if (card && card.style) {
                card.style.animationDelay = `${index * 0.1}s`;
            }
        });
    } catch (error) {
        console.error('Error inicializando página about:', error);
    }
}

// Cargar preferencias guardadas
function loadUserPreferences() {
    try {
        const savedMode = localStorage.getItem('stereoMode');
        const validModes = ['side-by-side', 'anaglyph', 'anaglyph-sidebyside'];
        if (savedMode && validModes.includes(savedMode)) {
            setMode(savedMode);
        }
    } catch (error) {
        console.error('Error cargando preferencias:', error);
    }
}

// Inicialización específica por página
window.addEventListener('load', function() {
    try {
        // Cargar preferencias
        loadUserPreferences();
        
        // Precargar imágenes
        preloadImages();
        
        // Inicialización específica por página
        const currentPage = window.location.pathname.split('/').pop();
        
        const pageInitializers = {
            'gallery.html': initializeGalleryPage,
            'about.html': initializeAboutPage
        };
        
        if (pageInitializers[currentPage]) {
            pageInitializers[currentPage]();
        }
        
        // Mostrar indicador de carga completada
        console.log('StereoVision Pro cargado completamente');
    } catch (error) {
        console.error('Error en inicialización:', error);
    }
});

// Función para mostrar información de ayuda
function showHelp() {
    try {
        // Insertar modal si no existe
        if (!document.getElementById('helpModal')) {
            const modalDiv = document.createElement('div');
            modalDiv.className = 'modal fade';
            modalDiv.id = 'helpModal';
            modalDiv.setAttribute('tabindex', '-1');
            
            const modalDialog = document.createElement('div');
            modalDialog.className = 'modal-dialog';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content bg-dark text-light';
            
            const modalHeader = document.createElement('div');
            modalHeader.className = 'modal-header border-secondary';
            
            const modalTitle = document.createElement('h5');
            modalTitle.className = 'modal-title';
            modalTitle.textContent = 'Ayuda - Atajos de Teclado';
            
            const closeButton = document.createElement('button');
            closeButton.type = 'button';
            closeButton.className = 'btn-close btn-close-white';
            closeButton.setAttribute('data-bs-dismiss', 'modal');
            
            const modalBody = document.createElement('div');
            modalBody.className = 'modal-body';
            
            const helpList = document.createElement('ul');
            helpList.className = 'list-unstyled';
            
            const keyboardShortcuts = [
                { key: '1', desc: 'Cambiar a modo Side by Side' },
                { key: '2', desc: 'Cambiar a modo Anaglifo' },
                { key: '3', desc: 'Cambiar a modo Anaglifo S×S' },
                { key: 'F', desc: 'Pantalla completa' },
                { key: 'Ctrl + ←', desc: 'Imagen anterior' },
                { key: 'Ctrl + →', desc: 'Imagen siguiente' },
                { key: 'Esc', desc: 'Salir de pantalla completa' }
            ];
            
            keyboardShortcuts.forEach(shortcut => {
                const li = document.createElement('li');
                const kbd = document.createElement('kbd');
                kbd.textContent = shortcut.key;
                li.appendChild(kbd);
                li.appendChild(document.createTextNode(` - ${shortcut.desc}`));
                helpList.appendChild(li);
            });
            
            modalHeader.appendChild(modalTitle);
            modalHeader.appendChild(closeButton);
            modalBody.appendChild(helpList);
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(modalBody);
            modalDialog.appendChild(modalContent);
            modalDiv.appendChild(modalDialog);
            document.body.appendChild(modalDiv);
        }
        
        // Mostrar modal
        if (typeof bootstrap !== 'undefined') {
            const modal = new bootstrap.Modal(document.getElementById('helpModal'));
            modal.show();
        }
    } catch (error) {
        console.error('Error mostrando ayuda:', error);
    }
}

// Función para establecer filtros
function setFilter(filter) {
    if (typeof filter === 'string') {
        currentFilter = filter;
        rebuildCarousels();
        console.log(`Filtro cambiado a: ${filter}`);
    }
}

// Funciones auxiliares para mapeo de imágenes
function getAnaglyphFromSideBySide(sideBySideSrc) {
    if (!sideBySideSrc || typeof sideBySideSrc !== 'string') return null;
    
    try {
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
    } catch (error) {
        console.error('Error mapeando imagen anaglifo:', error);
        return null;
    }
}

// Función principal para reconstruir todos los carruseles
function rebuildCarousels() {
    try {
        rebuildCarousel('positive', 'positiveCarousel');
        rebuildCarousel('neutral', 'neutralCarousel');
        rebuildCarousel('negative', 'negativeCarousel');
    } catch (error) {
        console.error('Error reconstruyendo carruseles:', error);
    }
}

function rebuildCarousel(type, carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel || !type) return;
    
    try {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const indicators = carousel.querySelector('.carousel-indicators');
        
        if (!carouselInner || !indicators) return;
        
        let images;
        
        if (currentMode === 'anaglyph' || currentMode === 'anaglyph-sidebyside') {
            images = anaglyphImages[type] || [];
        } else {
            images = sideBySideImages[type] || [];
        }
        
        console.log(`Reconstruyendo ${carouselId} en modo ${currentMode} con ${images.length} imágenes`);
        
        // Limpiar completamente instancias existentes
        const existingCarousel = bootstrap?.Carousel?.getInstance?.(carousel);
        if (existingCarousel) {
            try {
                existingCarousel.dispose();
                carousel.removeAttribute('data-bs-ride');
            } catch (e) {
                console.warn('Error disposing carousel:', e);
            }
        }
        
        carouselInner.innerHTML = '';
        indicators.innerHTML = '';
        
        if (images.length === 0) {
            console.warn(`No hay imágenes disponibles para ${type} en modo ${currentMode}`);
            return;
        }
        
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
            container.addEventListener('click', () => openFullscreen(container));
            
            let leftSrc, rightSrc;
            
            if (currentMode === 'anaglyph' || currentMode === 'anaglyph-sidebyside') {
                leftSrc = rightSrc = img;
            } else {
                leftSrc = img.left || '';
                rightSrc = img.right || '';
            }
            
            const leftImg = document.createElement('img');
            leftImg.src = leftSrc;
            leftImg.className = 'left-image';
            leftImg.alt = `${type} ${index + 1}`;
            leftImg.onerror = () => console.error(`Error cargando imagen: ${leftSrc}`);
            
            const rightImg = document.createElement('img');
            rightImg.src = rightSrc;
            rightImg.className = 'right-image';
            rightImg.alt = `${type} ${index + 1}`;
            rightImg.onerror = () => console.error(`Error cargando imagen: ${rightSrc}`);
            
            const overlay = document.createElement('div');
            overlay.className = 'image-overlay';
            
            const overlayTitle = document.createElement('h5');
            overlayTitle.textContent = getImageTitle(type, index);
            
            const overlayDescription = document.createElement('p');
            overlayDescription.textContent = getImageDescription(type, index);
            
            overlay.appendChild(overlayTitle);
            overlay.appendChild(overlayDescription);
            

            
            container.appendChild(leftImg);
            container.appendChild(rightImg);
            container.appendChild(overlay);
            
            slide.appendChild(container);
            carouselInner.appendChild(slide);
        });
        
        // Reinicializar carrusel después de reconstruir
        setTimeout(() => {
            if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
                try {
                    // Asegurar que el carrusel tenga los atributos necesarios
                    carousel.setAttribute('data-bs-ride', 'false');
                    carousel.setAttribute('data-bs-interval', 'false');
                    
                    const newCarousel = new bootstrap.Carousel(carousel, {
                        interval: false,
                        wrap: true,
                        keyboard: true,
                        pause: false,
                        touch: true
                    });
                    
                    // Verificar que el carrusel tenga slides
                    const slides = carousel.querySelectorAll('.carousel-item');
                    console.log(`Carrusel ${carouselId} inicializado con ${slides.length} slides visibles`);
                } catch (e) {
                    console.warn('Error reinicializando carrusel:', e);
                }
            }
        }, 100);
        
        console.log(`Carrusel ${carouselId} reconstruido exitosamente con ${images.length} slides`);
    } catch (error) {
        console.error(`Error reconstruyendo carrusel ${carouselId}:`, error);
    }
}

function getSideBySideFromCurrent(currentSrc) {
    if (!currentSrc || typeof currentSrc !== 'string') return null;
    
    try {
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
    } catch (error) {
        console.error('Error obteniendo imágenes side-by-side:', error);
        return null;
    }
}

function getOriginalSources(currentSrc) {
    if (!currentSrc || typeof currentSrc !== 'string') return null;
    
    try {
        // Extraer la ruta relativa de la URL completa
        const imagenesIndex = currentSrc.indexOf('imagenes/');
        if (imagenesIndex === -1) return null;
        
        const relativePath = currentSrc.substring(imagenesIndex);
        
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
    } catch (error) {
        console.error('Error obteniendo fuentes originales:', error);
        return null;
    }
}



// Funciones auxiliares para títulos y descripciones (corregidas)
// Positiva = profundidad hacia el interior (detrás de la pantalla)
// Negativa = emergencia/proyección hacia el espectador (sale de la pantalla)

function normalizeType(t){
  const k = String(t || '').toLowerCase();
  if (['neutral','neutra','nula','zero','0'].includes(k)) return 'neutral';
  if (['positive','positiva','pos','+'].includes(k)) return 'positive';
  if (['negative','negativa','neg','-'].includes(k)) return 'negative';
  return k; // por si usas otros valores
}

function getImageTitle(disparityType, imageIndex) {
  const type = normalizeType(disparityType);
  const titles = {
    // POSITIVA → al fondo (antes los tenías en "negative")
    positive: [
      'Profundidad Básica', 'Efecto Ventana', 'Recesión Moderada',
      'Profundidad Intensa', 'Efecto Túnel', 'Recesión Avanzada',
      'Profundidad Extrema', 'Inmersión Completa', 'Efecto Abismal', 'Profundidad Máxima'
    ],
    // NEUTRA / NULA → en el plano
    neutral: [
      'Plano de Referencia', 'Equilibrio Visual', 'Punto de Convergencia',
      'Estabilidad Binocular', 'Referencia Central', 'Fusión Perfecta',
      'Comodidad Visual', 'Línea Base', 'Equilibrio Estereoscópico'
    ],
    // NEGATIVA → hacia afuera (antes los tenías en "positive")
    negative: [
      'Efecto de Emergencia Básico', 'Profundidad “Hacia Ti” Moderada', 'Efecto Tridimensional Intenso',
      'Proyección Avanzada', 'Emergencia Múltiple', 'Efecto de Alcance',
      'Emergencia Dinámica', 'Emergencia Extrema', 'Efecto Inmersivo Hacia Fuera',
      'Proyección Máxima', 'Emergencia Compleja', 'Relieve Avanzado', 'Efecto Total'
    ]
  };
  const arr = titles[type] || [];
  return arr[imageIndex] || `${type} ${imageIndex + 1}`;
}

function getImageDescription(disparityType, imageIndex) {
  const type = normalizeType(disparityType);
  const desc = {
    // POSITIVA → al fondo (mantengo tus textos correctos para “fondo”)
    positive: [
      'Elementos que se hunden ligeramente en la pantalla',
      'Sensación de mirar a través de una ventana',
      'Objetos que retroceden hacia el fondo',
      'Mayor separación que crea distancia visual',
      'Sensación de profundidad como un túnel',
      'Elementos que se alejan significativamente',
      'Máximo efecto de hundimiento visual',
      'Sensación de estar dentro de la imagen',
      'Profundidad que parece infinita hacia el interior'
    ],
    // NEUTRA / NULA → en el plano
    neutral: [
      'Imagen base sin desplazamiento binocular',
      'Elementos alineados perfectamente en el plano de pantalla',
      'Zona donde ambos ojos convergen naturalmente',
      'Imagen estable sin tensión visual',
      'Punto neutro para comparar otras disparidades',
      'Ambas imágenes se fusionan sin esfuerzo',
      'Visualización relajada y natural',
      'Referencia para medir efectos de profundidad',
      'Estado de comodidad para lectura prolongada'
    ],
    // NEGATIVA → hacia afuera (ajusto última línea que decía “positiva intensa”)
    negative: [
      'Objetos que sobresalen del plano de la pantalla',
      'Separación binocular que acerca los elementos al observador',
      'Mayor disparidad que incrementa la proximidad',
      'Objetos que parecen flotar frente al espectador',
      'Varios elementos con diferentes niveles de relieve frontal',
      'Sensación de que los objetos avanzan hacia ti',
      'Capas de relieve progresivo hacia afuera',
      'Máximo efecto de proyección hacia el espectador',
      'Combinación de elementos con disparidad negativa intensa'
    ]
  };
  const arr = desc[type] || [];
  return arr[imageIndex] || `Efecto de disparidad ${type}`;
}


// Exportar funciones para uso global
window.StereoVision = {
    setMode,
    toggleFullscreen,
    showHelp,
    updateCarouselImages
};

window.setFilter = setFilter;