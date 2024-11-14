const left = document.querySelector('.left')
const right = document.querySelector('.right')
const carusel = document.querySelector('.carusel')

right.addEventListener('click', () => scrollRight())
function scrollRight() {
  carusel.scrollBy({ left: 210, behavior: "smooth" })
}

left.addEventListener('click', () => scrollLeft())
function scrollLeft() {
  carusel.scrollBy({ left: -210, behavior: "smooth" })
}