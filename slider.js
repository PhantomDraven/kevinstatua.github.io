const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');
const totalSlides = slider.children.length;

let currentIndex = 0;
let autoplayInterval;

// Function to create dots
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `w-3 h-3 bg-gray-400 rounded-full cursor-pointer`;
        dot.setAttribute('tabindex', 0);
        if (i === currentIndex) {
            dot.classList.add('bg-blue-600');
        }
        dot.addEventListener('click', () => goToSlide(i));
        dot.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                goToSlide(i);
            }
        })
        dotsContainer.appendChild(dot);
    }
}

// Update active dot
function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('bg-blue-600');
        dots[i].classList.add('bg-gray-400');
    }
    dots[currentIndex].classList.add('bg-blue-600');
}

// Move to a specific slide
function goToSlide(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

// Autoplay function
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }, 3000); // Change slides every 3 seconds
}

// Stop autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Initialize slider
createDots();
startAutoplay();

// Pause autoplay on hover
slider.addEventListener('mouseover', stopAutoplay);
slider.addEventListener('mouseout', startAutoplay);