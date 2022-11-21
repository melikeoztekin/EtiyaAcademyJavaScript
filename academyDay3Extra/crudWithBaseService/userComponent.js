import UserService from "./services/userService.js";

const userService = new UserService();
// console.log(userService.getAll());
// console.log(userService.getById(2));
userService.add({
  firstName: "Melike",
  lastName: "Öztekin",
  city: "Ankara",
  age: 26,
  creditCardNumber: "111111",
  type: "employee",
});
// console.log(userService.getAll());
userService.deleteById(6);
// console.log(userService.getAll());
userService.update({
  id: 7,
  firstName: "Atilla",
  lastName: "Özyıldız",
  city: "Belçika",
  age: 30,
  creditCardNumber: "222222",
  type: "employee",
});
console.log(userService.getAll());
