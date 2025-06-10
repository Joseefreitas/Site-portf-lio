(function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.className = savedTheme === 'light' ? 'light-mode' : '';
})();