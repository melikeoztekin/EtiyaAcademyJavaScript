import Customer from "../models/customer.js";
import UserService from "../services/userService.js";

let userService = new UserService();
userService.load();

// bu şekilde tip hatasını gösterip yaşta yapılan hatayı göstermez
// userService.add(
//   new Customer(999, "Melike", "Öztekin", "Ankara", "asadda", "13131")
// );

// prototyping
// bu şekilde tipini belli ettiğimiz için yaşta var olan hatayı gösterir.
let customerToAdd = new Customer(
  999,
  "Melike",
  "Öztekin",
  "Ankara",
  "21a",
  "13131"
);
customerToAdd.type = "customer";
userService.add(customerToAdd);
console.log("------------customers----------------");
console.log(userService.customers);
console.log("------------employees----------------");
console.log(userService.employees);
console.log("------------errors----------------");
console.log(userService.errors);
console.log("-----------customer sorted--------------");
console.log(userService.getCustomersSorted());
