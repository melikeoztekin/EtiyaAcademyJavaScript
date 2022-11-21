import { products } from "../data/products.js";

export default class ProductService {
  constructor(loggers) {
    this.productList = products;
    this.loggers = loggers;
  }

  getAllProduct() {
    return this.productList;
  }

  getProductById(id) {
    let isProduct = this.productList.filter((product) => product.id === id);
    return isProduct.length > 0 ? isProduct : "Ürün bulunamadı";
  }

  addProduct(product) {
    let createId = this.productList.length + 1;
    product.id = createId;
    return this.productList.push(product);
  }

  deleteProductById(id) {
    let productIndex = this.productList.findIndex(
      (product) => product.id === id
    );
    return this.productList.splice(productIndex, 1);
  }

  updateProduct(product) {
    this.productList[this.productList.findIndex((x) => x.id === product.id)] =
      product;
  }
}
