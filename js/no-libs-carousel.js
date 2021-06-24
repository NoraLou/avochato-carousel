const BASE_CLASS_NAME = 'carousel__img';



class Carousel {
  constructor() {
    this.imagesArr = document.getElementsByClassName(BASE_CLASS_NAME);
    this.moving = true;

    this.curr = 0;
    this.prev = this.imagesArr.length - 1;
    this.next = this.curr++;

    this.moveNext = this.moveNext.bind(this)
    this.movePrev = this.movePrev.bind(this)
  }

  init() {
    console.log('Init!')
    this.imagesArr[this.imagesArr.length - 1].classList.add('prev');
    this.imagesArr[0].classList.add('active');
    this.imagesArr[1].classList.add('next')
    this.moving = false;
  }

  disableInteraction() {
    this.moving = true;
    setTimeout(function () {
      this.moving = false
    },500)
  }

  loop() {
  }

  increment() {
    console.log('increment!')
    let oldPrev = this.prev;
    this.prev = this.curr;
    this.curr = this.next;
    if (this.next === this.imagesArr.length - 1) {
      this.next = 0
    } else {
      this.next++
    }
    this.imagesArr[oldPrev].classList = BASE_CLASS_NAME
    this.imagesArr[this.prev].classList = BASE_CLASS_NAME + ' prev'
    this.imagesArr[this.curr].classList = BASE_CLASS_NAME + ' active'
    this.imagesArr[this.next].classList = BASE_CLASS_NAME + ' next'
  }

  moveNext() {
    console.log('move Next')
    this.increment()
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
console.log(`imagesArr ${myCarousel.imagesArr}`)

window.onload = myCarousel.init();
prevBtn.addEventListener('click',  myCarousel.movePrev);
nextBtn.addEventListener('click', myCarousel.moveNext);
