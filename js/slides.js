// 헤더 캐러셀
// 22.08.22
const slideWrapper = document.querySelector(".slider");
const slides = document.querySelector(".cell");
const slide = document.querySelectorAll(".cell li"); // img
const slidesWidth = slideWrapper.clientWidth; // container width 1920px
const totalslide = slide.length; // img 갯수

let slideIndex = 2; // 마지막 사진 넘버
let slideTime = 3000; // 타임
let time;

// 버튼
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const stopBtn = document.querySelector(".stop");

// 클론 만들기
clone();

function clone() {
  for (let i = 0; i < totalslide; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = totalslide - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updateWidth(); // newWidth
  moveCell(); // translate

  setTimeout(() => {
    slides.classList.add("transition");
  }, 300);
}

// 이미지 모두 붙인 넓이 계산
function updateWidth() {
  const updateSlide = document.querySelectorAll(".cell li");
  const newTotalslide = updateSlide.length;
  const newWidth = slidesWidth * newTotalslide + "px";
  slides.style.width = newWidth;
}

// 오리지널 이미지의 첫번째 위치로
function moveCell() {
  let moveCellWidth = -slidesWidth * totalslide;
  slides.style.transform = "translateX(" + moveCellWidth + "px)";
}

// 자동재생반복
showslide();

function showslide() {
  slideIndex++; // 1 증가

  if (slideIndex == totalslide || slideIndex == -totalslide) {
    setTimeout(() => {
      slides.classList.remove("transition");
      slides.style.left = "0px";
      slideIndex = 0;
    }, 300);
    setTimeout(() => {
      slides.classList.add("transition");
    }, 400);
  }

  slides.style.left = -(slidesWidth * slideIndex) + "px";
  playSlide();
}

// (click)버튼 이벤트
nextBtn.addEventListener("click", () => {
  moveSlide(slideIndex + 1);
});
prevBtn.addEventListener("click", () => {
  moveSlide(slideIndex - 1);
});

function moveSlide(num) {
  stopSlide();
  slides.style.left = -num * slidesWidth + "px";
  slideIndex = num;

  if (slideIndex == totalslide || slideIndex == -totalslide) {
    setTimeout(() => {
      slides.classList.remove("transition");
      slides.style.left = "0px";
      slideIndex = 0;
    }, 300);

    setTimeout(() => {
      slides.classList.add("transition");
    }, 400);
  }

  playSlide();
}

// (click)재생 정지 기능
playBtn.addEventListener("click", playSlide);
stopBtn.addEventListener("click", stopSlide);

function playSlide() {
  time = setTimeout(showslide, slideTime);
}

function stopSlide() {
  clearTimeout(time);
}

// (click)재생버튼으로 바뀜
stopBtn.addEventListener("click", stopStyle);

function stopStyle() {
  stopBtn.style.display = "none";
  playBtn.style.display = "inline-block";
}

// (click)일시정지 버튼으로 바뀜
playBtn.addEventListener("click", btnChange);
prevBtn.addEventListener("click", btnChange);
nextBtn.addEventListener("click", btnChange);

function btnChange() {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
}
