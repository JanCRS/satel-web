const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

// Services data
const cctvServices = [
  {
    title: 'Cámaras de seguridad',
    description: 'Amplia variedad de cámaras IP y analógicas para diferentes necesidades.',
    image: 'images3/camaras_de_seguridad.jpg',
    tags: ['Cámaras', 'Seguridad', 'IP']
  },
  {
    title: 'Cercos eléctricos',
    description: 'Sistemas de cercos eléctricos de alta seguridad y confiabilidad.',
    image: 'images3/cerco_electico.jpg',
    tags: ['Cerco', 'Protección', 'Perimetral']
  },
  {
    title: 'Chapas magnéticas',
    description: 'Soluciones de control de acceso con chapas magnéticas modernas.',
    image: 'images3/chapas_magneticas.jpg',
    tags: ['Acceso', 'Seguridad', 'Control']
  },
  {
    title: 'Video porteros',
    description: 'Sistemas de video portero interactivos para mayor seguridad.',
    image: 'images3/video_porteros.jpg',
    tags: ['Portero', 'Video', 'Interactivo']
  },
  {
    title: 'Controles de acceso',
    description: 'Sistemas inteligentes de control de acceso biométrico y tarjetero.',
    image: 'images3/controles_de_acceso}.jpg',
    tags: ['Acceso', 'Biométrico', 'Control']
  }
];

const computoServices = [
  {
    title: 'Instalación de cableado estructurado',
    description: 'Instalación profesional de infraestructura de cableado estructurado.',
    image: 'images4/cableado_estructurado.jpg',
    tags: ['Cableado', 'Estructurado', 'Infraestructura']
  },
  {
    title: 'Servidores',
    description: 'Soluciones de servidores para empresas con soporte técnico 24/7.',
    image: 'images4/instalacion_de_servidores.jpg',
    tags: ['Servidor', 'Empresa', 'Soporte']
  },
  {
    title: 'Redes WiFi',
    description: 'Instalación y configuración de redes WiFi de alto rendimiento.',
    image: 'images4/wifi.jpg',
    tags: ['WiFi', 'Inalámbrico', 'Conectividad']
  },
  {
    title: 'Antenas punto a punto',
    description: 'Conexiones inalámbricas de largo alcance para sitios remotos.',
    image: 'images4/antenas.jpg',
    tags: ['Antena', 'Inalámbrico', 'Largo alcance']
  },
  {
    title: 'Mantenimientos',
    description: 'Servicios de mantenimiento preventivo y correctivo de equipos.',
    image: 'images4/mantenimiento.jpg',
    tags: ['Mantenimiento', 'Soporte', 'Preventivo']
  }
];

// CCTV Service carousel
const cctvImage = document.getElementById('cctv-image');
const cctvTitle = document.getElementById('cctv-title');
const cctvDescription = document.getElementById('cctv-description');
const cctvTags = document.getElementById('cctv-tags');
const cctvPrevButton = document.querySelector('.gallery-nav.cctv-prev');
const cctvNextButton = document.querySelector('.gallery-nav.cctv-next');

// Computo Service carousel
const computoImage = document.getElementById('computo-image');
const computoTitle = document.getElementById('computo-title');
const computoDescription = document.getElementById('computo-description');
const computoTags = document.getElementById('computo-tags');
const computoPrevButton = document.querySelector('.gallery-nav.computo-prev');
const computoNextButton = document.querySelector('.gallery-nav.computo-next');

let currentCCTVIndex = 0;
let currentComputaIndex = 0;

function renderCCTVService(index) {
  const service = cctvServices[index];
  if (!service) return;
  
  if (cctvImage) {
    cctvImage.src = service.image;
    cctvImage.alt = service.title;
  }
  if (cctvTitle) cctvTitle.textContent = service.title;
  if (cctvDescription) cctvDescription.textContent = service.description;
  
  if (cctvTags) {
    cctvTags.innerHTML = '';
    service.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      cctvTags.appendChild(span);
    });
  }
}

function renderComputaService(index) {
  const service = computoServices[index];
  if (!service) return;
  
  if (computoImage) {
    computoImage.src = service.image;
    computoImage.alt = service.title;
  }
  if (computoTitle) computoTitle.textContent = service.title;
  if (computoDescription) computoDescription.textContent = service.description;
  
  if (computoTags) {
    computoTags.innerHTML = '';
    service.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      computoTags.appendChild(span);
    });
  }
}

