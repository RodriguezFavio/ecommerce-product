export class Product {
  constructor({
    company,
    title,
    info,
    oldPrice,
    newPrice,
    discountPercentage,
    mainImageUrl,
    previewImageUrl,
  }) {
    this.company = company;
    this.title = title;
    this.info = info;
    this.oldPrice = oldPrice;
    this.newPrice = newPrice;
    this.discountPercentage = discountPercentage;
    this.mainImageUrl = mainImageUrl;
    this.previewImageUrl = previewImageUrl;
  }
}
