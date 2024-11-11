const carousel = document.getElementById("carousel");
let currentIndex = 0;
const totalItems = carousel.children.length;

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems; // Loop to the first item after the last
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(moveToNextSlide, 3000);
