(() => {
  'use strict';
  class t {
    constructor(t) {
      let {
        company: e,
        title: i,
        info: n,
        oldPrice: r,
        newPrice: c,
        discountPercentage: s,
        mainImageUrl: o,
        previewImageUrl: a,
      } = t;
      (this.company = e),
        (this.title = i),
        (this.info = n),
        (this.oldPrice = r),
        (this.newPrice = c),
        (this.discountPercentage = s),
        (this.mainImageUrl = o),
        (this.previewImageUrl = a);
    }
  }
  class e {
    constructor(t) {
      var e, i, n, r;
      (e = this),
        (n = 0),
        (i =
          'symbol' ==
          typeof (r = (function (t, e) {
            if ('object' != typeof t || !t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var n = i.call(t, 'string');
              if ('object' != typeof n) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(t);
          })((i = 'currentIndex')))
            ? r
            : String(r)) in e
          ? Object.defineProperty(e, i, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[i] = n),
        (this.product = t),
        (this.thumMob = document.querySelector('.thumb-mob')),
        (this.nextBtn = document.getElementById('next')),
        (this.prevBtn = document.getElementById('previous')),
        this.nextBtn.addEventListener('click', this.showNextImg.bind(this)),
        this.prevBtn.addEventListener('click', this.showPrevImg.bind(this));
    }
    showNextImg() {
      3 === this.currentIndex ? (this.currentIndex = 0) : this.currentIndex++,
        (this.thumMob.src = this.product.mainImageUrl[this.currentIndex]);
    }
    showPrevImg() {
      0 === this.currentIndex ? (this.currentIndex = 3) : this.currentIndex--,
        (this.thumMob.src = this.product.mainImageUrl[this.currentIndex]);
    }
  }
  class i {
    constructor(t) {
      var e, i, n, r;
      (e = this),
        (n = 0),
        (i =
          'symbol' ==
          typeof (r = (function (t, e) {
            if ('object' != typeof t || !t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var n = i.call(t, 'string');
              if ('object' != typeof n) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(t);
          })((i = 'amountValue')))
            ? r
            : String(r)) in e
          ? Object.defineProperty(e, i, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[i] = n),
        (this.product = t),
        (this.amount = document.querySelector('.amount')),
        (this.plusBtn = document.getElementById('plus')),
        (this.minusBtn = document.getElementById('minus')),
        (this.indicator = document.querySelector('.indicator')),
        (this.cart = document.querySelector('.cart-wrp')),
        (this.cartBtn = document.querySelector('.cart-btn')),
        (this.wrp = document.querySelector('.cart-content')),
        (this.addBtn = document.querySelector('.add_btn')),
        (this.indicator.style.display = 'none'),
        this.plusBtn.addEventListener('click', this.handlePlus.bind(this)),
        this.minusBtn.addEventListener('click', this.handleMinus.bind(this)),
        this.cartBtn.addEventListener('click', this.toggleCart.bind(this)),
        this.addBtn.addEventListener('click', this.addItem.bind(this));
    }
    handlePlus() {
      this.amountValue++, (this.amount.innerText = this.amountValue);
    }
    handleMinus() {
      this.amountValue > 0 &&
        (this.amountValue--, (this.amount.innerText = this.amountValue));
    }
    toggleCart() {
      this.cart.classList.toggle('invisible');
    }
    deleteItem() {
      this.wrp.classList.add('empty'),
        (this.wrp.innerHTML = '<p> Your cart is empty </p>'),
        (this.indicator.style.display = 'none');
    }
    addItem() {
      if (this.amountValue > 0) {
        const t = this.product.newPrice * this.amountValue;
        this.wrp.classList.remove('empty'),
          (this.wrp.innerHTML =
            '\n      <div class="product">\n      <div>\n      <img src="'
              .concat(
                this.product.previewImageUrl[0],
                '" class="product-img" alt="product">\n        <div class="product-info">\n          <p class="product-title">'
              )
              .concat(this.product.title, '</p>\n          <p><span>$')
              .concat(this.product.newPrice, '</span> × <span class="number">')
              .concat(this.amountValue, ' = </span> <b>$')
              .concat(
                t,
                '</b></p>\n        </div>\n        <button class="delete-btn"><img src="./images/icon-delete.svg" alt="delete"></button>\n      </div>\n      <button class="checkout-btn">Checkout</button>\n    </div>\n      '
              )),
          (this.indicator.style.display = 'block'),
          (this.indicator.innerText = this.amountValue),
          document
            .querySelector('.delete-btn')
            .addEventListener('click', this.deleteItem.bind(this));
      }
    }
  }
  class n {
    constructor(t) {
      (this.product = t), this.render();
    }
    toggleLightBox() {
      document.querySelector('.lightbox').classList.toggle('invisible');
    }
    render() {
      const t = document.querySelector('.main-thumbnail'),
        e = document.getElementById('lightbox-main_img'),
        i = document.querySelector('.close-lightbox');
      document.querySelectorAll('.preview img').forEach((i) => {
        i.addEventListener(
          'click',
          function () {
            const n = document.querySelectorAll('.selected');
            switch (
              (n && n[0].classList.remove('selected'),
              i.classList.add('selected'),
              document.querySelector('.selected').getAttribute('src'))
            ) {
              case this.product.previewImageUrl[0]:
                (t.src = this.product.mainImageUrl[0]),
                  (e.src = this.product.mainImageUrl[0]);
                break;
              case this.product.previewImageUrl[1]:
                (t.src = this.product.mainImageUrl[1]),
                  (e.src = this.product.mainImageUrl[1]);
                break;
              case this.product.previewImageUrl[2]:
                (t.src = this.product.mainImageUrl[2]),
                  (e.src = this.product.mainImageUrl[2]);
                break;
              case this.product.previewImageUrl[3]:
                (t.src = this.product.mainImageUrl[3]),
                  (e.src = this.product.mainImageUrl[3]);
            }
          }.bind(this)
        );
      }),
        t.addEventListener('click', this.toggleLightBox),
        i.addEventListener('click', this.toggleLightBox);
    }
  }
  class r {
    constructor(t) {
      this.product = t;
    }
    render() {
      const t = document.querySelector('.thumbnails'),
        r = document.querySelector('.content'),
        c = document.getElementById('mobile-thumb'),
        s = document.querySelector('.lightbox-container'),
        o = document.createElement('img');
      (o.src = this.product.mainImageUrl[0]),
        (o.alt = 'product'),
        o.classList.add('main-thumbnail', 'invisible-mod'),
        t.prepend(o);
      const a = document.createElement('img');
      (a.src = this.product.mainImageUrl[0]),
        (a.alt = 'product'),
        a.classList.add('thumb-mob'),
        c.prepend(a);
      const d = document.createElement('div');
      d.classList.add('preview'),
        this.product.previewImageUrl.forEach((t, e) => {
          const i = document.createElement('img');
          (i.src = t),
            (i.alt = 'product'),
            i.classList.add('selected'),
            0 !== e && i.classList.remove('selected'),
            d.appendChild(i);
        }),
        t.appendChild(d);
      const l = document.createElement('img');
      (l.src = this.product.mainImageUrl[0]),
        (l.alt = 'product'),
        (l.id = 'lightbox-main_img'),
        l.classList.add('main-thumbnail', 'invisible-mod');
      const u = document.createElement('div');
      u.classList.add('preview'),
        this.product.previewImageUrl.forEach((t, e) => {
          const i = document.createElement('img');
          (i.src = t),
            (i.alt = 'product'),
            i.classList.add('selected'),
            0 !== e && i.classList.remove('selected'),
            u.appendChild(i);
        }),
        s.appendChild(l),
        s.appendChild(u);
      const m = document.createElement('p');
      m.classList.add('company'), (m.innerText = this.product.company);
      const h = document.createElement('h1');
      h.classList.add('title'),
        (h.id = 'title'),
        (h.textContent = this.product.title);
      const p = document.createElement('p');
      p.classList.add('info'), (p.textContent = this.product.info);
      const g = document.createElement('div');
      g.classList.add('price');
      const v = document.createElement('div');
      v.classList.add('new-price');
      const b = document.createElement('p');
      b.classList.add('now'),
        (b.innerText = '$' + this.product.newPrice.toFixed(2));
      const y = document.createElement('span');
      (y.innerText = this.product.discountPercentage() + '%'),
        v.appendChild(b),
        v.appendChild(y),
        g.appendChild(v);
      const w = document.createElement('p');
      w.classList.add('old-price'),
        (w.innerText = '$' + this.product.oldPrice.toFixed(2)),
        g.appendChild(w),
        r.prepend(m, h, p, g),
        new e(this.product),
        new i(this.product),
        new n(this.product);
    }
  }
  class c {
    constructor() {
      var e, i, n, r;
      (e = this),
        (i = 'productList'),
        (n = new t({
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
            return Math.round(100 * (1 - this.newPrice / this.oldPrice));
          },
        })),
        (i =
          'symbol' ==
          typeof (r = (function (t, e) {
            if ('object' != typeof t || !t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var n = i.call(t, 'string');
              if ('object' != typeof n) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(t);
          })(i))
            ? r
            : String(r)) in e
          ? Object.defineProperty(e, i, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[i] = n);
    }
    render() {
      new r(this.productList).render();
    }
  }
  class s {
    constructor() {
      this.menuHandler();
    }
    toggleMenu() {
      const t = document.querySelector('.nav_links'),
        e = document.querySelector('.overlay');
      t.classList.toggle('active'), e.classList.toggle('active');
    }
    menuHandler() {
      const t = document.getElementById('menu-btn'),
        e = document.getElementById('close-btn');
      t.addEventListener('click', this.toggleMenu),
        e.addEventListener('click', this.toggleMenu);
    }
  }
  (class {
    static init() {
      new c().render(), new s();
    }
  }).init();
})();
