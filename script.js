let lightMode;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    lightMode = false;
} else {
    lightMode = true;
}

function changeLightMode() {
    const styledElements = [...document.getElementsByClassName(lightMode ? 'light' : 'dark')];
    for (const element of styledElements) {
        element.classList.remove(lightMode ? 'light' : 'dark');
        element.classList.add(lightMode ? 'dark' : 'light');
    }
    lightMode = !lightMode;
}

changeLightMode();

const lightModeSelectorContainer = document.getElementById('light-mode-selector-container');
lightModeSelectorContainer.addEventListener('click', changeLightMode);