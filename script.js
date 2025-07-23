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

const lightModeSelectorContainer = document.getElementById('light-mode-selector-container');
lightModeSelectorContainer.addEventListener('click', changeLightMode);