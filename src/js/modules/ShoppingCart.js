export class ShoppingCart {
  amountValue = 0;
  constructor(product) {
    this.product = product;
    this.amount = document.querySelector('.amount');
    this.plusBtn = document.getElementById('plus');
    this.minusBtn = document.getElementById('minus');
    this.indicator = document.querySelector('.indicator');
    this.cart = document.querySelector('.cart-wrp');
    this.cartBtn = document.querySelector('.cart-btn');
    this.wrp = document.querySelector('.cart-content');
    this.addBtn = document.querySelector('.add_btn');

    this.indicator.style.display = 'none';

    this.plusBtn.addEventListener('click', this.handlePlus.bind(this));
    this.minusBtn.addEventListener('click', this.handleMinus.bind(this));
    this.cartBtn.addEventListener('click', this.toggleCart.bind(this));
    this.addBtn.addEventListener('click', this.addItem.bind(this));
  }

  handlePlus() {
    this.amountValue++;
    this.amount.innerText = this.amountValue;
  }

  handleMinus() {
    if (this.amountValue > 0) {
      this.amountValue--;
      this.amount.innerText = this.amountValue;
    } else {
      return;
    }
  }

  toggleCart() {
    this.cart.classList.toggle('invisible');
  }

  deleteItem() {
    this.wrp.classList.add('empty');
    this.wrp.innerHTML = `<p> Your cart is empty </p>`;
    this.indicator.style.display = 'none';
  }

  addItem() {
    if (this.amountValue > 0) {
      const total = this.product.newPrice * this.amountValue;
      this.wrp.classList.remove('empty');
      this.wrp.innerHTML = `
      <div class="product">
      <div>
      <img src="${this.product.previewImageUrl[0]}" class="product-img" alt="product">
        <div class="product-info">
          <p class="product-title">${this.product.title}</p>
          <p><span>$${this.product.newPrice}</span> × <span class="number">${this.amountValue} = </span> <b>$${total}</b></p>
        </div>
        <button class="delete-btn"><img src="./images/icon-delete.svg" alt="delete"></button>
      </div>
      <button class="checkout-btn">Checkout</button>
    </div>
      `;

      this.indicator.style.display = 'block';
      this.indicator.innerText = this.amountValue;

      const deleteButton = document.querySelector('.delete-btn');
      deleteButton.addEventListener('click', this.deleteItem.bind(this));
    }
  }
}
