// 헤더 캐러셀

var slideWrapper = document.querySelector(".container");
var slides = document.querySelectorAll(".cell li"); // img
var totalSlides = slides.length; // img 갯수

var sliderWidth = slideWrapper.clientWidth; // container width 1920
var slideIndex = 0;
var slider = document.querySelector(".cell");

slider.style.width = sliderWidth * totalSlides + "px"; // 이미지 모두 붙인 넓이 지정

showSlides();

// auto
function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slider.style.left = -(sliderWidth * slideIndex) + "px"; // 가로배열
  }
  slideIndex++; // 1 증가

  if (slideIndex === totalSlides) {
    slideIndex = 0; // img 갯수 도달하면 첫번째로 돌아감
  }
  time = setTimeout(showSlides, 3000);
}

// play stop

function stopSlide() {
  clearTimeout(time);
}

function playSlide() {
  for (var i = 0; i < slides.length; i++) {
    slider.style.left = -(sliderWidth * slideIndex) + "px"; // 가로배열
  }
  slideIndex++; // 1 증가

  if (slideIndex === totalSlides) {
    slideIndex = 0; // img 갯수 도달하면 첫번째로 돌아감
  }
  time = setTimeout(showSlides, 3000);
}

// prevNext

function prevNext(num) {
  stopSlide();
  slideIndex += num;

  if (slideIndex == -1) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex === totalSlides) {
    slideIndex = 0;
  }

  slider.style.left = -(sliderWidth * slideIndex) + "px";

  time = setTimeout(showSlides, 3000);
}

// 버튼 play, stop

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
