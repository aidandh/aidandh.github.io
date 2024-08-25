let lightMode = true;
const lightModeSelectorContainer = document.getElementById('light-mode-selector-container');
lightModeSelectorContainer.addEventListener('click', () => {
    const styledElements = [...document.getElementsByClassName(lightMode ? 'light' : 'dark')];
    for (const element of styledElements) {
        element.classList.remove(lightMode ? 'light' : 'dark');
        element.classList.add(lightMode ? 'dark' : 'light');
    }
    lightMode = !lightMode;
});