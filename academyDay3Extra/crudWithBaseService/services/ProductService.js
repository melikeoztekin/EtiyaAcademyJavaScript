import { products } from "../data/products.js";
import BaseService from "./BaseService.js";

export default class ProductService extends BaseService {
  constructor() {
    super(products);
  }
}
