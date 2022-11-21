import {
  FileLogger,
  MssqlLogger,
} from "./crossCuttingConcern/logging/logger.js";
import OrderService from "./services/orderService.js";

let logger = new FileLogger();
let logger1 = new MssqlLogger();
let loggers = [logger, logger1];

let orderService = new OrderService(loggers);
console.log(orderService.getAllOrder());
console.log("--------------------------");

console.log(orderService.getOrderById(2));
console.log("--------------------------");

orderService.addOrder({
  productId: 999,
  userId: 3,
  orderNumber: "1111",
  status: "iptal edildi",
}); // burada product Id uymadığı için hata verecek
orderService.addOrder({
  productId: 4,
  userId: 3,
  orderNumber: "1111",
  status: "iptal edildi",
});
console.log(orderService.getAllOrder());
console.log("--------------------------");

orderService.deleteOrderById(2);
console.log(orderService.getAllOrder());
console.log("--------------------------");

orderService.updateOrder({
  id: 6,
  productId: 5,
  userId: 3,
  orderNumber: "11111",
  status: "tekrar kargoya çıktı",
});
console.log(orderService.getAllOrder());
