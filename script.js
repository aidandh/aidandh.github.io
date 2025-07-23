let lightMode = true;

function checkLightModeUserPreference() {
    const userPrefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (userPrefersDarkMode) {
        changeLightMode();
    }
}

function changeLightMode() {
    const styledElements = [...document.getElementsByClassName(lightMode ? 'light' : 'dark'), document.body];
    for (const element of styledElements) {
        element.classList.remove(lightMode ? 'light' : 'dark');
        element.classList.add(lightMode ? 'dark' : 'light');
    }
    lightMode = !lightMode;
}

checkLightModeUserPreference();

const lightModeSelectorContainer = document.getElementById('light-mode-selector-container');
lightModeSelectorContainer.addEventListener('click', changeLightMode);