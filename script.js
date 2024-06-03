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
