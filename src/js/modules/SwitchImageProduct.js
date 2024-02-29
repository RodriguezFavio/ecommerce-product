export class SwitchImageProduct {
  constructor(product) {
    this.product = product;
    this.render();
  }

  toggleLightBox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.toggle('invisible');
  }

  render() {
    const mainThumbnail = document.querySelector('.main-thumbnail');
    const mainThumbnailLightBox = document.getElementById('lightbox-main_img');
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    const images = document.querySelectorAll('.preview img');

    images.forEach((image) => {
      image.addEventListener(
        'click',
        function () {
          const lastImg = document.querySelectorAll('.selected');
          if (lastImg) {
            lastImg[0].classList.remove('selected');
          }
          image.classList.add('selected');

          const selectedImg = document.querySelector('.selected');

          switch (selectedImg.getAttribute('src')) {
            case this.product.previewImageUrl[0]:
              mainThumbnail.src = this.product.mainImageUrl[0];
              mainThumbnailLightBox.src = this.product.mainImageUrl[0];
              break;
            case this.product.previewImageUrl[1]:
              mainThumbnail.src = this.product.mainImageUrl[1];
              mainThumbnailLightBox.src = this.product.mainImageUrl[1];
              break;
            case this.product.previewImageUrl[2]:
              mainThumbnail.src = this.product.mainImageUrl[2];
              mainThumbnailLightBox.src = this.product.mainImageUrl[2];
              break;
            case this.product.previewImageUrl[3]:
              mainThumbnail.src = this.product.mainImageUrl[3];
              mainThumbnailLightBox.src = this.product.mainImageUrl[3];
              break;
          }
        }.bind(this)
      );
    });

    mainThumbnail.addEventListener('click', this.toggleLightBox);
    closeLightboxBtn.addEventListener('click', this.toggleLightBox);
  }
}
