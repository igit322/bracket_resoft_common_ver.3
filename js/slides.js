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

  time = setTimeout(showSlides, 3000);
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

  time = setTimeout(showSlides, 3000);
}

function stopSlide() {
  clearTimeout(time);
}

function playSlide() {
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

  time = setTimeout(showSlides, 3000);
}

// play, stop버튼

var stopBtn = document.querySelector(".stop");
var playBtn = document.querySelector(".play");

stopBtn.addEventListener("click", function () {
  stopBtn.style.display = "none";
  playBtn.style.display = "inline-block";
});

playBtn.addEventListener("click", function () {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
});

// prevNext 누를때 일시정지 버튼 바뀜

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", function () {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
});

nextBtn.addEventListener("click", function () {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
});
