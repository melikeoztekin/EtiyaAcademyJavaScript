import OrderService from "./services/orderService.js";

const orderService = new OrderService();
console.log(orderService.getAll());

console.log(orderService.getById(1));

orderService.addOrder({
  productId: 6,
  userId: 5,
  orderNumber: "11111",
  status: "iade edildi",
});
console.log(orderService.getAll());

orderService.deleteById(2);
console.log(orderService.getAll());

orderService.update({
  id: 5,
  productId: 2,
  userId: 2,
  orderNumber: "22222",
  status: "tekrar yola çıktı",
});
console.log(orderService.getAll());
