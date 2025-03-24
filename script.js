let offset = 0;
let counter = 3;
const cardsLine = document.querySelector(".images-line");
const cardsLineA = document.querySelector(".images-line-a");
const cardsLineB = document.querySelector(".images-line-b");
const cardsLineC = document.querySelector(".images-line-c");
const cardsLineD = document.querySelector(".images-line-d");

const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
const nextButtonA = document.querySelector(".next-button-a");
const prevButtonA = document.querySelector(".prev-button-a");
const nextButtonB = document.querySelector(".next-button-b");
const prevButtonB = document.querySelector(".prev-button-b");
const nextButtonC = document.querySelector(".next-button-c");
const prevButtonC = document.querySelector(".prev-button-c");
const nextButtonD = document.querySelector(".next-button-d");
const prevButtonD = document.querySelector(".prev-button-d");
const text = document.querySelector(".counter");

prevButton.disabled = true;

const scrollNext = function () {
  offset = offset + 414;
  counter++;
  cardsLine.style.left = -offset + "px";
  if (offset > 1670) {
    nextButton.disabled = true;
  } else if (offset > 394) {
    prevButton.disabled = false;
  }
  text.innerText = counter;
};

nextButton.addEventListener("click", scrollNext);

const scrollPrev = function () {
  offset = offset - 414;
  counter--;
  if (offset < 1240) {
    nextButton.disabled = false;
  }
  if (offset < 1) {
    prevButton.disabled = true;
  }
  cardsLine.style.left = -offset + "px";
  text.innerText = counter;
};

prevButton.addEventListener("click", scrollPrev);

// let sliderTimerNext = setInterval(scrollNext, 4000);
// setInterval(() => {
//   clearInterval(sliderTimerNext);
// }, 12000);

const scrollNextA = function () {
  offset = offset + 414;
  counter++;
  cardsLineA.style.left = -offset + "px";
  if (offset > 1670) {
    nextButtonA.disabled = true;
  } else if (offset > 394) {
    prevButtonA.disabled = false;
  }
  text.innerText = counter;
};

nextButtonA.addEventListener("click", scrollNextA);

const scrollPrevA = function () {
  offset = offset - 414;
  counter--;
  if (offset < 1240) {
    nextButtonA.disabled = false;
  }
  if (offset < 1) {
    prevButtonA.disabled = true;
  }
  cardsLineA.style.left = -offset + "px";
  text.innerText = counter;
};

prevButtonA.addEventListener("click", scrollPrevA);

// let sliderTimerNextA = setInterval(scrollNextA, 4000);
// setInterval(() => {
//   clearInterval(sliderTimerNextA);
// }, 12000);

const scrollNextB = function () {
  offset = offset + 414;
  counter++;
  cardsLineB.style.left = -offset + "px";
  if (offset > 1000) {
    nextButtonB.disabled = true;
  } else if (offset > 394) {
    prevButtonB.disabled = false;
  }
  text.innerText = counter;
};

nextButtonB.addEventListener("click", scrollNextB);

const scrollPrevB = function () {
  offset = offset - 414;
  counter--;
  if (offset < 1600) {
    nextButtonB.disabled = false;
  }
  if (offset < 1) {
    prevButtonB.disabled = true;
  }
  cardsLineB.style.left = -offset + "px";
  text.innerText = counter;
};

prevButtonB.addEventListener("click", scrollPrevB);

const scrollNextC = function () {
  offset = offset + 414;
  counter++;
  cardsLineC.style.left = -offset + "px";
  if (offset > 400) {
    nextButtonC.disabled = true;
  } else if (offset > 394) {
    prevButtonC.disabled = false;
  }
  text.innerText = counter;
};

nextButtonC.addEventListener("click", scrollNextC);

const scrollPrevC = function () {
  offset = offset - 414;
  counter--;
  if (offset < 414) {
    nextButtonC.disabled = false;
  }
  if (offset < 1) {
    prevButtonC.disabled = true;
  }
  cardsLineC.style.left = -offset + "px";
  text.innerText = counter;
};

prevButtonC.addEventListener("click", scrollPrevC);

const scrollNextD = function () {
  offset = offset + 414;
  counter++;
  cardsLineD.style.left = -offset + "px";
  if (offset > 400) {
    nextButtonD.disabled = true;
  } else if (offset > 394) {
    prevButtonD.disabled = false;
  }
  text.innerText = counter;
};

nextButtonD.addEventListener("click", scrollNextD);

const scrollPrevD = function () {
  offset = offset - 414;
  counter--;
  if (offset < 414) {
    nextButtonD.disabled = false;
  }
  if (offset < 1) {
    prevButtonD.disabled = true;
  }
  cardsLineD.style.left = -offset + "px";
  text.innerText = counter;
};

prevButtonD.addEventListener("click", scrollPrevD);