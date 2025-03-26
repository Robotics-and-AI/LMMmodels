const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Function to update the track position
const updateTrackPosition = () => {
  const itemWidth = items[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

// Event listeners for navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateTrackPosition();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateTrackPosition();
});

// Adjust track position on window resize
window.addEventListener('resize', updateTrackPosition);
