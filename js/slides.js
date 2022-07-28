// 헤더 캐러셀

var slides = document.getElementsByClassName("cell");

var slideIndex = 0;
var time;

showSlides();
function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  time = setTimeout(showSlides, 7000);
}

function stopSlide() {
  clearTimeout(time);
}

function prevNext(num) {
  stopSlide();
  slideIndex += num;

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
}
