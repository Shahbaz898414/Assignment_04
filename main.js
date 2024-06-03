let currentSlideIndex = 0;
showSlides(currentSlideIndex);

function currentSlide(n) {
    showSlides(currentSlideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {currentSlideIndex = 1} 
    if (n < 1) {currentSlideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[currentSlideIndex-1].style.display = "block"; 
    dots[currentSlideIndex-1].className += " active";
}
