class Carousel {
  constructor() {
    this.images = document.getElementsByClassName('carousel__img');
    this.totalImages = this.images.length;
    this.slide = 0;
    this.moving = true;

    this.moveNext = this.moveNext.bind(this)
    this.movePrev = this.movePrev.bind(this)
  }

  init() {
    console.log('Init!')
    this.images[this.totalImages - 1].classList.add('prev');
    this.images[0].classList.add('active');
    this.images[1].classList.add('next')
    this.moving = false;
  }

  loop() {

  }

  moveNext() {
    console.log('move next!')

  }

  movePrev() {
    console.log('move prev!')

  }

}

const prevBtn = document.querySelector('.carousel__btn--next')
const nextBtn = document.querySelector('.carousel__btn--prev')
const myCarousel = new Carousel();

console.log('prevButton', prevBtn)
console.log('nextButton', prevBtn)

window.onload = myCarousel.init();
prevBtn.addEventListener('click',  myCarousel.movePrev);
nextBtn.addEventListener('click', myCarousel.moveNext);
