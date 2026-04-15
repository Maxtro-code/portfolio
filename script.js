/* ── THÈME JOUR / NUIT ── */
function toggleTheme() {
    var isLight = document.body.classList.toggle('light');
    document.getElementById('themeToggle').textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

(function () {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        var btn = document.getElementById('themeToggle');
        if (btn) btn.textContent = '☀️';
    }
})();

/* ── FILTRE COMPÉTENCES ── */
function filterSkills(cat, btn) {
    document.querySelectorAll('.skill-filter').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.skill-icon-card').forEach(function(card) {
        if (cat === 'all' || card.dataset.cat === cat) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

/* ── MODAL PDF GÉNÉRIQUE (CV + rapports) ── */
function openPdfModal(path, title) {
    document.getElementById('cvFrame').src = path;
    document.getElementById('cvModalTitle').textContent = title;
    document.getElementById('cvModalSubtitle').textContent = '// MATHIS COCO · 2025';
    document.getElementById('cvDlBtn').href = path;
    document.getElementById('cvOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

/* ── MODAL CV ── */
function openCvModal() {
    openPdfModal('cv/CV%20-%20Mathis%20COCO.pdf', 'MON CURRICULUM VITÆ');
}

function closeCvModal() {
    document.getElementById('cvOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function handleCvOverlayClick(e) {
    if (e.target === document.getElementById('cvOverlay')) closeCvModal();
}

/* ── BURGER MENU ── */
function toggleMenu() {
    var b = document.getElementById('burger');
    var m = document.getElementById('navMenu');
    var open = b.classList.toggle('open');
    m.classList.toggle('open', open);
    b.setAttribute('aria-expanded', String(open));
}

function closeMenu() {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('navMenu').classList.remove('open');
    document.getElementById('burger').setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', function(e) {
    if (
        !document.querySelector('nav').contains(e.target) &&
        !document.getElementById('navMenu').contains(e.target)
    ) closeMenu();
});

/* ── LIGHTBOX IMAGE ── */
function openLightbox(src, alt) {
    document.getElementById('lbImg').src = src;
    document.getElementById('lbImg').alt = alt || '';
    document.getElementById('lbOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lbOverlay').classList.remove('open');
    document.getElementById('lbImg').src = '';
    document.body.style.overflow = '';
}

/* ── ECHAP : ferme tout ── */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCvModal();
        closeLightbox();
        closeMenu();
    }
});

/* ── FORMATION — ONGLETS ── */
function switchFormTab(id, btn) {
    document.querySelectorAll('.form-tab-panel').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.form-tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('ftab-' + id).classList.add('active');
    btn.classList.add('active');
}

/* ── MEDIA PANELS ── */
function toggleMedia(btn, id) {
    var panel = document.getElementById(id);
    var isOpen = panel.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.textContent = isOpen ? '▼ Masquer les captures' : '▶ Voir les captures';
}
