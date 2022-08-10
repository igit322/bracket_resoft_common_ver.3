// 헤더 캐러셀

const slideWrapper = document.querySelector(".container");

let slides = document.querySelectorAll(".cell li"); // img
let totalSlides = slides.length; // img 갯수
let sliderWidth = slideWrapper.clientWidth; // container width 1920px
let slider = document.querySelector(".cell");
let slideIndex = 2; // 마지막 사진 넘버
let slidesTime = 3000; // 타임
let time;

slider.style.width = sliderWidth * totalSlides + "px"; // 이미지 모두 붙인 넓이 지정

showSlides();

// auto
function showSlides() {
  slideIndex++; // 1 증가 (3으로 시작되면서 0번으로 돌아가고 첫번째 이미지 출력)
  if (slideIndex == -1) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex === totalSlides) {
    slideIndex = 0; // img 갯수 도달하면 첫번째로 돌아감
  }
  slider.style.left = -(sliderWidth * slideIndex) + "px"; // 가로배열
  time = setTimeout(showSlides, slidesTime);
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
  time = setTimeout(showSlides, slidesTime);
}

// play stop
function stopSlide() {
  clearTimeout(time);
}

function playSlide() {
  time = setTimeout(showSlides, slidesTime);
}

// 재생버튼으로 바뀜
const stopBtn = document.querySelector(".stop");

function stopStyle() {
  stopBtn.style.display = "none";
  playBtn.style.display = "inline-block";
}

stopBtn.addEventListener("click", stopStyle);

// 누를때 일시정지 버튼으로 바뀜
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function btnChange() {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
}

playBtn.addEventListener("click", btnChange);
prevBtn.addEventListener("click", btnChange);
nextBtn.addEventListener("click", btnChange);
