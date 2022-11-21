import { orders } from "../data/orders.js";
import BaseService from "./BaseService.js";

export default class OrderService extends BaseService {
  constructor() {
    super(orders);
  }

  checkIfProductIsValid(entity) {
    let orderCriteria = orders.filter((x) => x.productId == entity.productId);
    if (orderCriteria.length == 0) {
      return false;
    }
    return true;
  }

  checkIfUserIsValid(entity) {
    let orderCriteria = orders.filter((x) => x.userId == entity.userId);
    if (orderCriteria.length == 0) {
      return false;
    }
    return true;
  }

  addOrder(entity) {
    console.log("------------------------");
    console.log("Add Order method works.");
    if (this.checkIfProductIsValid(entity) && this.checkIfUserIsValid(entity)) {
      orders.push(entity);
    }
    console.log("Siparişinizi gözden geçiriniz..");
  }
}
