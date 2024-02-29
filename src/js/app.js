import { ProductList } from './modules/ProductList';
import { Menu } from './modules/Menu';

class App {
  static init() {
    const productList = new ProductList();
    productList.render();
    new Menu();
  }
}

App.init();
