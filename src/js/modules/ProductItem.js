import { MobileCarrusel } from './MobileCarousel';
import { ShoppingCart } from './ShoppingCart';
import { SwitchImageProduct } from './SwitchImageProduct';

export class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const thumbnailsSection = document.querySelector('.thumbnails');
    const contentSection = document.querySelector('.content');
    const mobileThumbContainer = document.getElementById('mobile-thumb');
    const lightboxContainer = document.querySelector('.lightbox-container');

    // thumbnails section container
    const mainThumbnail = document.createElement('img');
    mainThumbnail.src = this.product.mainImageUrl[0];
    mainThumbnail.alt = 'product';
    mainThumbnail.classList.add('main-thumbnail', 'invisible-mod');
    thumbnailsSection.prepend(mainThumbnail);

    const mobileThumbnail = document.createElement('img');
    mobileThumbnail.src = this.product.mainImageUrl[0];
    mobileThumbnail.alt = 'product';
    mobileThumbnail.classList.add('thumb-mob');
    mobileThumbContainer.prepend(mobileThumbnail);

    const previewContainer = document.createElement('div');
    previewContainer.classList.add('preview');
    this.product.previewImageUrl.forEach((imageUrl, index) => {
      const previewImage = document.createElement('img');
      previewImage.src = imageUrl;
      previewImage.alt = 'product';
      previewImage.classList.add('selected');
      if (index !== 0) {
        previewImage.classList.remove('selected');
      }
      previewContainer.appendChild(previewImage);
    });
    thumbnailsSection.appendChild(previewContainer);

    // // Lightbox-container
    const lightboxMainThumbnail = document.createElement('img');
    lightboxMainThumbnail.src = this.product.mainImageUrl[0];
    lightboxMainThumbnail.alt = 'product';
    lightboxMainThumbnail.id = 'lightbox-main_img';
    lightboxMainThumbnail.classList.add('main-thumbnail', 'invisible-mod');

    const lightboxPreviewContainer = document.createElement('div');
    lightboxPreviewContainer.classList.add('preview');
    this.product.previewImageUrl.forEach((imageUrl, index) => {
      const previewImage = document.createElement('img');
      previewImage.src = imageUrl;
      previewImage.alt = 'product';
      previewImage.classList.add('selected');
      if (index !== 0) {
        previewImage.classList.remove('selected');
      }
      lightboxPreviewContainer.appendChild(previewImage);
    });
    lightboxContainer.appendChild(lightboxMainThumbnail);
    lightboxContainer.appendChild(lightboxPreviewContainer);

    // Content Section container:
    const companyName = document.createElement('p');
    companyName.classList.add('company');
    companyName.innerText = this.product.company;

    const title = document.createElement('h1');
    title.classList.add('title');
    title.id = 'title';
    title.textContent = this.product.title;

    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = this.product.info;

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price');

    const newPriceContainer = document.createElement('div');
    newPriceContainer.classList.add('new-price');

    const newPrice = document.createElement('p');
    newPrice.classList.add('now');
    newPrice.innerText = '$' + this.product.newPrice.toFixed(2);

    const percentage = document.createElement('span');
    percentage.innerText = this.product.discountPercentage() + '%';

    newPriceContainer.appendChild(newPrice);
    newPriceContainer.appendChild(percentage);
    priceContainer.appendChild(newPriceContainer);

    const oldPrice = document.createElement('p');
    oldPrice.classList.add('old-price');
    oldPrice.innerText = '$' + this.product.oldPrice.toFixed(2);
    priceContainer.appendChild(oldPrice);

    contentSection.prepend(companyName, title, info, priceContainer);

    new MobileCarrusel(this.product);
    new ShoppingCart(this.product);
    new SwitchImageProduct(this.product);
  }
}
