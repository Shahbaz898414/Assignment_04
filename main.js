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


document.addEventListener("DOMContentLoaded", function() {
  var openFormBtn = document.getElementById("openFormBtn");
  var popupForm = document.getElementById("popupForm");
  var closeBtn = document.querySelector(".close-btn");

  openFormBtn.addEventListener("click", function() {
      popupForm.style.display = "flex";
  });

  closeBtn.addEventListener("click", function() {
      popupForm.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === popupForm) {
          popupForm.style.display = "none";
      }
  });
});
