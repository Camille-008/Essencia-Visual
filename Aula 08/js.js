// Dados do carrossel
const carouselImages = [
 
];


let currentIndex = 0;


const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('indicators');


// Criar slides
carouselImages.forEach((src, index) => {
 const slide = document.createElement('img');
 slide.src = src;
 slide.alt = `Destaques ${index + 1}`;
 carousel.appendChild(slide);
});


// Criar indicadores
carouselImages.forEach((_, index) => {
 const dot = document.createElement('div');
 dot.classList.add('indicator');
 if (index === 0) dot.classList.add('active');
 dot.addEventListener('click', () => goToSlide(index));
 indicatorsContainer.appendChild(dot);
});


function updateCarousel() {
 carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
 document.querySelectorAll('.indicator').forEach((dot, i) => {
   dot.classList.toggle('active', i === currentIndex);
 });
}


function goToSlide(index) {
 currentIndex = index;
 updateCarousel();
}


function nextSlide() {
 currentIndex = (currentIndex + 1) % carouselImages.length;
 updateCarousel();
}


function prevSlide() {
 currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
 updateCarousel();
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
setInterval(nextSlide, 5000);


// Botão voltar ao topo
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
 if (window.scrollY > 300) {
   backToTopButton.classList.add('show');
 } else {
   backToTopButton.classList.remove('show');
 }
});
backToTopButton.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
});