// CCTV navigation
if (cctvPrevButton) {
  cctvPrevButton.addEventListener('click', () => {
    currentCCTVIndex = (currentCCTVIndex - 1 + cctvServices.length) % cctvServices.length;
    renderCCTVService(currentCCTVIndex);
  });
}

if (cctvNextButton) {
  cctvNextButton.addEventListener('click', () => {
    currentCCTVIndex = (currentCCTVIndex + 1) % cctvServices.length;
    renderCCTVService(currentCCTVIndex);
  });
}

// Computo navigation
if (computoPrevButton) {
  computoPrevButton.addEventListener('click', () => {
    currentComputaIndex = (currentComputaIndex - 1 + computoServices.length) % computoServices.length;
    renderComputaService(currentComputaIndex);
  });
}

if (computoNextButton) {
  computoNextButton.addEventListener('click', () => {
    currentComputaIndex = (currentComputaIndex + 1) % computoServices.length;
    renderComputaService(currentComputaIndex);
  });
}

// Initial render
renderCCTVService(0);
renderComputaService(0);

const premiumItems = [
  { title: 'Cámara premium 1', image: 'images/premium/cam1.jpg' },
  { title: 'Cámara premium 2', image: 'images/premium/cam2.jpg' },
  { title: 'Cámara premium 3', image: 'images/premium/cam3.jpg' },
  { title: 'Cámara premium 4', image: 'images/premium/cam4.jpg' },
  { title: 'Cámara premium 5', image: 'images/premium/cam5.jpg' }
];

const premiumImage = document.getElementById('premium-image');
const premiumTitle = document.getElementById('premium-title');
const premiumThumbnails = document.getElementById('premium-thumbnails');
const premiumPrevButton = document.querySelector('.gallery-nav.premium-prev');
const premiumNextButton = document.querySelector('.gallery-nav.premium-next');
let currentPremiumIndex = 0;

function renderPremium(index) {
  const item = premiumItems[index];

  if (!item) {
    return;
  }

  if (premiumImage) {
    premiumImage.src = item.image;
    premiumImage.alt = item.title;
  }

  if (premiumTitle) {
    premiumTitle.textContent = item.title;
  }

  if (premiumThumbnails) {
    premiumThumbnails.querySelectorAll('button').forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }
}

if (premiumThumbnails) {
  premiumThumbnails.innerHTML = premiumItems
    .map((item, index) => `
      <button type="button" class="${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Ver ${item.title}" aria-pressed="${index === 0}">
        <img src="${item.image}" alt="${item.title}" />
      </button>
    `)
    .join('');

  premiumThumbnails.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      currentPremiumIndex = Number(button.getAttribute('data-index'));
      renderPremium(currentPremiumIndex);
    });
  });
}

if (premiumPrevButton && premiumNextButton) {
  premiumPrevButton.addEventListener('click', () => {
    currentPremiumIndex = (currentPremiumIndex - 1 + premiumItems.length) % premiumItems.length;
    renderPremium(currentPremiumIndex);
  });

  premiumNextButton.addEventListener('click', () => {
    currentPremiumIndex = (currentPremiumIndex + 1) % premiumItems.length;
    renderPremium(currentPremiumIndex);
  });
}

renderPremium(currentPremiumIndex);

const cameraItems = [
  { title: 'Cámara 1', image: 'images/Cámaras/cam1.jpg' },
  { title: 'Cámara 2', image: 'images/Cámaras/cam2.jpg' },
  { title: 'Cámara 3', image: 'images/Cámaras/cam3.jpg' }
];

const cameraImage = document.getElementById('camera-image');
const cameraThumbnails = document.getElementById('camera-thumbnails');
const cameraPrevButton = document.querySelector('.gallery-nav.camera-prev');
const cameraNextButton = document.querySelector('.gallery-nav.camera-next');
let currentCameraIndex = 0;

function renderCamera(index) {
  const item = cameraItems[index];

  if (!item) {
    return;
  }

  if (cameraImage) {
    cameraImage.src = item.image;
    cameraImage.alt = item.title;
  }

  if (cameraThumbnails) {
    cameraThumbnails.querySelectorAll('button').forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }
}

