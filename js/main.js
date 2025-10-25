// =========================
// Variables globales
// =========================
let currentMode = 'side-by-side';
let currentFilter = 'all';
let modeIndicator;

// =========================
// Mapeo de imágenes disponibles
// =========================
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

// =========================
// Inicialización
// =========================
document.addEventListener('DOMContentLoaded', function () {
  initializeApp();
});

function initializeApp() {
  try {
    createModeIndicator();
    setMode('side-by-side');

    const sideBySideBtn = document.getElementById('sideBySideBtn');
    const anaglyphBtn = document.getElementById('anaglyphBtn');
    const anaglyphSideBySideBtn = document.getElementById('anaglyphSideBySideBtn');

    if (sideBySideBtn) sideBySideBtn.addEventListener('click', () => setMode('side-by-side'));
    if (anaglyphBtn) anaglyphBtn.addEventListener('click', () => setMode('anaglyph'));
    if (anaglyphSideBySideBtn) anaglyphSideBySideBtn.addEventListener('click', () => setMode('anaglyph-sidebyside'));

    initializeCarousels();
    initializeAnimations();
    initializeNavigation();
    initializeImageContainers();

    console.log('DepthVerse inicializado correctamente');
  } catch (error) {
    console.error('Error inicializando aplicación:', error);
  }
}

// =========================
// UI: Indicador de modo
// =========================
function createModeIndicator() {
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

  // Rebuild siempre, pero sin enlazar modos ni mapear
  rebuildCarousels();

  updateActiveButton(mode);
  showModeIndicator(mode);
  localStorage.setItem('stereoMode', mode);
}

function updateActiveButton(mode) {
  const modeButtons = ['sideBySideBtn', 'anaglyphBtn', 'anaglyphSideBySideBtn'];
  modeButtons.forEach(id => document.getElementById(id)?.classList.remove('active'));

  if (mode === 'side-by-side') document.getElementById('sideBySideBtn')?.classList.add('active');
  if (mode === 'anaglyph') document.getElementById('anaglyphBtn')?.classList.add('active');
  if (mode === 'anaglyph-sidebyside') document.getElementById('anaglyphSideBySideBtn')?.classList.add('active');
}

function showModeIndicator(mode) {
  if (!modeIndicator) return;
  const modeTexts = {
    'side-by-side': '👁️ Modo: Side by Side',
    'anaglyph': '🥽 Modo: Anaglifo',
    'anaglyph-sidebyside': '🕶️ Modo: Anaglifo S×S'
  };
  modeIndicator.textContent = modeTexts[mode] || 'Modo desconocido';
  modeIndicator.classList.add('show');
  setTimeout(() => modeIndicator?.classList.remove('show'), 3000);
}

// =========================
function initializeCarousels() {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    carousel.addEventListener('slid.bs.carousel', function (event) {
      const activeItem = event.target.querySelector('.carousel-item.active');
      if (activeItem) {
        activeItem.classList.add('fade-in-up');
        setTimeout(() => activeItem.classList.remove('fade-in-up'), 600);
      }
    });
  });
}

function initializeAnimations() {
  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('fade-in-up'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const animatable = document.querySelectorAll(['.feature-card', '.tech-card', '.stat-item', '.disparity-item', '.method-card'].join(', '));
    animatable.forEach(el => observer.observe(el));
  } catch (error) {
    console.error('Error inicializando animaciones:', error);
  }
}

function initializeNavigation() {
  try {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        navbar.style.transform = (st > lastScrollTop && st > 100) ? 'translateY(-100%)' : 'translateY(0)';
        lastScrollTop = st;
      });
    }
  } catch (error) {
    console.error('Error inicializando navegación:', error);
  }
}

function initializeImageContainers() {
  try {
    document.addEventListener('click', function (e) {
      const imageContainer = e.target.closest('.image-container');
      if (imageContainer) openFullscreen(imageContainer);
    });
  } catch (error) {
    console.error('Error inicializando contenedores de imagen:', error);
  }
}

// =========================
// Utilidades de imágenes
// =========================
function preloadImages() {
  try {
    const images = document.querySelectorAll('.left-image, .right-image');
    let loaded = 0;
    if (!images.length) return;

    images.forEach(img => {
      if (!img?.src) return;
      const i = new Image();
      i.onload = () => { if (++loaded === images.length) console.log('Todas las imágenes precargadas'); };
      i.onerror = () => { console.warn(`Error cargando imagen: ${img.src}`); loaded++; };
      i.src = img.src;
    });
  } catch (error) {
    console.error('Error precargando imágenes:', error);
  }
}

