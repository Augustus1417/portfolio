let currentSlide = 0;

const slides = document.querySelectorAll('.projects');
const totalSlides = slides.length;
const carouselContainer = document.querySelector('.carousel-container');
const profilePic = document.getElementById('profile-pic');

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

profilePic.addEventListener('mousemove', (e) => {
  const rect = profilePic.getBoundingClientRect();
  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top;  

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 50; 
  const rotateY = ((x - centerX) / centerX) * -50; 

  profilePic.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

profilePic.addEventListener('mouseleave', () => {
  profilePic.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});

updateSlides();