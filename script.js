document.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.getElementById('flexSwitchCheckDefault');
    const { body } = document;

    switchInput.addEventListener('change', function () {
        body.classList.toggle('theme-dark', this.checked);
        body.classList.toggle('theme-light', !this.checked);
    });
});

const neeknop = document.querySelectorAll('#nee1, #nee2, #nee3, #nee4, #nee5');
const startknop = document.getElementById('start-knop');
const fout = document.getElementById('Nopage');
const volgende = document.querySelectorAll('#volgende1, #volgende2, #volgende3, #volgende4, #volgende5, #volgende6, #volgende7');
const pages = document.querySelectorAll('#page1, #page2, #page3, #page4, #page5, #page6, #page7');

function hideAllPages() {
    pages.forEach((page) => page.style.display = 'none');
}

function start() {
    hideAllPages();
    pages[1].style.display = 'block';
}

function showFout() {
    hideAllPages();
    fout.style.display = 'block';
}

function showNextPage(index) {
    hideAllPages();
    pages[index].style.display = 'block';
}

startknop.addEventListener('click', start);
volgende.forEach((vol, index) => vol.addEventListener('click', () => showNextPage(index + 2)));
neeknop.forEach((element) => element.addEventListener('click', showFout));