function updateCarouselImages(carouselId, imageData) {
  const carousel = document.getElementById(carouselId);
  if (!carousel || !Array.isArray(imageData)) return;

  try {
    const inner = carousel.querySelector('.carousel-inner');
    if (!inner) return;
    inner.innerHTML = '';

    imageData.forEach((data, index) => {
      const item = document.createElement('div');
      item.className = `carousel-item ${index === 0 ? 'active' : ''}`;

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

      item.appendChild(container);
      inner.appendChild(item);
    });

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
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-bs-target', `#${carousel.id}`);
      b.setAttribute('data-bs-slide-to', i.toString());
      if (i === 0) b.classList.add('active');
      indicators.appendChild(b);
    }
  } catch (error) {
    console.error('Error actualizando indicadores:', error);
  }
}

// =========================
// Pantalla completa
// =========================
function toggleFullscreen() {
  try {
    const active = document.querySelector('.carousel-item.active .image-container');
    if (!active) return;

    if (!document.fullscreenElement) {
      active.requestFullscreen?.().catch(err => console.error('Error al entrar en pantalla completa:', err));
    } else {
      document.exitFullscreen?.().catch(err => console.error('Error al salir de pantalla completa:', err));
    }
  } catch (error) {
    console.error('Error en toggle fullscreen:', error);
  }
}

function openFullscreen(imageContainer) {
  if (!imageContainer) return;
  try {
    if (!document.fullscreenElement && imageContainer.requestFullscreen) {
      imageContainer.requestFullscreen().catch(err => console.error('Error al entrar en pantalla completa:', err));
    }
  } catch (error) {
    console.error('Error abriendo pantalla completa:', error);
  }
}

// =========================
// Teclas rápidas
// =========================
document.addEventListener('keydown', function (e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  try {
    const validKeys = ['1', '2', '3', 'f', 'F', 'ArrowLeft', 'ArrowRight', 'Escape'];
    if (!validKeys.includes(e.key)) return;

    switch (e.key) {
      case '1': setMode('side-by-side'); e.preventDefault(); break;
      case '2': setMode('anaglyph'); e.preventDefault(); break;
      case '3': setMode('anaglyph-sidebyside'); e.preventDefault(); break;
      case 'f':
      case 'F':
        if (e.ctrlKey || e.metaKey) return;
        toggleFullscreen();
        e.preventDefault();
        break;
      case 'ArrowLeft':
        if (e.ctrlKey) document.querySelector('.carousel-control-prev')?.click();
        e.preventDefault();
        break;
      case 'ArrowRight':
        if (e.ctrlKey) document.querySelector('.carousel-control-next')?.click();
        e.preventDefault();
        break;
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen?.().catch(err => console.error('Error saliendo de pantalla completa:', err));
        }
        break;
    }
  } catch (error) {
    console.error('Error en manejo de teclas:', error);
  }
});

// =========================
// Páginas específicas
// =========================
function initializeGalleryPage() {
  try {
    const tabs = document.getElementById('disparityTabs');
    if (tabs) {
      tabs.addEventListener('shown.bs.tab', function () {
        setTimeout(() => setMode(currentMode), 100);
      });
    }
  } catch (error) {
    console.error('Error inicializando página de galería:', error);
  }
}

function initializeAboutPage() {
  try {
    document.querySelectorAll('.tech-card').forEach((card, i) => {
      if (card?.style) card.style.animationDelay = `${i * 0.1}s`;
    });
  } catch (error) {
    console.error('Error inicializando página about:', error);
  }
}

// =========================
// Preferencias & Boot
// =========================
function loadUserPreferences() {
  try {
    const savedMode = localStorage.getItem('stereoMode');
    const valid = ['side-by-side', 'anaglyph', 'anaglyph-sidebyside'];
    if (savedMode && valid.includes(savedMode)) setMode(savedMode);
  } catch (error) {
    console.error('Error cargando preferencias:', error);
  }
}

window.addEventListener('load', function () {
  try {
    loadUserPreferences();
    preloadImages();

    const currentPage = window.location.pathname.split('/').pop();
    const pageInitializers = {
      'gallery.html': initializeGalleryPage,
      'about.html': initializeAboutPage
    };
    pageInitializers[currentPage]?.();

    console.log('StereoVision Pro cargado completamente');
  } catch (error) {
    console.error('Error en inicialización:', error);
  }
});

