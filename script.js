const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      card.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showSlide(currentIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

// Auto-slide
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % cards.length;
  showSlide(currentIndex);
}, 5000);

// Pause on hover
document.querySelector('.carousel-container').addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});
document.querySelector('.carousel-container').addEventListener('mouseout', () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showSlide(currentIndex);
  }, 5000);
});
