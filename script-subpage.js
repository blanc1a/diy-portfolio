//slide-show
const indicator = document.getElementsByClassName("indicator");
indicator[0].classList.add("active");

console.log(indicator);

const slides = document.getElementsByClassName("slide");
slides[0].classList.add("active");

let index = 0;

function switchSlider(n) {
  indicator[index].classList.remove("active");
  slides[index].classList.remove("active");
  let newIndex = index + n;

  //problem: kleinster index eines arrays ist 0
  //im html sagen wir -1 => geht nicht mit dem array
  //lösung: slider soll sich wie ein karussel verhalten und prüfen, ob der index innerhalb des gültigen bereichs ist
  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }
  if (newIndex > slides.length - 1) {
    newIndex = 0;
  }

  indicator[newIndex].classList.add("active");
  slides[newIndex].classList.add("active");
  index = newIndex;

  moveToSlide(newIndex);
}

function moveToSlide(newIndex) {
  indicator[index].classList.remove("active");
  slides[index].classList.remove("active");
  indicator[newIndex].classList.add("active");
  slides[newIndex].classList.add("active");
  index = newIndex;
}
