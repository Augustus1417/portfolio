let currentSlide = 0;

const slides = document.querySelectorAll('.projects');
const totalSlides = slides.length;
const carouselContainer = document.querySelector('.carousel-container');

function updateSlides() {
    const slideWidth = slides[0].clientWidth; 
    carouselContainer.style.transition = 'transform 0.5s ease-in-out'; 
    carouselContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`; 
}

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSlides(); 
}

updateSlides();