// =========================
// Ayuda
// =========================
function showHelp() {
  try {
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

      [
        { key: '1', desc: 'Cambiar a modo Side by Side' },
        { key: '2', desc: 'Cambiar a modo Anaglifo' },
        { key: '3', desc: 'Cambiar a modo Anaglifo S×S' },
        { key: 'F', desc: 'Pantalla completa' },
        { key: 'Ctrl + ←', desc: 'Imagen anterior' },
        { key: 'Ctrl + →', desc: 'Imagen siguiente' },
        { key: 'Esc', desc: 'Salir de pantalla completa' }
      ].forEach(s => {
        const li = document.createElement('li');
        const kbd = document.createElement('kbd');
        kbd.textContent = s.key;
        li.appendChild(kbd);
        li.appendChild(document.createTextNode(` - ${s.desc}`));
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

    if (typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(document.getElementById('helpModal'));
      modal.show();
    }
  } catch (error) {
    console.error('Error mostrando ayuda:', error);
  }
}

// =========================
// Filtros
// =========================
function setFilter(filter) {
  if (typeof filter === 'string') {
    currentFilter = filter;
    rebuildCarousels();
    console.log(`Filtro cambiado a: ${filter}`);
  }
}

// =========================
// REBUILD (sin enlaces entre modos)
// =========================
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
    const prevBtn = carousel.querySelector('.carousel-control-prev');
    const nextBtn = carousel.querySelector('.carousel-control-next');
    if (!carouselInner || !indicators) return;

    // Selección de fuentes por modo (independientes)
    let images;
    if (currentMode === 'side-by-side') {
      images = sideBySideImages[type] || [];
    } else { // 'anaglyph' y 'anaglyph-sidebyside' tiran de carpeta anaglifo
      images = anaglyphImages[type] || [];
    }

    // limpiar carrusel existente
    const existing = bootstrap?.Carousel?.getInstance?.(carousel);
    if (existing) { try { existing.dispose(); } catch (_) {} }
    carousel.removeAttribute('data-bs-ride');
    carouselInner.innerHTML = '';
    indicators.innerHTML = '';

    if (!images.length) {
      console.warn(`No hay imágenes disponibles para ${type} en modo ${currentMode}`);
      return;
    }

    // ===================== MODO ANAGLIFO (SIN CARRUSEL, 2 COLUMNAS) =====================
    if (currentMode === 'anaglyph') {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      indicators.style.display = 'none';

      // Layout principal: dos columnas
      const main = document.createElement('div');
      main.style.cssText = 'display:grid;grid-template-columns:1fr 320px;gap:18px;padding:16px 20px;align-items:start;';

      // Columna izquierda: visor simple
      const leftCol = document.createElement('div');
      leftCol.style.cssText = 'display:flex;flex-direction:column;gap:10px;';

      const viewer = document.createElement('div');
      viewer.style.cssText = 'position:relative;border-radius:12px;background:#0f1220;min-height:360px;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 8px 28px rgba(0,0,0,.35);';

      const mainImg = document.createElement('img');
      mainImg.src = images[0];
      mainImg.alt = `${type} 1`;
      mainImg.style.cssText = 'max-width:100%;max-height:72vh;display:block;user-select:none;cursor:pointer;';
      mainImg.addEventListener('click', () => openFullscreen(viewer));
      viewer.appendChild(mainImg);

      const title = document.createElement('h4');
      title.textContent = getImageTitle(type, 0);
      title.style.cssText = 'color:#fff;margin:8px 0 4px;';

      const desc = document.createElement('p');
      desc.textContent = getImageDescription(type, 0);
      desc.style.cssText = 'color:#bfc3d9;margin:0;';

      const note = document.createElement('div');
      note.style.cssText = 'text-align:left;color:#d6d3ff;font-size:.95rem;margin-top:6px';
      note.innerHTML = 'Nota: para una correcta percepción 3D, visualiza estas imágenes con <strong>lentes anaglifos rojo/cian</strong>.';

      leftCol.appendChild(viewer);
      leftCol.appendChild(title);
      leftCol.appendChild(desc);
      leftCol.appendChild(note);

      // Columna derecha: miniaturas en lista vertical
      const rightCol = document.createElement('div');
      rightCol.style.cssText = 'background:rgba(255,255,255,0.06);border-radius:10px;padding:10px;max-height:78vh;overflow-y:auto;';

      images.forEach((src, idx) => {
        const item = document.createElement('div');
        item.className = 'anaglyph-thumb';
        item.style.cssText = `display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;cursor:pointer;margin-bottom:8px;border:${idx===0?'2px solid #7c3aed':'2px solid transparent'};background:rgba(0,0,0,0.2);`;

        const im = document.createElement('img');
        im.src = src;
        im.alt = `${type} ${idx+1}`;
        im.style.cssText = 'width:80px;height:60px;object-fit:cover;border-radius:6px;flex:0 0 auto;';

        const meta = document.createElement('div');
        const t = document.createElement('div');
        t.textContent = `${idx+1}. ${getImageTitle(type, idx)}`;
        t.style.cssText = 'color:#fff;font-size:.9rem;font-weight:600;';
        const s = document.createElement('div');
        s.textContent = getImageDescription(type, idx);
        s.style.cssText = 'color:#cfd3e6;font-size:.8rem;opacity:.9;';

        meta.appendChild(t); meta.appendChild(s);
        item.appendChild(im); item.appendChild(meta);

        item.addEventListener('click', () => {
          mainImg.src = src;
          title.textContent = getImageTitle(type, idx);
          desc.textContent = getImageDescription(type, idx);
          rightCol.querySelectorAll('.anaglyph-thumb').forEach(el => el.style.border = '2px solid transparent');
          item.style.border = '2px solid #7c3aed';
        });

        rightCol.appendChild(item);
      });

      main.appendChild(leftCol);
      main.appendChild(rightCol);

      const slide = document.createElement('div');
      slide.className = 'carousel-item active';
      slide.appendChild(main);
      carouselInner.appendChild(slide);

      console.log(`Modo anaglifo (dos columnas) listo en ${carouselId} con ${images.length} imágenes.`);
      return;
    }

    // ===================== SxS y ANAGLYPH-S×S (con carrusel) =====================
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

      let leftSrc = '', rightSrc = '';
      if (currentMode === 'side-by-side') {
        leftSrc = img.left || '';
        rightSrc = img.right || '';
      } else { // anaglyph-sidebyside: usa la misma imagen duplicada
        leftSrc = img; rightSrc = img;
      }

      const leftImg = document.createElement('img');
      leftImg.src = leftSrc; leftImg.className = 'left-image';
      leftImg.alt = `${type} ${index + 1}`;
      leftImg.onerror = () => console.error(`Error cargando imagen: ${leftSrc}`);

      const rightImg = document.createElement('img');
      rightImg.src = rightSrc; rightImg.className = 'right-image';
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

    setTimeout(() => {
      if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
        try {
          carousel.setAttribute('data-bs-ride', 'false');
          carousel.setAttribute('data-bs-interval', 'false');
          new bootstrap.Carousel(carousel, {
            interval: false, wrap: true, keyboard: true, pause: false, touch: true
          });
          const slides = carousel.querySelectorAll('.carousel-item');
          console.log(`Carrusel ${carouselId} inicializado con ${slides.length} slides visibles`);
        } catch (e) { console.warn('Error reinicializando carrusel:', e); }
      }
    }, 100);
  } catch (error) {
    console.error(`Error reconstruyendo carrusel ${carouselId}:`, error);
  }
}


