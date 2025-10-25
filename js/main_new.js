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

// Función principal para reconstruir carruseles con nueva visualización anaglifo
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
        
        // Modo anaglifo: mostrar grilla de miniaturas
        if (currentMode === 'anaglyph' || currentMode === 'anaglyph-sidebyside') {
            const mainContainer = document.createElement('div');
            mainContainer.style.cssText = 'display: flex; flex-direction: column; gap: 30px; padding: 20px;';
            
            const mainImageContainer = document.createElement('div');
            mainImageContainer.style.cssText = 'text-align: center; background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px;';
            
            const mainImage = document.createElement('img');
            mainImage.src = images[0];
            mainImage.style.cssText = 'max-width: 100%; max-height: 400px; border-radius: 10px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); cursor: pointer;';
            mainImage.addEventListener('click', () => openFullscreen(mainImageContainer));
            
            const mainTitle = document.createElement('h4');
            mainTitle.textContent = getImageTitle(type, 0);
            mainTitle.style.cssText = 'color: #fff; margin-top: 15px; margin-bottom: 10px;';
            
            const mainDescription = document.createElement('p');
            mainDescription.textContent = getImageDescription(type, 0);
            mainDescription.style.cssText = 'color: #ccc; margin-bottom: 0;';
            
            mainImageContainer.appendChild(mainImage);
            mainImageContainer.appendChild(mainTitle);
            mainImageContainer.appendChild(mainDescription);
            
            const gridContainer = document.createElement('div');
            gridContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; max-height: 500px; overflow-y: auto; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 10px;';
            
            images.forEach((img, index) => {
                const thumbContainer = document.createElement('div');
                thumbContainer.style.cssText = `position: relative; border-radius: 8px; overflow: hidden; cursor: pointer; transition: all 0.3s ease; background: rgba(255,255,255,0.1); ${index === 0 ? 'border: 2px solid #007bff; transform: scale(1.05);' : 'border: 2px solid transparent;'}`;
                
                const thumbImg = document.createElement('img');
                thumbImg.src = img;
                thumbImg.style.cssText = 'width: 100%; height: 120px; object-fit: cover; display: block;';
                
                const thumbOverlay = document.createElement('div');
                thumbOverlay.style.cssText = 'position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 8px; font-size: 11px; text-align: center; font-weight: 500;';
                thumbOverlay.textContent = `${index + 1}. ${getImageTitle(type, index)}`;
                
                thumbContainer.addEventListener('click', () => {
                    mainImage.src = img;
                    mainTitle.textContent = getImageTitle(type, index);
                    mainDescription.textContent = getImageDescription(type, index);
                    
                    document.querySelectorAll('.anaglyph-thumb').forEach(thumb => {
                        thumb.style.border = '2px solid transparent';
                        thumb.style.transform = 'scale(1)';
                    });
                    thumbContainer.style.border = '2px solid #007bff';
                    thumbContainer.style.transform = 'scale(1.05)';
                });
                
                thumbContainer.className = 'anaglyph-thumb';
                thumbContainer.appendChild(thumbImg);
                thumbContainer.appendChild(thumbOverlay);
                gridContainer.appendChild(thumbContainer);
            });
            
            mainContainer.appendChild(mainImageContainer);
            mainContainer.appendChild(gridContainer);
            
            const slide = document.createElement('div');
            slide.className = 'carousel-item active';
            slide.appendChild(mainContainer);
            carouselInner.appendChild(slide);
            
            const prevBtn = carousel.querySelector('.carousel-control-prev');
            const nextBtn = carousel.querySelector('.carousel-control-next');
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            indicators.style.display = 'none';
            
        } else {
            const prevBtn = carousel.querySelector('.carousel-control-prev');
            const nextBtn = carousel.querySelector('.carousel-control-next');
            if (prevBtn) prevBtn.style.display = 'block';
            if (nextBtn) nextBtn.style.display = 'block';
            indicators.style.display = 'flex';
            
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
                
                const leftImg = document.createElement('img');
                leftImg.src = img.left || '';
                leftImg.className = 'left-image';
                leftImg.alt = `${type} ${index + 1}`;
                leftImg.onerror = () => console.error(`Error cargando imagen: ${img.left}`);
                
                const rightImg = document.createElement('img');
                rightImg.src = img.right || '';
                rightImg.className = 'right-image';
                rightImg.alt = `${type} ${index + 1}`;
                rightImg.onerror = () => console.error(`Error cargando imagen: ${img.right}`);
                
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
            
            setTimeout(() => {
                if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
                    try {
                        carousel.setAttribute('data-bs-ride', 'false');
                        carousel.setAttribute('data-bs-interval', 'false');
                        
                        const newCarousel = new bootstrap.Carousel(carousel, {
                            interval: false,
                            wrap: true,
                            keyboard: true,
                            pause: false,
                            touch: true
                        });
                        
                        const slides = carousel.querySelectorAll('.carousel-item');
                        console.log(`Carrusel ${carouselId} inicializado con ${slides.length} slides visibles`);
                    } catch (e) {
                        console.warn('Error reinicializando carrusel:', e);
                    }
                }
            }, 100);
        }
        
        console.log(`Carrusel ${carouselId} reconstruido exitosamente con ${images.length} imágenes`);
    } catch (error) {
        console.error(`Error reconstruyendo carrusel ${carouselId}:`, error);
    }
}

// Funciones auxiliares para títulos y descripciones
function getImageTitle(disparityType, imageIndex) {
    const disparityTitles = {
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
    return disparityTitles[disparityType]?.[imageIndex] || `${disparityType} ${imageIndex + 1}`;
}

function getImageDescription(disparityType, imageIndex) {
    const disparityDescriptions = {
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
    return disparityDescriptions[disparityType]?.[imageIndex] || `Efecto de disparidad ${disparityType}`;
}

function openFullscreen(element) {
    if (!element) return;
    
    try {
        if (!document.fullscreenElement && element.requestFullscreen) {
            element.requestFullscreen().catch(err => {
                console.error('Error al entrar en pantalla completa:', err);
            });
        }
    } catch (error) {
        console.error('Error abriendo pantalla completa:', error);
    }
}