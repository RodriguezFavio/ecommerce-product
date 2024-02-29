export class MobileCarrusel {
  currentIndex = 0;

  constructor(product) {
    this.product = product;
    this.thumMob = document.querySelector('.thumb-mob');
    this.nextBtn = document.getElementById('next');
    this.prevBtn = document.getElementById('previous');

    this.nextBtn.addEventListener('click', this.showNextImg.bind(this));
    this.prevBtn.addEventListener('click', this.showPrevImg.bind(this));
  }

  showNextImg() {
    if (this.currentIndex === 3) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.thumMob.src = this.product.mainImageUrl[this.currentIndex];
  }

  showPrevImg() {
    if (this.currentIndex === 0) {
      this.currentIndex = 3;
    } else {
      this.currentIndex--;
    }

    this.thumMob.src = this.product.mainImageUrl[this.currentIndex];
  }
}
