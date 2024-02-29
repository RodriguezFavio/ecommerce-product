import { Product } from './Products';
import { ProductItem } from './ProductItem';

export class ProductList {
  productList = new Product({
    company: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    info: 'These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    oldPrice: 250,
    newPrice: 125,
    mainImageUrl: [
      './images/image-product-1.jpg',
      './images/image-product-2.jpg',
      './images/image-product-3.jpg',
      './images/image-product-4.jpg',
    ],
    previewImageUrl: [
      './images/image-product-1-thumbnail.jpg',
      './images/image-product-2-thumbnail.jpg',
      './images/image-product-3-thumbnail.jpg',
      './images/image-product-4-thumbnail.jpg',
    ],
    discountPercentage() {
      return Math.round((1 - this.newPrice / this.oldPrice) * 100);
    },
  });

  render() {
    const products = new ProductItem(this.productList);
    products.render();
  }
}
