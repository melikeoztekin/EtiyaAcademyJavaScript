import {
  FileLogger,
  MssqlLogger,
} from "./crossCuttingConcern/logging/logger.js";
import ProductService from "./services/productService.js";

let logger = new FileLogger();
let logger1 = new MssqlLogger();
let loggers = [logger, logger1];

let productService = new ProductService(loggers);
console.log(productService.getAllProduct());
console.log("--------------------------");

console.log(productService.getProductById(2));
console.log("--------------------------");

productService.addProduct({
  name: "Mouse Pad",
  unitPrice: 500,
  stock: 1,
});
console.log(productService.getAllProduct());
console.log("--------------------------");

productService.deleteProductById(2);
console.log(productService.getAllProduct());
console.log("--------------------------");

productService.updateProduct({
  id: 6,
  name: "Masa örtüsü",
  unitPrice: 600,
  stock: 150,
});
console.log(productService.getAllProduct());