// =========================
// Títulos / Descripciones
// (puedes mantener tus funciones originales si prefieres)
// =========================
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
  positive: [ // detrás del plano (hacia el fondo)
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
  negative: [ // hacia el espectador (sale de la pantalla)
    'Objetos simples que sobresalen del plano de la pantalla',
    'Elementos con mayor separación binocular hacia adelante',
    'Mayor disparidad que crea sensación de proximidad',
    'Objetos que parecen flotar frente al observador',
    'Varios elementos con diferentes niveles de profundidad',
    'Sensación de que los objetos se extienden hacia ti',
    'Elementos que crean capas de profundidad progresiva',
    'Máximo efecto de proyección hacia el espectador',
    'Combinación de elementos con disparidad negativa intensa'
    ]
  };
  return disparityDescriptions[disparityType]?.[imageIndex] || `Efecto de disparidad ${disparityType}`;
}

// =========================
// Export público
// =========================
window.StereoVision = {
  setMode,
  toggleFullscreen,
  showHelp,
  updateCarouselImages
};

window.setFilter = setFilter;
(function ensureFavicon(){
  const existing = document.querySelector("link[rel='icon']");
  if (existing) return;
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = '/favicon.svg'; // o el data:URL si prefieres inline
  document.head.appendChild(link);
})();
