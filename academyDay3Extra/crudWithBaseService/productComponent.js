import ProductService from "./services/productService.js";

const productService = new ProductService();
// console.log(productService.getAll());

//console.log(productService.getById(8));

productService.add({
  name: "Mouse Pad",
  unitPrice: 500,
  stock: 1,
});
// console.log(productService.getAll());

productService.deleteById(2);
// console.log(productService.getAll());

productService.update({
  id: 6,
  name: "Masa örtüsü",
  unitPrice: 600,
  stock: 150,
});
// console.log(productService.getAll());