if (cameraThumbnails) {
  cameraThumbnails.innerHTML = cameraItems
    .map((item, index) => `
      <button type="button" class="${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Ver ${item.title}" aria-pressed="${index === 0}">
        <img src="${item.image}" alt="${item.title}" />
      </button>
    `)
    .join('');

  cameraThumbnails.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      currentCameraIndex = Number(button.getAttribute('data-index'));
      renderCamera(currentCameraIndex);
    });
  });
}

if (cameraPrevButton && cameraNextButton) {
  cameraPrevButton.addEventListener('click', () => {
    currentCameraIndex = (currentCameraIndex - 1 + cameraItems.length) % cameraItems.length;
    renderCamera(currentCameraIndex);
  });

  cameraNextButton.addEventListener('click', () => {
    currentCameraIndex = (currentCameraIndex + 1) % cameraItems.length;
    renderCamera(currentCameraIndex);
  });
}

renderCamera(currentCameraIndex);

const complementItems = [
  { title: 'Complemento para instalación 1', image: 'images/complementa/1.jpg' },
  { title: 'Complemento para instalación 2', image: 'images/complementa/2.jpg' },
  { title: 'Complemento para instalación 3', image: 'images/complementa/3.jpg' },
  { title: 'Complemento para instalación 4', image: 'images/complementa/4.jpg' },
  { title: 'Complemento para instalación 5', image: 'images/complementa/5.jpg' },
  { title: 'Complemento para instalación 6', image: 'images/complementa/6.jpg' },
  { title: 'Complemento para instalación 7', image: 'images/complementa/7.jpg' }
];

const complementImage = document.getElementById('complement-image');
const complementThumbnails = document.getElementById('complement-thumbnails');
const complementPrevButton = document.querySelector('.gallery-nav.complement-prev');
const complementNextButton = document.querySelector('.gallery-nav.complement-next');
let currentComplementIndex = 0;

function renderComplement(index) {
  const item = complementItems[index];

  if (!item) {
    return;
  }

  if (complementImage) {
    complementImage.src = item.image;
    complementImage.alt = item.title;
  }

  if (complementThumbnails) {
    complementThumbnails.querySelectorAll('button').forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }
}

if (complementThumbnails) {
  complementThumbnails.innerHTML = complementItems
    .map((item, index) => `
      <button type="button" class="${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Ver ${item.title}" aria-pressed="${index === 0}">
        <img src="${item.image}" alt="${item.title}" />
      </button>
    `)
    .join('');

  complementThumbnails.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      currentComplementIndex = Number(button.getAttribute('data-index'));
      renderComplement(currentComplementIndex);
    });
  });
}

if (complementPrevButton && complementNextButton) {
  complementPrevButton.addEventListener('click', () => {
    currentComplementIndex = (currentComplementIndex - 1 + complementItems.length) % complementItems.length;
    renderComplement(currentComplementIndex);
  });

  complementNextButton.addEventListener('click', () => {
    currentComplementIndex = (currentComplementIndex + 1) % complementItems.length;
    renderComplement(currentComplementIndex);
  });
}

renderComplement(currentComplementIndex);

const lightbox = document.getElementById('image-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const carouselImages = document.querySelectorAll('#premium-image, #camera-image, #complement-image');
let lightboxItems = [];
let currentLightboxIndex = 0;

function renderLightboxImage(index) {
  const item = lightboxItems[index];

  if (!item || !lightboxImage) {
    return;
  }

  currentLightboxIndex = index;
  lightboxImage.src = item.image;
  lightboxImage.alt = item.title;
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.hidden = true;
  document.body.classList.remove('lightbox-open');
}

carouselImages.forEach((image) => {
  image.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) {
      return;
    }

    lightboxItems = image.id === 'premium-image'
      ? premiumItems
      : image.id === 'camera-image' ? cameraItems : complementItems;
    currentLightboxIndex = lightboxItems.findIndex((item) => item.image === image.getAttribute('src'));
    if (currentLightboxIndex < 0) {
      currentLightboxIndex = 0;
    }

    renderLightboxImage(currentLightboxIndex);
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', (event) => {
    event.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    renderLightboxImage(currentLightboxIndex);
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', (event) => {
    event.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxItems.length;
    renderLightboxImage(currentLightboxIndex);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }

  if (!lightbox || lightbox.hidden || lightboxItems.length === 0) {
    return;
  }

  if (event.key === 'ArrowLeft') {
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    renderLightboxImage(currentLightboxIndex);
  }

  if (event.key === 'ArrowRight') {
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxItems.length;
    renderLightboxImage(currentLightboxIndex);
  }
});
