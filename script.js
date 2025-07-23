function checkLightModeUserPreference() {
    const savedMode = localStorage.getItem('preferredMode');
    const browserPefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const browserPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const browserMode = browserPefersDark ? 'dark' : browserPrefersLight ? 'light' : undefined;
    const mode = savedMode || browserMode || 'light';
    const root = document.documentElement;
    if (mode === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('preferredMode', 'dark');
    } else {
        root.classList.add('light');
        localStorage.setItem('preferredMode', 'light');
    }
}

function checkLightMode() {
    const root = document.documentElement;
    return root.classList.contains('light');
}

function changeLightMode() {
    const root = document.documentElement;
    const isLightMode = checkLightMode();
    root.classList.add(isLightMode ? 'dark': 'light');
    root.classList.remove(isLightMode ? 'light': 'dark');
    localStorage.setItem('preferredMode', isLightMode ? 'dark': 'light');
}

checkLightModeUserPreference();

const lightModeSelectorContainer = document.getElementById('light-mode-selector-container');
lightModeSelectorContainer.addEventListener('click', changeLightMode);