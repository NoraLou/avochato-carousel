const IMGS_CLASS_NAME = 'carousel__img';
const DOTS_BASE_NAME = 'pagination__btn';

class Carousel {
  constructor() {
    this.imagesArr = document.getElementsByClassName(IMGS_CLASS_NAME);
    this.dotsArr = Array.from(document.getElementsByClassName(DOTS_BASE_NAME));
    this.curr = 0;
    this.interval = null;

    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }

  init() {
    this.imagesArr[this.imagesArr.length - 1].classList.add('prev');
    this.imagesArr[this.curr].classList.add('active');
    this.imagesArr[1].classList.add('next');
    this.setActiveIndicator(this.curr);
    this.loop();
  }

  loop() {
    this.interval = setInterval(this.moveNext,2500)
  }

  disableLoop() {
    clearInterval(this.interval)
  }

  goToSlide(slide) {
    let newPrev = slide - 1;
    let newNext = slide + 1;
    let oldPrev = slide - 2;
    let oldNext = slide + 2;

    if (newPrev <= 0) {
      oldPrev = (this.imagesArr.length - 1)
    } else if (newNext >= (this.imagesArr.length - 1)) {
      oldNext = 0
    }
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
    this.loop();
  }

  moveNext() {
    this.disableLoop()
    if (this.curr === this.imagesArr.length - 1) {
      this.curr = 0
    } else {
      this.curr++;
    }
    this.goToSlide(this.curr)
  }

  movePrev() {
    this.disableLoop()
    if (this.curr === 0) {
      this.curr = this.imagesArr.length - 1;
    } else {
      this.curr--;
    }
    this.goToSlide(this.curr);
  }

  setActiveIndicator(idx) {
    this.dotsArr.forEach(dot => dot.className = DOTS_BASE_NAME)
    let toSetActive = document.querySelector(`[data-ref="${idx}"]`)
    toSetActive.classList += ' active'
  }

  handlePagination(e) {
    this.disableLoop()
    const newIdx = e.target.dataset.ref
    if (this.curr < newIdx) {
      let toMoveNext = newIdx - this.curr;
      if (this.curr === this.imagesArr.length - 1) {
        this.curr = 0 + toMoveNext
      } else {
        this.curr += toMoveNext
      }
      this.goToSlide(this.curr)
    } else if (this.curr > newIdx) {
      this.imagesArr[this.curr].classList = IMGS_CLASS_NAME
      let toMovePrev = this.curr - newIdx
      this.curr -= toMovePrev
      this.goToSlide(this.curr)
    }
  }
}

const nextBtn = document.querySelector('.carousel__btn--next');
const prevBtn = document.querySelector('.carousel__btn--prev');
const paginationBtns = Array.from(document.querySelectorAll('.pagination__btn'));

const myCarousel = new Carousel();
window.onload = myCarousel.init();

prevBtn.addEventListener('click',  myCarousel.movePrev);
nextBtn.addEventListener('click', myCarousel.moveNext);
paginationBtns.forEach( btn => btn.addEventListener('click', myCarousel.handlePagination))

