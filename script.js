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

const productItems = [
  {
    title: 'Cámara IP de alto rendimiento',
    description: 'Ideal para vigilancia exterior con imagen nítida y diseño discreto.',
    image: 'images/41KRMCBy1QL._AC_SY879_.jpg',
    tags: ['Exterior', 'Visión nocturna', 'Alta resolución']
  },
  {
    title: 'Cámara domo Dahua',
    description: 'Perfecta para interiores y zonas de control con cobertura amplia.',
    image: 'images/Camara-de-Seguridad-IP-Dahua-Domo-IPC-HDBW3241TM-AS.jpg',
    tags: ['Interior', 'Ángulo amplio', 'IP']
  },
  {
    title: 'Cámara Tioc 8MP',
    description: 'Modelo profesional para monitoreo detallado de áreas críticas.',
    image: 'images/camara-tioc-8mp-DAHUA-DH-IPC-HDBW3849R1-ZAS-PV-S5.jpg',
    tags: ['Profesional', '8MP', 'Detección']
  },
  {
    title: 'Cámara IP bullet 2MP',
    description: 'Solución robusta para perímetros y fachadas con fácil instalación.',
    image: 'images/DAHUA-DHT0030209-CAMARA-IP-BULLET-2MP-PRIN.png',
    tags: ['Perímetro', 'Robusta', 'Instalación rápida']
  }
];

const cableItems = [
  {
    title: 'Cable UTP Cat6',
    description: 'Diseñado para redes de alta velocidad y conexión estable en instalaciones residenciales y comerciales.',
    image: 'images2/51237irg4AL._SX466_.jpg',
    tags: ['Cat6', 'Alta velocidad', 'Instalación simple']
  },
  {
    title: 'Cable UTP Cat5e',
    description: 'Opción versátil para redes domésticas y pequeñas oficinas.',
    image: 'images2/517608nHu4L._SX342_SY445_QL70_ML2_.jpg',
    tags: ['Cat5e', 'Versátil', 'Costo eficiente']
  },
  {
    title: 'Cable UTP Premium',
    description: 'Ideal para proyectos que requieren mayor estabilidad y mejor protección de señal.',
    image: 'images2/61Bt-5pe98L._SX522_.jpg',
    tags: ['Premium', 'Estabilidad', 'Protección']
  },
  {
    title: 'Cable UTP de alta capacidad',
    description: 'Perfecto para entornos empresariales con demanda constante de transferencia de datos.',
    image: 'images2/61V7iUG9ZIL._SX522_.jpg',
    tags: ['Empresarial', 'Alta capacidad', 'Confiable']
  }
];

const productImage = document.getElementById('product-image');
const productTitle = document.getElementById('product-title');
const productDescription = document.getElementById('product-description');
const productTags = document.getElementById('product-tags');
const productThumbnails = document.getElementById('product-thumbnails');
const prevButton = document.querySelector('.gallery-nav.prev');
const nextButton = document.querySelector('.gallery-nav.next');

const cableImage = document.getElementById('cable-image');
const cableTitle = document.getElementById('cable-title');
const cableDescription = document.getElementById('cable-description');
const cableTags = document.getElementById('cable-tags');
const cableThumbnails = document.getElementById('cable-thumbnails');
const cablePrevButton = document.querySelector('.gallery-nav.cable-prev');
const cableNextButton = document.querySelector('.gallery-nav.cable-next');

let currentProductIndex = 0;
let currentCableIndex = 0;

function renderProduct(index) {
  const product = productItems[index];

  if (!product) {
    return;
  }

  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.title;
  }

  if (productTitle) {
    productTitle.textContent = product.title;
  }

  if (productDescription) {
    productDescription.textContent = product.description;
  }

  if (productTags) {
    productTags.innerHTML = product.tags.map((tag) => `<span>${tag}</span>`).join('');
  }

  if (productThumbnails) {
    const buttons = productThumbnails.querySelectorAll('button');
    buttons.forEach((button, buttonIndex) => {
      button.classList.toggle('active', buttonIndex === index);
      button.setAttribute('aria-pressed', String(buttonIndex === index));
    });
  }
}

function renderCable(index) {
  const cable = cableItems[index];

  if (!cable) {
    return;
  }

  if (cableImage) {
    cableImage.src = cable.image;
    cableImage.alt = cable.title;
  }

  if (cableTitle) {
    cableTitle.textContent = cable.title;
  }

  if (cableDescription) {
    cableDescription.textContent = cable.description;
  }

  if (cableTags) {
    cableTags.innerHTML = cable.tags.map((tag) => `<span>${tag}</span>`).join('');
  }

  if (cableThumbnails) {
    const buttons = cableThumbnails.querySelectorAll('button');
    buttons.forEach((button, buttonIndex) => {
      button.classList.toggle('active', buttonIndex === index);
      button.setAttribute('aria-pressed', String(buttonIndex === index));
    });
  }
}

if (productThumbnails) {
  productThumbnails.innerHTML = productItems
    .map((product, index) => `
      <button type="button" class="${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Ver ${product.title}" aria-pressed="${index === 0}">
        <img src="${product.image}" alt="${product.title}" />
      </button>
    `)
    .join('');

  productThumbnails.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      currentProductIndex = Number(button.getAttribute('data-index'));
      renderProduct(currentProductIndex);
    });
  });
}

if (cableThumbnails) {
  cableThumbnails.innerHTML = cableItems
    .map((cable, index) => `
      <button type="button" class="${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Ver ${cable.title}" aria-pressed="${index === 0}">
        <img src="${cable.image}" alt="${cable.title}" />
      </button>
    `)
    .join('');

  cableThumbnails.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      currentCableIndex = Number(button.getAttribute('data-index'));
      renderCable(currentCableIndex);
    });
  });
}

if (prevButton && nextButton) {
  prevButton.addEventListener('click', () => {
    currentProductIndex = (currentProductIndex - 1 + productItems.length) % productItems.length;
    renderProduct(currentProductIndex);
  });

  nextButton.addEventListener('click', () => {
    currentProductIndex = (currentProductIndex + 1) % productItems.length;
    renderProduct(currentProductIndex);
  });
}

if (cablePrevButton && cableNextButton) {
  cablePrevButton.addEventListener('click', () => {
    currentCableIndex = (currentCableIndex - 1 + cableItems.length) % cableItems.length;
    renderCable(currentCableIndex);
  });

  cableNextButton.addEventListener('click', () => {
    currentCableIndex = (currentCableIndex + 1) % cableItems.length;
    renderCable(currentCableIndex);
  });
}

renderProduct(currentProductIndex);
renderCable(currentCableIndex);
