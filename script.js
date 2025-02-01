// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// Ambil semua card
const projectCards = document.querySelectorAll('.project-card');
const sidePanel = document.getElementById('side-panel');
const closeBtn = document.querySelector('.close-btn');

// Fungsi untuk membuka side panel dengan data yang sesuai
function openSidePanel(title, description, tools) {
  document.getElementById('panel-title').textContent = title;
  document.getElementById('panel-description').textContent = description;
  
  const toolsContainer = document.getElementById('panel-tools');
  toolsContainer.innerHTML = ''; // Hapus tool sebelumnya

  tools.forEach(tool => {
    const toolSpan = document.createElement('span');
    toolSpan.className = 'tool';
    toolSpan.textContent = tool;
    toolsContainer.appendChild(toolSpan);
  });

  sidePanel.classList.add('active');
}

// Tutup panel saat klik tombol close
closeBtn.addEventListener('click', () => {
  sidePanel.classList.remove('active');
});

// Tambahkan event listener ke setiap card
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
    const tools = Array.from(card.querySelectorAll('.tool')).map(tool => tool.textContent);

    openSidePanel(title, description, tools);
  });
});


const overlayCloseBtn = document.getElementById('overlay-close-btn');

// Buka overlay saat panel terbuka
function openSidePanel(title, description, tools) {
  // Existing code...
  sidePanel.classList.add('active');
  overlay.style.visibility = 'visible';
  overlay.style.opacity = '1';
}

// Tutup overlay dan panel saat tombol close di klik
overlayCloseBtn.addEventListener('click', () => {
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  sidePanel.classList.remove('active');
});

// Tetap bisa tutup dengan klik di area luar konten overlay
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {  // Pastikan hanya klik luar konten yang nutup
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    sidePanel.classList.remove('active');
  }
});


const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('overlay');


// Fungsi buka side panel
function openSidePanel(title, description, tools) {
  document.getElementById('panel-title').textContent = title;
  document.getElementById('panel-description').textContent = description;
  document.getElementById('panel-tools').textContent = tools;
  
  sidePanel.classList.add('active');  // Tampilkan side panel
  overlay.style.visibility = 'visible';  // Tampilkan overlay
  overlay.style.opacity = '1';  
}

// Tutup side panel
function closeSidePanel() {
  sidePanel.classList.remove('active');  // Sembunyikan side panel
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
}

// Event listener buat setiap card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');
    const tools = card.getAttribute('data-tools');
    openSidePanel(title, description, tools);
  });
});

// Event listener buat tombol close (X)
closeBtn.addEventListener('click', closeSidePanel);

// Tutup panel kalau klik di luar panel (di area overlay)
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closeSidePanel();
  }
});
