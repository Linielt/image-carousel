import "./styles.css";

const slides = document.getElementsByClassName("carousel-slide");
const dots = document.getElementsByClassName("dot");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let slideIndex = -1;

const show = (index) => {
  if (index < 0 || index >= slides.length) {
    index = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dots[index].classList.add("active");
};

const slideshow = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
  setTimeout(slideshow, 5000);
};

const next = () => {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
    show(slideIndex);
  }
};

const previous = () => {
  if (slideIndex > 0) {
    slideIndex--;
    show(slideIndex);
  }
};

const addEventsToDots = () => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      show(i);
    });
  }
};

prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);

addEventsToDots();
slideshow();
