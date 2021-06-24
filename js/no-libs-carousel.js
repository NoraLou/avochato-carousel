const BASE_CLASS_NAME = 'carousel__img';



class Carousel {
  constructor() {
    this.imagesArr = document.getElementsByClassName(BASE_CLASS_NAME);
    this.moving = true;
    this.curr = 0;

    this.moveNext = this.moveNext.bind(this)
    this.movePrev = this.movePrev.bind(this)
  }

  init() {
    console.log('Init!')
    this.imagesArr[this.imagesArr.length - 1].classList.add('prev');
    this.imagesArr[this.curr].classList.add('active');
    this.imagesArr[1].classList.add('next')
    this.moving = false;
  }

  loop() {
  }

  goToSlide(slide) {
    let newPrev = slide - 1;
    let newNext = slide + 1;
    let oldPrev = slide - 2;
    let oldNext = slide + 2;

    //check if the newPrev if out of bounds
    if (newPrev <= 0) {
      oldPrev = (this.imagesArr.length - 1)
    } else if (newNext >= (this.imagesArr.length - 1)) {
      oldNext = 0
    }

    //check if currSlide is at beginning or end
    if (slide === 0) {
      newPrev = (this.imagesArr.length - 1);
      oldPrev = (this.imagesArr.length - 2);
      oldNext = (slide + 1);
    } else if (slide === (this.imagesArr.length - 1)) {
      newPrev = (slide - 1);
      newNext = 0;
      oldNext = 1;
    }

    this.imagesArr[oldPrev].className = BASE_CLASS_NAME;
    this.imagesArr[oldNext].className = BASE_CLASS_NAME;
    this.imagesArr[newPrev].className = BASE_CLASS_NAME + ' prev';
    this.imagesArr[slide].className = BASE_CLASS_NAME + ' active';
    this.imagesArr[newNext].className = BASE_CLASS_NAME + ' next';
    //update class reference after transition
    this.curr = slide;

  }


  moveNext() {
    console.log('move next')
    if (this.curr === this.imagesArr.length - 1) {
      this.curr = 0;
    } else {
      this.curr++
    }
    //move to updated value
    this.goToSlide(this.curr)
  }

  movePrev() {
    console.log('move prev')
    if (this.curr === 0) {
      this.curr = this.imagesArr.length - 1;
    } else {
      this.curr--;
    }
    //move to value
    this.goToSlide(this.curr);
  }

}

const nextBtn = document.querySelector('.carousel__btn--next')
const prevBtn = document.querySelector('.carousel__btn--prev')
const myCarousel = new Carousel();

// console.log('prevButton', prevBtn)
// console.log('nextButton', prevBtn)
// console.log(`imagesArr ${myCarousel.imagesArr}`)

window.onload = myCarousel.init();
prevBtn.addEventListener('click',  myCarousel.movePrev);
nextBtn.addEventListener('click', myCarousel.moveNext);
