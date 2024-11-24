const modal = document.getElementById('contactModal');
const contactButton = document.getElementById('contactButton');
const closeModal = document.getElementById('closeModal');

contactButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

contactButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        modal.classList.remove('hidden');
    }
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});