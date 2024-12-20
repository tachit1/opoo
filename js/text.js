const carousel = document.getElementById('carousel');
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID;
let currentIndex = 0;

const images = document.querySelectorAll('.carousel img');

// Set position based on index
const setPositionByIndex = () => {
    currentTranslate = currentIndex * -300; // 300px = ความกว้างของ container
    previousTranslate = currentTranslate;
    carousel.style.transform = `translateX(${currentTranslate}px)`;
    carousel.style.transition = 'transform 0.5s ease-in-out'; // เพิ่ม transition เพื่อให้มีการเคลื่อนไหว
};

// Drag and drop logic
const startDrag = (e) => {
    isDragging = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    animationID = requestAnimationFrame(animation);
    carousel.style.transition = 'none';
};

const drag = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    currentTranslate = previousTranslate + currentX - startX;
};

const endDrag = () => {
    isDragging = false;
    cancelAnimationFrame(animationID);

    // Determine which slide to go to
    const movedBy = currentTranslate - previousTranslate;

    if (movedBy < -100 && currentIndex < images.length - 1) {
        currentIndex++; // Move to next slide
    } else if (movedBy > 100 && currentIndex > 0) {
        currentIndex--; // Move to previous slide
    }

    setPositionByIndex();
};

const animation = () => {
    carousel.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
};

// Add Event Listeners
carousel.addEventListener('mousedown', startDrag);
carousel.addEventListener('mousemove', drag);
carousel.addEventListener('mouseup', endDrag);
carousel.addEventListener('mouseleave', endDrag);

carousel.addEventListener('touchstart', startDrag);
carousel.addEventListener('touchmove', drag);
carousel.addEventListener('touchend', endDrag);

// Set initial position
setPositionByIndex();
