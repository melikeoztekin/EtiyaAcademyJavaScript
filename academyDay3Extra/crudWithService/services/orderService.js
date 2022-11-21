import { orders } from "../data/orders.js";

export default class OrderService {
  constructor(loggers) {
    this.orderList = orders;
    this.loggers = loggers;
  }

  getAllOrder() {
    return this.orderList;
  }

  getOrderById(id) {
    let isOrder = this.orderList.filter((order) => order.id === id);
    return isOrder.length > 0 ? isOrder : "Sipariş bulunamadı";
  }

  checkIfProductIsValid(order) {
    let orderCriteria = this.orderList.filter(
      (x) => x.productId == order.productId
    );
    if (orderCriteria.length == 0) {
      return false;
    }
    return true;
  }

  checkIfUserIsValid(order) {
    let orderCriteria = this.orderList.filter((x) => x.userId == order.userId);
    if (orderCriteria.length == 0) {
      return false;
    }
    return true;
  }

  addOrder(order) {
    if (this.checkIfProductIsValid(order) && this.checkIfUserIsValid(order)) {
      let createId = this.orderList.length + 1;
      order.id = createId;
      this.orderList.push(order);
    }
    console.log("Siparişinizi gözden geçiriniz..");
  }

  deleteOrderById(id) {
    let orderIndex = this.orderList.findIndex((order) => order.id === id);
    return this.orderList.splice(orderIndex, 1);
  }

  updateOrder(order) {
    this.orderList[this.orderList.findIndex((x) => x.id === order.id)] = order;
  }
}
