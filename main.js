function initMenuMobile() {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');

    if (btnMenu && menu && overlay) {
        btnMenu.addEventListener('click', () => menu.classList.add('abrir-menu'));
        menu.addEventListener('click', () => menu.classList.remove('abrir-menu'));
        overlay.addEventListener('click', () => menu.classList.remove('abrir-menu'));
    }
}

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const themeIcon = themeToggle.querySelector('i');

    function updateTheme(isLight) {
        document.documentElement.classList.toggle('light-mode', isLight);
        themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.classList.toggle('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateTheme(isLight);
    });

    const currentTheme = localStorage.getItem('theme') || 'dark';
    updateTheme(currentTheme === 'light');
}

function initActiveNavLinks() {
    const links = document.querySelectorAll('.menu-desktop ul li a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMenuMobile();
    initThemeToggle();
    initActiveNavLinks();
});