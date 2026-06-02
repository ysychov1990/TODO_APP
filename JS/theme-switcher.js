const themeSelect = document.getElementById('theme-select');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    localStorage.setItem('selected-theme', theme);
    
    themeSelect.value = theme;
}

themeSelect.addEventListener('change', (e) => {
    applyTheme(e.target.value);
});

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('selected-theme') || 'dark';
    applyTheme(savedTheme);
});

