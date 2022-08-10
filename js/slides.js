// 헤더 캐러셀

var slideWrapper = document.querySelector(".container");
var slides = document.querySelectorAll(".cell li"); // img
var totalSlides = slides.length; // img 갯수

var sliderWidth = slideWrapper.clientWidth; // container width 1920px
var slideIndex = 2; // 마지막 사진 넘버
var slider = document.querySelector(".cell");

slider.style.width = sliderWidth * totalSlides + "px"; // 이미지 모두 붙인 넓이 지정

showSlides();

// auto
function showSlides() {
  slideIndex++; // 1 증가 ( 3으로 시작되면서 0번으로 돌아가고 첫번째 이미지 출력)
  // console.log(slideIndex + "번 이미지 auto"); // 출력 3(0), 1, 2
  if (slideIndex == -1) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex === totalSlides) {
    slideIndex = 0; // img 갯수 도달하면 첫번째로 돌아감
  }
  slider.style.left = -(sliderWidth * slideIndex) + "px"; // 가로배열
  time = setTimeout(showSlides, 3000);
}

// prevNext

function prevNext(num) {
  stopSlide();
  slideIndex += num;
  // console.log(slideIndex + "번 이미지 버튼"); // 출력 3(0), 1, 2
  if (slideIndex == -1) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex === totalSlides) {
    slideIndex = 0;
  }
  slider.style.left = -(sliderWidth * slideIndex) + "px"; // 가로배열
  time = setTimeout(showSlides, 3000);
}

// play stop

function stopSlide() {
  clearTimeout(time);
}

function playSlide() {
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
