const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.inner-slider');
const slide = document.querySelectorAll('.slide');
slide.forEach((el, i) => {
    slider.style.gridTemplateColumns = `repeat(${i + 1}, 1fr)`;
})

let isClicked = false;
let startingPosition;
let slideLeft;

slider.addEventListener('mousedown', function(e) {
    isClicked = true;
    startingPosition = e.pageX - slider.offsetLeft;
    slideLeft = slider.scrollLeft;
})

slider.addEventListener('mouseup', function() {
    isClicked = false;
})

slider.addEventListener('mouseleave', function() {
    isClicked = false;
})

slider.addEventListener('mousemove', function(e) {
    if (!isClicked) return;
    e.preventDefault();
    let x = e.pageX - slider.offsetLeft;
    let howFarWeHaveDeviatedFromTheInitialSpace = x - startingPosition;
    slider.scrollLeft = (slideLeft - howFarWeHaveDeviatedFromTheInitialSpace);
    slider.style.paddingRight = '24px';
})