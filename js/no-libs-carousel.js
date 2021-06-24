const IMGS_CLASS_NAME = 'carousel__img';
const DOTS_BASE_NAME = 'pagination__btn';

class Carousel {
  constructor() {
    this.imagesArr = document.getElementsByClassName(IMGS_CLASS_NAME);
    this.dotsArr = Array.from(document.getElementsByClassName(DOTS_BASE_NAME));
    this.moving = true;
    this.curr = 0;

    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
    this.paginationBtns = this.handlePagination.bind(this);
  }

  init() {
    console.log('Init!')
    this.imagesArr[this.imagesArr.length - 1].classList.add('prev');
    this.imagesArr[this.curr].classList.add('active');
    this.imagesArr[1].classList.add('next')
    this.moving = false;
    this.setActiveIndicator();
  }

  // loop() {
  // }

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

    this.imagesArr[oldPrev].className = IMGS_CLASS_NAME;
    this.imagesArr[oldNext].className = IMGS_CLASS_NAME;
    this.imagesArr[newPrev].className = IMGS_CLASS_NAME + ' prev';
    this.imagesArr[slide].className = IMGS_CLASS_NAME + ' active';
    this.imagesArr[newNext].className = IMGS_CLASS_NAME + ' next';

    this.curr = slide;
    this.setActiveIndicator(this.curr)
  }

  moveNext() {
    console.log('move next')
    if (this.curr === this.imagesArr.length - 1) {
      this.curr = 0;
    } else {
      this.curr++
    }
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

  setActiveIndicator() {
    this.dotsArr.forEach( dot => dot.className = DOTS_BASE_NAME)
    this.dotsArr[this.curr].classList += ' active'
  }

  handlePagination(e) {
    const newIdx = e.target.dataset.ref
    console.log(`newIdx ${newIdx}`)

  }

}

const nextBtn = document.querySelector('.carousel__btn--next');
const prevBtn = document.querySelector('.carousel__btn--prev');
const paginationBtns = Array.from(document.querySelectorAll('.pagination__btn'));

console.log('paginationBtns', paginationBtns)

const myCarousel = new Carousel();
window.onload = myCarousel.init();

prevBtn.addEventListener('click',  myCarousel.movePrev);
nextBtn.addEventListener('click', myCarousel.moveNext);
paginationBtns.forEach( btn => btn.addEventListener('click', myCarousel.handlePagination))

